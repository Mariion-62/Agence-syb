import ReactPlayer from 'react-player';
import SHook from './style';
import internalVideo from '../../assets/SYB_Motion_Web.mp4';

export default function Hook() {
  return (
    <>
      <SHook>
        <section className="allHook">
          <p className="textHook">
            <div className="lineWhiteHook" />
            Bâtir des marques fortes, attirer plus de trafic on et offline,
            générer plus de leads, engager les clients et les communautés,
            augmenter la conversion pour vendre plus et mieux.
            <p>Ces objectifs vous parlent ?</p>
            <p>SYB vous permet de les atteindre.</p>
          </p>
          <ReactPlayer
            url={internalVideo}
            constrols
            playing
            muted
            width="100%"
            height="75%"
            loop="true"
            className="video"
          />
        </section>
      </SHook>
    </>
  );
}
