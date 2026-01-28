import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechTermProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export const TechTerm = ({ term, definition, children }: TechTermProps) => {
  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <span className="text-orange-400 underline decoration-dotted decoration-orange-500/60 cursor-help hover:decoration-orange-500 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-200 px-1 rounded font-medium">
          {children || term}
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs" sideOffset={5}>
        <p className="font-semibold text-sm mb-1">{term}</p>
        <p className="text-xs text-muted-foreground">{definition}</p>
      </TooltipContent>
    </Tooltip>
  );
};
