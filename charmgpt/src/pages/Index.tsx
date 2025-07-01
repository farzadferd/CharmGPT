import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Zap, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto backdrop-blur-sm bg-black/20 rounded-2xl mx-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400/30" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">
            CharmGPT
          </span>
        </div>
        <div className="flex space-x-4">
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="text-slate-300 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white shadow-lg shadow-rose-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500/20 to-amber-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-rose-500/30">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-sm text-slate-300 font-medium">AI-Powered Conversation Mastery</span>
          </div>
          
          <h1 className="text-7xl font-extrabold text-white mb-8 leading-tight">
            Elevate Your
            <span className="block bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Conversation Game
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform ordinary conversations into memorable connections. CharmGPT crafts personalized, 
            engaging messages that capture attention and build genuine rapport.
          </p>
          
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-rose-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              Start Your Journey
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 hover:bg-slate-900/60 transition-all duration-500 rounded-2xl group hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/10">
            <div className="text-center">
              <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Magnetic Appeal</h3>
              <p className="text-slate-400 leading-relaxed">
                Generate captivating messages that spark curiosity and create irresistible attraction through intelligent conversation flow.
              </p>
            </div>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 hover:bg-slate-900/60 transition-all duration-500 rounded-2xl group hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-amber-400 fill-amber-400/30" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Authentic Connection</h3>
              <p className="text-slate-400 leading-relaxed">
                Build meaningful relationships with emotionally intelligent responses that resonate on a deeper level.
              </p>
            </div>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 hover:bg-slate-900/60 transition-all duration-500 rounded-2xl group hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Adaptation</h3>
              <p className="text-slate-400 leading-relaxed">
                Advanced AI that understands context, tone, and personality to craft perfectly tailored responses.
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent mb-2">10k+</div>
            <div className="text-slate-400">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">95%</div>
            <div className="text-slate-400">Response Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-slate-400">AI Assistant</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900/50 to-purple-900/30 backdrop-blur-sm rounded-3xl p-16 border border-slate-700/50">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Every Conversation?
          </h2>
          <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
            Join thousands who've already mastered the art of captivating communication with CharmGPT's AI-powered assistance.
          </p>
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Begin Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;