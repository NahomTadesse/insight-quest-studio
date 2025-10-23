import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Save, User, Bell, Palette, Users, Key, CreditCard } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <Layout>
      <div className="p-8 max-w-5xl mx-auto space-y-6 animate-fade-in">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your account and preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance">
              <Palette className="h-4 w-4 mr-2" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users className="h-4 w-4 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger value="api">
              <Key className="h-4 w-4 mr-2" />
              API
            </TabsTrigger>
            <TabsTrigger value="billing">
              <CreditCard className="h-4 w-4 mr-2" />
              Billing
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Change Photo</Button>
                    <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>

                <Button onClick={handleSave} variant="gradient">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Choose what you want to be notified about</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>New Responses</Label>
                    <p className="text-sm text-muted-foreground">Get notified when someone responds to your survey</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Daily Summary</Label>
                    <p className="text-sm text-muted-foreground">Receive a daily summary of your survey activity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">Get weekly analytics reports via email</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Team Activity</Label>
                    <p className="text-sm text-muted-foreground">Notifications about team member actions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how SurveyPro looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select defaultValue="dark">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-background" />
                    <div className="h-10 w-10 rounded-full bg-accent cursor-pointer hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background" />
                    <div className="h-10 w-10 rounded-full bg-success cursor-pointer hover:ring-2 hover:ring-success hover:ring-offset-2 hover:ring-offset-background" />
                    <div className="h-10 w-10 rounded-full bg-warning cursor-pointer hover:ring-2 hover:ring-warning hover:ring-offset-2 hover:ring-offset-background" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing throughout the interface</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage your team and permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Team Member {i}</p>
                        <p className="text-sm text-muted-foreground">member{i}@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{i === 1 ? "Admin" : "Editor"}</Badge>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Invite Team Member
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API */}
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage your API keys for integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Production API Key</Label>
                  <div className="flex gap-2">
                    <Input type="password" value="sk_live_xxxxxxxxxxxxxxxx" readOnly />
                    <Button variant="outline">Reveal</Button>
                    <Button variant="outline">Copy</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Test API Key</Label>
                  <div className="flex gap-2">
                    <Input type="password" value="sk_test_xxxxxxxxxxxxxxxx" readOnly />
                    <Button variant="outline">Reveal</Button>
                    <Button variant="outline">Copy</Button>
                  </div>
                </div>
                <Button variant="gradient" className="mt-4">
                  <Key className="h-4 w-4 mr-2" />
                  Generate New Key
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
                <CardDescription>Manage your subscription and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg border-2 border-primary/20 bg-gradient-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">Pro Plan</h3>
                      <p className="text-sm text-muted-foreground">Unlimited surveys and responses</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$49</p>
                      <p className="text-sm text-muted-foreground">/month</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">Change Plan</Button>
                  <Button variant="outline" className="flex-1 text-destructive">Cancel Subscription</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
