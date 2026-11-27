import React from "react";
import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection";
import QuickAnswers from "./QuickAnswers";

export default function Contact() {
  return (
    <main className="w-full pt-20  pb-16 space-y-12 sm:space-y-14">
      <ContactHero />
      <ContactSection />
      <QuickAnswers />
    </main>
  );
}