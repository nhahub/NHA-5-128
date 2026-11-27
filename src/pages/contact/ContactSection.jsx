import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import fIcon from "../../assets/icons/f.svg";
import instaIcon from "../../assets/icons/insta.svg";
import twIcon from "../../assets/icons/tw.svg";
import tikIcon from "../../assets/icons/tik.svg";
import mapImg from "../../assets/images/map.png";

const SUBJECT_OPTIONS = [
  "Order Support",
  "Catering & Events",
  "Partnerships",
  "Feedback & Suggestions",
];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  subject: "Order Support",
  message: "",
};

const SAVORA_HUB = { lat: 31.2001, lng: 29.9187, label: "Savora - Alexandria" };

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
}

export default function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [statusMessage, setStatusMessage] = useState(null);
  const [distanceInfo, setDistanceInfo] = useState(null);
  const [locating, setLocating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please fill in your full name, email address, and message before sending.",
      });
      return;
    }

    setStatusMessage({
      type: "success",
      text: "Your message has been sent! Our team will get back to you within 24 hours.",
    });
    setFormData(INITIAL_FORM);
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setDistanceInfo("Geolocation is not supported by your browser.");
      return;
    }

    setLocating(true);
    setDistanceInfo(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const km = getDistanceKm(
          pos.coords.latitude,
          pos.coords.longitude,
          SAVORA_HUB.lat,
          SAVORA_HUB.lng
        );
        setDistanceInfo(`~${km} km from ${SAVORA_HUB.label}`);
        setLocating(false);
      },
      () => {
        setDistanceInfo("Location permission denied — showing Savora area.");
        setLocating(false);
      }
    );
  };

  return (
    <section className="w-full px-4 lg:mt-20 sm:px-8 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        {/* Left Column: Send Us a Message Form */}
        <div className="lg:col-span-7 bg-white rounded-[20px] p-6 sm:p-8 border border-[#1E1E1E]/8 shadow-[0_6px_18px_rgba(30,30,30,0.08)] flex flex-col justify-between text-left">
          <div>
            <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#1E1E1E] mb-1">
              Send Us a Message
            </h2>
            <p className="font-sans text-[13px] sm:text-[13.5px] text-[#555555] mb-6">
              Fill out the form and we&apos;ll reply within 24 hours.
            </p>

            {statusMessage && (
              <div
                role="status"
                className={`mb-4 px-4 py-3 rounded-[10px] font-sans text-[13px] flex items-center gap-2.5 border ${
                  statusMessage.type === "success"
                    ? "bg-[#EAF7EE] text-[#1E6B38] border-[#1E6B38]/25"
                    : "bg-[#FDECEC] text-[#A62626] border-[#A62626]/25"
                }`}
              >
                {statusMessage.type === "success" && (
                  <CheckCircle2 size={17} className="shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block font-sans text-[13px] font-semibold text-[#1E1E1E] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className="w-full h-[44px] px-4 rounded-[10px] border border-[#D9D4CC] bg-white font-sans text-[13.5px] text-[#1E1E1E] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#E35922] transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block font-sans text-[13px] font-semibold text-[#1E1E1E] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full h-[44px] px-4 rounded-[10px] border border-[#D9D4CC] bg-white font-sans text-[13.5px] text-[#1E1E1E] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#E35922] transition-colors"
                />
              </div>

              {/* Phone Number & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[13px] font-semibold text-[#1E1E1E] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+20 1XX XXX XXXX"
                    className="w-full h-[44px] px-4 rounded-[10px] border border-[#D9D4CC] bg-white font-sans text-[13.5px] text-[#1E1E1E] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#E35922] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[13px] font-semibold text-[#1E1E1E] mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-[44px] pl-4 pr-10 rounded-[10px] border border-[#D9D4CC] bg-white font-sans text-[13.5px] text-[#1E1E1E] appearance-none focus:outline-none focus:border-[#E35922] transition-colors cursor-pointer"
                    >
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#555555]"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-[13px] font-semibold text-[#1E1E1E] mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full p-4 rounded-[10px] border border-[#D9D4CC] bg-white font-sans text-[13.5px] text-[#1E1E1E] placeholder:text-[#9E9E9E] resize-none focus:outline-none focus:border-[#E35922] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-[46px] rounded-[10px] bg-[#E35922] hover:opacity-95 text-white font-sans text-[14px] font-semibold inline-flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(227,89,34,0.25)] transition-all duration-200 active:scale-[0.99] cursor-pointer mt-2"
              >
                <span>Send Message</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Direct Info, Hours, Socials & Map */}
        <div className="lg:col-span-5 flex flex-col gap-5 text-left">
          {/* Get in Touch Directly Card */}
          <div className="bg-white rounded-[18px] p-6 border border-[#1E1E1E]/8 shadow-[0_6px_18px_rgba(30,30,30,0.08)]">
            <h3 className="font-serif text-[19px] font-bold text-[#1E1E1E] mb-4">
              Get in Touch Directly
            </h3>

            <ul className="space-y-3 font-sans text-[13.5px] text-[#3A3A3A]">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#E35922] shrink-0" />
                <span>hello@savora.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#E35922] shrink-0" />
                <span>+20 100 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#E35922] shrink-0" />
                <span>Alexandria &amp; Cairo, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Our Hours Card */}
          <div className="bg-[#F2DFC2] rounded-[18px] p-6 border border-[#E35922]/25 shadow-[0_6px_18px_rgba(30,30,30,0.06)]">
            <h3 className="font-serif text-[19px] font-bold text-[#1E1E1E] mb-3.5">
              Our Hours
            </h3>

            <div className="space-y-3 font-sans text-[13px] leading-relaxed">
              <div>
                <p className="font-semibold text-[#1E1E1E]">
                  Kitchen &amp; Delivery:
                </p>
                <p className="text-[#3A3A3A]">Daily: 11:00 AM – 1:00 AM</p>
              </div>
              <div>
                <p className="font-semibold text-[#1E1E1E]">
                  Customer Support:
                </p>
                <p className="text-[#3A3A3A]">Daily: 10:00 AM – 12:00 AM</p>
              </div>
            </div>
          </div>

          {/* Connect With Us Card */}
          <div className="bg-white rounded-[18px] px-6 py-5 border border-[#1E1E1E]/8 shadow-[0_6px_18px_rgba(30,30,30,0.08)]">
            <h3 className="font-serif text-[18px] font-bold text-[#1E1E1E] mb-3.5">
              Connect With Us
            </h3>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <img
                  src={fIcon}
                  alt="Facebook"
                  className="w-full h-full object-cover"
                />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <img
                  src={instaIcon}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <img
                  src={twIcon}
                  alt="X"
                  className="w-full h-full object-cover"
                />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <img
                  src={tikIcon}
                  alt="TikTok"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="relative rounded-[18px] overflow-hidden shadow-[0_6px_18px_rgba(30,30,30,0.08)] flex-1 min-h-[165px] bg-[#DCEAF4]">
            <img
              src={mapImg}
              alt="Savora Locations - Alexandria and Cairo"
              className="w-full h-full object-cover object-center scale-108 select-none"
            />

            <button
              type="button"
              onClick={handleLocateMe}
              disabled={locating}
              className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-[#1E1E1E] border border-[#1E1E1E]/15 rounded-full px-3 py-1 font-sans text-[11.5px] font-medium inline-flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors"
            >
              <Navigation size={12} className="text-[#E35922]" />
              <span>{locating ? "Locating..." : "Distance to Hub"}</span>
            </button>

            {distanceInfo && (
              <div className="absolute top-2.5 left-2.5 bg-[#1E1E1E]/85 text-white rounded-full px-3 py-1 font-sans text-[11px]">
                {distanceInfo}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}