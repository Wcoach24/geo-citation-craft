
import { cn } from "@/lib/utils";

interface HighlightSnippetProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "definition" | "insight" | "stat";
}

const HighlightSnippet = ({ 
  children, 
  id, 
  className = "", 
  variant = "default" 
}: HighlightSnippetProps) => {
  const variantStyles = {
    default: "bg-accent/10 border-l-4 border-accent p-4 rounded-lg",
    definition: "bg-blue-50 border border-blue-200 p-4 rounded-lg",
    insight: "bg-green-50 border border-green-200 p-4 rounded-lg",
    stat: "bg-purple-50 border border-purple-200 p-4 rounded-lg"
  };

  return (
    <div 
      id={id}
      className={cn(
        "snippet-block", 
        variantStyles[variant], 
        className
      )}
      data-speakable="true"
    >
      {children}
    </div>
  );
};

export default HighlightSnippet;
