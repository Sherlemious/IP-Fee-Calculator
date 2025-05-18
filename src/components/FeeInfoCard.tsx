
import { Card, CardContent } from "@/components/ui/card";

type FeeInfoCardProps = {
  amount: number;
  fee: number;
  totalAmount: number;
  isValid: boolean;
};

const FeeInfoCard = ({ amount, fee, totalAmount, isValid }: FeeInfoCardProps) => {
  return (
    <Card className="w-full max-w-md mb-4 overflow-hidden border-blue-200">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 border-b border-blue-200">
          <h3 className="font-semibold text-indigo-800 text-center">Transfer Summary</h3>
        </div>
        <div className="p-5 space-y-3">
          {isValid ? (
            <>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">{amount.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transfer Fee:</span>
                <span className="font-medium text-blue-600">{fee.toFixed(2)} EGP</span>
              </div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between">
                <span className="font-semibold text-indigo-800">Total:</span>
                <span className="font-bold text-indigo-800">{totalAmount.toFixed(2)} EGP</span>
              </div>
            </>
          ) : (
            <div className="py-2 text-center text-destructive">
              Please enter a valid amount (max 70,000 EGP)
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeeInfoCard;
