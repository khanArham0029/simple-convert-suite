
import React, { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FileUploader } from "@/components/ui/file-uploader";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PdfToWord = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setConvertedFileUrl(null);
    setError(null);
  };
  
  const handleConvert = async () => {
    if (!file) return;
    
    setIsConverting(true);
    setError(null);
    
    // Simulate conversion - to be replaced with actual Supabase and backend call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, just create a dummy URL
      // In real implementation, this would be a download URL from Supabase storage
      setConvertedFileUrl("#");
      setIsConverting(false);
    } catch (error) {
      setError("An error occurred during conversion. Please try again.");
      setIsConverting(false);
    }
  };
  
  const remainingConversions = 5; // This would come from Supabase user data

  return (
    <MainLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold">PDF to Word Converter</h1>
            <p className="text-muted-foreground">
              Convert your PDF documents to editable Word files
            </p>
            <p className="text-sm text-muted-foreground bg-muted inline-block px-3 py-1 rounded-full">
              {remainingConversions} free conversions remaining today
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload your PDF file</CardTitle>
              <CardDescription>
                Maximum file size: 10MB. Only PDF files are accepted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FileUploader
                onFileSelect={handleFileSelect}
                acceptedFileTypes=".pdf,application/pdf"
                maxSizeMB={10}
              />
              
              {file && !convertedFileUrl && (
                <div className="flex justify-center">
                  <Button 
                    onClick={handleConvert} 
                    disabled={isConverting}
                    className="w-full max-w-md"
                    size="lg"
                  >
                    {isConverting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Converting...
                      </>
                    ) : (
                      <>
                        Convert to Word
                        <ArrowDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
              
              {error && (
                <Alert variant="destructive">
                  <AlertTitle>Conversion Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              {convertedFileUrl && (
                <div className="flex flex-col items-center gap-4 py-6 border rounded-lg bg-muted/50">
                  <div className="rounded-full bg-primary/10 p-4">
                    <FileDown className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-lg mb-1">Conversion Complete</h3>
                    <p className="text-muted-foreground mb-4">
                      Your file has been successfully converted
                    </p>
                    <Button>
                      Download DOCX
                      <FileDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">About PDF to Word Conversion</h2>
              <p className="text-muted-foreground">
                Our PDF to Word converter transforms your PDF documents into editable Word files, preserving the layout, formatting, and text. This makes it easy to edit and modify your content without starting from scratch.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Upload your PDF document</li>
                <li>2. Click "Convert to Word"</li>
                <li>3. Download your editable Word file</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Preserves original formatting and layout</li>
                <li>• Converts text, images, and tables</li>
                <li>• Fast and accurate conversion</li>
                <li>• Secure and private</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PdfToWord;
