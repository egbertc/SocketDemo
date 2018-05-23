using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CareerDay.API
{
    public class ChatHub : Hub
    {
        private readonly ChatService _chatService;

        public ChatHub(ChatService chatService)
        {
            _chatService = chatService;
        }
        
        public async Task SendMessage(string user, string message, string color)
        {
            if (_chatService.SwapDictionary.ContainsKey(message))
            {
                _chatService.MessageCount++;
                await Clients.All.SendAsync("ReceiveImage", user, _chatService.SwapDictionary[message], color);
                return;
            }
            await Clients.All.SendAsync("ReceiveMessage", user, message, color);
            _chatService.MessageCount++;
        }

        public async Task SetTitle(string title, string user)
        {
            _chatService.Title = title;
            var message = $"{user} set the title to  '{title}'!";
            await Clients.All.SendAsync("SetTitle", title);
            await Clients.All.SendAsync("SystemMessage", message);
        }

        public async Task AddSwap(string key, string value, string user)
        {
            _chatService.SwapDictionary.Add(key, value);
            var message = $"{user} swapped {key}!";
            await Clients.All.SendAsync("SystemMessage", message);
        }

        public async Task UserJoin(string user)
        {
            var message = $"New user '{user}' has joined!";
            await Clients.All.SendAsync("SystemMessage", message);
        }

        public async Task ClearAll(string auth)
        {
            if(auth != "yep") { return; }
            _chatService.SwapDictionary.Clear();
            _chatService.MessageCount = 0;
            _chatService.Title = "Sendy Words";
            await Clients.All.SendAsync("ClearAll");
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            await Clients.Caller.SendAsync("SetTitle", _chatService.Title);
        }
    }
}
