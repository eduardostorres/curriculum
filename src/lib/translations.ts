export const translations = {
  en: {
    meta: {
      pageSuffix: 'Resume',
      description:
        'Software developer with 2+ years of experience building robust, scalable, user-focused web applications from Mexico City.'
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
        'Software developer with more than 2 years of experience building robust, scalable, user-focused web applications. I specialize in full stack development, combining modern frontends with solid backends, well-designed APIs, and optimized databases.\n\nI have worked on ERP-style business systems, improving critical processes and communication between systems. I complement my profile with networking knowledge (CCNA), which allows me to understand how applications interact at the infrastructure level.\n\nI stand out for writing clean, maintainable, results-oriented code. I am currently based in Mexico City and looking to contribute real value while continuing to grow technically.'
    },
    experience: {
      current: 'Present',
      items: [
        {
          position: 'PHP Developer',
          at: 'at',
          summary:
            'Development and maintenance of internal ERP systems focused on real-time order management.\n\nI optimized communication between system modules, improving the efficiency of information flows and reducing response times.\n\nI managed Linux (Ubuntu) environments, automating deployment and maintenance processes to ensure stability, availability, and performance.\n\nI implemented Git version control best practices, making collaboration and code traceability easier.'
        },
        {
          position: 'Junior Full Stack Developer',
          at: 'at',
          summary:
            'Full stack development of a web platform, implementing modern, responsive interfaces focused on user experience.\n\nI designed and implemented role-based authentication and access control systems, strengthening application security.\n\nI integrated frontend and backend through APIs, ensuring efficient communication and proper data management.'
        }
      ]
    },
    education: {
      items: [
        {
          area: 'Software Design and Network Engineering',
          summary:
            'Training focused on comprehensive software development, combining programming, systems architecture, and networking.\n\nI build complete solutions that range from backend logic to deployment on real infrastructure.\n\nI apply concepts such as API design, database modeling, and networking fundamentals to build scalable, efficient, well-structured systems.'
        }
      ]
    },
    courses: {
      items: [
        {
          typePlatform: 'Technology training platform',
          summary:
            'Continuous learning in modern web development, focused on JavaScript, React, Astro, and backend development with PHP and Laravel.\n\nExperience with responsive design using Tailwind and Bootstrap.\n\nProficiency with relational databases (MySQL, PostgreSQL) and version control using Git and GitHub.'
        },
        {
          typePlatform: 'Online learning platform',
          summary:
            'Specialized training in web development with JavaScript and PHP, including session handling, data validation, and database integration.\n\nExperience working in Linux (Ubuntu) environments and basic server administration.'
        }
      ]
    },
    certificates: {
      items: [
        {
          summary:
            'Configuration and administration of enterprise networks, including switching, routing, and wireless networking.\n\nImplementation of VLANs, static and dynamic routing, Cisco device configuration, and troubleshooting.\n\nAbility to design stable, secure, scalable networks.'
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
