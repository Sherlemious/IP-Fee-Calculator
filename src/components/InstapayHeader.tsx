
import { PoundSterling, Github, Linkedin, Link } from "lucide-react";
import { cn } from "@/lib/utils";

const InstapayHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <PoundSterling className="h-6 w-6 text-blue-500" />
        <h1 className="text-2xl font-bold text-indigo-800">
          Instapay Calculator
        </h1>
      </div>
      <p className="text-sm text-gray-600 mt-1 text-center max-w-md">
        Calculate transfer fees for Instapay transactions in Egypt
      </p>
      <div className="flex flex-col items-center mt-4 border-t pt-3 w-full border-blue-100">
        <p className="text-sm font-medium text-indigo-600">Made by Sherlemious</p>
        <div className="flex gap-3 mt-2">
          <a 
            href="https://github.com/sherlemious" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "text-gray-600 hover:text-blue-600 transition-colors",
              "flex items-center gap-1 text-xs"
            )}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/sherlemious" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "text-gray-600 hover:text-blue-600 transition-colors",
              "flex items-center gap-1 text-xs"
            )}
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://www.sherlemious.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "text-gray-600 hover:text-blue-600 transition-colors",
              "flex items-center gap-1 text-xs"
            )}
          >
            <Link className="h-4 w-4" />
            <span>Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstapayHeader;
