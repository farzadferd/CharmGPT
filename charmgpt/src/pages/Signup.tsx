import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Eye, EyeOff, Sparkles, Shield, Zap, Check, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please ensure both passwords match",
        variant: "destructive"
      });
      return;
    }
    console.log("Signup attempt:", formData);
    toast({
      title: "Welcome to Charm!",
      description: "Your journey to communication mastery begins now",
    });
    navigate("/chat");
  };

  const benefits = [
    "Unlimited AI-powered message generation",
    "Personality-based conversation adaptation",
    "Real-time communication optimization",
    "Privacy-first approach with encryption",
    "Multi-platform conversation support"
  ];

  const features = [
    { icon: Sparkles, text: "Transform your communication style" },
    { icon: Shield, text: "Complete privacy and security" },
    { icon: Zap, text: "Instant intelligent responses" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Benefits */}
        <div className={`hidden lg:block space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center space-x-4 group">
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
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white leading-tight">
                Join the Future of
                <span className="block bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Human Connection
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Unlock the power of AI-driven communication and transform every conversation into an opportunity for meaningful connection.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-amber-400 mr-2" />
                What you'll get:
              </h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-900/30 rounded-xl border border-slate-700/30 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-slate-900/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-rose-500/20 to-purple-500/20">
                    <feature.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <Card className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/10 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="p-10">
            <div className="text-center mb-10">
              <div className="lg:hidden mb-8">
                <Link to="/" className="flex items-center justify-center space-x-3">
                  <div className="relative">
                    <Heart className="w-10 h-10 text-rose-400 fill-rose-400/30" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">
                    Charm
                  </span>
                </Link>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Create Your Account</h2>
              <p className="text-slate-400">Start your journey to communication mastery</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300 text-sm font-medium">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300 text-sm font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 pr-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-300 text-sm font-medium">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 pr-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-rose-500 focus:ring-rose-400/20"
                  required
                />
                <label htmlFor="terms" className="text-sm text-slate-400">
                  I agree to the{" "}
                  <Link to="/terms" className="text-rose-400 hover:text-rose-300 transition-colors">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-rose-400 hover:text-rose-300 transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white py-3 h-12 rounded-xl font-semibold shadow-lg shadow-rose-500/25 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
              >
                <span className="relative z-10">Create Your Charm Account</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </form>

            <div className="text-center mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 h-px bg-slate-700"></div>
                <span className="text-slate-400 text-sm">Already have an account?</span>
                <div className="flex-1 h-px bg-slate-700"></div>
              </div>
              <Link to="/login" className="inline-block">
                <Button variant="ghost" className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 font-medium transition-colors rounded-xl px-6">
                  Sign In Instead
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;