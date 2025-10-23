import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, CheckCircle2, Eye, FileText, Share2, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: "Easy Survey Builder",
      description: "Drag-and-drop interface with multiple question types and logic branching.",
    },
    {
      icon: Share2,
      title: "Multiple Distribution Channels",
      description: "Share via links, email, QR codes, or embed on your website.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Interactive dashboards with charts, graphs, and data visualizations.",
    },
    {
      icon: Eye,
      title: "Response Management",
      description: "Track, filter, and export responses with advanced segmentation.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "AI-powered sentiment analysis and trend detection.",
    },
    {
      icon: Zap,
      title: "Team Collaboration",
      description: "Multi-user workspaces with role-based access and version control.",
    },
  ];

  const benefits = [
    "Unlimited surveys and responses",
    "Advanced branching logic",
    "Custom branding and themes",
    "Export to CSV, Excel, or PDF",
    "API and webhook integrations",
    "Priority support",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold">SurveyPro</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="gradient" onClick={() => navigate("/builder")}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <div>
              <h1 className="text-6xl font-bold mb-4 leading-tight">
                Create Surveys.
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Unlock Insights.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Design beautiful surveys, collect responses effortlessly, and visualize insights with powerful analytics dashboards.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button size="xl" variant="gradient" onClick={() => navigate("/builder")}>
                Create Your First Survey
              </Button>
              <Button size="xl" variant="outline" onClick={() => navigate("/dashboard")}>
                View Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted-foreground">Surveys Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">2M+</div>
                <div className="text-muted-foreground">Responses Collected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroImage}
              alt="Survey and Analytics Platform"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create, distribute, and analyze surveys with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="gradient-primary rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Built for Professionals</h2>
              <p className="text-lg opacity-90 mb-8">
                Everything you need to run sophisticated survey campaigns and extract meaningful insights from your data.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
            </div>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of organizations using SurveyPro to gather insights and make data-driven decisions.
        </p>
        <Button size="xl" variant="gradient" onClick={() => navigate("/builder")}>
          Create Your First Survey - It's Free
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SurveyPro</span>
            </div>
            <p className="text-muted-foreground">© 2025 SurveyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
