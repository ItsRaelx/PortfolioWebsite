"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.raidvm.title"),
      description: t("projects.raidvm.description"),
      tags: [t("tag.infrastructure"), t("tag.virtualization"), t("tag.networking"), t("tag.security")],
      link: "https://raidvm.com",
    },
    {
      title: t("projects.wireguard.title"),
      description: t("projects.wireguard.description"),
      tags: [t("tag.wireguard"), t("tag.networking"), t("tag.security"), t("tag.linux")],
      link: "#",
    },
    {
      title: t("projects.deployment.title"),
      description: t("projects.deployment.description"),
      tags: [t("tag.devops"), t("tag.automation"), t("tag.docker")],
      link: "#",
    },
    {
      title: t("projects.monitoring.title"),
      description: t("projects.monitoring.description"),
      tags: [t("tag.monitoring"), t("tag.alerting"), t("tag.dashboard"), t("tag.analytics")],
      link: "#",
    },
    {
      title: t("projects.as209764.title"),
      description: t("projects.as209764.description"),
      tags: [t("tag.networking"), t("tag.bgp"), t("tag.asn"), t("tag.infrastructure")],
      link: "https://bgp.tools/as/209764",
    },
  ]

  return (
    <section id="projects" className="container py-24 sm:py-32 bg-blacc-light">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-turquoise-light to-turquoise mb-8"></div>
        <p className="max-w-3xl text-muted-foreground">{t("projects.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-blacc border-border/50 tech-card">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-blacc-dark text-turquoise">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
