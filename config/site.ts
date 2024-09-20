export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "CaseBased",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "#features"
    },
    {
      title: "Docs",
      href: "/docs"
    },
    {
      title: "Articles",
      href: "/articles"
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    dashboard: "/dashboard",
  },
}
