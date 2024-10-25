import React from 'react';
import { Flips } from "../components/flip";
import ScrollContent from "../components/scrollcontent";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Flips />
      <ScrollContent />
    </div>
  );
}

export default HomePage;
