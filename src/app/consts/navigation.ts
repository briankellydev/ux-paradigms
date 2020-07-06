import { faHome, faTachometerAlt, faAlignLeft, faSignInAlt, faUserCircle, faHatWizard } from '@fortawesome/free-solid-svg-icons';

export const NAVIGATION = [
    {
      name: 'Home',
      icon: faHome,
      route: '/',
      hideOnHome: true
    },
    {
      name: 'Dashboard',
      icon: faTachometerAlt,
      route: '/dashboard',
      description: 'A dashboard with graphs and table data display'
    },
    {
      name: 'Form',
      icon: faAlignLeft,
      route: '/form',
      description: 'A reactive form to collect data from users'
    },
    {
      name: 'Login',
      icon: faSignInAlt,
      route: '/login',
      description: 'A login workflow'
    },
    {
      name: 'Profile',
      icon: faUserCircle,
      route: '/profile',
      description: 'A user profile'
    },
    {
      name: 'Wizard',
      icon: faHatWizard,
      route: '/wizard',
      description: 'A multi-step wizard workflow'
    }
  ];
