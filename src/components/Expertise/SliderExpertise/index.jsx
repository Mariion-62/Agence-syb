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
                  <h1 className="titleExpertise">{expertise.title}</h1>

                  <p className="textExpert">
                    {expertise.firstTextExpert}
                    <br />
                    {expertise.secondTextExpert}
                    <br />
                    {expertise.thirdTextExpert}
                    <br />
                    {expertise.fourthTextExpert}
                    <br />
                    {expertise.fifthTextExpert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SSlideExpert>
      </section>
    </>
  );
}
