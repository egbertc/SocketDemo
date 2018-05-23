using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CareerDay.API
{
    public class ChatService
    {
        public string Title { get; set; } = "Sendy Words";
        public int MessageCount { get; set; } = 0;
        public Dictionary<string, string> SwapDictionary { get; set; } = new Dictionary<string, string>();
    }
}
