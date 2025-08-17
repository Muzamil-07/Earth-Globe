import { ArrowUpRight } from "lucide-react";

export const footerData = {
  logo: {
    name: "OpenxAI",
    icon: "/",
  },
  socialLinks: [
    { name: "telegram", icon: "/telegram.svg", href: "https://t.me/OpenxAINetwork" },
    { name: "Discord", icon: "/discord-f.svg", href: "https://discord.gg/pBw389cbtq" },
    { name: "github", icon: "/github.svg", href: "https://github.com/openxai-network" },
    { name: "Twitter", icon: "/X-f.svg", href: "https://x.com/OpenxAINetwork" },
    { name: "Reddit", icon: "/redit.svg", href: "https://www.reddit.com/r/OpenxAINetwork/" },
    { name: "YouTube", icon: "/youtube.svg", href: "https://www.youtube.com/@OpenxAI" },
    { name: "LinkedIn", icon: "linkedIn.svg", href: "https://www.linkedin.com/company/openxainetwork/" },
  ],
  linkSections: [
    {
      title: "About",
      links: [
        { name: "Vision", href: "https://medium.com/openxai/openxai-a-permissionless-ai-protocol-90b8934519f1" },
        { name: "OpenxAI Studio", href: "https://studio.openxai.org/" },
        { name: "Models", href: "https://studio.openxai.org/app-store" },
        { name: "Docs", href: "https://docs.openxai.org/" },
        { name: "Brand Assets", href: "https://drive.google.com/drive/folders/1JVoMn1LdazzUV6ASFaCqSy_WT1qtAqfg" },
      ],
    },
    {
      title: "Genesis",
      links: [
        { name: "Genesis", href: "https://dashboard.openxai.org/genesis" },
        { name: "Contribute & Earn", href: "https://dashboard.openxai.org/earn" },
        { name: "Stake", href: "https://dashboard.openxai.org/stake" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "OpenxAIDAO", href: "https://dashboard.openxai.org/governance" },
        { name: "Forum & Governance", href: "https://community.openxai.org/" },
        { name: "OpenR&D", href: "https://dashboard.openxai.org/projects" },
        { name: "Updates & News", href: "https://medium.com/@ashton_" },
      ],
    },
  ],
  newsletter: {
    title: "Let's Connect",
    placeholder: "Enter email address",
    buttonText: "Submit Now",
    icon: ArrowUpRight,
  },
  copyright: "© 2025 OpenAI | All rights reserved",
};
