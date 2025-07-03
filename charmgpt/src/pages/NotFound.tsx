import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Home, ArrowLeft, Search, Sparkles, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const suggestions = [
    {
      title: "Start a Conversation",
      description: "Begin crafting your perfect message with AI assistance",
      link: "/chat",
      icon: MessageCircle,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "View Saved Chats",
      description: "Access your conversation history and saved responses",
      link: "/saved-chats",
      icon: Search,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Account Settings",
      description: "Customize your Charm experience",
      link: "/settings",
      icon: Sparkles,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/50 to-rose-950/30 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to="/" className="inline-flex items-center space-x-4 group mb-8">
            <div className="relative p-3 rounded-2xl bg-gradient-to-r from-rose-500/10 to-purple-500/10 backdrop-blur-sm border border-rose-500/20">
              <Heart className="w-12 h-12 text-rose-400 fill-rose-400/30 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-4xl font-bold bg-gradient-to-r from-rose-300 via-purple-300 to-amber-200 bg-clip-text text-transparent">
                Charm
              </span>
              <div className="text-sm text-slate-400 -mt-1">Conversation Intelligence</div>
            </div>
          </Link>
        </div>

        {/* 404 Error */}
        <Card className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-xl p-12 rounded-3xl shadow-2xl shadow-purple-500/10 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              404
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Oops! This Page Doesn't Exist
            </h1>
            <p className="text-xl text-slate-300 mb-2">
              The page you're looking for seems to have vanished into the digital ether.
            </p>
            <p className="text-slate-400">
              But don't worry - let's get you back to crafting amazing conversations!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => window.history.back()}
              className="text-slate-300 hover:text-white border border-slate-600/50 hover:border-slate-500 backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="text-sm text-slate-400 font-mono bg-slate-800/30 rounded-lg p-3 inline-block">
            Attempted URL: <span className="text-rose-400">{location.pathname}</span>
          </div>
        </Card>

        {/* Suggestions */}
        <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-white mb-8">
            While you're here, why not try:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestions.map((suggestion, index) => (
              <Link key={suggestion.title} to={suggestion.link}>
                <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/10 group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${suggestion.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <suggestion.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    {suggestion.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    {suggestion.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;