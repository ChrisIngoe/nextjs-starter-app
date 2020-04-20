// Menus
const MENUS = [
  {
    name: 'dashboard',
    as: 'a',
    href: '/dashboard/dashboard',
    label: 'Dashboard',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'domains',
    as: 'a',
    href: '/card/posts',
    label: 'Domains',
    icon: 'fas fa-clone',
  },
  {
    name: 'seo',
    as: 'a',
    href: '/form/buttons',
    label: 'SEO',
    icon: 'fas fa-bullseye',
  },
  {
    name: 'ppc',
    as: 'a',
    href: '/table/tables',
    label: 'Pay Per Click',
    icon: 'fas fa-columns',
  },
  {
    name: 'companyinfo',
    as: 'a',
    href: '/page/typography',
    label: 'Company Info',
    icon: 'fas fa-list-ul',
  },
];
// Sub menus
const SUBMENUS = [
  {
    name: 'websites',
    as: 'a',
    href: '/card/employees',
    label: 'Websites',
    icon: 'fas fa-clone',
  },
  {
    name: 'carousels',
    as: 'a',
    href: '/carousel/carousels',
    label: 'Carousels',
    icon: '',
  },
  {
    name: 'pages',
    as: 'a',
    href: '#',
    label: 'Pages',
    icon: '',
    subLinks: [
      {
        name: 'profile',
        as: 'a',
        href: '/page/profile',
        label: 'Profile',
        icon: '',
      },
      {
        name: 'setting',
        as: 'a',
        href: '/page/setting',
        label: 'Settings',
        icon: '',
      },
      {
        name: 'login',
        as: 'a',
        href: '/page/login',
        label: 'Login',
        icon: '',
      },
    ],
  },
  {
    name: 'forms',
    as: 'a',
    href: '/form/forms',
    label: 'Forms',
    icon: '',
  },
  {
    name: 'pages',
    as: 'a',
    href: '#',
    label: 'Pages',
    icon: '',
    subLinks: [
      {
        name: 'profile',
        as: 'a',
        href: '/page/profile',
        label: 'Profile',
        icon: '',
      },
      {
        name: 'setting',
        as: 'a',
        href: '/page/setting',
        label: 'Settings',
        icon: '',
      },
      {
        name: 'login',
        as: 'a',
        href: '/page/login',
        label: 'Login',
        icon: '',
      },
    ],
  },
];

export { MENUS, SUBMENUS };
