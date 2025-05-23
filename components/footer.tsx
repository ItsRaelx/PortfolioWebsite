"use client"

import type React from "react"

import Link from "next/link"
import { Github, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/40 bg-blacc">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">secc.me</h3>
            <p className="text-muted-foreground">
              SysAdmin & DevOps Professional
              <br />
              CEO of raidvm.com hosting
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={scrollToSection("about")}
                  className="text-muted-foreground hover:text-turquoise transition-colors"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={scrollToSection("skills")}
                  className="text-muted-foreground hover:text-turquoise transition-colors"
                >
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={scrollToSection("projects")}
                  className="text-muted-foreground hover:text-turquoise transition-colors"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToSection("contact")}
                  className="text-muted-foreground hover:text-turquoise transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.connect")}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ItsRaelx"
                target="_blank"
                className="text-muted-foreground hover:text-turquoise transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com/users/970600480218681394"
                target="_blank"
                className="text-muted-foreground hover:text-turquoise transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="mailto:d.iwanski@secc.me" className="hover:text-turquoise transition-colors">
                d.iwanski@secc.me
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} secc.me. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
