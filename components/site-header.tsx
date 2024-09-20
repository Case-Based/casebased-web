import Link from "next/link"

import { siteConfig } from "@/config/site"
import {Button, buttonVariants} from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {MainNav, MobileNav} from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6"/>
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <div className={"hidden md:flex items-center space-x-4"}>
            <MainNav items={siteConfig.mainNav}/>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link
            href={siteConfig.links.dashboard}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Dashboard
          </Link>
          <div className="flex md:hidden">
            <MobileNav items={siteConfig.mainNav}/>
          </div>
        </div>
      </div>
  </header>
)
}
