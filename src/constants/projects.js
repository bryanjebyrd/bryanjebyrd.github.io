import { googleSheet, googleDoc } from '../assets';

const projects = [
  {
    name: 'Capacity Planning',
    description:
      'A spreadsheet that aids in project mananagement and personnel allocation. Visualizes current and future project needs while monitoring for burnout risk.',
    tags: [],
    image: googleSheet,
    source_code_link:
      'https://docs.google.com/spreadsheets/d/191l7aj3C1tzflznbMVOs3DyfqnfwUcC6h891sWp1GB0/edit?usp=sharing',
  },
  {
    name: 'Project Estimation',
    description:
      'A tool (does not have to be a spreadsheet) that helps estimate project time ranges based on sprint velecity and team capacity. The goal is to create a floor and ceiling deadlines.',
    tags: [],
    image: googleSheet,
    source_code_link:
      'https://docs.google.com/spreadsheets/d/1LT4yfx5JjtU6iP_kvCtkyzSPJpZzMhzmntqeg55DhP8/edit?usp=sharing',
  },
  {
    name: 'True North',
    description:
      'A one-pager that outlines the vision, mission, and values of the engineering team. It serves as a guiding light for decision-making and prioritizaiton -- the overall way we work.',
    tags: [],
    image: googleDoc,
    source_code_link:
      'https://docs.google.com/document/d/1Gj7i-6cgRHO_fdhMlgHeM7i7bG7bHkm9QTMz0Zj44_w/edit?usp=sharing',
  },
];

export default projects;
