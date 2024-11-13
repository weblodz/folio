import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { RxLinkedinLogo } from 'react-icons/rx'
import styles from './socials.module.scss'

function Socials() {
  return (
    <div className={styles.iconLinks}>
      <ul>
        <li>
          <a href="https://www.instagram.com/shmafeela/" target="_blank" aria-label="Instagram link">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://x.com/shmAFEELA" target="_blank" aria-label="X link">
            <RiTwitterXFill />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/sony-honda-mobility" target="_blank" aria-label="LinkedIn link">
            <RxLinkedinLogo />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/shmAFEELA" target="_blank" aria-label="Facebook link">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCrZW5b1KF8NddpWHPfc8pMw" target="_blank" aria-label="YouTube link">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
