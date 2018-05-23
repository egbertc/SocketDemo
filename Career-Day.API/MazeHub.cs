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
                    }

                    //await Clients.Others.SendAsync("MovePlayer", player.Id, player.X.Value, player.Y.Value);
                }
            }
            
        }
        

        public async Task UserJoin(string user)
        {
            var player = _mazeService.NewPlayer(user, Context.ConnectionId);
            await Clients.Caller.SendAsync("InitPlayer", player, _mazeService.Games.Where(g => g.Value.Players.Count < 2).Select(g => g.Value.Id).ToList());
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
            await Clients.All.SendAsync("GameList", _mazeService.Games.Where(g => g.Value.Players.Count < 2).Select(g => g.Value.Id).ToList());
            await Clients.Clients(game.Players.Select(p => p.Value.ClientId).ToList()).SendAsync("StartGame", game.Id);
        }

        public async Task NewGame(int playerId)
        {
            if (!_mazeService.Players.ContainsKey(playerId))
            {
                return;
            }
            var player = _mazeService.Players[playerId];
            var game = _mazeService.NewGame(player);
            var g = game.ToViewModel();
            await Clients.Caller.SendAsync("GameUpdate", g);
            await Clients.All.SendAsync("GameList", _mazeService.Games.Where(gm => gm.Value.Players.Count < 2).Select(gm => gm.Value.Id).ToList());
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
