"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/language-context"

export function SkillsSection() {
  const { t } = useLanguage()

  const getSkillsForLanguage = () => {
    return {
      [t("skills.sysadmin")]: [
        t("skill.linux"),
        t("skill.windows"),
        t("skill.virtualization"),
        t("skill.containerization"),
        t("skill.proxmox"),
        t("skill.vmware"),
      ],
      [t("skills.networking")]: [
        t("skill.wireguard"),
        t("skill.gre"),
        t("skill.bgp"),
        t("skill.vlans"),
        t("skill.loadbalancing"),
      ],
      [t("skills.security")]: [
        t("skill.firewalls"),
        t("skill.ids"),
        t("skill.audit"),
        t("skill.pentest"),
        t("skill.ssl"),
        t("skill.access"),
      ],
      [t("skills.devops")]: [
        t("skill.docker"),
        t("skill.kubernetes"),
        t("skill.cicd"),
        t("skill.ansible"),
        t("skill.git"),
        t("skill.monitoring"),
      ],
    }
  }

  const skills = getSkillsForLanguage()

  return (
    <section id="skills" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-turquoise-light to-turquoise mb-8"></div>
        <p className="max-w-3xl text-muted-foreground">{t("skills.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="bg-blacc border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 gradient-border inline-block">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-blacc-light text-turquoise border-turquoise/30">
                    {skill}
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
