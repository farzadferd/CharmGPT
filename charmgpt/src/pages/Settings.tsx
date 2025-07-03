import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Heart, User, Shield, Trash2, LogOut, ArrowLeft, Bell, Eye, EyeOff, Palette, Globe, Sparkles, Zap, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: ""
  });
  const [preferences, setPreferences] = useState({
    theme: "dark",
    language: "en",
    notifications: true,
    autoSave: true,
    responseLength: "medium"
  });
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Update profile:", userInfo);
    toast({
      title: "Profile Updated",
      description: "Your account information has been saved successfully"
    });
  };

  const handleUpdatePreferences = () => {
    console.log("Update preferences:", preferences);
    toast({
      title: "Preferences Updated",
      description: "Your settings have been saved"
    });
  };

  const handleLogout = () => {
    console.log("User logged out");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of Charm"
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
      description: "Your Charm account has been permanently deleted",
      variant: "destructive"
    });
    navigate("/");
  };

  const settingsSections = [
    {
      id: "profile",
      title: "Profile Settings",
      icon: User,
      description: "Manage your personal information and account details"
    },
    {
      id: "preferences",
      title: "App Preferences",
      icon: Palette,
      description: "Customize your Charm experience"
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      description: "Control your account security and privacy settings"
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      description: "Manage your notification preferences"
    }
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
        <Link to="/chat">
          <Button variant="ghost" className="text-slate-300 hover:text-rose-300 hover:bg-rose-500/10 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chat
          </Button>
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto p-6 relative z-10">
        {/* Header */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 flex items-center">
            <Sparkles className="w-8 h-8 mr-4 text-rose-400" />
            Account Settings
          </h1>
          <p className="text-slate-400 text-lg">Customize your Charm experience and manage your account</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {settingsSections.map((section, index) => (
              <Card key={section.id} className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-rose-500/20 to-purple-500/20 group-hover:from-rose-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <section.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-rose-300 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{section.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <Card className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 rounded-3xl transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-rose-500/20 to-purple-500/20">
                  <User className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                  <p className="text-slate-400">Update your personal details</p>
                </div>
              </div>
              
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300 text-sm font-medium">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300 text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-300 text-sm font-medium">New Password (optional)</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={userInfo.password}
                      onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                      className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl h-12 pr-12 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                      placeholder="Leave blank to keep current password"
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

                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 hover:from-rose-600 hover:via-purple-600 hover:to-indigo-600 text-white rounded-xl transition-all duration-300 px-8 py-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Update Profile</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </form>
            </Card>

            {/* App Preferences */}
            <Card className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 rounded-3xl transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20">
                  <Palette className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">App Preferences</h2>
                  <p className="text-slate-400">Customize your Charm experience</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <div>
                        <h3 className="text-white font-medium">Auto-save Conversations</h3>
                        <p className="text-slate-400 text-sm">Automatically save your chats</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.autoSave}
                      onChange={(e) => setPreferences({...preferences, autoSave: e.target.checked})}
                      className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-rose-500 focus:ring-rose-400/20"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="text-white font-medium">Push Notifications</h3>
                        <p className="text-slate-400 text-sm">Get notified of updates</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.notifications}
                      onChange={(e) => setPreferences({...preferences, notifications: e.target.checked})}
                      className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-rose-500 focus:ring-rose-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <MessageSquare className="w-5 h-5 text-green-400" />
                      <h3 className="text-white font-medium">Response Length</h3>
                    </div>
                    <select
                      value={preferences.responseLength}
                      onChange={(e) => setPreferences({...preferences, responseLength: e.target.value})}
                      className="w-full bg-slate-800/50 border-slate-600/50 text-white rounded-xl h-10 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                    >
                      <option value="short">Short & Concise</option>
                      <option value="medium">Medium Length</option>
                      <option value="long">Detailed & Comprehensive</option>
                    </select>
                  </div>

                  <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <Globe className="w-5 h-5 text-purple-400" />
                      <h3 className="text-white font-medium">Language</h3>
                    </div>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                      className="w-full bg-slate-800/50 border-slate-600/50 text-white rounded-xl h-10 focus:border-rose-400/50 focus:ring-rose-400/20 transition-all"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  onClick={handleUpdatePreferences}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl transition-all duration-300 px-8 py-2"
                >
                  Save Preferences
                </Button>
              </div>
            </Card>

            {/* Account Actions */}
            <Card className={`bg-slate-900/40 border-slate-700/50 backdrop-blur-sm p-8 rounded-3xl transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Account Actions</h2>
                  <p className="text-slate-400">Manage your account security</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleLogout}
                  variant="ghost" 
                  className="w-full justify-start text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-xl transition-all duration-300 h-12"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign Out of Charm
                </Button>
                
                <div className="border-t border-slate-700/50 pt-6">
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center">
                    <Trash2 className="w-5 h-5 mr-2" />
                    Danger Zone
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Once you delete your account, there is no going back. All your conversations, preferences, and data will be permanently removed.
                  </p>
                  
                  {showDeleteConfirmation ? (
                    <div className="space-y-4 p-4 bg-red-950/20 border border-red-500/20 rounded-xl">
                      <p className="text-white font-medium">
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
    </div>
  );
};

export default Settings;