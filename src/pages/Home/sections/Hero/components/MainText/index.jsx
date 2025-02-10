import { useTranslation } from 'react-i18next'
import FullMovieLink from '@pages/Home/sections/Hero/components/FullMovieLink'
import styles from './mainText.module.scss'

export default function MainText() {
  const { t } = useTranslation('nsHero')

  return (
    <div className={styles.container}>
      <h1 className={styles.mainText}>
        {t("mobility")} <br /> {t("emotionalConnection")}
      </h1>
      <FullMovieLink />
    </div>
  )
}
