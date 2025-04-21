
import React from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { ConversionCard } from "@/components/ui/conversion-card";
import { FileUp, FileDown, Music, Image, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Tools = () => {
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
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conversion Tools</h1>
              <p className="text-muted-foreground md:text-xl">
                Simple and powerful file conversion tools to help you convert between different formats.
              </p>
            </div>
          </div>
          
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
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
    </MainLayout>
  );
};

export default Tools;
