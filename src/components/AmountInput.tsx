
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

const AmountInput = ({ value, onChange, isValid }: AmountInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <div className="w-full max-w-md mb-6">
      <div className="flex items-baseline justify-between mb-2">
        <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Transfer Amount (EGP)
        </Label>
        {!isValid && value !== "" && (
          <span className="text-xs font-medium text-destructive">
            Maximum: 70,000 EGP
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
          placeholder="Enter amount"
          className={`pr-12 text-lg ${
            !isValid && value !== "" ? "border-destructive focus:ring-destructive" : 
            isFocused ? "border-blue-500 ring-blue-300/20" : ""
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="text-gray-500">EGP</span>
        </div>
      </div>
    </div>
  );
};

export default AmountInput;
