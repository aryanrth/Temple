import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Home, User } from 'lucide-react';

const TrusteeInfo = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4">
        {/* Trustee Information Section */}
        <div className="border-t border-blue-200 pt-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center justify-center">
            <User className="mr-2" />
            Temple Trustee Information
          </h2>
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-200">
              <img 
                src="/images/img15.jpg" 
                alt="Mr. Ramdath Rathore"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-blue-800">Mr. Ramdath Rathore</h3>
              <p className="text-blue-600">Head Trustee & Temple Committee Leader</p>
            </div>
          </div>
          <p className="text-gray-700 text-center mb-6">
            Mr. Ramdath Rathore has been leading the temple trust with dedication and integrity
            for over 15 years. Under his leadership, the temple has expanded its reach in
            community service, cultural preservation, and spiritual guidance.
          </p>
          <div className="space-y-4 text-center">
            <div className="flex items-center text-blue-700 justify-center">
              <Phone className="w-5 h-5 mr-3" />
              <a href="tel:+8755255660" className="hover:text-blue-900">
                8755255660
              </a>
            </div>
          </div>
        </div>

        {/* Home Button */}
        <div className="text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Temple Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrusteeInfo;
