
import React from "react";
import { ConversionPlaceholder } from "@/components/conversion-tools/conversion-placeholder";

const Mp3ToWav = () => {
  return (
    <ConversionPlaceholder
      title="MP3 to WAV Converter"
      description="Convert your MP3 audio files to WAV format"
      fromFormat="MP3"
      toFormat="WAV"
      acceptedFileTypes=".mp3,audio/mpeg"
      features={[
        "Preserves audio quality",
        "Fast and accurate conversion",
        "Supports various MP3 bitrates",
        "No audio quality loss during conversion",
        "Secure and private processing"
      ]}
    />
  );
};

export default Mp3ToWav;
