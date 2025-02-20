export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TED-X North Eastern Universty",
  description: "TEDX The main front.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Speakers",
      href: "/speakers",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Speakers",
      href: "/speakers",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
