import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area, FunnelChart, Funnel, LabelList
} from "recharts";
import { 
  Download, TrendingUp, Brain, Filter, Users, Clock,
  Target, Zap, ArrowUpRight, FileSpreadsheet, FileText,
  Presentation
} from "lucide-react";
import { toast } from "sonner";

const AdvancedAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30days");
  const [comparisonSurvey, setComparisonSurvey] = useState("none");

  // Word Cloud data (simulated - would use react-wordcloud in production)
  const topWords = [
    { word: "excellent", count: 145, sentiment: "positive" },
    { word: "quick", count: 98, sentiment: "positive" },
    { word: "helpful", count: 87, sentiment: "positive" },
    { word: "confusing", count: 34, sentiment: "negative" },
    { word: "slow", count: 28, sentiment: "negative" },
    { word: "easy", count: 156, sentiment: "positive" },
    { word: "professional", count: 112, sentiment: "positive" },
    { word: "expensive", count: 45, sentiment: "negative" },
  ];

  // Sentiment analysis over time
  const sentimentTrend = [
    { date: "Week 1", positive: 78, neutral: 15, negative: 7 },
    { date: "Week 2", positive: 82, neutral: 12, negative: 6 },
    { date: "Week 3", positive: 75, neutral: 18, negative: 7 },
    { date: "Week 4", positive: 85, neutral: 10, negative: 5 },
  ];

  // Funnel analysis
  const funnelData = [
    { stage: "Started", value: 450, percentage: 100 },
    { stage: "Q1-3 Completed", value: 385, percentage: 86 },
    { stage: "Q4-6 Completed", value: 340, percentage: 76 },
    { stage: "Q7-9 Completed", value: 298, percentage: 66 },
    { stage: "Finished", value: 284, percentage: 63 },
  ];

  // Cross-tabulation data
  const crossTabData = [
    { demographic: "18-24", satisfied: 42, neutral: 8, dissatisfied: 5 },
    { demographic: "25-34", satisfied: 89, neutral: 12, dissatisfied: 7 },
    { demographic: "35-44", satisfied: 68, neutral: 10, dissatisfied: 8 },
    { demographic: "45-54", satisfied: 38, neutral: 6, dissatisfied: 4 },
    { demographic: "55+", satisfied: 21, neutral: 4, dissatisfied: 2 },
  ];

  // NPS radar chart
  const npsMetrics = [
    { metric: "Product Quality", score: 85 },
    { metric: "Customer Service", score: 92 },
    { metric: "Value for Money", score: 78 },
    { metric: "Ease of Use", score: 88 },
    { metric: "Support", score: 82 },
    { metric: "Features", score: 80 },
  ];

  // Response time distribution
  const responseTimeData = [
    { time: "<1 min", responses: 45 },
    { time: "1-2 min", responses: 98 },
    { time: "2-3 min", responses: 142 },
    { time: "3-5 min", responses: 87 },
    { time: ">5 min", responses: 34 },
  ];

  const handleExport = (format: string) => {
    toast.success(`Exporting report as ${format.toUpperCase()}...`);
  };

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Advanced Analytics
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Deep insights and business intelligence from your survey data
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="all">All time</SelectItem>
              </SelectContent>
            </Select>
            <Select value={comparisonSurvey} onValueChange={setComparisonSurvey}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Compare with..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No comparison</SelectItem>
                <SelectItem value="survey1">Previous Survey</SelectItem>
                <SelectItem value="survey2">Q4 2024 Survey</SelectItem>
                <SelectItem value="survey3">Industry Benchmark</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Export Options */}
        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Export Comprehensive Report</h3>
                  <p className="text-sm text-muted-foreground">
                    Download detailed analytics in multiple formats
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => handleExport("pdf")}>
                  <FileText className="h-4 w-4" />
                  PDF
                </Button>
                <Button variant="outline" onClick={() => handleExport("excel")}>
                  <FileSpreadsheet className="h-4 w-4" />
                  Excel
                </Button>
                <Button variant="outline" onClick={() => handleExport("pptx")}>
                  <Presentation className="h-4 w-4" />
                  PowerPoint
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="sentiment" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto">
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="funnel">Funnel</TabsTrigger>
            <TabsTrigger value="crosstab">Cross-Tab</TabsTrigger>
            <TabsTrigger value="nps">NPS Analysis</TabsTrigger>
            <TabsTrigger value="timing">Response Time</TabsTrigger>
          </TabsList>

          {/* Sentiment Analysis */}
          <TabsContent value="sentiment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <CardTitle>Sentiment Trend</CardTitle>
                  </div>
                  <CardDescription>AI-powered sentiment analysis over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={sentimentTrend}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.5rem",
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="positive"
                        stackId="1"
                        stroke="hsl(var(--success))"
                        fill="hsl(var(--success))"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="neutral"
                        stackId="1"
                        stroke="hsl(var(--chart-4))"
                        fill="hsl(var(--chart-4))"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="negative"
                        stackId="1"
                        stroke="hsl(var(--destructive))"
                        fill="hsl(var(--destructive))"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Keywords</CardTitle>
                  <CardDescription>Most frequently mentioned words in responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center py-8">
                    {topWords.map((word, index) => (
                      <Badge
                        key={word.word}
                        variant={word.sentiment === "positive" ? "default" : "destructive"}
                        className="text-lg py-2 px-4"
                        style={{
                          fontSize: `${Math.min(0.8 + word.count / 100, 2)}rem`,
                          opacity: 0.6 + (word.count / 300),
                        }}
                      >
                        {word.word} ({word.count})
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Funnel Analysis */}
          <TabsContent value="funnel" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle>Completion Funnel</CardTitle>
                </div>
                <CardDescription>Drop-off rates at each stage of the survey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {funnelData.map((stage, index) => (
                    <div key={stage.stage} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{stage.stage}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">{stage.value}</span>
                          <Badge variant="outline">{stage.percentage}%</Badge>
                        </div>
                      </div>
                      <div className="h-8 bg-muted rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary transition-all duration-500"
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                      {index < funnelData.length - 1 && (
                        <p className="text-sm text-muted-foreground">
                          Drop-off: {funnelData[index].value - funnelData[index + 1].value} respondents (
                          {Math.round(
                            ((funnelData[index].value - funnelData[index + 1].value) /
                              funnelData[index].value) *
                              100
                          )}
                          %)
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cross-Tabulation */}
          <TabsContent value="crosstab" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  <CardTitle>Satisfaction by Demographics</CardTitle>
                </div>
                <CardDescription>Cross-tabulation analysis of satisfaction across age groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={crossTabData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="demographic" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="satisfied" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="neutral" fill="hsl(var(--chart-4))" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="dissatisfied" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NPS Analysis */}
          <TabsContent value="nps" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>NPS Breakdown by Category</CardTitle>
                  <CardDescription>Net Promoter Score across different metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={npsMetrics}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                      <Radar
                        name="NPS Score"
                        dataKey="score"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.5}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "0.5rem",
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>NPS Score</CardTitle>
                  <CardDescription>Overall Net Promoter Score</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-8">
                    <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      72
                    </div>
                    <p className="text-muted-foreground mt-2">Net Promoter Score</p>
                    <Badge className="mt-4 bg-success/10 text-success border-success/20">
                      Excellent
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-success">Promoters (9-10)</span>
                      <span className="font-bold">58%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Passives (7-8)</span>
                      <span className="font-bold">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-destructive">Detractors (0-6)</span>
                      <span className="font-bold">14%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Response Time Analysis */}
          <TabsContent value="timing" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>Response Time Distribution</CardTitle>
                </div>
                <CardDescription>How long respondents take to complete the survey</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Bar dataKey="responses" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* AI Insights */}
        <Card className="border-l-4 border-l-primary bg-gradient-card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle>AI-Powered Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <ArrowUpRight className="h-5 w-5 text-success mt-1" />
              <div>
                <p className="font-medium">High Engagement Detected</p>
                <p className="text-sm text-muted-foreground">
                  The 25-34 age group shows 23% higher completion rates than average. Consider targeting similar demographics for future surveys.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowUpRight className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Sentiment Trend</p>
                <p className="text-sm text-muted-foreground">
                  Positive sentiment has increased 8% over the past 4 weeks, with "excellent" and "easy" being the most common positive descriptors.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowUpRight className="h-5 w-5 text-chart-2 mt-1" />
              <div>
                <p className="font-medium">Optimization Opportunity</p>
                <p className="text-sm text-muted-foreground">
                  Questions 4-6 show a 14% drop-off rate. Simplifying these questions could increase your overall completion rate to 77%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdvancedAnalytics;
