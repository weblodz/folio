import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from 'classnames'
import { Link } from 'react-router-dom'
import image from '@assets/latestUpdates/image.webp'
import image1 from '@assets/latestUpdates/image1.webp'
import image2 from '@assets/latestUpdates/image2.webp'
import image3 from '@assets/latestUpdates/image3.webp'
import image4 from '@assets/latestUpdates/image4.webp'
import styles from './updates.module.scss'

function Updates() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation('nsUpdates')

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.name}>{t('latestUpdates')}</h1>
        <div className={styles.news_wrapper}>
          <div className={styles.column}>
            <div className={styles.main_image_wrapper}>
              <img className={cls(styles.image, { [styles.hovered]: isHovered })} src={image} />
            </div>
          </div>
          <div className={styles.column}>
            <div
              className={styles.article}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={styles.date}>12.20.2024</div>
              <div className={styles.description}>
                <p>{t('line1')}</p>
                <p>{t('line2')}</p>
                <p>{t('line3')}</p>
              </div>
              <Link to="/news" className={styles.read_more}>
                {t('readMore', { ns: 'nsCommon' })}
              </Link>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.news_grid}>
              <div className={styles.grid_column}>
                <div className={styles.grid_item}>
                  <img src={image1} />
                </div>
                <div className={styles.grid_item}>
                  <img src={image2} />
                </div>
              </div>

              <div className={styles.grid_column}>
                <div className={styles.grid_item}>
                  <img src={image3} />
                </div>
                <div className={styles.grid_item}>
                  <img src={image4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updates
