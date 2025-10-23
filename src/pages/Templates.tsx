import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, TrendingUp, Users, Heart, Briefcase, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const templates = [
  {
    id: "1",
    title: "Customer Satisfaction Survey",
    description: "Measure customer satisfaction with your product or service",
    category: "Customer Experience",
    icon: Heart,
    questions: 12,
    popular: true,
  },
  {
    id: "2",
    title: "Employee Engagement Survey",
    description: "Assess employee satisfaction and workplace culture",
    category: "Human Resources",
    icon: Users,
    questions: 15,
    popular: true,
  },
  {
    id: "3",
    title: "Market Research Survey",
    description: "Gather insights about your target market",
    category: "Business",
    icon: TrendingUp,
    questions: 10,
    popular: false,
  },
  {
    id: "4",
    title: "Event Feedback Survey",
    description: "Collect feedback after events or conferences",
    category: "Events",
    icon: Star,
    questions: 8,
    popular: false,
  },
  {
    id: "5",
    title: "Product Feedback Survey",
    description: "Get detailed feedback on your products",
    category: "Product",
    icon: Briefcase,
    questions: 14,
    popular: true,
  },
  {
    id: "6",
    title: "Academic Survey",
    description: "Research survey template for academic studies",
    category: "Education",
    icon: GraduationCap,
    questions: 20,
    popular: false,
  },
];

const Templates = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter((template) =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUseTemplate = (templateId: string) => {
    toast.success("Template loaded! Customize it to your needs.");
    navigate(`/builder?template=${templateId}`);
  };

  return (
    <Layout>
      <div className="p-8 max-w-7xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Survey Templates
          </h1>
          <p className="text-muted-foreground mt-2">
            Start with a professional template and customize it to your needs
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <Card
                key={template.id}
                className="group hover:shadow-elegant transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {template.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {template.title}
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{template.category}</span>
                    <span className="text-muted-foreground">{template.questions} questions</span>
                  </div>
                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={() => handleUseTemplate(template.id)}
                  >
                    Use This Template
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">No templates found</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Templates;
