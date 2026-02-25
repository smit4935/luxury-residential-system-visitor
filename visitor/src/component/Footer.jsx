import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-blue-700 font-bold text-3xl">E</div>
            <h3 className="text-xl tracking-widest text-gray-700">
              BUILDING
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            The MY-Building app revolutionizes tenant interaction with its
            smart structure by providing real-time control over environmental
            settings like climate and lighting. Users can monitor energy
            usage, receive maintenance alerts, and access building amenities
            through a user-friendly interface. This integration enhances
            convenience and promotes sustainable living.
          </p>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-blue-700 font-semibold text-lg mb-6">
            Get in Touch
          </h4>

          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-blue-600 mt-1" />
              <span>
                4th Floor 413, Fortune Plaza, opposite Mango Plus Cinemas,
                New India Colony, Nava Naroda, Ahmedabad, Gujarat 382350
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-blue-600" />
              +91 7383631581
            </li>

            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-blue-600" />
              hello@nrcrow.com
            </li>
          </ul>

          {/* App Buttons */}
          <div className="flex gap-4 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-blue-700 font-semibold text-lg mb-6">
            Learn More
          </h4>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Online demo</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-blue-700 font-semibold text-lg mb-6">
            Follow
          </h4>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Linkedin</li>
            <li className="hover:text-blue-600 cursor-pointer">Facebook</li>
            <li className="hover:text-blue-600 cursor-pointer">Whatsapp</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 bg-blue-700 py-4">
        <p className="text-center text-white text-sm">
          © 2024 MY-Building . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
