import ampule from "../assets/ampule.jpg";

const Because = () => {
  return (
    <>
      <section className="stack-section" id="section-because">
        <div className="top-because">
          <h1 id="title-because">Because...</h1>

          <p>
            ...MICRO's boutique scale operation allows us unflinching focus and
            unmatched efficiency comparing to corporate behemoths.
            <br />
            Our veteran team share decades of experience and what they do, they
            do the best in the business.
            <br />
            Our strong performance is evident in speed, attention to detail,
            well established and efficient communication with Regulatory
            Authorities.
          </p>
        </div>

        <div className="ampule-container">
          <img src={ampule} alt="ampule" />
        </div>
        <div className="bottom-because">
          <h2 id="excell-title">We excell in:</h2>
          <ul className="because-excell">
            <li>Therapeutic expertise</li>
            <li>CRA (personell) proficiency</li>
            <li>CT contingency planning </li>
            <li>Cost effectivness</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Because;
