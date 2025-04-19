export type Language = "en" | "pl"

export type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

export const translations: Translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "SysAdmin & DevOps",
    "hero.titleHighlight": "Professional",
    "hero.subtitle": "IT Student & CEO of",
    "hero.hosting": "hosting",
    "hero.specializing": "Specializing in networking, wireguard, firewalls, and GRE tunnels",
    "hero.contactButton": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I'm a passionate SysAdmin and DevOps professional with expertise in networking, security, and infrastructure management. Currently serving as the CEO of raidvm.com hosting while pursuing my IT studies.",
    "about.sysadmin.title": "System Administration",
    "about.sysadmin.description":
      "Expert in managing and optimizing Linux and Windows server environments for maximum performance and reliability.",
    "about.networking.title": "Networking",
    "about.networking.description":
      "Specialized in complex networking setups including WireGuard VPNs, GRE tunnels, and advanced routing configurations.",
    "about.security.title": "Security",
    "about.security.description":
      "Implementing robust firewall configurations and security protocols to protect critical infrastructure and data.",
    "about.devops.title": "DevOps",
    "about.devops.description":
      "Bridging development and operations with CI/CD pipelines, infrastructure as code, and automated deployment strategies.",

    // Skills Section
    "skills.title": "Technical Skills",
    "skills.description": "My expertise spans across various domains of IT infrastructure and operations.",
    "skills.sysadmin": "System Administration",
    "skills.networking": "Networking",
    "skills.security": "Security",
    "skills.devops": "DevOps",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.description": "A selection of my professional projects and technical implementations.",
    "projects.raidvm.title": "RaidVM Hosting",
    "projects.raidvm.description":
      "A high-performance hosting platform offering VPS, dedicated servers, and managed hosting solutions.",
    "projects.wireguard.title": "WireGuard VPN Mesh",
    "projects.wireguard.description":
      "A scalable mesh network using WireGuard for secure, high-performance connectivity between distributed systems.",
    "projects.deployment.title": "Automated Deployment Pipeline",
    "projects.deployment.description":
      "CI/CD pipeline for automating infrastructure provisioning and application deployment across multiple environments.",
    "projects.monitoring.title": "Network Monitoring System",
    "projects.monitoring.description":
      "Comprehensive monitoring solution for tracking network performance, security, and availability.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "Have a project in mind or want to discuss potential collaborations? Feel free to reach out!",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.discord": "Discord",
    "contact.connect": "Connect on Discord",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.rights": "All rights reserved.",

    // Skills
    "skill.linux": "Linux Server Management",
    "skill.windows": "Windows Server",
    "skill.virtualization": "Virtualization",
    "skill.containerization": "Containerization",
    "skill.proxmox": "Proxmox",
    "skill.vmware": "VMware",
    "skill.wireguard": "WireGuard",
    "skill.gre": "GRE Tunnels",
    "skill.bgp": "BGP",
    "skill.vlans": "VLANs",
    "skill.loadbalancing": "Load Balancing",
    "skill.firewalls": "Firewalls",
    "skill.ids": "IDS/IPS",
    "skill.audit": "Security Auditing",
    "skill.pentest": "Penetration Testing",
    "skill.ssl": "SSL/TLS",
    "skill.access": "Access Control",
    "skill.docker": "Docker",
    "skill.kubernetes": "Kubernetes",
    "skill.cicd": "CI/CD",
    "skill.ansible": "Ansible",
    "skill.git": "Git",
    "skill.monitoring": "Monitoring",

    // Tags
    "tag.infrastructure": "Infrastructure",
    "tag.virtualization": "Virtualization",
    "tag.networking": "Networking",
    "tag.security": "Security",
    "tag.wireguard": "WireGuard",
    "tag.linux": "Linux",
    "tag.devops": "DevOps",
    "tag.automation": "Automation",
    "tag.docker": "Docker",
    "tag.monitoring": "Monitoring",
    "tag.alerting": "Alerting",
    "tag.dashboard": "Dashboard",
    "tag.analytics": "Analytics",

    // Language
    language: "Language",
    "language.en": "English",
    "language.pl": "Polish",
  },
  pl: {
    // Navigation
    "nav.about": "O mnie",
    "nav.skills": "Umiejętności",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title": "Administrator Systemów & DevOps",
    "hero.titleHighlight": "Profesjonalista",
    "hero.subtitle": "Student IT & CEO",
    "hero.hosting": "hosting",
    "hero.specializing": "Specjalizacja w sieciach, wireguard, firewallach i tunelach GRE",
    "hero.contactButton": "Kontakt",

    // About Section
    "about.title": "O mnie",
    "about.description":
      "Jestem pasjonatem administracji systemów i DevOps z doświadczeniem w sieciach, bezpieczeństwie i zarządzaniu infrastrukturą. Obecnie pełnię funkcję CEO raidvm.com hosting, jednocześnie studiując IT.",
    "about.sysadmin.title": "Administracja Systemami",
    "about.sysadmin.description":
      "Ekspert w zarządzaniu i optymalizacji środowisk serwerowych Linux i Windows dla maksymalnej wydajności i niezawodności.",
    "about.networking.title": "Sieci",
    "about.networking.description":
      "Specjalizacja w złożonych konfiguracjach sieciowych, w tym VPN WireGuard, tunelach GRE i zaawansowanych konfiguracjach routingu.",
    "about.security.title": "Bezpieczeństwo",
    "about.security.description":
      "Wdrażanie solidnych konfiguracji firewalli i protokołów bezpieczeństwa w celu ochrony krytycznej infrastruktury i danych.",
    "about.devops.title": "DevOps",
    "about.devops.description":
      "Łączenie rozwoju i operacji za pomocą potoków CI/CD, infrastruktury jako kodu i zautomatyzowanych strategii wdrażania.",

    // Skills Section
    "skills.title": "Umiejętności Techniczne",
    "skills.description": "Moja wiedza obejmuje różne dziedziny infrastruktury IT i operacji.",
    "skills.sysadmin": "Administracja Systemami",
    "skills.networking": "Sieci",
    "skills.security": "Bezpieczeństwo",
    "skills.devops": "DevOps",

    // Projects Section
    "projects.title": "Wyróżnione Projekty",
    "projects.description": "Wybór moich profesjonalnych projektów i technicznych implementacji.",
    "projects.raidvm.title": "RaidVM Hosting",
    "projects.raidvm.description":
      "Platforma hostingowa o wysokiej wydajności oferująca VPS, serwery dedykowane i rozwiązania hostingowe z zarządzaniem.",
    "projects.wireguard.title": "Sieć Mesh WireGuard VPN",
    "projects.wireguard.description":
      "Skalowalna sieć mesh wykorzystująca WireGuard do bezpiecznej, wydajnej łączności między rozproszonymi systemami.",
    "projects.deployment.title": "Zautomatyzowany Pipeline Wdrożeniowy",
    "projects.deployment.description":
      "Pipeline CI/CD do automatyzacji dostarczania infrastruktury i wdrażania aplikacji w wielu środowiskach.",
    "projects.monitoring.title": "System Monitorowania Sieci",
    "projects.monitoring.description":
      "Kompleksowe rozwiązanie do monitorowania wydajności, bezpieczeństwa i dostępności sieci.",

    // Contact Section
    "contact.title": "Skontaktuj się",
    "contact.description": "Masz projekt na myśli lub chcesz omówić potencjalną współpracę? Śmiało się odezwij!",
    "contact.info": "Informacje Kontaktowe",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.discord": "Discord",
    "contact.connect": "Połącz się na Discord",

    // Footer
    "footer.quickLinks": "Szybkie Linki",
    "footer.connect": "Połącz",
    "footer.rights": "Wszelkie prawa zastrzeżone.",

    // Skills
    "skill.linux": "Zarządzanie Serwerami Linux",
    "skill.windows": "Windows Server",
    "skill.virtualization": "Wirtualizacja",
    "skill.containerization": "Konteneryzacja",
    "skill.proxmox": "Proxmox",
    "skill.vmware": "VMware",
    "skill.wireguard": "WireGuard",
    "skill.gre": "Tunele GRE",
    "skill.bgp": "BGP",
    "skill.vlans": "VLANy",
    "skill.loadbalancing": "Równoważenie Obciążenia",
    "skill.firewalls": "Firewalle",
    "skill.ids": "IDS/IPS",
    "skill.audit": "Audyt Bezpieczeństwa",
    "skill.pentest": "Testy Penetracyjne",
    "skill.ssl": "SSL/TLS",
    "skill.access": "Kontrola Dostępu",
    "skill.docker": "Docker",
    "skill.kubernetes": "Kubernetes",
    "skill.cicd": "CI/CD",
    "skill.ansible": "Ansible",
    "skill.git": "Git",
    "skill.monitoring": "Monitoring",

    // Tags
    "tag.infrastructure": "Infrastruktura",
    "tag.virtualization": "Wirtualizacja",
    "tag.networking": "Sieci",
    "tag.security": "Bezpieczeństwo",
    "tag.wireguard": "WireGuard",
    "tag.linux": "Linux",
    "tag.devops": "DevOps",
    "tag.automation": "Automatyzacja",
    "tag.docker": "Docker",
    "tag.monitoring": "Monitoring",
    "tag.alerting": "Alerty",
    "tag.dashboard": "Dashboard",
    "tag.analytics": "Analityka",

    // Language
    language: "Język",
    "language.en": "Angielski",
    "language.pl": "Polski",
  },
}
