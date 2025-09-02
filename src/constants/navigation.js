import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

const navlinks = [
  {
    id: 'about',
    title: 'About',
    component: About,
  },
  {
    id: 'experience',
    title: 'Experience',
    component: Experience,
  },
  {
    id: 'projects',
    title: 'Playbook',
    component: Projects,
  },
  {
    id: 'contact',
    title: 'Contact',
    component: Contact,
  },
];

export default navlinks;
