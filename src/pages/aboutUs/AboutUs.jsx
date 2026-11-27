import React from "react";
import OurStory from "./OurStory";
import Different from "./Different";
import MissionVision from "./MissionVision";
import HowItWorks from "./HowItWorks";
import HungryBanner from "./HungryBanner";

export default function AboutUs() {
  return (
    <main className="w-full py-10 space-y-24">
      <OurStory />
      <Different />
      <MissionVision />
      <HowItWorks />
      <HungryBanner />
    </main>
  );
}