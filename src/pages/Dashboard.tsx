import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SurveyCard from "@/components/SurveyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, FileText, Search, TrendingUp, Users } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const surveys = [
    {
      id: "1",
      title: "Customer Satisfaction Survey 2025",
      description: "Quarterly customer feedback and satisfaction metrics",
      status: "active" as const,
      responses: 284,
      views: 1240,
      createdAt: "Jan 15, 2025",
    },
    {
      id: "2",
      title: "Employee Engagement Survey",
      description: "Annual workplace culture and engagement assessment",
      status: "active" as const,
      responses: 156,
      views: 892,
      createdAt: "Jan 10, 2025",
    },
    {
      id: "3",
      title: "Product Feature Feedback",
      description: "User feedback on new product features and improvements",
      status: "draft" as const,
      responses: 0,
      views: 24,
      createdAt: "Jan 20, 2025",
    },
    {
      id: "4",
      title: "Market Research - Q4 2024",
      description: "Industry trends and market positioning analysis",
      status: "closed" as const,
      responses: 512,
      views: 2180,
      createdAt: "Dec 1, 2024",
    },
  ];

  const stats = [
    {
      title: "Total Surveys",
      value: "24",
      change: "+3 this month",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "Total Responses",
      value: "8,432",
      change: "+12% from last month",
      icon: Users,
      color: "text-secondary",
    },
    {
      title: "Active Surveys",
      value: "12",
      change: "6 closing soon",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      title: "Avg Response Rate",
      value: "68%",
      change: "+5% improvement",
      icon: BarChart2,
      color: "text-chart-4",
    },
  ];

  const filteredSurveys = surveys.filter(
    (survey) =>
      survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      survey.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Welcome back! Here's an overview of your surveys and analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-slide-up border-t-2 border-t-primary/30">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Surveys Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">Recent Surveys</h2>
            <Button onClick={() => navigate("/builder")} variant="gradient" className="shadow-glow">
              Create New Survey
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search surveys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Survey Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSurveys.map((survey) => (
            <SurveyCard
              key={survey.id}
              {...survey}
              onView={() => navigate(`/surveys?view=${survey.id}`)}
              onEdit={() => navigate(`/builder/${survey.id}`)}
              onAnalyze={() => navigate(`/analytics/${survey.id}`)}
            />
          ))}
          </div>

          {filteredSurveys.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No surveys found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
