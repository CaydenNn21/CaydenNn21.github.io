/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Global Barcoding Technology Sdn Bhd',
    position: 'Software Development Intern',
    url: 'https://www.auto-id.com.my/',
    startDate: '2022-08-01',
    endDate: '2023-03-15',
    highlights: [
      'Collaborated with clients to understand their business needs and developed customized systems and applications.',
      'Managed and administered company databases, ensuring data integrity and performance optimization.',
      'Implemented and maintained networking systems, ensuring seamless office communication and data access',
      'Monitored network security, performed regular updates, and resolved any connectivity issues.',
      'Conducted system analysis and provided recommendations for process improvements.',
    ],
  },
  {
    name: 'Crafty Minds Sdn Bhd',
    position: 'IT Intern - Database Management and Analysis',
    url: 'https://www.craftyminds.com.my/',
    startDate: '2020-07-01',
    endDate: '2020-10-31',
    highlights: [
      'Performed the administration and maintenance of company databases, ensuring data integrity and optimizing performance.',
      'Conducted the generation of comprehensive reports and data analysis, providing critical insights for decision-making.',
    ],
  },
];

export default work;
