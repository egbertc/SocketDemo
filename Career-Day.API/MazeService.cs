using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace CareerDay.API
{
    public class MazeService
    {
        private int IdCount { get; set; } = 1;
        private int GameIdCount { get; set; } = 1;

        public Dictionary<int, Game> Games { get; set; } = new Dictionary<int, Game>();
        public Dictionary<int, Player> Players { get; set; } = new Dictionary<int, Player>();

        public List<string> colorList = new List<string> { "#00963e", "#123cba", "#93020c", "#b50e99", "#78058c", "#299ac7" };
  

        private int NextId()
        {
            return IdCount++;
        }

        private int NextGameId()
        {
            return GameIdCount++;
        }

        public Player NewPlayer(string name, string clientId)
        {
            var id = NextId();
            var player = new Player()
            {
                Id = id,
                Name = name,
                Color = colorList[id % colorList.Count],
                ClientId = clientId
            };

            Players.Add(player.Id, player);
            return player;
        }

        public Game NewGame(Player creater, string name, int size = 18)
        {
            var game = new Game(size);

            game.Id = NextGameId();
            game.Name = name;
            game.Players.Add(creater.Id, creater);
            Games.Add(game.Id, game);
            
            return game;
        }

    }

    public static class GameExtensions
    {
        public static GameViewModel ToViewModel(this Game game)
        {
            return new GameViewModel()
            {
                Id = game.Id,
                Name = game.Name,
                playerNumber = game.playerNumber,
                Players = game.Players.Select(p => p.Value).ToList(),
                ReadyPlayers = game.ReadyPlayers,
                MazeGrid = game.MazeGrid,
                StartX = game.StartX,
                StartY = game.StartY,
                EndX = game.EndX,
                EndY = game.EndY
            };
        }

        public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> source, Random rng)
        {
            var e = source.ToArray();
            for (var i = e.Length - 1; i >= 0; i--)
            {
                var swapIndex = rng.Next(i + 1);
                yield return e[swapIndex];
                e[swapIndex] = e[i];
            }
        }

        public static Direction OppositeWall(this Direction orig)
        {
            return (Direction)(((int)orig >> 2) | ((int)orig << 2)) & Direction.Initial;
        }


    }

    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int playerNumber { get; set; } = 2;
        public Dictionary<int, Player> Players { get; set; } = new Dictionary<int, Player>();
        public Direction[][] MazeGrid { get; set; }
        public List<int> ReadyPlayers { get; set; } = new List<int>();
        public int StartX { get; set; }
        public int StartY { get; set; }
        public int EndX { get; set; }
        public int EndY { get; set; }
        public bool HasStarted { get; set; }

        private readonly Random _rng;
        private readonly int _size;

        public Game(int size)
        {
            _size = size;
            MazeGrid = new Direction[size][];

            for(int i=0; i<size; i++)
            {
                MazeGrid[i] = new Direction[size];
                for(int j=0; j<size; j++)
                {
                    MazeGrid[i][j] = Direction.Initial;
                }
            }

            _rng = new Random();
            StartX = _rng.Next(size);
            StartY = 0;
            VisitCell(StartX, 0);
        }

        public void VisitCell(int x, int y)
        {
            MazeGrid[y][x] |= Direction.Visited;

            if(y == _size - 1)
            {
                EndX = x;
                EndY = y;
            }
            

            foreach(var p in GetNeighbors(new Point(x,y)).Shuffle(_rng).Where(z => !(MazeGrid[z.Neighbor.Y][z.Neighbor.X].HasFlag(Direction.Visited))))
            {
                MazeGrid[y][x] -= p.Wall;
                MazeGrid[p.Neighbor.Y][p.Neighbor.X] -= p.Wall.OppositeWall();
                VisitCell(p.Neighbor.X, p.Neighbor.Y);
            }
        }

        public IEnumerable<RemoveWallAction> GetNeighbors(Point p)
        {
            if (p.X > 0) yield return new RemoveWallAction { Neighbor = new Point(p.X - 1, p.Y), Wall = Direction.Left };
            if (p.Y > 0) yield return new RemoveWallAction { Neighbor = new Point(p.X, p.Y - 1), Wall = Direction.Up };
            if (p.X < _size - 1) yield return new RemoveWallAction { Neighbor = new Point(p.X + 1, p.Y), Wall = Direction.Right };
            if (p.Y < _size - 1) yield return new RemoveWallAction { Neighbor = new Point(p.X, p.Y + 1), Wall = Direction.Down };
        }

    }

    public class GameViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int playerNumber { get; set; } = 2;
        public List<Player> Players { get; set; } = new List<Player>();
        public Direction[][] MazeGrid { get; set; }
        public List<int> ReadyPlayers { get; set; } = new List<int>();
        public int StartX { get; set; }
        public int StartY { get; set; }
        public int EndX { get; set; }
        public int EndY { get; set; }
    }

    public class Player
    {
        public int Id { get; set; }
        public string ClientId { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int? X { get; set; }
        public int? Y { get; set; }
    }

    [Flags]
    public enum Direction
    {
        None = 0,
        Up = 1,
        Right = 2,
        Down = 4,
        Left = 8,
        Initial = Up | Right | Down | Left,
        Visited = 128
    }

    public struct RemoveWallAction
    {
        public Point Neighbor;
        public Direction Wall;
    }

}
