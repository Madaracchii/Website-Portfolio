import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BentoGrid from "../components/BentoGrid";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
