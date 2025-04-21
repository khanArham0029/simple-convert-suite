
import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { FileUploader } from "@/components/ui/file-uploader";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ConversionPlaceholderProps {
  title: string;
  description: string;
  fromFormat: string;
  toFormat: string;
  acceptedFileTypes: string;
  features: string[];
}

export const ConversionPlaceholder = ({
  title,
  description,
  fromFormat,
  toFormat,
  acceptedFileTypes,
  features,
}: ConversionPlaceholderProps) => {
  return (
    <MainLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">
              {description}
            </p>
            <p className="text-sm text-muted-foreground bg-muted inline-block px-3 py-1 rounded-full">
              Connect to Supabase to enable file conversion
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload your {fromFormat} file</CardTitle>
              <CardDescription>
                Maximum file size: 10MB. Only {fromFormat} files are accepted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FileUploader
                onFileSelect={() => {}}
                acceptedFileTypes={acceptedFileTypes}
                maxSizeMB={10}
              />
              
              <div className="flex justify-center">
                <Button 
                  disabled
                  className="w-full max-w-md"
                  size="lg"
                >
                  Convert to {toFormat}
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <Alert>
                <AlertTitle>Supabase Integration Required</AlertTitle>
                <AlertDescription>
                  This functionality requires connecting to Supabase for authentication, file processing, and storage. Please connect your Lovable project to Supabase to enable this feature.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">About {fromFormat} to {toFormat} Conversion</h2>
              <p className="text-muted-foreground">
                Our {fromFormat} to {toFormat} converter transforms your {fromFormat} files into {toFormat} format, preserving the quality and content. This makes it easy to use your files in different applications and workflows.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">How it works</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Upload your {fromFormat} file</li>
                <li>2. Click "Convert to {toFormat}"</li>
                <li>3. Download your converted {toFormat} file</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                {features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
