
import React from "react";
import { ConversionPlaceholder } from "@/components/conversion-tools/conversion-placeholder";

const ImageToText = () => {
  return (
    <ConversionPlaceholder
      title="Image to Text Converter (OCR)"
      description="Extract text from your images using OCR technology"
      fromFormat="Image"
      toFormat="Text"
      acceptedFileTypes=".jpg,.jpeg,.png,.gif,.bmp,image/jpeg,image/png,image/gif,image/bmp"
      features={[
        "Powered by advanced OCR technology",
        "Supports multiple image formats",
        "Extracts text from scanned documents",
        "Preserves text formatting where possible",
        "Works with both printed and handwritten text"
      ]}
    />
  );
};

export default ImageToText;
