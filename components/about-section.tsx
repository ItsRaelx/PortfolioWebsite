"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Network, Shield, Code } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="container py-24 sm:py-32 bg-blacc-light">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-turquoise-light to-turquoise mb-8"></div>
        <p className="max-w-3xl text-muted-foreground">{t("about.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-blacc border-border/50 tech-card">
          <CardHeader className="pb-2">
            <Server className="h-12 w-12 mb-2 text-turquoise" />
            <CardTitle>{t("about.sysadmin.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{t("about.sysadmin.description")}</CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-blacc border-border/50 tech-card">
          <CardHeader className="pb-2">
            <Network className="h-12 w-12 mb-2 text-turquoise" />
            <CardTitle>{t("about.networking.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{t("about.networking.description")}</CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-blacc border-border/50 tech-card">
          <CardHeader className="pb-2">
            <Shield className="h-12 w-12 mb-2 text-turquoise" />
            <CardTitle>{t("about.security.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{t("about.security.description")}</CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-blacc border-border/50 tech-card">
          <CardHeader className="pb-2">
            <Code className="h-12 w-12 mb-2 text-turquoise" />
            <CardTitle>{t("about.devops.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{t("about.devops.description")}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
