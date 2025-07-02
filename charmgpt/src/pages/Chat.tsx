
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import { Heart, Send, Settings, BookOpen, Plus, Sparkles, User, Bot } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [responseType, setResponseType] = useState<string>("flirty");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsGenerating(true);

    // Simulate AI response with selected type
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Here's a ${responseType} response to "${currentInput}". I can help you craft the perfect message that's engaging and authentic. Would you like me to suggest some different approaches - perhaps something more flirty, witty, or romantic?`,
        sender: "assistant",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsGenerating(false);
    }, 1500);
  };

  const newChat = () => {
    setMessages([]);
    setInput("");
    toast({
      title: "New Chat Started",
      description: "Ready for your next conversation!"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950 flex flex-col">
      {/* Navigation */}
      <nav className={`flex justify-between items-center p-4 border-b border-slate-700/50 backdrop-blur-sm bg-black/20 ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
        <Link to="/" className="flex items-center space-x-3 hover-lift">
          <div className="relative animate-float">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400/30" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">
            CharmGPT
          </span>
        </Link>
        
        <div className="flex space-x-2">
          <Button onClick={newChat} variant="ghost" className="text-slate-300 hover:text-amber-300 hover:bg-amber-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl hover-lift">
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
          <Link to="/saved-chats">
            <Button variant="ghost" className="text-slate-300 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl hover-lift">
              <BookOpen className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" className="text-slate-300 hover:text-purple-300 hover:bg-purple-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl hover-lift">
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className={`flex flex-col items-center justify-center h-full text-center space-y-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative animate-float">
                <Heart className="w-20 h-20 text-rose-400 fill-rose-400/20" />
                <Sparkles className="w-6 h-6 text-amber-400 absolute -top-2 -right-2 animate-pulse" />
              </div>
              <div className="animate-fade-in-up stagger-1">
                <h2 className="text-3xl font-bold text-white mb-4">How can I help you charm today?</h2>
                <p className="text-slate-400 text-lg">Share your conversation context and I'll help you craft the perfect response</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl">
                <div className="p-4 bg-slate-900/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover-lift animate-scale-in stagger-1">
                  <h3 className="text-rose-400 font-semibold mb-2">Flirty Responses</h3>
                  <p className="text-slate-300 text-sm">Get playful and magnetic conversation starters</p>
                </div>
                <div className="p-4 bg-slate-900/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover-lift animate-scale-in stagger-2">
                  <h3 className="text-amber-400 font-semibold mb-2">Witty Comebacks</h3>
                  <p className="text-slate-300 text-sm">Clever and humorous responses that impress</p>
                </div>
                <div className="p-4 bg-slate-900/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover-lift animate-scale-in stagger-3">
                  <h3 className="text-pink-400 font-semibold mb-2">Romantic Messages</h3>
                  <p className="text-slate-300 text-sm">Heartfelt and meaningful conversation pieces</p>
                </div>
                <div className="p-4 bg-slate-900/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover-lift animate-scale-in stagger-4">
                  <h3 className="text-purple-400 font-semibold mb-2">Context Analysis</h3>
                  <p className="text-slate-300 text-sm">Deep understanding of conversation dynamics</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} ${message.sender === "user" ? "animate-slide-in-right" : "animate-slide-in-left"}`}>
                  <div className={`flex space-x-3 max-w-3xl ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center animate-scale-in ${
                      message.sender === "user" 
                        ? "bg-gradient-to-r from-rose-500 to-pink-500" 
                        : "bg-gradient-to-r from-purple-500 to-indigo-500"
                    }`}>
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`p-4 rounded-2xl hover-lift ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30"
                        : "bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm"
                    }`}>
                      <p className="text-white leading-relaxed">{message.text}</p>
                      <span className="text-xs text-slate-400 mt-2 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isGenerating && (
                <div className="flex justify-start animate-slide-in-left">
                  <div className="flex space-x-3 max-w-3xl">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 animate-scale-in">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm animate-shimmer">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className={`p-4 border-t border-slate-700/50 backdrop-blur-sm bg-black/20 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex space-x-4 max-w-4xl">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your conversation situation or paste a message you received..."
              className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl focus:border-rose-400/50 focus:ring-rose-400/20 transition-all duration-300 hover:bg-slate-900/70"
              onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
              disabled={isGenerating}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={isGenerating || !input.trim()}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 rounded-xl px-6 transition-all duration-300 shadow-lg shadow-rose-500/25 hover-lift animate-glow"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Response Type Toggle */}
          <div className="flex items-center justify-center mt-4 space-x-4 animate-fade-in-up stagger-2">
            <span className="text-slate-400 text-sm">Response style:</span>
            <ToggleGroup type="single" value={responseType} onValueChange={(value) => value && setResponseType(value)}>
              <ToggleGroupItem 
                value="flirty" 
                className="text-rose-400 data-[state=on]:bg-rose-500/20 data-[state=on]:text-rose-300 border border-slate-700/50 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-rose-500/10 hover-lift"
              >
                💕 Flirty
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="witty" 
                className="text-amber-400 data-[state=on]:bg-amber-500/20 data-[state=on]:text-amber-300 border border-slate-700/50 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-amber-500/10 hover-lift"
              >
                ✨ Witty
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="romantic" 
                className="text-pink-400 data-[state=on]:bg-pink-500/20 data-[state=on]:text-pink-300 border border-slate-700/50 rounded-lg px-4 py-2 transition-all duration-300 hover:bg-pink-500/10 hover-lift"
              >
                💖 Romantic
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <p className="text-xs text-slate-500 mt-2 text-center animate-fade-in-up stagger-3">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;