// app/page.tsx
import Head from 'next/head';
import '../styles/style.css';
import '../styles/responsive.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal informacyjny</title>
        <link rel="icon" href="/spotify.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <div className="container">
          <div className="header__content">
            <div className="header__info">
              <img src="/img/info.png" alt="Logo" className="header__logo" />
              <div className="header__title">Portal informacyjny</div>
            </div>
            <div className="header__icons">
              <div className="header__subtitle">Pavlo Sanahurskyi (album: 123933)</div>
              <img src="/img/student.png" alt="Logo" id="header__icon" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="content">
            {/* Ліва колонка */}
            <div className="content__left bordered">
              <div className="content__title">
                <div className="text-small-muted">opublikowano: 1 maja 2025, 07:00</div>
                <div className="title">SPOTIFY</div>
              </div>
              <section className="image">
                <img src="/img/www.png" alt="Battleship" className="image" />
                <img src="/img/image.png" alt="Battleship" className="image" />
              </section>
              <section>
                <p>
                  <span className="span">Spotify</span>  to szwedzka platforma streamingowa, która zrewolucjonizowała sposób, w jaki ludzie na całym świecie słuchają muzyki. Została założona w 2006 roku w Sztokholmie przez Daniela Eka i Martina Lorentzona jako odpowiedź na rosnące piractwo muzyczne i potrzebę stworzenia legalnej alternatywy dla pobierania plików MP3. Nazwa „Spotify” powstała przypadkowo – według Eka była wynikiem źle usłyszanego słowa, które później zinterpretowano jako połączenie angielskich słów „spot” i „identify” (czyli „zlokalizować” i „zidentyfikować”
                </p>
              </section>
              {/* тут додаєш інші секції, якщо потрібно */}
            </div>

            {/* Права колонка */}
            <div className="content__right bordered">
              <div className="content__right__top">
                <img src="/img/ósmyfy.png" alt="Point" className="point" />
              </div>
              <section className="margin">
                <div className="section-title">Pierwsze logo Spotify — 2008</div>
                <div className="section-content">
                  Pierwsze logo Spotify — 2008 Pierwsze logo Spotify zaprojektowane w 2008 roku zostało zainspirowane popularnym projektem z lat 2000. Pierwsze logo składało się z nazwy marki napisanej czcionką szeryfową na biało. Rzadko się zdarzało, aby firma streamingowa online używała zieleni awokado jako tła swojego logo. I nadal rzadko zdarza się, aby duże marki wybierały zieleń jako główny kolor marki. Nieco ciemniejszy kolor został użyty do obrysowania liter, aby zwiększyć kontrast liter z tłem. Firma umieściła lekko pochyloną zakrzywioną linię nad literą „O”, aby nadać logo atrakcyjny wygląd. Dodatek ten został wykonany jako aluzja do fal dźwiękowych i jest również uważany za reprezentację streamingu muzyki. Pierwsze logo Spotify było używane od 2008 do 2013 roku bez żadnej drobnej aktualizacji.
                </div>
              </section>
              {/* Інші секції правої колонки */}
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer__content">
            <div className="footer__left">
              <div className="footer__title">
                <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">
                  <img src="/img/mb1.png" alt="Logo" className="header__logo2" />
                </a>
              </div>
            </div>
            <div className="footer__right">
              <div style={{ fontWeight: 600 }}>Copyright : Pavlo Sanahurskyi</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
