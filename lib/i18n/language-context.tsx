"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { type Language, translations } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Detect browser language on client side
    const detectLanguage = () => {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "pl") {
        setLanguage("pl")
      }

      // Try to get language from localStorage if it exists
      const savedLang = localStorage.getItem("language") as Language
      if (savedLang && (savedLang === "en" || savedLang === "pl")) {
        setLanguage(savedLang)
      }
    }

    detectLanguage()
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
