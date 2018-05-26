using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CareerDay.API
{
    public class MazeHub : Hub
    {
        private readonly MazeService _mazeService;

        public MazeHub(MazeService mazeService)
        {
            _mazeService = mazeService;
        }
        
        public async Task SendMessage(string user, string message, string color)
        {            
            await Clients.All.SendAsync("ReceiveMessage", user, message, color);
        }

        public async Task MovePlayer(int gameId, int id, Direction direction)
        {
            if (!_mazeService.Games.ContainsKey(gameId) || !_mazeService.Players.ContainsKey(id))
            {
                return;
            }

            var game = _mazeService.Games[gameId];

            var player = _mazeService.Players[id];

            if(player.X != null && player.Y != null)
            {
                var currentLoc = game.MazeGrid[player.Y.Value][player.X.Value];

                if((currentLoc & direction) == 0)
                {
                    switch (direction)
                    {
                        case Direction.Up:
                            player.Y -= 1;
                            break;
                        case Direction.Down:
                            player.Y += 1;
                            break;
                        case Direction.Left:
                            player.X -= 1;
                            break;
                        case Direction.Right:
                            player.X += 1;
                            break;
                    }

                    await Clients.Clients(game.Players.Select(p => p.Value.ClientId).Where(p => !p.Equals(player.ClientId)).ToList()).SendAsync("MovePlayer", player.Id, player.X.Value, player.Y.Value);


                    int prizeX;
                    int prizeY;

                    var pIds = game.Players.Keys.OrderBy(k => k).ToList();

                    if(player.Id == pIds[0])
                    {
                        prizeX = game.EndX;
                        prizeY = game.EndY;
                    }else
                    {
                        prizeX = game.StartX;
                        prizeY = game.StartY;
                    }

                    if(player.X.Value == prizeX && player.Y.Value == prizeY)
                    {
                        await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("GameWinner", game.Id, player.Name);
                        _mazeService.Games.Remove(game.Id);
                    }


                    //await Clients.Others.SendAsync("MovePlayer", player.Id, player.X.Value, player.Y.Value);
                }
            }
            
        }
        

        public async Task UserJoin(string user)
        {
            var player = _mazeService.NewPlayer(user, Context.ConnectionId);
            await Clients.Caller.SendAsync("InitPlayer", player, _mazeService.Games.Where(g => g.Value.Players.Count < 2).Select(gm => new { gm.Value.Id, gm.Value.Name }).ToList());
        }

        public async Task JoinGame(int playerId, int gameId)
        {
            if (!_mazeService.Games.ContainsKey(gameId) || !_mazeService.Players.ContainsKey(playerId))
            {
                return;
            }
            var player = _mazeService.Players[playerId];
            var game = _mazeService.Games[gameId];

            game.Players.Add(player.Id, player);

            var pIds = game.Players.Keys.OrderBy(k => k).ToList();

            game.Players[pIds[0]].X = game.StartX;
            game.Players[pIds[0]].Y = game.StartY;

            game.Players[pIds[1]].X = game.EndX;
            game.Players[pIds[1]].Y = game.EndY;

            await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("GameUpdate", game.ToViewModel());
            await Clients.All.SendAsync("GameList", _mazeService.Games.Where(g => g.Value.Players.Count < 2).Select(gm => new { gm.Value.Id, gm.Value.Name }).ToList());

            //for(int i = 3; i > 0; i--)
            //{
            //    await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("CountDown", i);
            //    await Task.Delay(1000);
            //}

            //await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("StartGame", game.Id);
        }

        public async Task PlayerReady(int gameId, int playerId, bool isReady)
        {
            if (!_mazeService.Games.ContainsKey(gameId) || !_mazeService.Games[gameId].Players.ContainsKey(playerId))
            {
                return;
            }

            var game = _mazeService.Games[gameId];

            if (isReady && !game.ReadyPlayers.Where(p => p == playerId).Any())
            {
                game.ReadyPlayers.Add(playerId);
            }

            if (!isReady)
            {
                game.ReadyPlayers = game.ReadyPlayers.Where(p => p != playerId).ToList();
            }


            await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("PlayerReady", playerId, isReady);

            if(game.Players.Count == game.playerNumber && game.ReadyPlayers.Count == game.playerNumber)
            {
                for (int i = 3; i > 0; i--)
                {
                    await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("CountDown", i);
                    await Task.Delay(1000);
                }

                await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("StartGame", game.Id);
            }
        }

        public async Task LeaveGame(int gameId, int playerId)
        {
            if (!_mazeService.Games.ContainsKey(gameId) || !_mazeService.Players.ContainsKey(playerId))
            {
                return;
            }
            var player = _mazeService.Players[playerId];
            var game = _mazeService.Games[gameId];

            if (game.Players.ContainsKey(playerId))
            {
                game.Players.Remove(playerId);
            }

            await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("GameUpdate", game.ToViewModel());
            await Clients.All.SendAsync("GameList", _mazeService.Games.Where(g => g.Value.Players.Count < 2).Select(gm => new { gm.Value.Id, gm.Value.Name }).ToList());
        }

        public async Task NewGame(int playerId, string name)
        {
            if (!_mazeService.Players.ContainsKey(playerId))
            {
                return;
            }
            var player = _mazeService.Players[playerId];
            var game = _mazeService.NewGame(player, name);
            var g = game.ToViewModel();
            await Clients.Caller.SendAsync("GameUpdate", g);
            await Clients.All.SendAsync("GameList", _mazeService.Games.Where(gm => gm.Value.Players.Count < 2).Select(gm => new { gm.Value.Id, gm.Value.Name}).ToList());
            //await Clients.Caller.SendAsync("GameUpdate", JsonConvert.SerializeObject(game.ToViewModel()));
        }

        public async Task ClearAll(string auth)
        {
            
            await Clients.All.SendAsync("ClearAll");
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            //await Clients.Caller.SendAsync("SetTitle", _mazeService.Title);
        }


    }
}
