
import { useState, useEffect } from "react";
import AmountInput from "./AmountInput";
import FeeInfoCard from "./FeeInfoCard";
import FeeDetails from "./FeeDetails";
import InstapayHeader from "./InstapayHeader";
import { cn } from "@/lib/utils";

const MAX_AMOUNT = 70000;
const MIN_FEE = 0.5;
const MAX_FEE = 20;
const FEE_RATE = 0.001; // 0.1%

const InstapayCalculator = () => {
  const [amountStr, setAmountStr] = useState("");
  const [amount, setAmount] = useState(0);
  const [fee, setFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Parse amount and validate
    const parsedAmount = amountStr ? parseFloat(amountStr) : 0;
    setAmount(parsedAmount);
    
    if (parsedAmount > MAX_AMOUNT) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    // Calculate fee
    let calculatedFee = parsedAmount * FEE_RATE;
    
    // Apply minimum and maximum fee constraints
    if (calculatedFee < MIN_FEE && parsedAmount > 0) {
      calculatedFee = MIN_FEE;
    } else if (calculatedFee > MAX_FEE) {
      calculatedFee = MAX_FEE;
    }

    setFee(calculatedFee);
    setTotalAmount(parsedAmount + calculatedFee);
  }, [amountStr]);

  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100",
      "flex flex-col items-center px-4 py-10 md:py-16"
    )}>
      <div className="w-full max-w-md">
        <InstapayHeader />
        
        <div className="space-y-6">
          <AmountInput 
            value={amountStr}
            onChange={setAmountStr}
            isValid={isValid}
          />
          
          <FeeInfoCard 
            amount={amount}
            fee={fee}
            totalAmount={totalAmount}
            isValid={isValid}
          />
          
          <FeeDetails />
        </div>
        
        <footer className="mt-10 text-center text-xs text-indigo-500">
          <p>© 2025 Instapay Fee Calculator</p>
          <p className="mt-1">Not affiliated with the official Instapay service</p>
        </footer>
      </div>
    </div>
  );
};

export default InstapayCalculator;
