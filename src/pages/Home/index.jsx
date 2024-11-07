import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <a className={'skip-link'}></a>
      <header className={'common-global-header'}></header>
      <main id={'main'} className={'pages-main'}>
        <section data-anime={'mv'}>
          <div className={'pages-mv'}>
            <div className={'pages-mv__container'}>
              <h1></h1>
              <div className={'pages-mv__button'}></div>
            </div>
            <div className={'pages-mv__player'}>
              <div className={'common-modules-video-button-2'}>
                <button>
                  <svg></svg>
                </button>
                <button>
                  <svg></svg>
                </button>
              </div>
            </div>
            <div className={'pages-mv__bg'}>
              <div className={'pages-mv__bg__inner'}>
                <video>
                  <source />
                </video>
              </div>
            </div>
            <a className={'pages-mv__newsletter'}>
              <dl>
                <dt></dt>
                <dd></dd>
              </dl>
              <span>
                <svg></svg>
              </span>
            </a>
          </div>
        </section>
        <section className={'pages-prototype'}>
          <div className={'pages-prototype__container'}>
            <h2></h2>
            <p></p>
            <div className={'pages-prototype__link'}>
              <a></a>
            </div>
          </div>
          <div className={'pages-prototype__movie'}>
            <div className={'pages-prototype__movie_inner'}>
              <video>
                <source />
              </video>
              <picture>
                <source />
                <img />
              </picture>
              <div className={'pages-prototype__player'}>
                <div className={'common-modules-video-button-2'}>
                  <button>
                    <svg></svg>
                  </button>
                  <button>
                    <svg></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-anime={'pages-updates'}>
          <div className={'pages-updates__container'}>
            <h3></h3>
            <ul></ul>
          </div>
        </section>
        <section data-anime={'pages-discover'}>
          <div className={'pages-discover__container'}>
            <div className={'pages-discover__header'}>
              <h2></h2>
              <h3></h3>
            </div>
            <div className={'pages-discover__content'}>
              <div className={'pages-discover__content_inner'}>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className={'pages-discover__footer'}>
              <a></a>
            </div>
            <div className={'pages-discover__thumb'}>
              <a>
                <img />
              </a>
            </div>
          </div>
        </section>
        <section data-anime={'pages-about'}>
          <div className={'pages-about__bg'}></div>
          <video>
            <source />
          </video>
          <div className={'pages-about__container'}>
            <h2></h2>
            <ul></ul>
          </div>
          <div className={'pages-about__bg_button'}>
            <div className={'common-modules-video-button-2'}>
              <button>
                <svg></svg>
              </button>
              <button>
                <svg></svg>
              </button>
            </div>
          </div>
        </section>
      </main>
      <div className={'to-top'}></div>
      <footer className={'common-global-footer'}></footer>
      <div id={'onetrust-consent-sdk'}></div>
    </div>
  )
}
