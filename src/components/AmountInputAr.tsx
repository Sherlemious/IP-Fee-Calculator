import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";

interface AmountInputArProps {
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

const AmountInputAr = ({ value, onChange, isValid }: AmountInputArProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <div className="w-full max-w-md mb-6" dir="rtl">
      <div className="flex items-baseline justify-between mb-2">
        <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
          مبلغ التحويل (جنيه مصري)
        </Label>
        {!isValid && value !== "" && (
          <span className="text-xs font-medium text-destructive">
            الحد الأقصى: 70,000 جنيه مصري
          </span>
        )}
      </div>
      <div className="relative">
        <Input
          id="amount"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={handleChange}
          placeholder="أدخل المبلغ"
          className={`pl-12 text-lg text-right ${
            !isValid && value !== "" ? "border-destructive focus:ring-destructive" : 
            isFocused ? "border-blue-500 ring-blue-300/20" : ""
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          dir="rtl"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500">ج.م</span>
        </div>
      </div>
    </div>
  );
};

export default AmountInputAr;
