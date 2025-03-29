import React from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    url: '/images/i1.jpg',
    title: 'Hawan'
  },
  {
    id: 2,
    type: 'image',
    url: '/images/i2.jpg',
    title: 'Cooking Time'
  },
  {
    id: 3,
    type: 'video',
    url: '/videos/vid.mp4',
    title: 'Aarti Puja'
  },
  {
    id: 4,
    type: 'image',
    url: '/images/13.jpg',
    title: 'Mandir View'
  },
  {
    id: 5,
    type: 'image',
    url: '/images/i4.jpg',
    title: 'Mandir View'
  },
  {
    id: 6,
    type: 'image',
    url: '/images/i5.jpg',
    title: 'Mandir View'
  },
  {
    id: 7,
    type: 'image',
    url: '/images/i6.jpg',
    title: 'Bhandra'
  }
  
];

const Gallery = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Media Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <iframe
                  src={item.url}
                  title={item.title}
                  className="w-full h-64"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;