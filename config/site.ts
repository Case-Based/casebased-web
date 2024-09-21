export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "CaseBased",
  description:
    "AI guided decisions made transparent. CaseBased is a hybrid system of case-based reasoning and artificial neural networks.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/#features"
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
    twitter: "",
    github: "https://github.com/lukasklockenhoff/casebased",
    dashboard: "/dashboard",
  },
}
