import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    toast({
      title: "Welcome Back!",
      description: "Successfully logged into CharmGPT",
    });
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-900/40 border-slate-700/50 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/10">
        <div className="p-10">
          <div className="text-center mb-10">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
              <div className="relative">
                <Heart className="w-10 h-10 text-rose-400 fill-rose-400/30" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-amber-200 bg-clip-text text-transparent">
                CharmGPT
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-3">Welcome Back</h1>
            <p className="text-slate-400">Continue your conversation mastery journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-slate-300 text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl mt-2 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-slate-300 text-sm font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl mt-2 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-rose-500/25 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign In
            </Button>
          </form>

          <div className="text-center mt-8">
            <p className="text-slate-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-rose-400 hover:text-rose-300 font-medium transition-colors">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;