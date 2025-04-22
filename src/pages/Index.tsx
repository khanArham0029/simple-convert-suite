import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/main-layout";
import { FileUp, ArrowRight } from "lucide-react";
import { ConversionCard } from "@/components/ui/conversion-card";
import FileConversionAnimation from "@/components/ui/FileConversionAnimation";

const Index = () => {
  const popularTools = [
    {
      title: "PDF to Word",
      description: "Convert PDF documents to editable Word files",
      icon: <FileUp className="h-6 w-6 text-primary" />,
      fromFormat: "PDF",
      toFormat: "DOCX",
      path: "/tools/pdf-to-word"
    },
    {
      title: "Image to Text",
      description: "Extract text content from your images using OCR",
      icon: <FileUp className="h-6 w-6 text-primary" />,
      fromFormat: "IMAGE",
      toFormat: "TEXT",
      path: "/tools/image-to-text"
    },
    {
      title: "MP3 to WAV",
      description: "Convert MP3 audio files to WAV format",
      icon: <FileUp className="h-6 w-6 text-primary" />,
      fromFormat: "MP3",
      toFormat: "WAV",
      path: "/tools/mp3-to-wav"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        {/* Animated background */}
        <FileConversionAnimation />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Convert Any File, <span className="text-primary">Simplified</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transform your files between formats with just a few clicks.
                No technical knowledge required.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/tools">
                <Button className="px-8">Get Started</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Popular Conversion Tools
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our most used tools to help you convert between different formats.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {popularTools.map((tool) => (
              <Link to={tool.path} key={tool.title}>
                <ConversionCard
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  fromFormat={tool.fromFormat}
                  toFormat={tool.toFormat}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Link to="/tools">
              <Button variant="outline" className="group">
                View All Tools
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Convertify
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Simple, fast, and secure file conversion for everyone.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <FileUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Easy to Use</h3>
              <p className="text-muted-foreground">
                No technical knowledge required. Just upload your file and download the converted version.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <FileUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Conversion</h3>
              <p className="text-muted-foreground">
                Our powerful servers process your files quickly, saving you time and effort.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <FileUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your files are encrypted during transfer and automatically deleted after processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start Converting Today
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of users who trust Convertify for their file conversion needs.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/tools">
                <Button className="px-8">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
