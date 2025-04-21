
import React from "react";
import { ConversionPlaceholder } from "@/components/conversion-tools/conversion-placeholder";

const TextSummarizer = () => {
  return (
    <ConversionPlaceholder
      title="Text Summarizer"
      description="Summarize lengthy text into concise points using AI"
      fromFormat="Text"
      toFormat="Summary"
      acceptedFileTypes=".txt,.doc,.docx,.pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
      features={[
        "Powered by OpenAI technology",
        "Extracts key points and main ideas",
        "Supports multiple document formats",
        "Adjustable summary length",
        "Maintains context and critical information"
      ]}
    />
  );
};

export default TextSummarizer;
