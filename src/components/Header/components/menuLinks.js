import { IoChevronForward } from 'react-icons/io5'
import Product1Image from '@assets/menu/product1.png'
import Product2Image from '@assets/menu/product2.png'

const MENU_LINKS = [
  {
    name: 'About Us',
    url: '/about',
    icon: null,
  },
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
  {
    name: 'Log In',
    url: '/auth',
    icon: null,
    separator: true,
  },
]

export default MENU_LINKS
