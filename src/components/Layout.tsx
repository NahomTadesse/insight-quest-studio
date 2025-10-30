import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, FileText, Home, Plus, Settings, Brain, LayoutTemplate } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: FileText, label: "Surveys", path: "/surveys" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Brain, label: "Advanced Analytics", path: "/advanced-analytics" },
    { icon: LayoutTemplate, label: "Templates", path: "/templates" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card shadow-elegant">
        <Link to="/" className="flex h-16 items-center gap-2 border-b border-border px-6 bg-gradient-primary/5 hover:bg-gradient-primary/10 transition-colors cursor-pointer">
          <BarChart3 className="h-6 w-6 text-primary drop-shadow-glow" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">SurveyPro</span>
        </Link>
        
        <nav className="space-y-1 p-4">
          <Link to="/builder">
            <Button variant="gradient" size="lg" className="w-full mb-4 shadow-glow">
              <Plus className="h-5 w-5" />
              New Survey
            </Button>
          </Link>
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start transition-all duration-200",
                    isActive && "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
