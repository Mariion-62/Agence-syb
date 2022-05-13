import photo5 from '../../../assets/photo5.jpg';
import photo6 from '../../../assets/photo6.jpg';
import photo7 from '../../../assets/photo7.jpg';
import photo9 from '../../../assets/photo9.jpg';
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
        <img className="photo5" src={photo5} alt="photo5" />
        <img className="photo6" src={photo6} alt="photo6" />
        <img className="photo7" src={photo7} alt="photo7" />
        <img className="photo9" src={photo9} alt="photo9" />
      </section>
    </SPellMell>
  );
}
