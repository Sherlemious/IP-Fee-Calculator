import { Card, CardContent } from "@/components/ui/card";

const FeeDetailsAr = () => {
  return (
    <Card className="w-full max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-white animate-fade-in" style={{ animationDelay: '0.2s' }} dir="rtl">
      <CardContent className="p-5">
        <h3 className="font-semibold text-indigo-800 mb-3">معلومات رسوم إنستاباي</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <div>معدل الرسوم: <span className="font-medium">0.1%</span> من مبلغ التحويل</div>
            <div className="text-blue-500">•</div>
          </li>
          <li className="flex gap-2">
            <div>الحد الأدنى للرسوم: <span className="font-medium">0.50 ج.م</span></div>
            <div className="text-blue-500">•</div>
          </li>
          <li className="flex gap-2">
            <div>الحد الأقصى للرسوم: <span className="font-medium">20 ج.م</span></div>
            <div className="text-blue-500">•</div>
          </li>
          <li className="flex gap-2">
            <div>الحد الأقصى لمبلغ التحويل: <span className="font-medium">70,000 ج.م</span></div>
            <div className="text-blue-500">•</div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeeDetailsAr;
