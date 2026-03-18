export const translations = {
  en: {
    meta: {
      pageSuffix: 'Resume',
      description:
        'Software developer with 2+ years of experience building user-focused web solutions from Mexico City.'
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
      label: 'Software Developer',
      emailTitle: 'Send an email to {email}',
      visitProfile: 'Visit my {network}',
      profileAlt: 'Profile picture of {name}'
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
        '2+ years of experience as a web developer. I currently live in Mexico City, Mexico. I have contributed to the success of key projects, demonstrating my ability to deliver effective, user-centered web solutions.'
    },
    experience: {
      current: 'Present',
      items: [
        {
          position: 'PHP Developer',
          at: 'at',
          summary:
            'I contributed to the development and maintenance of ERP intranet systems, improving real-time order management and communication between systems. I also handled version control and process automation on Linux (Ubuntu) servers, ensuring system stability.'
        },
        {
          position: 'Junior Full Stack Developer',
          at: 'at',
          summary:
            'I designed and implemented attractive, functional web interfaces, while also developing authentication and role management systems to strengthen platform security.'
        }
      ]
    },
    education: {
      items: [
        {
          area: 'Software Design and Network Engineering',
          summary:
            'A degree program that prepares professionals in areas such as programming, cybersecurity, and network management.'
        }
      ]
    },
    courses: {
      items: [
        {
          typePlatform: 'Online learning platform',
          summary:
            'On this platform, I learned programming fundamentals and built strong JavaScript skills, especially with React.js and Astro. I also explored web development with PHP and Laravel, complemented by tools such as Tailwind and Bootstrap. For data management, I worked with both MySQL and PostgreSQL databases. I also strengthened my version control workflow with Git and GitHub.'
        },
        {
          typePlatform: 'Online learning platform',
          summary:
            'Through Udemy, I strengthened my JavaScript and PHP skills with a focus on web development. I also gained experience with Linux (Ubuntu), and the PHP courses gave me an advanced understanding of the language, including session handling, form validation, and MySQL database interaction.'
        }
      ]
    },
    certificates: {
      items: [
        {
          summary:
            'IT Essentials is a Cisco certification that provides a solid foundation in core information technology concepts, covering hardware, software, networking, and security.'
        }
      ]
    }
  }
} as const;

export type SupportedLanguage = 'es' | keyof typeof translations;
