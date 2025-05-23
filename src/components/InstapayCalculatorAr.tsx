import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AmountInputAr from "./AmountInputAr";
import FeeInfoCardAr from "./FeeInfoCardAr";
import FeeDetailsAr from "./FeeDetailsAr";
import InstapayHeaderAr from "./InstapayHeaderAr";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const MAX_AMOUNT = 70000;
const MIN_FEE = 0.5;
const MAX_FEE = 20;
const FEE_RATE = 0.001; // 0.1%

const InstapayCalculatorAr = () => {
  const navigate = useNavigate();
  const [amountStr, setAmountStr] = useState("");
  const [amount, setAmount] = useState(0);
  const [fee, setFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    if (lang === 'en') {
      navigate('/');
    } else {
      navigate('/ar');
    }
  };

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
    )} dir="rtl">
      <LanguageSwitcher currentLang="ar" onLanguageChange={handleLanguageChange} />
      
      <div className="w-full max-w-md">
        <InstapayHeaderAr />
        
        <div className="space-y-6">
          <AmountInputAr 
            value={amountStr}
            onChange={setAmountStr}
            isValid={isValid}
          />
          
          <FeeInfoCardAr 
            amount={amount}
            fee={fee}
            totalAmount={totalAmount}
            isValid={isValid}
          />
          
          <FeeDetailsAr />
        </div>
        
        <footer className="mt-10 text-center text-xs text-indigo-500" dir="rtl">
          <p>© 2025 حاسبة رسوم إنستاباي</p>
          <p className="mt-1">غير مرتبط بخدمة إنستاباي الرسمية</p>
        </footer>
      </div>
    </div>
  );
};

export default InstapayCalculatorAr;
