export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialIcon {
  name: string;
  href: string;
  icon: string; // This will be the icon component name or path
}

export interface FooterData {
  sections: FooterSection[];
  socials: SocialIcon[];
  newsletter: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
  title: string;
}

export const footerData: FooterData = {
  sections: [
    {
      title: "Services",
      links: [
        { label: "Features", href: "#" },
        { label: "Benefits", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Blog", href: "#" },
        { label: "Changelog", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ],
  socials: [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "YouTube", href: "#", icon: "youtube" },
  ],
  newsletter: {
    title: "Let's Keep in touch",
    placeholder: "Enter email address",
    buttonText: "Submit Now",
  },
  title: "OpenxAI",
};
