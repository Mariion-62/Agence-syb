import dataExpertise from './dataExpertise';

import SSlideExpert from './style';

export default function SliderExpertise() {
  return (
    <>
      <section className="test">
        <SSlideExpert>
          <div className="container">
            <div className="blocHorizontal">
              {dataExpertise.map((expertise) => (
                <div className="slideExpertise">
                  <img
                    className="imgExpertise"
                    src={expertise.picture}
                    alt={`${expertise.picture}`}
                  />
                  <h1 className="titleExpertiseBlack">{expertise.title}</h1>
                  <h1 className="titleExpertiseYellow">{expertise.title}</h1>
                  <h1 className="titleExpertiseYellowTrans">
                    {expertise.title}
                  </h1>
                  <div className="contentExpertise">
                    <p className="textExpertFirst">
                      {expertise.firstTextExpert}
                    </p>
                    <p className="textExpertSecond">
                      {expertise.secondTextExpert}
                    </p>

                    <p className="textExpertThird">
                      {expertise.thirdTextExpert}
                    </p>
                    <p className="textExpertFourth">
                      {expertise.fourthTextExpert}
                    </p>
                    <p className="textExpertFifth">
                      {expertise.fifthTextExpert}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SSlideExpert>
      </section>
    </>
  );
}
