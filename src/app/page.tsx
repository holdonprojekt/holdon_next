/* eslint-disable @next/next/no-img-element */
import Script from "next/script";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <>
      <div className="header-hamburger">
        <div className="menu-icon">
          <input
            id="checkbox"
            className="menu-icon-checkbox"
            type="checkbox"
            title="menu"
          />
          <div>
            <span />
            <span />
          </div>
        </div>
      </div>
      <header className="header-inactive">
        <div className="header-image">
          <img src="/legacy/assets/telihold2-01.webp" alt="HoldOn logo" />
        </div>
        <div className="header-menus">
          <a href="#project" id="nav-link-project" />
          <a href="#about" id="nav-link-about" />
          <a href="#donate" id="nav-link-donate" />
          <a href="#insta-content" id="nav-link-insta" />
          <a href="#press" id="nav-link-press" />
          <a href="#languages" id="language-selector">
            <span className="material-symbols-outlined">language</span>
          </a>
        </div>
      </header>
      <section className="head">
        <div className="head-image">
          <img src="/legacy/assets/holdcikk-01.webp" alt="HoldOn logo" />
        </div>
        <div className="title">
          <h1 id="page-title" />
        </div>
        <a id="scroll-down-link" href="#project">
          <span />
        </a>
      </section>
      <section id="project" className="section">
        <div className="section-title">
          <h2 id="project-title" />
        </div>
        <div className="section-content">
          <p id="project-p1" />
          <p id="project-p2" />
          <p id="project-p3" />
        </div>
      </section>
      <section id="about" className="section">
        <div className="section-title">
          <h2 id="about-title" />
        </div>
        <div className="section-content">
          <p id="about-p1" />
          <p id="about-p2" />
        </div>
        <div className="section-content">
          <img
            id="members"
            src="/legacy/assets/tagok.webp"
            alt="A HoldOn projekt tagjai"
          />
        </div>
      </section>
      <section id="donate" className="section">
        <div className="section-title">
          <h2 id="donate-title" />
        </div>
        <div className="section-content">
          <p id="donate-p1" />
          <p id="donate-p2" />
          <p id="donate-p3" />
        </div>
        <div className="section-content">
          <ul>
            <li id="donate-li1" />
            <li id="donate-li2" />
            <li id="donate-li3" />
            <li id="donate-li4" />
          </ul>
        </div>
      </section>
      <section id="insta-content" className="section">
        <div
          className="embedsocial-hashtag"
          data-ref="72bc8b89bafe46e11ca936c8cb29e1d147173b2d"
        />
      </section>
      <section id="press" className="section">
        <div className="section-title">
          <h2 id="press-title" />
        </div>
        <div className="section-content">
          <div className="press-item">
            <div className="press-item-title">
              <h3>2025. május 22.</h3>
              <h4>
                <a
                  href="https://www.noklapja.hu/aktualis/2025/05/22/menstruacios-szegenyseg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Küzdjünk együtt a menstruációs szegénység ellen!
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                2025 júniusában két új betétautomata kihelyezésében támogatja a
                dm a HoldOn Egyesületet, hogy a szervezet bővíteni tudja segítő
                tevékenységét, amellyel hátrányos helyzetű nőket és lányokat
                érnek el. A szervezet tavaly összesen három betétautomatát
                üzemeltetett, amelyek közül egyet a dm &quot;fogadott örökbe&quot; és
                biztosította hozzá a termékeket....
              </p>
              <p>
                <a href="https://www.noklapja.hu/" target="_blank" rel="noreferrer">
                  Nők Lapja
                </a>
              </p>
            </div>
          </div>
          <div className="press-item">
            <div className="press-item-title">
              <h3>2024. december 13.</h3>
              <h4>
                <a
                  href="https://kepmas.hu/hu/ingyen-elerheto-tisztasagi-betet-automata-holdon-egyesulet-menstruacios-szegenyseg"
                  target="_blank"
                  rel="noreferrer"
                >
                  &quot;Az űrbe eljutottunk, de a női mosdókban még mindig nincs
                  ingyen elérhető betét&quot; - a HoldOn Egyesület munkájáról
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                Tej, kenyér, egészségügyi betét. Annál, aki ezt a cikket
                olvassa, jó eséllyel fel sem vetődik, hogy a menstruációs
                higiéniai eszközök kimaradhatnak a bevásárlólistájáról, pedig a
                mai Magyarországon ez minden ötödik nőnek nem jelent evidenciát.
                Ötből legalább egy nő nem engedheti meg magának a havi szintű
                betétvásárlást - ez ellen próbál tenni a HoldOn Egyesület
                csapata...
              </p>
              <p>
                <a href="https://kepmas.hu/hu" target="_blank" rel="noreferrer">
                  Képmás Magazin
                </a>
              </p>
            </div>
          </div>
          <div className="press-item">
            <div className="press-item-title">
              <h3>2024. október 01.</h3>
              <h4>
                <a
                  href="https://www.facebook.com/share/p/QGQ6TinaCzynkf6s/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Újabb két automatát helyeztünk üzembe a Holland Nagykövetség
                  támogatásával
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                Büszkeséggel jelenthetjük be a HoldOn projekt által kivitelezett
                és a Holland Emberi Jogi Alap által finanszírozott két
                betétautomata sikeres üzembe helyezését, melyek célja, hogy
                segítsük a menstruációs szegénységben élő nőket. Ez a
                kezdeményezés...
              </p>
              <p>
                <a
                  href="https://www.facebook.com/DutchEmbassyHungary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Embassy of the Netherlands in Hungary - Facebook
                </a>
              </p>
            </div>
          </div>
          <div className="press-item">
            <div className="press-item-title">
              <h3>2023. november 23.</h3>
              <h4>
                <a
                  href="https://www.facebook.com/fidosz.parkosz/posts/pfbid02B7Pa9KQjzoBrR8mdxcySqwLe4hkeYH7LjfJZuVvqtbWBM7e8RdrPU3Ep1LP7zzj7l"
                  target="_blank"
                  rel="noreferrer"
                >
                  HoldOn Téradó a józsefvárosi FiDo Ifjúsági Központban
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                Nem azért zártunk be ma, mert nyaralni mentünk, hanem mert ez a
                nagyszerű rendezvény, előadás zajlott nálunk este öt órától.
                Szerencsére sokan érdeklődtek. Jöttek gyerekek is, ők sem
                unatkoztak!
              </p>
              <p>
                <a
                  href="https://www.facebook.com/fidosz.parkosz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FiDo - Facebook
                </a>
              </p>
            </div>
          </div>
          <div className="press-item">
            <div className="press-item-title">
              <h3>2022. december 16.</h3>
              <h4>
                <a
                  href="https://www.magyarkurir.hu/hazai/raszorulo-noket-tamogatnak-jezsuita-szakkollegistak-jozsefvarosban"
                  target="_blank"
                  rel="noreferrer"
                >
                  Különleges módon támogatnak rászoruló nőket a jezsuita
                  szakkollégisták Józsefvárosban
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                A Szent Ignác Jezsuita Szakkollégium (SZIK) diákjai 2021-ben
                indították el kezdeményezésüket HoldOn néven a menstruációs
                szegénység felszámolásáért, melynek keretében december 9-én a
                Józsefvárosi Szociális Szolgáltató és Gyermekjóléti Központ
                épületében adták át első menstruációs automatájukat.
              </p>
              <p>
                <a href="https://magyarkurir.hu" target="_blank" rel="noreferrer">
                  Magyar Kurír
                </a>
              </p>
            </div>
          </div>
          <div className="press-item">
            <div className="press-item-title">
              <h3>2022. december 1.</h3>
              <h4>
                <a
                  href="https://www.szentignac.hu/cimlap/halad-a-holdon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  &quot;Amit eggyel a legkisebbek közül tesztek, velem teszitek&quot;
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                A menstruációs szegénység Magyarországon minden ötödik nőt
                érint, ugyanakkor a személyi higiénia, a felvilágosítás sok
                családban tabutéma. Szakkollégiumunk nagy fába vágta fejszéjét,
                mikor 2021-ben úgy döntött, hogy elindít egy projektet, ami ezt
                az országszerte jelen lévő nehézséget segít leküzdeni vagy
                legalábbis enyhíteni, egyelőre helyi szinten. Így jött létre a
                HoldOn projekt, ami már eddig is nagy utat tett meg, a java
                pedig még hátravan.  Nem beszélve arról, hogy a rengeteg munka,
                amit szakkollégistáink belefektettek, lassan gyümölcsözni
                kezdhet.
              </p>
              <p>
                <a href="https://szentignac.hu" target="_blank" rel="noreferrer">
                  Szent Ignác Jezsuita Szakkollégium
                </a>
              </p>
            </div>
          </div>
          <div className="press-item">
            <div className="press-item-title">
              <h3>2022. június 1.</h3>
              <h4>
                <a
                  href="https://tudomanyon.hu/menstruacios-szegenyseg-es-a-holdon-projekt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Menstruációs szegénység és a HoldOn projekt
                </a>
              </h4>
            </div>
            <div className="press-item-content">
              <p>
                Senkit ne tévesszen meg a cím - könnyű a Hold miatt egyből a
                probléma távoliságára asszociálni, ám itt épp ennek
                ellenkezőjéről van szó! A menstruációs szegénység kérdésköre
                sokkal több nőt érint, mint azt elsőre gondolnánk. Számszerűsítve:
                egy 2019-ben végzett kutatás szerint míg Angliában 10-ből 1,
                addig Magyarországon minden ötödik nő küzd havonta a menstruációjához
                kapcsolódó költségek finanszírozásával, így ez egy olyan
                probléma, amely valóban figyelmet érdemel.
              </p>
              <p>
                <a href="https://tudomanyon.hu" target="_blank" rel="noreferrer">
                  TudományOn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-left">
          <div className="footer-menus">
            <div className="footer-menu-item">
              <a href="#project" id="footer-link-project" />
            </div>
            <div className="footer-menu-item">
              <a href="#about" id="footer-link-about" />
            </div>
            <div className="footer-menu-item">
              <a href="#donate" id="footer-link-donate" />
            </div>
            <div className="footer-menu-item">
              <a href="#insta-content" id="footer-link-insta" />
            </div>
            <div className="footer-menu-item">
              <a href="#press" id="footer-link-press" />
            </div>
          </div>
          <div className="social-bar">
            <div id="mail" className="social-link">
              <img src="/legacy/assets/mail.webp" alt="Mail logo" />
              <a href="mailto:holdon@holdonprojekt.hu" target="_blank" rel="noreferrer">
                holdon@holdonprojekt.hu
              </a>
            </div>
            <div id="insta" className="social-link">
              <img src="/legacy/assets/instagram.webp" alt="Instagram logo" />
              <a
                href="https://www.instagram.com/holdon_projekt/"
                target="_blank"
                rel="noreferrer"
              >
                holdon_projekt
              </a>
            </div>
            <div id="facebook" className="social-link">
              <img src="/legacy/assets/facebook.webp" alt="Facebook logo" />
              <a
                href="https://www.facebook.com/HoldOn-projekt-102266192323581"
                target="_blank"
                rel="noreferrer"
              >
                HoldOn projekt
              </a>
            </div>
            <div id="linkedin" className="social-link">
              <img src="/legacy/assets/linkedin.webp" alt="LinkedIn logo" />
              <a
                href="https://www.linkedin.com/company/holdon-projekt/"
                target="_blank"
                rel="noreferrer"
              >
                HoldOn projekt
              </a>
            </div>
          </div>
          <div className="footer-language" id="languages">
            <span className="footer-menu-item">
              <a href="javascript:i18next.changeLanguage('hu')">hu</a>
            </span>
            <span className="footer-menu-item">
              <a href="javascript:i18next.changeLanguage('en')">en</a>
            </span>
          </div>
          <div id="footer-info" />
          <div className="credits">
            <div id="credits" />
            <div id="web-design" />
            <div>
              <span id="current-year">©2021-{currentYear}</span>
              <span id="legal">
                &nbsp;HoldOn projekt. Minden jog fenntartva!
              </span>
            </div>
          </div>
        </div>
      </footer>
      <Script id="embedsocial-hashtag" strategy="afterInteractive">
        {`(function(d, s, id){
  var js;
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://embedsocial.com/cdn/ht.js";
  d.getElementsByTagName("head")[0].appendChild(js);
})(document, "script", "EmbedSocialHashtagScript");`}
      </Script>
    </>
  );
}
