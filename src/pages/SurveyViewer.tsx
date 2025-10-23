import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, BarChart2, Share2, Copy, Calendar, Users, Eye } from "lucide-react";
import { toast } from "sonner";

const SurveyViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock survey data - in a real app, this would be fetched based on the ID
  const survey = {
    id: id || "1",
    title: "Customer Satisfaction Survey 2025",
    description: "Quarterly customer feedback and satisfaction metrics",
    status: "active" as const,
    responses: 284,
    views: 1240,
    createdAt: "Jan 15, 2025",
    questions: [
      {
        id: "1",
        type: "multiple-choice",
        title: "How satisfied are you with our service?",
        description: "Please rate your overall satisfaction",
        required: true,
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
      },
      {
        id: "2",
        type: "rating",
        title: "Rate our customer support",
        description: "",
        required: true,
      },
      {
        id: "3",
        type: "paragraph",
        title: "What can we improve?",
        description: "Your feedback helps us serve you better",
        required: false,
      },
    ],
  };

  const statusColors = {
    active: "bg-success/10 text-success border-success/20",
    draft: "bg-warning/10 text-warning border-warning/20",
    closed: "bg-muted text-muted-foreground border-border",
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/survey/${id}`);
    toast.success("Survey link copied to clipboard!");
  };

  return (
    <Layout>
      <div className="p-8 max-w-5xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{survey.title}</h1>
              <Badge variant="outline" className={statusColors[survey.status]}>
                {survey.status.charAt(0).toUpperCase() + survey.status.slice(1)}
              </Badge>
            </div>
            <p className="text-muted-foreground">{survey.description}</p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{survey.responses}</span>
              <span className="text-muted-foreground">responses</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{survey.views}</span>
              <span className="text-muted-foreground">views</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Created {survey.createdAt}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyLink}>
              <Copy className="h-4 w-4" />
              Copy Link
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate(`/builder/${id}`)}>
              <Edit className="h-4 w-4" />
              Edit
            </Button>
            <Button variant="default" size="sm" onClick={() => navigate(`/analytics/${id}`)}>
              <BarChart2 className="h-4 w-4" />
              Analytics
            </Button>
          </div>
        </div>

        {/* Survey Questions Preview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Survey Questions</h2>
          {survey.questions.map((question, index) => (
            <Card key={question.id}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold text-lg">{index + 1}.</span>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-medium">
                      {question.title}
                      {question.required && <span className="text-destructive ml-1">*</span>}
                    </CardTitle>
                    {question.description && (
                      <p className="text-sm text-muted-foreground mt-1">{question.description}</p>
                    )}
                    <div className="mt-3">
                      <Badge variant="secondary" className="text-xs">
                        {question.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              {question.options && (
                <CardContent>
                  <div className="space-y-2 ml-8">
                    {question.options.map((option, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-3 w-3 rounded-full border-2 border-muted-foreground" />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Response Collection Link */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Share This Survey</CardTitle>
            <p className="text-sm text-muted-foreground">
              Share this link with respondents to collect responses
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="flex-1 p-3 bg-background rounded border text-sm font-mono overflow-x-auto">
                {window.location.origin}/survey/{id}
              </div>
              <Button onClick={handleCopyLink}>
                <Copy className="h-4 w-4" />
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SurveyViewer;
