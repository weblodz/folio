import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { RxLinkedinLogo } from 'react-icons/rx'

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/shmafeela/',
  },
  {
    name: 'Twitter',
    icon: <RiTwitterXFill />,
    url: 'https://x.com/shmAFEELA',
  },
  {
    name: 'LinkedIn',
    icon: <RxLinkedinLogo />,
    url: 'https://www.linkedin.com/company/sony-honda-mobility',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    url: 'https://facebook.com/shmAFEELA',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/channel/UCrZW5b1KF8NddpWHPfc8pMw',
  },
]

export default SOCIAL_LINKS
