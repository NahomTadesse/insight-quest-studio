import { BarChart2, Calendar, Eye, MoreVertical, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";

interface SurveyCardProps {
  title: string;
  description: string;
  status: "active" | "draft" | "closed";
  responses: number;
  views: number;
  createdAt: string;
  onView: () => void;
  onEdit: () => void;
  onAnalyze: () => void;
}

const SurveyCard = ({
  title,
  description,
  status,
  responses,
  views,
  createdAt,
  onView,
  onEdit,
  onAnalyze,
}: SurveyCardProps) => {
  const statusColors = {
    active: "bg-success/10 text-success border-success/20",
    draft: "bg-warning/10 text-warning border-warning/20",
    closed: "bg-muted text-muted-foreground border-border",
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge variant="outline" className={statusColors[status]}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onView}>View Survey</DropdownMenuItem>
              <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={onAnalyze}>View Analytics</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{responses} responses</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{views} views</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{createdAt}</span>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" onClick={onView} className="flex-1">
            <Eye className="h-4 w-4" />
            View
          </Button>
          <Button variant="default" size="sm" onClick={onAnalyze} className="flex-1">
            <BarChart2 className="h-4 w-4" />
            Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveyCard;
