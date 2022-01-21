/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  someSidebar: {
    'Introduction': ['ch0-gettingstarted'],
    'Computer Hardware': ['ch01-components', 'ch02-peripherals', 'ch03-devices'],
    'Computer Software': ['ch04-operatingsystems', 'ch05-software', 'ch06-softwaredev', 'ch07-databases'],
    'IT Infrastructure': ['ch08-networking', 'ch09-securityconcepts', 'ch10-securitypractices', 'ch11-businesscontinuity'],
    'Exam Objectives': ['objective-01', 'objective-02', 'objective-03', 'objective-04', 'objective-05', 'objective-06']
  },
  /**someSidebar: [
    {
      type: 'category',
      label: 'Introducton',
      items: ['ch0-gettingstarted'],
    },
    {
      type: 'category',
      label: 'Computer Hardware',
      items: 'ch01-components', 'ch02-peripherals', 'ch03-devices',
    },
    {
      type: 'category',
      label:'Computer Software'
      items: 'ch04-operatingsystems', 'ch05-software', 'ch06-softwaredev', 'ch07-databases',
    },
    {
      type: 'category',
      label:'IT Infrastucture'
      items: 'ch08-networking', 'ch09-securityconcepts', 'ch10-securitypractices', 'ch11-businesscontinuity',
    },
    {
      type: 'category',
      label: 'Exam Objectives'
      items: 'objective-01', 'objective-02', 'objective-03', 'objective-04', 'objective-05', 'objective-06',
    },
  ],
   */
};

module.exports = sidebars;
