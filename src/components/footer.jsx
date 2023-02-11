import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './scss/footer.scss';

function Footer() {
  return (
    <footer className="footer project-animation-about project-details-about">
      <div className="footer-inner">
        <h2 className="heading-lg">About</h2>
        <div className="footer-content">
          <div className="footer-content-skills">
            <h3 className="heading-sm">What I do well</h3>
            <p className="body-regular">
              Fullstack Javascript Development
              <br />
              MERN, NextJs, Gatsby
              <br />
              EPiServer .NET Devlopment
              <br />
              PHP & Wordpress Development
              <br />
              Responsive Site Design & UX
              <br />
              Brand & Content Strategy
              <br />
              SEO & Martech Integration
              <br />
              Creative Design
            </p>
          </div>
          <div className="footer-content-clients">
            <h3 className="heading-sm">Who I&rsquo;ve worked with</h3>
            <p className="body-regular">AKQA, EssenceGlobal, GTB, Jack Morton, Legendary Creatures, McCann, Octagon, Real Art, Sapient, AlpineStars, Cisco, Chrysler, Ford, GM, Harley-Davidson, HBO, Hilton, LG, Motorola, Progressive, Samsung, Sony, Springs Window Fashions, Verizon</p>
          </div>
          <div className="footer-content-locations">
            <h3 className="heading-sm">Where I&rsquo;ve been</h3>
            <div className="flag-wrapper">
              <div className="oh-flag">
                <StaticImage
                  src="../images/oh-flag.svg"
                  loading="eager"
                  alt="Cleveland, Ohio"
                />
              </div>
              <div className="chi-flag">
                <StaticImage
                  src="../images/chi-flag.svg"
                  loading="eager"
                  alt="Chicago, Illinois"
                />
              </div>
              <div className="az-flag current">
                <StaticImage
                  src="../images/az-flag.svg"
                  loading="eager"
                  alt="Tucson, Arizona"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className="social-nav">
          <li>
            <a href="https://www.instagram.com/modeseventyeight" target="_blank" rel="noreferrer" className="instagram-link">Instagram</a>
          </li>
          <li>
            <a href="https://www.strava.com/athletes/5643933" target="_blank" rel="noreferrer" className="strava-link">Strava</a>
          </li>
          <li>
            <a href="https://zwiftpower.com/profile.php?z=1002258" target="_blank" rel="noreferrer" className="zwift-link">Zwift</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jefmayer" target="_blank" rel="noreferrer" className="linkedin-link">Linkedin</a>
          </li>
          <li>
            <a href="https://www.discogs.com/user/jefmayer/collection" target="_blank" rel="noreferrer" className="discogs-link">Discogs</a>
          </li>
          <li>
            <a href="https://github.com/jefmayer" target="_blank" rel="noreferrer" className="github-link">Github</a>
          </li>
        </ul>
        <div className="copyright-content">
          <p className="body-sm">&copy;2023 Jef Mayer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
