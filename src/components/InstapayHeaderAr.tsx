import { PoundSterling, Github, Linkedin, Link } from "lucide-react";
import { cn } from "@/lib/utils";

const InstapayHeaderAr = () => {
  return (
    <div className="flex flex-col items-center mb-6 animate-fade-in" dir="rtl">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-indigo-800">
          حاسبة إنستاباي
        </h1>
        <PoundSterling className="h-6 w-6 text-blue-500" />
      </div>
      <p className="text-sm text-gray-600 mt-1 text-center max-w-md">
        احسب رسوم التحويل لمعاملات إنستاباي في مصر
      </p>
      <div className="flex flex-col items-center mt-4 border-t pt-3 w-full border-blue-100">
        <p className="text-sm font-medium text-indigo-600">من تطوير شرلمياس</p>
        <div className="flex gap-3 mt-2">
          <a 
            href="https://github.com/sherlemious" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "p-1.5 rounded-full text-gray-500 hover:text-indigo-600",
              "transition-colors duration-200 hover:bg-indigo-50"
            )}
            aria-label="جيت هاب"
          >
            <Github className="h-4 w-4" />
          </a>
          <a 
            href="https://linkedin.com/in/sherlemious" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "p-1.5 rounded-full text-gray-500 hover:text-indigo-600",
              "transition-colors duration-200 hover:bg-indigo-50"
            )}
            aria-label="لينكد إن"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href="https://sherlemious.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "p-1.5 rounded-full text-gray-500 hover:text-indigo-600",
              "transition-colors duration-200 hover:bg-indigo-50"
            )}
            aria-label="الموقع الشخصي"
          >
            <Link className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstapayHeaderAr;
