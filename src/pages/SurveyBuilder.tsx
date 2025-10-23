import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlignLeft,
  CheckSquare,
  ChevronDown,
  GripVertical,
  ListChecks,
  Plus,
  Save,
  Trash2,
  Type,
  Star,
  Copy,
  GitBranch,
  Eye,
} from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: string;
  type: string;
  title: string;
  description: string;
  required: boolean;
  options?: string[];
}

const SurveyBuilder = () => {
  const navigate = useNavigate();
  const [surveyTitle, setSurveyTitle] = useState("Untitled Survey");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      type: "multiple-choice",
      title: "How satisfied are you with our service?",
      description: "",
      required: true,
      options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
    },
  ]);

  const questionTypes = [
    { value: "multiple-choice", label: "Multiple Choice", icon: CheckSquare },
    { value: "text", label: "Text Answer", icon: Type },
    { value: "paragraph", label: "Paragraph", icon: AlignLeft },
    { value: "dropdown", label: "Dropdown", icon: ChevronDown },
    { value: "rating", label: "Rating Scale", icon: Star },
    { value: "checkbox", label: "Checkboxes", icon: ListChecks },
  ];

  const addQuestion = (type: string) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type,
      title: "Untitled Question",
      description: "",
      required: false,
      options: type === "multiple-choice" || type === "dropdown" || type === "checkbox"
        ? ["Option 1", "Option 2"]
        : undefined,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, ...updates } : q)));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSave = () => {
    toast.success("Survey saved successfully!");
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <Layout>
      <div className="p-8 max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Input
              value={surveyTitle}
              onChange={(e) => setSurveyTitle(e.target.value)}
              className="text-3xl font-bold border-none px-0 focus-visible:ring-0 bg-gradient-primary bg-clip-text"
              placeholder="Survey Title"
            />
            <Textarea
              value={surveyDescription}
              onChange={(e) => setSurveyDescription(e.target.value)}
              className="mt-2 border-none px-0 resize-none focus-visible:ring-0"
              placeholder="Add a description for your survey..."
              rows={2}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="lg">
              <Eye className="h-5 w-5" />
              Preview
            </Button>
            <Button onClick={handleSave} variant="gradient" size="lg">
              <Save className="h-5 w-5" />
              Save Survey
            </Button>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {questions.map((question, index) => (
            <Card key={question.id} className="group hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary/30 hover:border-l-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-2">
                      <Input
                        value={question.title}
                        onChange={(e) => updateQuestion(question.id, { title: e.target.value })}
                        className="font-medium"
                        placeholder="Question title"
                      />
                      <Input
                        value={question.description}
                        onChange={(e) => updateQuestion(question.id, { description: e.target.value })}
                        className="text-sm"
                        placeholder="Description (optional)"
                      />
                    </div>
                    <Select
                      value={question.type}
                      onValueChange={(value) => updateQuestion(question.id, { type: value })}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {questionTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                {type.label}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Options for multiple choice questions */}
                  {question.options && (
                    <div className="space-y-2 ml-8">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                          <Input
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...question.options!];
                              newOptions[optIndex] = e.target.value;
                              updateQuestion(question.id, { options: newOptions });
                            }}
                            className="flex-1"
                            placeholder={`Option ${optIndex + 1}`}
                          />
                        </div>
                      ))}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const newOptions = [...question.options!, `Option ${question.options!.length + 1}`];
                          updateQuestion(question.id, { options: newOptions });
                        }}
                        className="ml-6"
                      >
                        <Plus className="h-4 w-4" />
                        Add Option
                      </Button>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteQuestion(question.id)}
                  className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Add Question */}
        <Card className="border-dashed">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {questionTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Button
                    key={type.value}
                    variant="outline"
                    onClick={() => addQuestion(type.value)}
                    className="h-auto py-4 flex-col gap-2"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm">{type.label}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SurveyBuilder;
