import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">JUSHHPK</h2>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Experience the finest Pakistani cuisine with bold flavors and warm hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { to: "/home", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:03269946142" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4 text-primary" />
                0326 9946142
              </a>
              <a href="tel:03257217221" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Phone className="w-4 h-4 text-primary" />
                0325 7217221
              </a>
              <a href="https://instagram.com/jushhpk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Mail className="w-4 h-4 text-primary" />
                @Jushhpk
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <Clock className="w-4 h-4 text-primary" />
                12:00 PM – 2:00 AM
              </div>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Our Branches</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>R-2 Johar Town, Near Shaukat Khanum, Lahore</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>100-H, DHA, Phase 01, Lahore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 Jushhpk Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
