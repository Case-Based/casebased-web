"use client";

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from "./ui/dropdown-menu"
import {
  DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Box,
  Cloud, CreditCard,
  Github, HelpCircle, Home,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail, Menu,
  MessageSquare,
  Plus,
  PlusCircle, Settings, User,
  UserPlus,
  Users
} from "lucide-react";
import {usePathname} from "next/navigation";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-black-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

export function MobileNav({ items }: MainNavProps) {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };

  const currentPath = usePathname()

  const MobileNavIcon = ({title}: {title: string}) => {
    switch (title) {
      case "Home":
        return <Home className={"mr-2 h-4 w-4"} />
      case "Dashboard":
        return <PlusCircle className={"mr-2 h-4 w-4"} />
      case "Articles":
        return <MessageSquare className={"mr-2 h-4 w-4"} />
      case "Features":
        return <Box className={"mr-2 h-4 w-4"} />
      case "Docs":
        return <LifeBuoy className={"mr-2 h-4 w-4"} />
      case "Contact":
        return <Mail className={"mr-2 h-4 w-4"} />
      default:
        return <HelpCircle className={"mr-2 h-4 w-4"} />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"icon"}><Menu /></Button>
      </DropdownMenuTrigger>
      {items?.length ? (
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {
              items?.map(
                (item, index) =>
                  item.href && (
                    <DropdownMenuItem>
                      <MobileNavIcon title={item.title}/>
                       <Link onClick={() => scrollToSection(item.href?.startsWith("/#")? item.title.toLowerCase() : "")} href={item.href} key={index}>{item.title}</Link>
                    </DropdownMenuItem>
                  )
              )
            }
          </DropdownMenuGroup>
        </DropdownMenuContent>
      ) : null}
    </DropdownMenu>
  )
}
