import { IoChevronForward } from 'react-icons/io5'
import Product1Image from '@assets/menu/product1.png'
import Product2Image from '@assets/menu/product2.png'
import Tool1Image from '@assets/menu/tool1.png'
import Tool2Image from '@assets/menu/tool2.png'

const MENU_LINKS = [
  {
    name: 'Product',
    url: '/product',
    icon: IoChevronForward,
    submenu: [
      { name: 'AFEELA 1', url: '/product/afeela-1', image: Product2Image },
      { name: 'Reserve', url: '/product/reserve', image: Product1Image, dataName: 'Reserve' },
    ],
  },
  {
    name: 'Shopping Tools',
    url: '/shopping-tools',
    icon: IoChevronForward,
    submenu: [
      { name: 'How to Order', url: '/Tools/afeela-1', image: Tool1Image },
      { name: 'Vehicle and Ownership Support', url: '/Tools/afeela-2', image: Tool2Image },
    ],
  },
  {
    name: 'Updates',
    url: '/updates',
    icon: IoChevronForward,
    submenu: [
      { name: 'News', url: '/updates/news' },
      { name: 'Stories', url: '/updates/stories' },
      { name: 'Co-Creation', url: '/updates/co-creation' },
    ],
  },
  {
    name: 'Support',
    url: '/support',
    icon: IoChevronForward,
    submenu: [
      { name: 'FAQ', url: '/support/faq' },
      { name: 'Contact Us', url: '/support/contact' },
    ],
  },
  {
    name: 'Language',
    icon: IoChevronForward,
    submenu: [
      { name: 'English', langCode: 'en' },
      { name: 'Polski', langCode: 'pl' },
    ],
  },
  { name: 'Events', url: '/events', icon: null, dataName: 'Events' },
  { name: 'Log In / Sign Up', url: '/auth', icon: null, dataName: 'auth' },
]

export default MENU_LINKS
