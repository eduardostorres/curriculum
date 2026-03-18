export const translations = {
  en: {
    meta: {
      pageSuffix: 'Resume',
      description:
        'Full stack developer based in Mexico City, focused on building fast, clear, and maintainable web products.'
    },
    controls: {
      theme: {
        light: 'Switch to light mode',
        dark: 'Switch to dark mode'
      },
      language: {
        es: 'Cambiar a español',
        en: 'Switch to English'
      },
      badges: {
        auto: 'Auto',
        dark: 'Dark',
        light: 'Light',
        langEs: 'ES',
        langEn: 'EN'
      }
    },
    hero: {
      label: 'Software Engineer · Full Stack Developer',
      summaryLead:
        'I build web experiences that feel clear, fast, and maintainable, connecting polished interfaces with solid business logic.',
      ctaEmail: 'Email me',
      ctaCv: 'View resume',
      emailTitle: 'Send an email to {email}',
      visitProfile: 'Visit my {network}',
      profileAlt: 'Profile picture of {name}',
      stackTitle: 'Core technologies',
      cardCopy: 'Product-minded profile focused on performance and long-term maintainability.',
      stats: {
        experienceLabel: 'Experience',
        experienceValue: 'years building web products',
        focusLabel: 'Focus',
        focusValue: 'Frontend + Backend',
        focusBody: 'Clean UI, efficient APIs, and reliable data layers',
        stackLabel: 'Stack',
        stackBody: 'Fast, scalable, and well-structured solutions'
      }
    },
    sections: {
      profile: 'Profile',
      experience: 'Work Experience',
      skills: 'Skills',
      education: 'Education',
      certificates: 'Certificates',
      courses: 'Courses'
    },
    profile: {
      summary:
        'Full stack software developer with 2+ years of experience building functional, clear, and results-driven web products.',
      highlightsTitle: 'What I bring',
      highlights: [
        'Clear, intuitive interfaces designed for usability.',
        'API, business logic, and relational database integration.',
        'Continuous improvements in performance, maintainability, and code organization.'
      ]
    },
    experience: {
      current: 'Present',
      items: [
        {
          position: 'PHP Developer',
          at: 'at',
          summary:
            'I developed and maintained internal ERP systems focused on real-time order management.'
        },
        {
          position: 'Junior Full Stack Developer',
          at: 'at',
          summary:
            'I built full stack web solutions with responsive interfaces and a strong focus on user experience.'
        }
      ]
    },
    education: {
      items: [
        {
          area: 'Software Design and Network Engineering',
          summary:
            'A degree program focused on software development, systems architecture, and networking.'
        }
      ]
    },
    courses: {
      items: [
        {
          typePlatform: 'Technology learning platform',
          summary:
            'Continuous learning in modern web development, with a focus on JavaScript, React, Astro, PHP, and Laravel.'
        },
        {
          typePlatform: 'Online learning platform',
          summary:
            'Focused study in JavaScript, PHP, Linux environments, and practical web development workflows.'
        }
      ]
    },
    certificates: {
      items: [
        {
          summary:
            'Enterprise networking, switching, routing, and wireless infrastructure management.'
        }
      ]
    }
  }
} as const;

export type SupportedLanguage = 'es' | keyof typeof translations;
