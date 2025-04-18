import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, FolderGit2, Briefcase } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const GooeyNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { label: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
    {
      label: "Projects",
      href: "#projects",
      icon: <FolderGit2 className="w-5 h-5" />,
    },
    {
      label: "Work History",
      href: "#work-history",
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GooeyNav;
