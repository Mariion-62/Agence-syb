import STrustFolio from './style';
/* https://help.trustfolio.co/les-widgets */

export default function Trustfolio() {
  return (
    <STrustFolio
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-duration="800"
    >
      <a
        className="trustfolio-iframe-widget"
        data-name="endorsements-infinite-slider"
        data-color="FCD629"
        data-limit="10"
        data-selection="JQFM6FpD50,7lZeIn8SDA,b9i3ZVkxUe,m6sKPs6OTD,HtK3EmZOOa"
        href="https://trustfolio.co/profil/syb-group-9oEMTG3Of"
        target="_blank"
        rel="noreferrer"
      >
        Découvrez les témoignages de nos clients
      </a>
    </STrustFolio>
  );
}
