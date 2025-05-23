"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "./language-switcher"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">secc.me</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#about"
            onClick={scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.about")}
          </a>
          <a
            href="#skills"
            onClick={scrollToSection("skills")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.skills")}
          </a>
          <a
            href="#projects"
            onClick={scrollToSection("projects")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            onClick={scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.about")}
            </a>
            <a
              href="#skills"
              onClick={scrollToSection("skills")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.skills")}
            </a>
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.projects")}
            </a>
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav.contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
