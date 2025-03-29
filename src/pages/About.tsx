
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-grow py-12 px-4 bg-temple-ivory/10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-temple-maroon mb-8 text-center">About Our Temple</h1>
          
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <p className="text-lg mb-6">
              मंदिर की स्थापना 31 मई 2011 को इसके संस्थापक रामदथ राठौर और उनकी पत्नी सांति देवी द्वारा की गई थी। यह मंदिर भक्ति और आध्यात्मिक एकता का केंद्र है, जहाँ धार्मिक अनुष्ठान, सामुदायिक कार्यक्रम और सांस्कृतिक उत्सव आयोजित किए जाते हैं। अपनी शांतिपूर्ण वातावरण और पारंपरिक वास्तुकला के साथ, यह मंदिर श्रद्धालुओं के लिए आस्था और समर्पण का प्रतीक बना हुआ है।
              </p>
              <p className="text-lg mb-6">
              हमारा मिशन आध्यात्मिक विकास को बढ़ावा देना, सांस्कृतिक समझ को प्रोत्साहित करना और विभिन्न धर्मार्थ पहलों के माध्यम से समुदाय की सेवा करना है। हम सभी पृष्ठभूमियों के लोगों का प्रार्थना और उत्सव में शामिल होने के लिए हार्दिक स्वागत करते हैं।
              </p>
              <p className="text-lg">
              समर्पित स्वयंसेवकों और आध्यात्मिक नेताओं की एक समिति के साथ, हम पूरे वर्ष नियमित पूजा सेवाओं, सांस्कृतिक कार्यक्रमों और सामुदायिक समारोहों का आयोजन करते हैं।
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/img1.jpg" 
                alt="Temple exterior view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-temple-maroon mb-4">Our Temple Photo</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/img2.jpg" 
                  alt="Main prayer hall" 
                  className="w-full h-60 object-cover"
                />
                <p className="mt-2 text-center font-medium">Main Prayer Hall</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/im5.jpg" 
                  alt="Community center" 
                  className="w-full h-60 object-cover"
                />
                <p className="mt-2 text-center font-medium">Community Center</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/im4.jpg" 
                  alt="Meditation garden" 
                  className="w-full h-60 object-cover"
                />
                <p className="mt-2 text-center font-medium">Meditation Garden</p>
              </div>
            </div>
            <p className="text-lg">
              Our temple complex includes a spacious main prayer hall, a multipurpose community center for events and celebrations, a meditation garden for quiet reflection, and a library with spiritual texts and resources.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-temple-maroon mb-4">Weekly Schedule</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Regular Services</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Morning Prayer</span>
                    <span>7:00 AM - 8:00 AM (Daily)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Evening Prayer</span>
                    <span>6:00 PM - 7:30 PM (Daily)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Weekly Bhajan</span>
                    <span>5:00 PM - 7:00 PM (Saturday)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Special Puja</span>
                    <span>10:00 AM - 12:00 PM (Sunday)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Community Activities</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Yoga Classes</span>
                    <span>6:00 AM - 7:00 AM (Mon, Wed, Fri)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Language Classes</span>
                    <span>5:00 PM - 6:00 PM (Tuesday)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Cultural Classes</span>
                    <span>4:00 PM - 6:00 PM (Thursday)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Community Meal</span>
                    <span>1:00 PM - 2:30 PM (Sunday)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              asChild
              className="bg-temple-gold hover:bg-temple-gold/90 text-temple-maroon font-semibold"
            >
              <Link to="/committee">Meet Our Committee</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-temple-gold text-temple-maroon hover:bg-temple-gold/20"
            >
              <Link to="/contact">Trusty</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default About;
