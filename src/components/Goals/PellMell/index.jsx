import photo1 from '../../../assets/PlaineImages/gameBoy.jpg';
import photo2 from '../../../assets/PlaineImages/sybshooting_pi-15.jpg';
import photo3 from '../../../assets/PlaineImages/sybshooting_pi-48.jpg';
import photo4 from '../../../assets/PlaineImages/sybshooting_pi-30.jpg';
import SPellMell from './style';

export default function PellMell() {
  return (
    <SPellMell>
      <section
        className="peleMele"
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-duration="800"
      >
        <img className="photo1" src={photo1} alt="photo1" />
        <img className="photo2" src={photo2} alt="photo2" />
        <img className="photo3" src={photo3} alt="photo3" />
        <img className="photo4" src={photo4} alt="photo4" />
      </section>
    </SPellMell>
  );
}
