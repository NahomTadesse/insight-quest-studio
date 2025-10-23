import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, FolderOpen, Copy, Archive } from "lucide-react";
import SurveyCard from "@/components/SurveyCard";

const mockSurveys = [
  {
    id: "1",
    title: "Customer Satisfaction Q1 2024",
    description: "Quarterly customer satisfaction survey",
    status: "active" as const,
    responses: 342,
    views: 1205,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Employee Engagement Survey",
    description: "Annual employee feedback",
    status: "active" as const,
    responses: 89,
    views: 150,
    createdAt: "2024-02-01",
  },
  {
    id: "3",
    title: "Product Feature Feedback",
    description: "Gathering input on new features",
    status: "draft" as const,
    responses: 0,
    views: 0,
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    title: "Market Research - Q4 2023",
    description: "Completed market analysis",
    status: "closed" as const,
    responses: 500,
    views: 2000,
    createdAt: "2023-10-01",
  },
];

const Surveys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredSurveys = mockSurveys.filter((survey) => {
    const matchesSearch =
      survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      survey.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && survey.status === activeTab;
  });

  return (
    <Layout>
      <div className="p-8 max-w-7xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              My Surveys
            </h1>
            <p className="text-muted-foreground mt-2">
              Create, manage, and analyze your surveys
            </p>
          </div>
          <Link to="/builder">
            <Button variant="gradient" size="lg">
              <Plus className="h-5 w-5" />
              Create Survey
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search surveys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <FolderOpen className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Archive className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Surveys</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {filteredSurveys.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSurveys.map((survey) => (
                  <SurveyCard
                    key={survey.id}
                    {...survey}
                    onView={() => window.open(`/builder/${survey.id}`, '_self')}
                    onEdit={() => window.open(`/builder/${survey.id}`, '_self')}
                    onAnalyze={() => window.open(`/analytics/${survey.id}`, '_self')}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">No surveys found</p>
                <Button variant="link" className="mt-2">
                  <Plus className="h-4 w-4" />
                  Create your first survey
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Surveys;
