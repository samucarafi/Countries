import PropTypes from "prop-types";
import { useNavigate } from "react-router";
const Body = ({
  dark,
  paises,
  setValueInput,
  setValueSelector,
  loading,
  valueSelector,
  setValueClick,
}) => {
  const navigate = useNavigate();

  const clickPais = (pais) => {
    setValueClick(pais);
    navigate("/Countries/description");
  };
  return (
    <div className={`body vh-100 ${dark ? "dark" : ""}`}>
      <div className="inputs">
        <div className={`search ${dark ? "dark" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => setValueInput(e.target.value)}
          />
        </div>

        <select
          name="region"
          id="region"
          value={valueSelector}
          className={dark ? "dark" : ""}
          onChange={(e) => setValueSelector(e.target.value)}
        >
          <option value="Filter by Region" disabled>
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  g-4 m-0 ">
        {loading ? (
          <h1>Carregando ...</h1>
        ) : (
          <>
            {paises.map((pais, i) => (
              <div key={i} className="col">
                <div
                  onClick={() => clickPais(pais.name.common)}
                  className={`card ${dark ? "dark" : ""} `}
                >
                  <img
                    height={150}
                    width={250}
                    src={pais.flags.png}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pais.name.common}</h5>
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
            ))}
          </>
        )}
      </div>
    </div>
  );
};

Body.propTypes = {
  dark: PropTypes.bool,
  paises: PropTypes.object,
  setValueInput: PropTypes.func,
  setValueSelector: PropTypes.func,
  loading: PropTypes.bool,
  valueSelector: PropTypes.string,
  setValueClick: PropTypes.func,
};
export default Body;
