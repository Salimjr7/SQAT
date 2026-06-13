import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Campus Eats</h3>
          <p className="text-sm text-gray-500">
            Your favorite university restaurant ordering system. 
            Quick, easy, and delicious meals for students.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Menu</li>
            <li className="hover:text-orange-500 cursor-pointer">Order History</li>
            <li className="hover:text-orange-500 cursor-pointer">Favorites</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@campuseats.edu
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Campus Center, Bldg 5
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            <FaTwitter className="cursor-pointer hover:text-orange-500" />
            <FaInstagram className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t text-center text-sm text-gray-500 py-4 px-4">
        © 2026 Campus Eats. All rights reserved.
      </div>
    </footer>
  );
}