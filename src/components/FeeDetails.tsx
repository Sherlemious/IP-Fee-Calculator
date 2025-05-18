
import { Card, CardContent } from "@/components/ui/card";

const FeeDetails = () => {
  return (
    <Card className="w-full max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <CardContent className="p-5">
        <h3 className="font-semibold text-indigo-800 mb-3">Instapay Fee Information</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <div className="text-blue-500">•</div>
            <div>Fee rate: <span className="font-medium">0.1%</span> of the transfer amount</div>
          </li>
          <li className="flex gap-2">
            <div className="text-blue-500">•</div>
            <div>Minimum fee: <span className="font-medium">0.50 EGP</span></div>
          </li>
          <li className="flex gap-2">
            <div className="text-blue-500">•</div>
            <div>Maximum fee: <span className="font-medium">20 EGP</span></div>
          </li>
          <li className="flex gap-2">
            <div className="text-blue-500">•</div>
            <div>Maximum transfer amount: <span className="font-medium">70,000 EGP</span></div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeeDetails;
