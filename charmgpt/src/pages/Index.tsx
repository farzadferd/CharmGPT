
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Zap, Star, ArrowRight, MessageCircle, Users, Shield, Award, TrendingUp, Globe, Rocket, Brain, Target, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Emotional Intelligence",
      description: "Advanced AI that understands emotional context, tone, and the subtle art of human connection in every message.",
      gradient: "from-violet-600 to-purple-600",
      delay: "0s"
    },
    {
      icon: Target,
      title: "Personality Adaptation",
      description: "Dynamically adjusts communication styles to match your conversation partner's unique personality and preferences.",
      gradient: "from-rose-600 to-pink-600",
      delay: "0.1s"
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Your conversations remain completely private with end-to-end encryption and zero data retention policies.",
      gradient: "from-emerald-600 to-teal-600",
      delay: "0.2s"
    },
    {
      icon: Lightbulb,
      title: "Context Awareness",
      description: "Understands conversation history, relationship dynamics, and situational context for perfectly timed responses.",
      gradient: "from-amber-600 to-orange-600",
      delay: "0.3s"
    },
    {
      icon: Sparkles,
      title: "Multi-Modal Communication",
      description: "Optimizes messages for different platforms, from dating apps to professional networking with platform-specific insights.",
      gradient: "from-indigo-600 to-blue-600",
      delay: "0.4s"
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Instantly generates multiple response options with different tones and approaches for maximum conversation impact.",
      gradient: "from-cyan-600 to-blue-600",
      delay: "0.5s"
    }
  ];

  const useCases = [
    {
      title: "Dating & Romance",
      description: "Craft compelling messages that spark attraction and build meaningful connections on dating platforms.",
      icon: Heart,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Professional Networking",
      description: "Write persuasive outreach messages that open doors and build valuable business relationships.",
      icon: Users,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Social Media Engagement",
      description: "Create engaging content and responses that increase your social media presence and influence.",
      icon: MessageCircle,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden relative">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-rose-950/30"></div>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
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
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-rose-300 transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#use-cases" className="text-slate-300 hover:text-purple-300 transition-colors relative group">
              Use Cases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button 
                variant="ghost" 
                className="text-slate-300 hover:text-rose-300 hover:bg-rose-500/5 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl px-6"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white shadow-xl shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 rounded-xl px-6 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className={`text-center transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/60 to-purple-800/40 backdrop-blur-xl rounded-full px-8 py-3 mb-12 border border-purple-500/20 shadow-2xl">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-slate-200 font-medium">AI-Powered Conversation Mastery</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Master the Art of
            <span className="block bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent relative">
              Charisma
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl -z-10 rounded-3xl"></div>
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Charm combines cutting-edge AI with psychological insights to help you craft messages that captivate, convince, and create lasting connections. Whether you're dating, networking, or building relationships, we help you say the right thing at the right time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-slate-300 hover:text-white border border-slate-600/50 hover:border-slate-500 backdrop-blur-sm px-12 py-6 text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-32">
          <div className={`text-center mb-20 transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Powered by
              <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Advanced AI
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every feature is designed to enhance your communication effectiveness through 
              cutting-edge artificial intelligence and proven psychological principles.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className={`group bg-slate-900/40 border-slate-700/50 backdrop-blur-xl p-8 rounded-3xl hover:bg-slate-900/60 transition-all duration-700 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: feature.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-32">
          <div className={`text-center mb-20 transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Perfect for
              <span className="block bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                Every Situation
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're building romantic connections, professional relationships, or social influence, 
              Charm adapts to your specific communication needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={useCase.title}
                className={`group bg-slate-900/60 border-slate-700/50 backdrop-blur-xl p-8 rounded-3xl hover:bg-slate-900/80 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/10 animate-fade-in-up`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className={`text-center bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-16 border border-purple-500/20 shadow-2xl shadow-purple-500/10 relative overflow-hidden transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                Ready to Transform
                <span className="block bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Your Communication?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the conversation revolution. Start crafting messages that captivate, convince, and create the connections you've always wanted.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-purple-500/30 transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Begin Your Journey
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </Link>
                <div className="text-slate-400 text-sm">
                  Free to start • No credit card required
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;