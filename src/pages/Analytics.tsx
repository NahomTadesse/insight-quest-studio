import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowDown, ArrowUp, Download, TrendingUp, Users } from "lucide-react";

const Analytics = () => {
  // Mock data
  const responseData = [
    { date: "Jan 15", responses: 24 },
    { date: "Jan 16", responses: 38 },
    { date: "Jan 17", responses: 42 },
    { date: "Jan 18", responses: 35 },
    { date: "Jan 19", responses: 48 },
    { date: "Jan 20", responses: 52 },
    { date: "Jan 21", responses: 45 },
  ];

  const satisfactionData = [
    { name: "Very Satisfied", value: 142, color: "hsl(var(--chart-3))" },
    { name: "Satisfied", value: 98, color: "hsl(var(--chart-1))" },
    { name: "Neutral", value: 28, color: "hsl(var(--chart-4))" },
    { name: "Dissatisfied", value: 12, color: "hsl(var(--chart-5))" },
    { name: "Very Dissatisfied", value: 4, color: "hsl(var(--destructive))" },
  ];

  const demographicsData = [
    { age: "18-24", responses: 45 },
    { age: "25-34", responses: 98 },
    { age: "35-44", responses: 76 },
    { age: "45-54", responses: 42 },
    { age: "55+", responses: 23 },
  ];

  const completionRate = 68;
  const avgTimeToComplete = "3m 42s";
  const totalResponses = 284;
  const responseRate = 72;

  return (
    <Layout>
      <div className="p-8 space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Customer Satisfaction Survey 2025
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="7days">
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
            <Button variant="outline">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Responses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{totalResponses}</div>
                <Badge className="bg-success/10 text-success border-success/20">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  12%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">+32 from last week</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Response Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{responseRate}%</div>
                <Badge className="bg-success/10 text-success border-success/20">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  5%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Above industry avg</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{completionRate}%</div>
                <Badge className="bg-warning/10 text-warning border-warning/20">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  2%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">193 completed</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{avgTimeToComplete}</div>
              <p className="text-xs text-muted-foreground mt-1">To complete survey</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Response Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Response Trend</CardTitle>
              <CardDescription>Daily response submissions over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={responseData}>
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
                  <Line
                    type="monotone"
                    dataKey="responses"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Satisfaction Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Satisfaction Distribution</CardTitle>
              <CardDescription>Overall customer satisfaction levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Demographics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Demographics Breakdown</CardTitle>
              <CardDescription>Responses by age group</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={demographicsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="age" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="responses" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>Key Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-success mt-2" />
              <div>
                <p className="font-medium">Strong Positive Sentiment</p>
                <p className="text-sm text-muted-foreground">
                  85% of respondents rated their satisfaction as "Satisfied" or "Very Satisfied", indicating strong overall sentiment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-chart-2 mt-2" />
              <div>
                <p className="font-medium">Peak Response Times</p>
                <p className="text-sm text-muted-foreground">
                  Most responses are submitted between 2-4 PM, suggesting optimal timing for survey distribution.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-warning mt-2" />
              <div>
                <p className="font-medium">Completion Rate Opportunity</p>
                <p className="text-sm text-muted-foreground">
                  32% of users drop off at question 5. Consider simplifying or reducing the number of questions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
