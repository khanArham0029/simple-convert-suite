
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  fromFormat: string;
  toFormat: string;
  onClick: () => void;
  className?: string;
}

export function ConversionCard({
  title,
  description,
  icon,
  fromFormat,
  toFormat,
  onClick,
  className,
}: ConversionCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50 cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="p-6 pb-3">
        <div className="flex justify-between items-start">
          <div className="bg-muted rounded-full p-3 mb-3">
            {icon}
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex items-center mt-4">
          <div className="bg-muted px-3 py-1.5 rounded font-medium text-sm">
            {fromFormat}
          </div>
          <ArrowRight className="mx-2 h-4 w-4 text-muted-foreground" />
          <div className="bg-primary/10 text-primary px-3 py-1.5 rounded font-medium text-sm">
            {toFormat}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
