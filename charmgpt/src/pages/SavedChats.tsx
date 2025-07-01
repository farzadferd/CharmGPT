import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Settings, Plus, Trash2, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SavedChat {
  id: string;
  title: string;
  preview: string;
  lastModified: Date;
  responseCount: number;
}

const SavedChats = () => {
  const { toast } = useToast();
  const [savedChats, setSavedChats] = useState<SavedChat[]>([
    {
      id: "1",
      title: "Coffee Date Follow-up",
      preview: "Thanks for the amazing coffee date! I had such a great time...",
      lastModified: new Date(Date.now() - 86400000), // 1 day ago
      responseCount: 8
    },
    {
      id: "2", 
      title: "Weekend Plans",
      preview: "What are you up to this weekend? I was thinking we could...",
      lastModified: new Date(Date.now() - 172800000), // 2 days ago
      responseCount: 12
    },
    {
      id: "3",
      title: "Good Morning Text",
      preview: "Good morning beautiful! Hope you have an amazing day...",
      lastModified: new Date(Date.now() - 259200000), // 3 days ago
      responseCount: 5
    }
  ]);

  const deleteChat = (chatId: string) => {
    setSavedChats(prev => prev.filter(chat => chat.id !== chatId));
    toast({
      title: "Chat Deleted",
      description: "The conversation has been removed"
    });
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-700/50 backdrop-blur-sm bg-black/20 rounded-2xl mx-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400/30" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">
            CharmGPT
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/chat">
            <Button className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white rounded-xl shadow-lg shadow-rose-500/25 transition-all duration-300">
              <Plus className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" className="text-slate-300 hover:text-purple-300 hover:bg-purple-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl">
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-rose-400 to-amber-400 rounded-full mr-4"></div>
            Saved Conversations
          </h1>
          <p className="text-slate-400 text-lg">Your conversation history and generated responses</p>
        </div>

        {savedChats.length === 0 ? (
          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-16 rounded-2xl">
            <div className="text-center">
              <Heart className="w-20 h-20 mx-auto mb-6 text-slate-600 fill-slate-600/20" />
              <h3 className="text-2xl font-semibold text-white mb-3">No Saved Chats Yet</h3>
              <p className="text-slate-400 mb-8 text-lg">
                Start a conversation and your chats will automatically be saved here
              </p>
              <Link to="/chat">
                <Button className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl shadow-lg shadow-rose-500/25 transition-all duration-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Start Your First Chat
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid gap-6">
            {savedChats.map((chat) => (
              <Card key={chat.id} className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 hover:bg-slate-900/60 transition-all duration-300 rounded-2xl group hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/10">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-rose-300 transition-colors">{chat.title}</h3>
                      <div className="flex items-center text-sm text-slate-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatDate(chat.lastModified)}
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed text-lg line-clamp-2">{chat.preview}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span className="bg-slate-800/50 px-3 py-1 rounded-full">{chat.responseCount} responses generated</span>
                    </div>
                  </div>
                  <div className="flex space-x-3 ml-6">
                    <Link to="/chat">
                      <Button variant="ghost" className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl">
                        Continue
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      onClick={() => deleteChat(chat.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedChats;