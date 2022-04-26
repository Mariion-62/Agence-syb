import photo5 from '../../assets/photo5.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo11 from '../../assets/photo11.jpg';

import SSlideExpert from './style';

export default function SliderExpertise() {
  return (
    <>
      <section className="test">
        <SSlideExpert>
          <div className="container">
            <div className="blocHorizontal">
              <div className="slideStrat">
                <img src={photo5} alt="photo1" />
                <h1>Stratégie</h1>
                <div className="contentStrat">
                  <p className="firstTextExpert">On et offline</p>
                  <p className="secondTextExpert">BtoB et BtoC</p>
                  <p className="thirdTextExpert">E-commerce, DNVB, Retail</p>
                </div>
              </div>
              <div className="slideCrea">
                <img src={photo7} alt="photo1" />
                <h1>Créativité</h1>
                <div className="contentCrea">
                  <p className="firstTextExpert">Support digitaux et print</p>
                  <p className="secondTextExpert">
                    Photo, vidéo, motion design
                  </p>
                  <p className="thirdTextExpert">
                    Territoire et identité de marque
                  </p>
                </div>
              </div>
              <div className="slideWeb">
                <img src={photo5} alt="photo1" />
                <h1>Site Web</h1>
                <div className="contentWeb">
                  <p className="firstTextExpert">UX/UI</p>
                  <p className="secondTextExpert">Webdesign</p>
                  <p className="thirdTextExpert">Création et refonte de site</p>
                </div>
              </div>
              <div className="slideSeo">
                <img src={photo7} alt="photo1" />
                <h1>SEO</h1>
                <div className="contentSeo">
                  <p className="firstTextExpert">Audit SEO</p>
                  <p className="secondTextExpert">Rédaction de contenu</p>
                  <p className="thirdTextExpert">
                    Technique, sémantique et netlinking
                  </p>
                </div>
              </div>
              <div className="slideSea">
                <img src={photo5} alt="photo1" />
                <h1>SEA</h1>
                <div className="contentSea">
                  <p className="firstTextExpert">Affiliation</p>
                  <p className="secondTextExpert">Retargeting</p>
                  <p className="thirdTextExpert"> Google Ads et Social Ads</p>
                </div>
              </div>
              <div className="slideSocial">
                <img src={photo7} alt="photo1" />
                <h1>Réseaux sociaux</h1>
                <div className="contentSocial">
                  <p className="firstTextExpert">Automation</p>
                  <p className="secondTextExpert">Community management</p>
                  <p className="thirdTextExpert">
                    Ligne éditoriale et publication{' '}
                  </p>
                </div>
              </div>
              <div className="slideClient">
                <img src={photo11} alt="photo1" />
                <h1>Relation Client</h1>
                <div className="contentClient">
                  <p className="firstTextExpert">Newsletter</p>
                  <p className="secondTextExpert">CRM, data, automation</p>
                  <p className="thirdTextExpert">
                    Prospection et relation client téléphonique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SSlideExpert>
      </section>
    </>
  );
}
