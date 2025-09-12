import { Music, Mail, Phone, MapPin, Heart, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Music", href: "/media" },
    { name: "Schedule", href: "/schedule" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">MSOW Choir</h3>
                <p className="text-xs opacity-80">Mary Seat of Wisdom</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Lifting hearts and souls through divine melodies, celebrating faith through 
              the universal language of music since 1985.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-playfair font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="font-playfair font-semibold text-lg">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    choir@stmarysparish.org
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    director@msowchoir.org
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <p className="text-primary-foreground/80 text-sm">
                  (555) 123-4567
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    St. Mary's Parish Church
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    123 Faith Street<br />
                    Harmony City, HC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Schedule */}
          <div className="space-y-6">
            <h4 className="font-playfair font-semibold text-lg">Practice Schedule</h4>
            <div className="space-y-3">
              <div className="bg-primary-foreground/10 rounded-lg p-3">
                <p className="font-medium text-primary-foreground text-sm">Wednesday</p>
                <p className="text-primary-foreground/80 text-xs">7:00 PM - 9:00 PM</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3">
                <p className="font-medium text-primary-foreground text-sm">Saturday</p>
                <p className="text-primary-foreground/80 text-xs">4:00 PM - 6:00 PM</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3">
                <p className="font-medium text-primary-foreground text-sm">Sunday</p>
                <p className="text-primary-foreground/80 text-xs">Pre-service (8:30 AM)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 MSOW Choir. All rights reserved. | Built with faith and dedication.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>for the glory of God</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;