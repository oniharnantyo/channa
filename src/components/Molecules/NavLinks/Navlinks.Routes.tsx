import { TRUE } from 'sass';

export const getRoutes = () => {
  return [
    {
      key: 'tentang-kami',
      name: 'Tentang Kami',
      isDropdown: true,
      dropdowns: [
        {
          key: 'profil',
          path: '/profil',
          name: 'Profil',
        },
        {
          key: 'sejarah',
          path: '/sejarah',
          name: 'Sejarah',
        },
      ],
    },
    {
      key: 'acara',
      path: '/acara',
      name: 'Acara',
      isDropdown: false,
    },
    {
      key: 'artikel',
      path: '/artikel',
      name: 'Artikel',
      isDropdown: false,
    },
    {
      key: 'freebook',
      path: '/freebook',
      name: 'Freebook',
      isDropdown: false,
    },
    {
      key: 'insight',
      path: 'https://www.insightvidyasena.com',
      name: 'Insight',
      isDropdown: false,
      isBlankTarget: true,
    },
    {
      key: 'dana',
      path: '/dana',
      name: 'Dana',
      isDropdown: false,
    },
  ];
};
