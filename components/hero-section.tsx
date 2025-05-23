"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("hero.title")} <span className="gradient-text">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("hero.subtitle")}{" "}
            <Link href="https://raidvm.com" target="_blank" className="text-turquoise hover:underline">
              raidvm.com
            </Link>{" "}
            {t("hero.hosting")}
          </p>
          <p className="text-muted-foreground">{t("hero.specializing")}</p>
          <div className="flex gap-4 mt-4">
            <Button asChild>
              <a href="#contact" onClick={scrollToContact}>
                {t("hero.contactButton")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/ItsRaelx" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://discord.com/users/970600480218681394" target="_blank">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-turquoise-light to-turquoise p-1 animate-gradient-x">
            <div className="absolute inset-1 bg-blacc rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile picture"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
