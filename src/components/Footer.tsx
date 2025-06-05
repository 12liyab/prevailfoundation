import { Link } from 'react-router-dom';
import { Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/Prevail_Logo-reverse.png"
                alt="Prevail Foundation Logo"
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-lg font-bold">Prevail Foundation</h3>
                <p className="text-sm text-cyan-400">Rise Above • Thrive Beyond</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering individuals and communities to prevail over adversity through housing, health, and people-empowerment programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-cyan-400 transition-colors">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-cyan-400 transition-colors">Get Involved</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Meet Our Team</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Housing Initiative</li>
              <li className="text-gray-300">Health Services</li>
              <li className="text-gray-300">People-Empowerment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">info@prevailfoundation.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Tema, Community 8 Sraha Street , 5th Avenue AC 16</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-gray-300 text-sm">Made with love for the community</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 thenovus.solutuons. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">FAQ</Link>
            <Link to="/financials" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Financials</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
