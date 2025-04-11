import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 md:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="mailto:contact@johndoe.com"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
