import React from "react";
import {
  Send,
  MessageCircle,
  Github,
  Twitter,
  Youtube,
  Linkedin,
  MessageSquare,
  Instagram,
} from "lucide-react";
import { footerData } from "../data/FooterData";

export default function Footer() {
 
  return (
    <div className="min-h-[35rem] md:min-h-[50rem] flex items-end justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-black">

      {/* Footer Content */}
      <div className="relative z-[4] w-full max-w-7xl pb-8 md:pb-12">
        {/* Main Footer Grid - Logo takes more space, others equal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo Section - Takes 6 columns (50% width) */}
          <div className="md:col-span-6 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-white text-2xl font-semibold">
                {footerData.title}
              </span>
            </div>
          </div>

          {/* Services Section - Takes 2 columns */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerData.sections[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section - Takes 2 columns */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerData.sections[1].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Section - Takes 2 columns */}
          <div className="md:col-span-2 flex flex-col justify-start">
            <div className="flex items-center gap-8 justify-start md:justify-end">
              {footerData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-400 text-sm">
            2025 Copyright © ReadyLaunch. All rights reserved.
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <h1
            className="text-9xl text-white glitch font-semibold"
            data-text={footerData.title}
          >
            {footerData.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ name }: { name: string }) {
  const iconMap: { [key: string]: React.ReactElement } = {
    telegram: <Send className="w-6 h-6" />,
    discord: <MessageSquare className="w-6 h-6" />,
    github: <Github className="w-6 h-6" />,
    twitter: <Twitter className="w-6 h-6" />,
    instagram: <Instagram className="w-6 h-6" />,
    reddit: <MessageCircle className="w-6 h-6" />,
    youtube: <Youtube className="w-6 h-6" />,
    linkedin: <Linkedin className="w-6 h-6" />,
  };

  return iconMap[name] || <MessageCircle className="w-6 h-6" />;
}
