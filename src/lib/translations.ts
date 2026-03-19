export const translations = {
  en: {
    meta: {
      pageSuffix: 'Resume',
      description:
        'Full Stack Developer with 3+ years of experience. Specialized in ERP systems, service integrations, and application development with PHP, Java, and JavaScript, focused on performance, maintainability, and business impact.'
    },
    controls: {
      theme: {
        light: 'Switch to light mode',
        dark: 'Switch to dark mode'
      },
      language: {
        es: 'Switch to Spanish',
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
      label: 'Software Engineer | Full Stack Developer',
      emailTitle: 'Send an email to {email}',
      visitProfile: 'Visit my {network}',
      profileAlt: 'Profile picture of {name}',
      downloadCv: 'Download my resume'
    },
    sections: {
      profile: 'Profile',
      experience: 'Work Experience',
      skills: 'Skills',
      education: 'Education',
      certificates: 'Certificates',
      courses: 'Courses',
      projects: 'Projects'
    },
    profile: {
      summary:
        'Full Stack Developer with 3+ years of experience. Specialized in ERP systems, service integrations, and application development with PHP, Java, and JavaScript, focused on performance, maintainability, and business impact.'
    },
    experience: {
      current: 'Present',
      items: [
        {
          position: 'PHP Developer',
          at: 'at',
          summary:
            'I was responsible for developing and maintaining internal ERP systems focused on real-time order management.\n\nDuring this process, I optimized communication between different modules, helping information flow more efficiently and reducing response times.\n\nI also managed Linux (Ubuntu) environments, where I automated deployment and maintenance processes to ensure stable and efficient operation.\n\nIn addition, I worked with Git following best practices, which made team collaboration easier and improved code change tracking.'
        },
        {
          position: 'Junior Full Stack Developer',
          at: 'at',
          summary:
            'I worked on the full stack development of a web platform, creating modern, responsive interfaces centered on user experience.\n\nI also designed and implemented role-based authentication and access control systems, strengthening application security.\n\nIn addition, I integrated the frontend with the backend through APIs, ensuring efficient communication and proper data management.'
        }
      ]
    },
    education: {
      items: [
        {
          area: 'Software Design and Network Engineering',
          summary:
            'Education focused on comprehensive software development, combining programming, systems architecture, and networking.\n\nI build complete solutions that range from backend logic to deployment on real infrastructure.\n\nI apply concepts such as API design, database modeling, and networking fundamentals.'
        }
      ]
    },
    courses: {
      items: [
        {
          typePlatform: 'Technology training platform',
          summary:
            'Continuous training in modern web development, focused on JavaScript, React, Astro, and backend development with PHP and Laravel.\n\nExperience in responsive design with Tailwind and Bootstrap.\n\nWorking knowledge of relational databases (MySQL, PostgreSQL) and version control with Git and GitHub.'
        },
        {
          typePlatform: 'Online learning platform',
          summary:
            'Specialization in web development with JavaScript and PHP, including session handling, data validation, and database integration.\n\nExperience in Linux (Ubuntu) environments and basic server administration.'
        }
      ]
    },
    certificates: {
      items: [
        {
          summary:
            'Configuration and administration of enterprise networks, including switching, routing, and wireless networking.\n\nImplementation of VLANs, static and dynamic routing, Cisco device configuration, and troubleshooting.\n\nAbility to design stable, secure, and scalable networks.'
        },
        {
          summary:
            'Networking fundamentals, OSI and TCP/IP models, IPv4/IPv6 addressing, and connectivity principles.\n\nA solid foundation for understanding communication between systems.'
        },
        {
          summary:
            'IT fundamentals: hardware, operating systems, networking, and security.\n\nUnderstanding of the full environment where applications run.'
        }
      ]
    },
    projects: {
      items: [
        {
          description: 'Interactive learning platform built around narrative and programming challenges.',
          highlights: ['Gamified experience', 'Hands-on learning', 'Project in progress'],
          openProject: 'View project {name}',
          sourceCode: 'View source code for project {name}',
          active: 'Active project'
        },
        {
          description: 'Daily programming challenges focused on improving logic and JavaScript skills.',
          highlights: ['1M+ visits', 'Multilingual', 'JavaScript & TypeScript'],
          openProject: 'View project {name}',
          sourceCode: 'View source code for project {name}',
          active: 'Active project'
        },
        {
          description: 'Interactive programming game with challenges and hidden mechanics.',
          highlights: ['2,000+ active users', 'Multilingual'],
          openProject: 'View project {name}',
          sourceCode: 'View source code for project {name}',
          active: 'Active project'
        },
        {
          description: 'Online playground for writing and sharing HTML, CSS, and JavaScript code.',
          highlights: ['100K monthly visits', 'Collaborative'],
          openProject: 'View project {name}',
          sourceCode: 'View source code for project {name}',
          active: 'Active project'
        }
      ]
    }
  }
} as const;

export type SupportedLanguage = 'es' | keyof typeof translations;
