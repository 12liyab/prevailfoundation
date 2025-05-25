
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = token;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-0.1870, 5.6037], // Greater Accra, Ghana coordinates
        zoom: 10
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Add marker for Prevail Foundation location
      new mapboxgl.default.Marker({
        color: '#06B6D4' // cyan-500 color to match the theme
      })
        .setLngLat([-0.1870, 5.6037])
        .setPopup(
          new mapboxgl.default.Popup({ offset: 25 })
            .setHTML('<div style="padding: 10px;"><h3 style="margin: 0; color: #1E40AF;">Prevail Foundation</h3><p style="margin: 5px 0 0 0;">Greater Accra, Ghana</p></div>')
        )
        .addTo(map.current);

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16 min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-primary-800 bg-opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Get in touch with us to learn more about our programs or to get involved.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-800 mb-2">Email</h3>
                        <p className="text-gray-600">info@prevailfoundation.org</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-800 mb-2">Location</h3>
                        <p className="text-gray-600">Greater Accra<br />Ghana, West Africa</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary-800 mb-2">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Team Contact */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary-800 mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Nana Affum (Founder)</span>
                    <span className="text-cyan-600">nana@prevailfoundation.org</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Pascal Obeng-Poku (Operations)</span>
                    <span className="text-cyan-600">pascal@prevailfoundation.org</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-800">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input placeholder="What is this about?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help or how you'd like to get involved..."
                      rows={6}
                    />
                  </div>
                  <Button className="w-full bg-primary-800 hover:bg-primary-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Find Us</h2>
            <p className="text-gray-600">We're located in the heart of Greater Accra, Ghana</p>
          </div>
          
          {showTokenInput ? (
            <div className="max-w-md mx-auto mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary-800">Enter Mapbox Token</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTokenSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mapbox Public Token
                      </label>
                      <Input
                        type="text"
                        value={mapboxToken}
                        onChange={(e) => setMapboxToken(e.target.value)}
                        placeholder="pk.eyJ1Ijoi..."
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">mapbox.com</a>
                      </p>
                    </div>
                    <Button type="submit" className="w-full">
                      Load Map
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : null}

          <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
            {showTokenInput ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600">Enter your Mapbox token to view the interactive map</p>
                  <p className="text-sm text-gray-500">Greater Accra, Ghana, West Africa</p>
                </div>
              </div>
            ) : (
              <div ref={mapContainer} className="w-full h-full" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
