
import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileIcon, Clock, BarChart3, Settings } from "lucide-react";

const Dashboard = () => {
  // This will be fetched from Supabase once connected
  const recentConversions = [
    { id: 1, fileName: "document.pdf", fromFormat: "PDF", toFormat: "DOCX", date: "2025-04-20", status: "completed" },
    { id: 2, fileName: "presentation.png", fromFormat: "PNG", toFormat: "JPG", date: "2025-04-19", status: "completed" },
    { id: 3, fileName: "audio.mp3", fromFormat: "MP3", toFormat: "WAV", date: "2025-04-18", status: "completed" },
    { id: 4, fileName: "report.pdf", fromFormat: "PDF", toFormat: "DOCX", date: "2025-04-17", status: "failed" },
    { id: 5, fileName: "image.png", fromFormat: "PNG", toFormat: "JPG", date: "2025-04-16", status: "completed" },
  ];

  // This will be fetched from Supabase once connected
  const usageStats = {
    totalConversions: 26,
    remainingToday: 2,
    totalFileSize: "45.8 MB"
  };
  
  return (
    <MainLayout>
      <div className="container py-12">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <p className="text-muted-foreground">Manage your conversions and account</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Today's Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{usageStats.totalConversions - usageStats.remainingToday}</div>
                  <div className="text-muted-foreground text-xs">of 5 free</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {usageStats.remainingToday} conversions remaining today
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{usageStats.totalConversions}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  All time
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total File Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{usageStats.totalFileSize}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Processed
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="recent" className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="hidden md:inline">Recent</span>
              </TabsTrigger>
              <TabsTrigger value="files" className="flex items-center gap-1">
                <FileIcon className="h-4 w-4" />
                <span className="hidden md:inline">Files</span>
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden md:inline">Statistics</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                <span className="hidden md:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Conversions</CardTitle>
                  <CardDescription>
                    Your recent file conversions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 px-4 text-left font-medium">File Name</th>
                          <th className="py-3 px-4 text-left font-medium">Conversion</th>
                          <th className="py-3 px-4 text-left font-medium">Date</th>
                          <th className="py-3 px-4 text-left font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentConversions.map((conversion) => (
                          <tr key={conversion.id} className="border-b">
                            <td className="py-3 px-4">{conversion.fileName}</td>
                            <td className="py-3 px-4">
                              {conversion.fromFormat} → {conversion.toFormat}
                            </td>
                            <td className="py-3 px-4">{conversion.date}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded text-xs ${
                                conversion.status === "completed" 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-red-100 text-red-800"
                              }`}>
                                {conversion.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="files" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Files</CardTitle>
                  <CardDescription>
                    Manage your converted files
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Connect to Supabase to enable file storage and management
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Statistics</CardTitle>
                  <CardDescription>
                    View your conversion statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Connect to Supabase to view detailed usage statistics
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Connect to Supabase to manage your account settings
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
