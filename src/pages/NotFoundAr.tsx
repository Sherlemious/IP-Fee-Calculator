import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFoundAr = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir="rtl">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">عذراً! الصفحة غير موجودة</p>
        <a href="/ar" className="text-blue-500 hover:text-blue-700 underline">
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default NotFoundAr;
