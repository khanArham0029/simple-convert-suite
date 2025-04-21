
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileIcon, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  acceptedFileTypes?: string;
  maxSizeMB?: number;
  className?: string;
}

export function FileUploader({
  onFileSelect,
  acceptedFileTypes = "*",
  maxSizeMB = 10,
  className,
}: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleFile = (file: File) => {
    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      return;
    }
    
    // Check file type if specified
    if (acceptedFileTypes !== "*") {
      const fileType = file.type;
      const acceptedTypes = acceptedFileTypes.split(",").map(type => type.trim());
      
      if (!acceptedTypes.some(type => fileType.includes(type) || (type.includes('*') && fileType.includes(type.replace('*', ''))))) {
        setError(`Invalid file type. Accepted types: ${acceptedFileTypes}`);
        return;
      }
    }
    
    setFile(file);
    setError(null);
    onFileSelect(file);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <div className={cn("w-full", className)}>
      {!file ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/50",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            accept={acceptedFileTypes}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <UploadCloud className="h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium">
              Drag & drop your file or <span className="text-primary underline">browse</span>
            </p>
            <p className="text-sm text-muted-foreground">
              {acceptedFileTypes !== "*" ? `Accepted formats: ${acceptedFileTypes}` : "All file types accepted"}
            </p>
            <p className="text-sm text-muted-foreground">
              Max size: {maxSizeMB}MB
            </p>
          </div>
        </div>
      ) : (
        <div className="border border-muted rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-muted rounded-md p-2">
                <FileIcon className="h-6 w-6 text-primary" />
              </div>
              <div className="overflow-hidden">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={removeFile}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="flex items-center justify-center bg-primary/10 w-8 h-8 rounded-full">
                <Check className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mt-2 text-sm text-destructive">
          {error}
        </div>
      )}
    </div>
  );
}
