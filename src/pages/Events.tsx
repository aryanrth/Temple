
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Sample events data - this could be moved to a separate data file in a real application
const templeEvents = [
  {
    id: 1,
    name: "Navratri Celebration",
    description: "Nine nights of devotion and celebration dedicated to the divine feminine. Join us for aarti, garba, and prasad.",
    date: "October 6-15, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Main Temple Hall",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 2,
    name: "Diwali Festival of Lights",
    description: "Celebrate the triumph of light over darkness with prayers, lamp lighting ceremony, and community feast.",
    date: "November 12, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Temple Grounds",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 3,
    name: "Holi Festival",
    description: "Welcome spring with the vibrant festival of colors. Family-friendly event with traditional games and sweets.",
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Temple Garden Area",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 4,
    name: "Janmashtami",
    description: "Celebrate the birth of Lord Krishna with bhajans, dance performances, and midnight aarti.",
    date: "August 25, 2024",
    time: "7:00 PM - 12:30 AM",
    location: "Main Temple",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 5,
    name: "Ganesh Chaturthi",
    description: "Ten-day festival honoring Lord Ganesha with special pujas, cultural programs, and community meals.",
    date: "September 7-17, 2024",
    time: "Various times daily",
    location: "Temple Hall & Garden",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&h=500"
  }
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-temple-maroon mb-2">Temple Events</h1>
        <p className="text-lg text-gray-700 mb-8">Join us in celebrating these special occasions throughout the year</p>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templeEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-temple-maroon">{event.name}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-temple-maroon" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-temple-maroon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-temple-maroon" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-gray-500">
                  Devotees of all ages welcome
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
};

export default Events;
