export interface navbar{
    logo?:{
        imageBlack?: string,
        imageWhite?: string,
        text?: string
    },
    navLinks:{
        label: string,
        link: string,
    }[],
    social: {
        icon: string,
        link: string
    }[],
    buttonContent:{
        icon?: string,
        text: string,
        link?: string
    }
}

export const navData: navbar = {
    logo:{
        imageBlack: "/OpenxAI-White.png",
        imageWhite: "/OpenxAI-Black.png",
        text: "OpenxAI",
    },
    navLinks: [
        {
            label: "Vision",
            link: "https://medium.com/@Ashton_/openxai-a-permissionless-ai-protocol-90b8934519f1"
        },
        {
            label: "Core Platform",
            link: "https://studio.openxai.org/"
        },
        {
            label: "Community",
            link: "https://community.openxai.org/"
        },
        {
            label: "Contribute & Earn",
            link: "https://dashboard.openxai.org/earn"
        },
        {
            label: "DAO",
            link: "https://dashboard.openxai.org/governance"
        },
    ],
    social: [
       { icon:"/x.svg", link:"https://x.com/OpenxAINetwork"},
       { icon:"/discord.svg", link:"https://discord.gg/pBw389cbtq"},
    ],
    buttonContent: {
        text: "OpenxAI Doc",
        link: "https://docs.openxai.org/"
    }
}