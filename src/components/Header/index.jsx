import { Link } from 'react-router-dom';
import logoSyb from '../../assets/logoSyb.png';
import SHeader from './style';

export default function Header() {
  return (
    <>
      <Link to="/">
        <SHeader>
          <img src={logoSyb} alt="Logo syb" className="imgLogo" />
        </SHeader>
      </Link>
    </>
  );
}
