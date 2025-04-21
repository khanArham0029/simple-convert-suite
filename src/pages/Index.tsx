
import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { ConversionCard } from "@/components/ui/conversion-card";
import { FileUp, FileDown, Music, Image, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const conversionTools = [
    {
      title: "PDF to Word",
      description: "Convert your PDF documents to editable Word files",
      icon: <FileUp className="h-6 w-6 text-primary" />,
      fromFormat: "PDF",
      toFormat: "DOCX",
      path: "/tools/pdf-to-word"
    },
    {
      title: "MP3 to WAV",
      description: "Convert your MP3 audio files to WAV format",
      icon: <Music className="h-6 w-6 text-primary" />,
      fromFormat: "MP3",
      toFormat: "WAV",
      path: "/tools/mp3-to-wav"
    },
    {
      title: "Image to Text",
      description: "Extract text content from your images using OCR",
      icon: <Image className="h-6 w-6 text-primary" />,
      fromFormat: "IMAGE",
      toFormat: "TEXT",
      path: "/tools/image-to-text"
    },
    {
      title: "Text Summarizer",
      description: "Summarize lengthy text into concise points",
      icon: <FileText className="h-6 w-6 text-primary" />,
      fromFormat: "TEXT",
      toFormat: "SUMMARY",
      path: "/tools/text-summarizer"
    },
    {
      title: "PNG to JPG",
      description: "Convert PNG images to JPG format",
      icon: <FileDown className="h-6 w-6 text-primary" />,
      fromFormat: "PNG",
      toFormat: "JPG",
      path: "/tools/png-to-jpg"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                5 free conversions daily
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Convert Your Files <span className="text-primary">Effortlessly</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Simple, secure, and fast file conversion tools for all your needs. No software installation required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/tools">
                  <Button size="lg" className="text-base">
                    Start Converting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="text-base">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mr-0 flex items-center justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl relative bg-white p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 opacity-50" />
                <div className="grid grid-cols-2 gap-2 relative z-10">
                  <div className="bg-muted rounded-lg p-4 flex flex-col items-start">
                    <div className="rounded-full bg-primary/10 p-2 mb-2">
                      <FileUp className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium">PDF</h3>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-start">
                    <div className="rounded-full bg-primary/10 p-2 mb-2">
                      <FileDown className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium">DOCX</h3>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-start">
                    <div className="rounded-full bg-accent/10 p-2 mb-2">
                      <Image className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-medium">PNG</h3>
                  </div>
                  <div className="bg-muted rounded-lg p-4 flex flex-col items-start">
                    <div className="rounded-full bg-accent/10 p-2 mb-2">
                      <FileDown className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-medium">JPG</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Powerful Tools
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conversion Tools</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our range of powerful file conversion tools
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {conversionTools.map((tool) => (
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Simple Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Convert your files in three simple steps
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <FileUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Upload</h3>
              <p className="text-muted-foreground">Upload the file you want to convert</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Convert</h3>
              <p className="text-muted-foreground">Our servers process your file quickly</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <FileDown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Download</h3>
              <p className="text-muted-foreground">Download your converted file instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Converting?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for free and get 5 daily conversions, no credit card required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/signup">
                <Button size="lg" className="text-base">
                  Sign Up For Free
                </Button>
              </Link>
              <Link to="/tools">
                <Button variant="outline" size="lg" className="text-base">
                  Explore Tools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
