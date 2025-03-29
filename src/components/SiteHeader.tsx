
import { Link, useLocation } from "react-router-dom";

const SiteHeader = () => {
  const location = useLocation();
  
  return (
    <header className="bg-temple-maroon text-white">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">Temple Sanctuary</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className={`hover:text-temple-gold transition-colors ${location.pathname === '/' ? 'font-semibold text-temple-gold' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`hover:text-temple-gold transition-colors ${location.pathname === '/about' ? 'font-semibold text-temple-gold' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/committee" 
                className={`hover:text-temple-gold transition-colors ${location.pathname === '/committee' ? 'font-semibold text-temple-gold' : ''}`}
              >
                Committee
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className={`hover:text-temple-gold transition-colors ${location.pathname === '/events' ? 'font-semibold text-temple-gold' : ''}`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`hover:text-temple-gold transition-colors ${location.pathname === '/contact' ? 'font-semibold text-temple-gold' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={`hover:text-temple-gold transition-colors ${location.pathname === '/team' ? 'font-semibold text-temple-gold' : ''}`}
              >
                Team
              </Link>
            </li>
            
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
