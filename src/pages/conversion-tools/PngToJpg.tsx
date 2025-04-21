
import React from "react";
import { ConversionPlaceholder } from "@/components/conversion-tools/conversion-placeholder";

const PngToJpg = () => {
  return (
    <ConversionPlaceholder
      title="PNG to JPG Converter"
      description="Convert your PNG images to JPG format"
      fromFormat="PNG"
      toFormat="JPG"
      acceptedFileTypes=".png,image/png"
      features={[
        "High-quality image conversion",
        "Maintains image resolution",
        "Adjustable compression options",
        "Preserves image metadata when possible",
        "Batch processing capability"
      ]}
    />
  );
};

export default PngToJpg;
