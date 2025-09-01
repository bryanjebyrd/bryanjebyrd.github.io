const experiences = [
  {
    title: 'Engineering Manager',
    company_name: 'Swyfft',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'September 2023 - Present',
    points: [
      'Led the first claims-focused dev team; established domains, monitoring, and alerts.',
      'Built catastrophe-response tools (automated emails, admin dashboards, document uploads) to support policyholders and adjusters.',
      'Integrated property inspection data to reduce quote decision times.',
      'Used ChatGPT/Claude/Copilot to accelerate delivery (fraud scoring, data enrichment, decision tools), cutting weeks off timelines.',
      'Automated PR workflows linking GitHub and YouTrack; reduced CI test runtime from ~15m to ~8m.',
      'Built a claim payment reconciliation system, saving ~20 hours/week of manual effort.',
    ],
  },
  {
    title: 'Senior Director of Software Engineering',
    company_name: 'Prime Trust',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'February 2022 - September 2023',
    points: [
      'Scaled team from 3 → 12; delivered compliance & custody solutions aiding a $100M raise.',
      'Designed the core ledger (Node.js, TypeScript, Kafka/RabbitMQ, Docker), replacing an $800k vendor system.',
      'Built electronic & postmail tax reporting platform, eliminating ~$1.1M in vendor/contracting costs.',
      'Identified stale integration data and automated offboarding, saving ~$500k in API costs.',
      'Cut release time by >90% via GitHub Actions/Jira/Bash; avoided ~$300k/year in extra headcount.',
      'Replatformed core API from Heroku to AWS to achieve five-nines uptime and 7-figure infra savings (total >$1.8M).',
    ],
  },
  {
    title: 'Director of Software Engineering',
    company_name: 'Commissions Inc.',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'October 2020 - February 2022',
    points: [
      'Directed engineering for a large real-estate lead-gen platform and enterprise sales extensions.',
      'Grew org from 1 → 20 across 4 teams; delivered 15+ products/tools (Node, Vue, C#, AWS).',
      'Led mentorship, career frameworks, and succession planning for seniors/leads/managers.',
      'Replatformed to AWS; improved Google/Facebook integrations; reduced op costs by ~60%.',
    ],
  },
  {
    title:
      'Principal Software Engineer (Engineering Manager & Cloud Architect)',
    company_name: 'Commissions Inc.',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'October 2018 - October 2020',
    points: [
      'Championed system design & DDD across distributed systems (Node.js, C#, Vue, AWS).',
      'Created microservice templates (C# & Node) to ship ideas → product in ≤10 business days.',
      'Increased conversion rate to 15–18% via expanded test suites and product initiatives.',
    ],
  },
  {
    title: 'Lead Engineer (Engineering Manager)',
    company_name: 'Commissions Inc.',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'May 2016 - October 2018',
    points: [
      'Implemented CI/CD automations (GitHub Actions, Jenkins, Jira Automation, Bash) to cut operating costs by ~60%.',
      'Built first enterprise-level platform extension enabling 7–8 figure contracts.',
    ],
  },
  {
    title: 'Consultant',
    company_name: 'Delaware Consulting',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'November 2015 - April 2016',
    points: [
      'Developed CMS solutions with .NET, jQuery, Knockout, TypeScript, Bootstrap, Sitecore, Commerce Server, SQL Server, Azure, and Selenium for global customers.',
      'Implemented CI/CD pipeline configurations that decreased build times and reduced manual QA workload.',
    ],
  },
  {
    title: 'Programmer Analyst II',
    company_name: 'Alabama Farmers Federation',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'November 2014 - November 2015',
    points: [
      'Built a central code library with 90%+ coverage, reducing duplicate utility code and increasing efficiency.',
      'Led training for 25 mainframe developers and 5 graduates on C#, CI/CD, and Entity Framework, halving migration timelines from COBOL to C#.',
      'Created coding standards for C#, frontend, and EF that lowered bug counts and QA times.',
      'Boosted performance of primary internal app by 93% via query and rendering optimizations.',
      'Improved roadside assistance app performance by 88% using optimized C# LINQ queries.',
    ],
  },
  {
    title: '.NET Developer',
    company_name: 'Allure Global Solutions, Inc.',
    icon: 'icon',
    iconBg: '#FFF',
    date: 'May 2012 - November 2014',
    points: [
      'Retained a multi-million dollar client by cutting memory consumption of the core product by 60%.',
      'Designed next-gen digital media software on .NET Core & MySQL/Linux, reducing licensing and hardware costs.',
      'Automated error handling with bash scripts, reducing weekend support tickets by 20%.',
    ],
  },
];

export default experiences;
