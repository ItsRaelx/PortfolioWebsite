"use client"

import { Mail, MessageSquare, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-turquoise-light to-turquoise mb-8"></div>
        <p className="max-w-3xl text-muted-foreground">{t("contact.description")}</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-blacc border-border/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6 gradient-border inline-block">{t("contact.info")}</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                  <a href="mailto:d.iwanski@secc.me" className="font-medium hover:text-turquoise transition-colors">
                    d.iwanski@secc.me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full">
                  <Github className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.github")}</p>
                  <a
                    href="https://github.com/ItsRaelx"
                    target="_blank"
                    className="font-medium hover:text-turquoise transition-colors"
                    rel="noreferrer"
                  >
                    github.com/ItsRaelx
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-turquoise" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.discord")}</p>
                  <a
                    href="https://discord.com/users/970600480218681394"
                    target="_blank"
                    className="font-medium hover:text-turquoise transition-colors"
                    rel="noreferrer"
                  >
                    {t("contact.connect")}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
