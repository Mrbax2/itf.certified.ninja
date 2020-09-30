module.exports = {
  title: 'IT Fundamentals Handbook',
  tagline: 'Jumpstart Your IT Career',
  url: 'https://itf.gunnaraas.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gunnaraas', // Usually your GitHub org/user name.
  projectName: 'fundamentals-handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IT Fundamentals Handbook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/mncfs-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'ch0-gettingstarted',
          label: 'Start Reading',
          position: 'right',
        },
        {
          href: 'https://github.com/gunnaraas/fundamentals-handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook Sections',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Computer Hardware',
              to: 'docs/ch1-computingdevices/',
            },
            {
              label: 'Computer Software',
              to: 'docs/ch2-softwareapplications',
            },
            {
              label: 'Advanced Computer Software',
              to: 'docs/ch3-softwaredevelopment',
            },
            {
              label: 'Networking',
              to: 'docs/ch4-networking',
            },
            {
              label: 'Computer Security',
              to: 'docs/ch5-securitythreats',
            },
            {
              label: 'IT Job Skills',
              to: 'docs/ch6-troubleshooting',
            },
          ],
        },
        {
          title: 'Related Sites',
          items: [
            {
              label: 'MNCFS Homepage',
              href: 'https://mncfs.org',
            },
            {
              label: 'CompTIA ITF+ Exam Information',
              href: 'https://www.comptia.org/certifications/it-fundamentals',
            },
            {
              label: 'gunnaraas.com',
              href: 'https://gunnaraas.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Minnesota Computers for Schools.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/fundamentals-handbook/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gunnaraas/fundamentals-handbook',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
