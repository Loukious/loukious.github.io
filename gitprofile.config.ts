// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'loukious', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'wael-hasnaoui',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'SAGEMCOM',
      position: 'Software Developer',
      from: 'Jan 2024',
      to: 'Apr 2024',
      companyLink: 'https://sagemcom.com/',
    },
    {
      company: 'Clevory Training',
      position: 'Full-stack Developer',
      from: 'Jul 2023',
      to: 'Sep 2023',
      companyLink: 'https://www.clevory.com/',
    },
  ],
  certifications: [
    {
      name: 'PCAP – Certified Associate Python Programmer',
      body: 'Python Institute',
      year: 'August 2025',
      link: 'https://www.credly.com/earner/earned/badge/b7fbde8d-ca10-4d88-9e88-b79c00c4f8d1',
    },
    {
      name: 'RHCSA – Red Hat Certified System Administrator',
      body: 'Red Hat',
      year: 'August 2025 - August 2028',
      link: 'https://www.credly.com/earner/earned/badge/6e2f6970-efad-4e48-bd30-0c11437e0fc8',
    },
    {
      name: 'eWPTx – Web Application Penetration Tester eXtreme',
      body: 'eLearnSecurity / INE',
      year: 'October 2025 - October 2028',
      link: 'https://certs.ine.com/b9c90832-545c-4383-8187-5e4d090b611a',
    },
    {
      name: 'eCPPT – Certified Professional Penetration Tester',
      body: 'eLearnSecurity / INE',
      year: 'January 2026 - January 2029',
      link: 'https://certs.ine.com/277b7589-369e-4b9a-b1e7-0f8467052580',
    },
    {
      name: 'eMAPT – Mobile Application Penetration Tester',
      body: 'eLearnSecurity / INE',
      year: 'October 2025 - October 2028',
      link: 'https://certs.ine.com/5f09001f-e221-41d5-821c-f7e7268b5619',
    },
    {
      name: 'eWPT – Web Application Penetration Tester',
      body: 'eLearnSecurity / INE',
      year: 'September 2025 - September 2028',
      link: 'https://certs.ine.com/477c3fd8-bee2-4596-ba68-5f072bdfb212',
    },
    {
      name: 'eJPT – Junior Penetration Tester',
      body: 'eLearnSecurity / INE',
      year: 'July 2025 - July 2028',
      link: 'https://certs.ine.com/e552bb67-c26d-40dd-a21b-d45c3212eed9',
    },
    {
      name: 'Big Data Engineer Certificate',
      body: 'IBM',
      year: 'December 2023',
      link: 'https://www.credly.com/earner/earned/badge/38145e4f-8780-4b10-a959-fba543239a35',
    },
  ],
  educations: [
    {
      institution: 'TEK-UP University of Digital Sciences',
      degree: 'Engineering Degree in Computer Systems and Network Security',
      from: 'Sep 2024',
      to: 'Present',
    },
    {
      institution: 'The Higher Institute of Information Technologies and Communication',
      degree: 'Bachelor\'s Degree in Software Engineering and Information Systems',
      from: '',
      to: 'June 2024',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-WMF07VLLC0', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '89251cbe0e55b', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  enablePWA: true,
};

export default CONFIG;
