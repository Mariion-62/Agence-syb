import { useState } from 'react';
import dataMethods from './dataMethods';
import 'aos/dist/aos.css';
import { SSlideMethods, TitleMethods } from './style';

export default function Methods() {
  // useState to change state of boxes at onClick
  const [showBox, setShowBox] = useState(1);
  function viewBox(index) {
    setShowBox(index);
  }
  return (
    <>
      <TitleMethods>
        <section className="methods">
          <h2
            className="subTitleMethods"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            Une mécanique <br />
            bien huilée
          </h2>
          <div
            className="allTitleMethods"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="800"
          >
            <p className="titleMethods">Notre méthode</p>
          </div>
          <div className="lineWhiteMethods" />
        </section>
      </TitleMethods>
      <SSlideMethods>
        <section
          className="containerBox"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="800"
        >
          {dataMethods.map((method) => (
            <button
              type="button"
              key={method.id}
              className={showBox === method.id ? 'boxMethods' : 'hiddenBox'}
              onClick={() => viewBox(method.id)}
            >
              <h1 className="titleBox">{method.title}</h1>
              <p className="contentMethods">
                {method.contentOne}
                <br /> {method.contentTwo}
                <br />
                {method.contentThree}
                <br />
                {method.contentFour}
              </p>
              <img
                className="imgBox"
                src={method.picture}
                alt={`${method.picture}`}
              />
              <a
                href="mailto:hello@syb-group.fr?subject=On se rencontre quand ?"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="imgBtn"
                  src={method.button}
                  alt={`${method.title}`}
                />
              </a>
            </button>
          ))}
        </section>
      </SSlideMethods>
    </>
  );
}
