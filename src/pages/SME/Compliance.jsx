import { Shield, AlertTriangle, CheckCircle2, Upload, Download, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function Compliance(){


    const documents = [
        {
            type: "B-BBEE Certificate",
            status: "valid",
            expiryDate: "2026-03-15",
            daysToExpiry: 145,
            requirement: "B-BBEE Level 1-4",
        },
        {
            type: "Tax Clearance",
            status: "expiring",
            expiryDate: "2025-11-20",
            daysToExpiry: 30,
            requirement: "Valid tax clearance",
        },
        {
            type: "FICA/KYC Documents",
            status: "valid",
            expiryDate: "2027-01-10",
            daysToExpiry: 445,
            requirement: "Company verification",
        },
        {
            type: "Bank Account Verification",
            status: "valid",
            expiryDate: "N/A",
            daysToExpiry: null,
            requirement: "Bank details on file",
        },
        {
            type: "Insurance Certificate",
            status: "expired",
            expiryDate: "2025-09-30",
            daysToExpiry: -21,
            requirement: "Public liability cover",
        },
    ]
    const expiringDocs = documents.filter((d) => d.status === "expiring").length;
    const validDocs = documents.filter((d) => d.status === "valid").length;
    const expiredDocs = documents.filter((d) => d.status === "expired").length;

    const esdScorecard = [
        { category: "Total Procurement Spend", weight: 20, score: 18.5, target: 20 },
        { category: "Ownership", weight: 25, score: 23.2, target: 25 },
        { category: "Management Control", weight: 15, score: 12.8, target: 15 },
        { category: "Skills Development", weight: 20, score: 16.4, target: 20 },
        { category: "Enterprise Development", weight: 15, score: 14.1, target: 15 },
        { category: "Socio-Economic Development", weight: 5, score: 4.5, target: 5 },
    ]

    const totalScore = esdScorecard.reduce((sum, item) => sum + item.score, 0);
    const totalTarget = esdScorecard.reduce((sum, item) => sum + item.target, 0);
    const scorePercentage = (totalScore / totalTarget) * 100;


    const getStatusColor = (status) => {
        if (status === "valid") return "text-success-color";
        if (status === "expiring") return "text-warning-color";
        return "text-danger-color";
    }


    const getStatusBadge = (status) => {
        if (status === "valid") return <Badge className="bg-green-100 text-green-800">Valid</Badge>;
        if (status === "expiring") return <Badge className="bg-yellow-100 text-yellow-800">Expiring Soon</Badge>;
        return <Badge className="bg-red-100 text-red-800">Expired</Badge>;
    }

    return(
         <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">B-BBEE & Compliance</h1>
        <p className="text-muted-foreground">
          Track your B-BBEE score, manage compliance documents, and optimize your ESD contribution
        </p>
      </div>

      {/* Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl mb-1">Level 2</div>
            <p className="text-sm text-muted-foreground">B-BBEE Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl tabular-nums mb-1 text-success-color">{validDocs}</div>
            <p className="text-sm text-muted-foreground">Valid Documents</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl tabular-nums mb-1 text-warning-color">{expiringDocs}</div>
            <p className="text-sm text-muted-foreground">Expiring Soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl tabular-nums mb-1 text-danger-color">{expiredDocs}</div>
            <p className="text-sm text-muted-foreground">Expired</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="scorecard">
        <TabsList>
          <TabsTrigger value="scorecard">B-BBEE Scorecard</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>B-BBEE Scorecard</CardTitle>
                  <CardDescription>Your current B-BBEE performance across all elements</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl tabular-nums mb-1">{totalScore.toFixed(1)}</div>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {esdScorecard.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>{item.category}</span>
                      <span className="text-sm tabular-nums">
                        {item.score.toFixed(1)} / {item.target}
                      </span>
                    </div>
                    <Progress value={(item.score / item.target) * 100} className="h-2" />
                  </div>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span>Overall Score</span>
                    <span className="text-lg tabular-nums">
                      {totalScore.toFixed(1)} / {totalTarget}
                    </span>
                  </div>
                  <Progress value={scorePercentage} className="h-3" />
                  <div className="flex items-center gap-2 mt-3">
                    <TrendingUp className="h-4 w-4 text-success-color" />
                    <span className="text-sm text-success-color">
                      You're on track for Level 2 B-BBEE rating
                    </span>
                  </div>
                </div>

                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Detailed Scorecard
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Documents</CardTitle>
              <CardDescription>
                Manage and track all required compliance documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Requirement</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc, i) => (
                    <TableRow key={i}>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {doc.requirement}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div>{doc.expiryDate}</div>
                          {doc.daysToExpiry !== null && (
                            <div className={`text-xs ${getStatusColor(doc.status)}`}>
                              {doc.daysToExpiry > 0
                                ? `${doc.daysToExpiry} days remaining`
                                : `Expired ${Math.abs(doc.daysToExpiry)} days ago`}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(doc.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                          {doc.status !== "valid" && (
                            <Button size="sm">
                              <Upload className="h-3 w-3 mr-1" />
                              Upload
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {(expiringDocs > 0 || expiredDocs > 0) && (
                <div className="mt-4 p-4 bg-warning-color/10 border border-warning-color/20 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning-color mt-0.5" />
                  <div className="flex-1">
                    <p className="mb-1">Action Required</p>
                    <p className="text-sm text-muted-foreground">
                      You have {expiringDocs + expiredDocs} document(s) that need attention.
                      Please update expired documents to maintain compliance.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

       
      </Tabs>
    </div>
  );
    
}