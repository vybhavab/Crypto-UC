import { NavItem } from "types/navbar.types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '/design',
      },
      {
        label: 'Roadmap',
        subLabel: 'Timeline and future goals',
        href: '/roadmap',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Updates',
        href: '/updates',
      },
      {
        label: 'About Cardano',
        subLabel: 'Technology Behind UCrypton',
        href: 'https://www.cardano.org/',
      }
    ],
  },
  {
    label: 'Team',
    href: '/ourteam',
  },
  {
    label: 'Presentation',
    href: 'https://docs.google.com/presentation/d/1wBqMQupTYRNESIKb3ByYaKuLSBvJuIy1/edit?usp=sharing&ouid=110764831055152766777&rtpof=true&sd=true',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vybhavb/Crypto-UC'
  }
];
