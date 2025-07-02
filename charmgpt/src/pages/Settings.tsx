
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Heart, User, Shield, Trash2, LogOut, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: ""
  });
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Update profile:", userInfo);
    toast({
      title: "Profile Updated",
      description: "Your account information has been saved"
    });
  };

  const handleLogout = () => {
    console.log("User logged out");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out"
    });
    navigate("/");
  };

  const handleDeleteAccount = () => {
    if (!showDeleteConfirmation) {
      setShowDeleteConfirmation(true);
      return;
    }
    
    console.log("Account deleted");
    toast({
      title: "Account Deleted",
      description: "Your account has been permanently deleted",
      variant: "destructive"
    });
    navigate("/");
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
        <Link to="/chat">
          <Button variant="ghost" className="text-slate-300 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chat
          </Button>
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your account and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-5 h-5 text-rose-400" />
              <h2 className="text-xl font-semibold text-white">Profile Information</h2>
            </div>
            
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-slate-300 text-sm font-medium">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl mt-2 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-300 text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl mt-2 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-slate-300 text-sm font-medium">New Password (optional)</Label>
                <Input
                  id="password"
                  type="password"
                  value={userInfo.password}
                  onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                  className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl mt-2 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                  placeholder="Leave blank to keep current password"
                />
              </div>

              <Button type="submit" className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:via-pink-600 hover:to-amber-600 text-white rounded-xl transition-all duration-300">
                Update Profile
              </Button>
            </form>
          </Card>

          {/* Account Security */}
          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-semibold text-white">Account Security</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <div>
                  <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                  <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" className="border-slate-600/50 text-slate-300 hover:text-white hover:bg-rose-500/10 hover:border-rose-400/50 rounded-xl transition-all duration-300">
                  Enable
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <div>
                  <h3 className="text-white font-medium">Login Sessions</h3>
                  <p className="text-slate-400 text-sm">Manage your active login sessions</p>
                </div>
                <Button variant="outline" className="border-slate-600/50 text-slate-300 hover:text-white hover:bg-rose-500/10 hover:border-rose-400/50 rounded-xl transition-all duration-300">
                  View Sessions
                </Button>
              </div>
            </div>
          </Card>

          {/* Account Actions */}
          <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-6 rounded-2xl">
            <div className="space-y-4">
              <Button 
                onClick={handleLogout}
                variant="ghost" 
                className="w-full justify-start text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-xl transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
              
              <div className="border-t border-slate-700/50 pt-4">
                <h3 className="text-red-400 font-medium mb-2">Danger Zone</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                
                {showDeleteConfirmation ? (
                  <div className="space-y-3">
                    <p className="text-white text-sm font-medium">
                      Are you absolutely sure? This action cannot be undone.
                    </p>
                    <div className="flex space-x-3">
                      <Button 
                        onClick={handleDeleteAccount}
                        variant="destructive"
                        className="bg-red-600 hover:bg-red-700 rounded-xl"
                      >
                        Yes, Delete My Account
                      </Button>
                      <Button 
                        onClick={() => setShowDeleteConfirmation(false)}
                        variant="ghost"
                        className="text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-xl"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={handleDeleteAccount}
                    variant="destructive" 
                    className="bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white border-red-600/50 rounded-xl transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;