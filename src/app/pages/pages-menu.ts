import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
 
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'PK',
        link: '/pages/tables/pk',
      },
      {
        title: 'SP3k',
        link: '/pages/tables/sp3k',
      },
    ],
  },
  {title:"Get Data",
  icon: "nb-gear",
  link:'/pages/getdata'
},
];
