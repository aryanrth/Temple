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
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full mx-4 flex flex-col md:flex-row items-center md:items-start">
        {/* Trustee Information Section */}
        <div className="md:w-2/3 text-center md:text-left md:pr-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center justify-center md:justify-start">
            <User className="mr-2" />
            Temple Trustee Information
          </h2>
          <h3 className="text-xl font-semibold text-blue-800">Mr. Ramdath Rathore</h3>
          <p className="text-blue-600 mb-4">Head Trustee & Temple Committee Leader</p>
          <p className="text-gray-700 mb-6">
            Mr. Ramdath Rathore has been leading the temple trust with dedication and integrity
            for over 15 years. Under his leadership, the temple has expanded its reach in
            community service, cultural preservation, and spiritual guidance.
          </p>
          <div className="flex items-center text-blue-700 mb-4">
            <Phone className="w-5 h-5 mr-3" />
            <a href="tel:+8755255660" className="hover:text-blue-900">
              8755255660
            </a>
          </div>
        </div>

        {/* Trustee Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200">
            <img 
              src="/images/trustee.jpg" 
              alt="Mr. Ramdath Rathore"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Home Button */}
      <div className="text-center mt-6">
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Temple Home
        </a>
      </div>
    </div>
  );
};

export default TrusteeInfo;
