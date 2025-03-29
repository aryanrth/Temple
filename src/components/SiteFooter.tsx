
import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="bg-temple-maroon text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Temple Sanctuary. All rights reserved.</p>
        <p className="mt-2 text-temple-ivory/70">
          A place of worship, community, and spiritual growth.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
