import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Description = ({ dark, paises, resetSeach }) => {
  return (
    <div className={`body w-100 vh-100 ${dark ? "dark" : ""}`}>
      <div className="divLink ">
        <Link
          className={`link ${dark ? "dark" : ""}`}
          onClick={() => resetSeach()}
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>{" "}
          Back
        </Link>
      </div>
      <div>
        {paises.map((pais, i) => (
          <div key={i} className="">
            <div className="row mx-0 ">
              <div className="col-12 col-sm-6 col-md-4  my-auto text-md-center  ">
                <img src={pais.flags.png} width="100%" className="" alt="..." />
              </div>
              <div className="col-12 col-sm-6 col-md-8   ">
                <h5 className="card-title">{pais.name.common}</h5>
                <div className="row ">
                  <div className="col-md-auto">
                    <p className="card-text">
                      Population:
                      <span
                        className={`text-body-secondary ${dark ? "dark" : ""} `}
                      >
                        {` ${pais.population}`}
                      </span>
                    </p>
                    <p className="card-text">
                      Região:
                      <span
                        className={`text-body-secondary  ${
                          dark ? "dark" : ""
                        } `}
                      >
                        {` ${pais.region}`}
                      </span>
                    </p>
                    <p className="card-text">
                      Capital:
                      <span
                        className={`text-body-secondary  ${
                          dark ? "dark" : ""
                        } `}
                      >
                        {` ${pais.capital}`}
                      </span>
                    </p>
                    <p className="card-text">
                      Capital:
                      <span
                        className={`text-body-secondary  ${
                          dark ? "dark" : ""
                        } `}
                      >
                        {` ${pais.capital}`}
                      </span>
                    </p>
                    <p className="card-text">
                      Capital:
                      <span
                        className={`text-body-secondary  ${
                          dark ? "dark" : ""
                        } `}
                      >
                        {` ${pais.capital}`}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-auto">
                    <p className="card-text">
                      Population:
                      <span
                        className={`text-body-secondary ${dark ? "dark" : ""} `}
                      >
                        {` ${pais.population}`}
                      </span>
                    </p>
                    <p className="card-text">
                      Região:
                      <span
                        className={`text-body-secondary  ${
                          dark ? "dark" : ""
                        } `}
                      >
                        {` ${pais.region}`}
                      </span>
                    </p>
                    <p className="card-text">
                      Capital:
                      <span
                        className={`text-body-secondary  ${
                          dark ? "dark" : ""
                        } `}
                      >
                        {` ${pais.capital}`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Description.propTypes = {
  dark: PropTypes.bool,
  paises: PropTypes.object,
  resetSeach: PropTypes.func,
};
export default Description;
