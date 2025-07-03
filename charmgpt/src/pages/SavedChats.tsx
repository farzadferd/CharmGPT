import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Heart, Settings, Plus, Trash2, Clock, Search, Filter, MessageSquare, Sparkles, Star, MoreVertical } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface SavedChat {
  id: string;
  title: string;
  preview: string;
  lastModified: Date;
  responseCount: number;
  category: "dating" | "professional" | "social";
  favorite: boolean;
}

const SavedChats = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [savedChats, setSavedChats] = useState<SavedChat[]>([
    {
      id: "1",
      title: "Coffee Date Follow-up",
      preview: "Hey! I had such an amazing time with you yesterday. The way you talked about your passion for photography really...",
      lastModified: new Date(Date.now() - 86400000), // 1 day ago
      responseCount: 8,
      category: "dating",
      favorite: true
    },
    {
      id: "2", 
      title: "LinkedIn Connection Request",
      preview: "Hi Sarah, I came across your profile and was impressed by your work in sustainable technology. I'd love to connect...",
      lastModified: new Date(Date.now() - 172800000), // 2 days ago
      responseCount: 3,
      category: "professional",
      favorite: false
    },
    {
      id: "3",
      title: "Party Invitation Response",
      preview: "Thanks for the invite! I wouldn't miss it for the world. Should I bring anything? I make a mean chocolate chip...",
      lastModified: new Date(Date.now() - 259200000), // 3 days ago
      responseCount: 5,
      category: "social",
      favorite: true
    },
    {
      id: "4",
      title: "Weekend Plans Coordination",
      preview: "What are you thinking for this weekend? I saw there's a new art exhibition downtown, or we could try that...",
      lastModified: new Date(Date.now() - 345600000), // 4 days ago
      responseCount: 12,
      category: "dating",
      favorite: false
    }
  ]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const deleteChat = (chatId: string) => {
    setSavedChats(prev => prev.filter(chat => chat.id !== chatId));
    toast({
      title: "Conversation Deleted",
      description: "The conversation has been removed from your saved chats"
    });
  };

  const toggleFavorite = (chatId: string) => {
    setSavedChats(prev => prev.map(chat => 
      chat.id === chatId ? { ...chat, favorite: !chat.favorite } : chat
    ));
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "dating": return "from-rose-500 to-pink-500";
      case "professional": return "from-blue-500 to-indigo-500";
      case "social": return "from-green-500 to-emerald-500";
      default: return "from-gray-500 to-slate-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "dating": return Heart;
      case "professional": return Settings;
      case "social": return MessageSquare;
      default: return MessageSquare;
    }
  };

  const filteredChats = savedChats.filter(chat => {
    const matchesSearch = chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         chat.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || chat.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", name: "All Conversations", count: savedChats.length },
    { id: "dating", name: "Dating", count: savedChats.filter(c => c.category === "dating").length },
    { id: "professional", name: "Professional", count: savedChats.filter(c => c.category === "professional").length },
    { id: "social", name: "Social", count: savedChats.filter(c => c.category === "social").length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/50 to-rose-950/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-50 flex justify-between items-center p-6 max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative p-2 rounded-2xl bg-gradient-to-r from-rose-500/10 to-purple-500/10 backdrop-blur-sm border border-rose-500/20">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400/30 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-300 via-purple-300 to-amber-200 bg-clip-text text-transparent">
              Charm
            </span>
            <div className="text-xs text-slate-400 -mt-1">Conversation Intelligence</div>
          </div>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/chat">
            <Button className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                New Chat
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" className="text-slate-300 hover:text-purple-300 hover:bg-purple-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl">
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 flex items-center">
                <Sparkles className="w-8 h-8 mr-4 text-rose-400" />
                Saved Conversations
              </h1>
              <p className="text-slate-400 text-lg">Your conversation history and AI-generated responses</p>
            </div>
            <div className="hidden lg:block">
              <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-4 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{savedChats.length}</div>
                  <div className="text-sm text-slate-400">Total Conversations</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900/40 border-slate-700/50 text-white placeholder:text-slate-500 rounded-xl pl-10 h-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-lg shadow-rose-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 backdrop-blur-sm"
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Conversations List */}
        {filteredChats.length === 0 ? (
          <Card className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-16 rounded-3xl transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <MessageSquare className="w-20 h-20 mx-auto mb-6 text-slate-600 fill-slate-600/20" />
              <h3 className="text-2xl font-semibold text-white mb-3">
                {searchQuery ? "No conversations found" : "No saved conversations yet"}
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                {searchQuery 
                  ? "Try adjusting your search terms or filters"
                  : "Start a conversation and your chats will automatically be saved here"
                }
              </p>
              <Link to="/chat">
                <Button className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Start Your First Chat
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredChats.map((chat, index) => {
              const CategoryIcon = getCategoryIcon(chat.category);
              return (
                <Card 
                  key={chat.id} 
                  className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 hover:bg-slate-900/60 transition-all duration-300 rounded-3xl group hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/10 animate-fade-in-up`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${getCategoryColor(chat.category)}`}>
                          <CategoryIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-xl font-semibold text-white group-hover:text-rose-300 transition-colors">
                              {chat.title}
                            </h3>
                            {chat.favorite && (
                              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-400 mt-1">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {formatDate(chat.lastModified)}
                            </div>
                            <div className="capitalize">{chat.category}</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-4 leading-relaxed text-lg line-clamp-2">{chat.preview}</p>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span className="bg-slate-800/50 px-3 py-1 rounded-full">
                          {chat.responseCount} responses generated
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(chat.id)}
                        className="text-slate-400 hover:text-amber-400 transition-colors rounded-xl"
                      >
                        <Star className={`w-4 h-4 ${chat.favorite ? 'fill-amber-400 text-amber-400' : ''}`} />
                      </Button>
                      <Link to="/chat">
                        <Button 
                          variant="ghost" 
                          className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl"
                        >
                          Continue
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => deleteChat(chat.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors rounded-xl"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedChats;