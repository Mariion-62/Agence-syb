import { Link } from 'react-router-dom';
import SDownFooter from './style';

export default function DownFooter() {
  // Updated of year automatic
  const currentYear = new Date().getFullYear();
  return (
    <SDownFooter>
      <section>
        <div className="lastLine">
          <Link id="mention" className="mentionLegal" to="/mentionlegales">
            mention légales
          </Link>
          <p className="copyright"> Syb Group © {currentYear}</p>
        </div>
      </section>
    </SDownFooter>
  );
}
