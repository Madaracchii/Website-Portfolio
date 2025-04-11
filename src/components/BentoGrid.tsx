import React from "react";

interface BentoGridItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 ${className}`}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
      {children}
    </div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Me */}
        <BentoGridItem title="About Me" className="md:col-span-2">
          <p className="text-gray-700">
            Hi there! I'm a passionate frontend developer with a love for
            creating beautiful, responsive web applications. I focus on writing
            clean, efficient code and creating intuitive user experiences. When
            I'm not coding, you can find me hiking, reading, or exploring new
            technologies.
          </p>
        </BentoGridItem>

        {/* Projects */}
        <BentoGridItem title="Projects">
          <ul className="space-y-3">
            <li>
              <div className="font-medium text-gray-800">
                E-commerce Website
              </div>
              <p className="text-sm text-gray-600">
                A responsive e-commerce platform built with React and Node.js
              </p>
            </li>
            <li>
              <div className="font-medium text-gray-800">Weather App</div>
              <p className="text-sm text-gray-600">
                Real-time weather updates using a modern API
              </p>
            </li>
            <li>
              <div className="font-medium text-gray-800">
                Task Management Tool
              </div>
              <p className="text-sm text-gray-600">
                A productivity app with drag-and-drop functionality
              </p>
            </li>
          </ul>
        </BentoGridItem>

        {/* Skills */}
        <BentoGridItem title="Skills">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
              UI/UX Design
            </div>
            <div className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
              Responsive Design
            </div>
            <div className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
              API Integration
            </div>
            <div className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
              State Management
            </div>
            <div className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
              Testing
            </div>
            <div className="bg-gray-100 rounded-md p-2 text-sm text-gray-800">
              Performance Optimization
            </div>
          </div>
        </BentoGridItem>

        {/* Programming Languages */}
        <BentoGridItem title="Programming Languages" className="md:col-span-2">
          <div className="flex flex-wrap gap-3">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              JavaScript
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              TypeScript
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              HTML5
            </div>
            <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
              CSS3/SASS
            </div>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Python
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              SQL
            </div>
          </div>
        </BentoGridItem>
      </div>
    </div>
  );
};

export default BentoGrid;
