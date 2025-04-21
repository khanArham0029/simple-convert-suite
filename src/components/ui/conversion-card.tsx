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
  className
}: ConversionCardProps) {
  return <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50 cursor-pointer group", "h-full flex flex-col",
  // Make cards equal height and flex column
  className)} onClick={onClick}>
      <CardHeader className="p-4 sm:p-6 pb-3 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <div className="rounded-full p-2 sm:p-3 mb-2 sm:mb-3 bg-purple-300">
            {icon}
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
        <CardTitle className="text-lg sm:text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2 sm:line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="flex items-center flex-wrap gap-2 mt-2 sm:mt-4">
          <div className="px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-medium bg-orange-300">
            {fromFormat}
          </div>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
          <div className="bg-primary/10 text-primary px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-medium">
            {toFormat}
          </div>
        </div>
      </CardContent>
    </Card>;
}