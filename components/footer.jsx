import { Github, Linkedin, User2, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-black bg-blue-50 py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold mb-2">Who We Are?</span>
            <p className="text-gray-800 text-sm text-center md:text-left">
              Dedicated to empowering businesses with cutting-edge solutions,
              our team combines innovation and expertise to deliver exceptional
              digital experiences. We specialize in scalable, efficient, and
              user-centric technology that drives growth and success.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/madhurpathak/"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-black"
                target="blank"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/Madhur_Pathak07"
                aria-label="X"
                className="text-gray-700 hover:text-black"
                target="blank"
              >
                <X className="h-6 w-6" />
              </a>
              <a
                href="https://madhurpathak.netlify.app/"
                aria-label="Portfolio"
                className="text-gray-700 hover:text-black"
                target="blank"
              >
                <User2 className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Madhur1707"
                aria-label="Github"
                className="text-gray-700 hover:text-black"
                target="blank"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center text-center text-gray-500">
          © 2024 MyVault | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
