import logoSyb from '../../assets/logoSyb.png';
import SHeader from './style';

export default function Header() {
  return (
    <>
      <SHeader>
        <img src={logoSyb} alt="Logo syb" className="imgLogo" />
      </SHeader>
    </>
  );
}
