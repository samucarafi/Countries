import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Description from "./pages/Description";

function App() {
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark((previousState) => !previousState);
  };

  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [valueInput, setValueInput] = useState("");
  const [valueSelector, setValueSelector] = useState("Filter by Region");
  const [valueClick, setValueClick] = useState("");

  const resetSeach = () => {
    setValueSelector("Filter by Region");
    setValueInput("");
    setValueClick("");
  };
  useEffect(() => {
    setLoading(true);
    let url = "https://restcountries.com/v3.1/all";

    if (
      valueInput !== "" &&
      valueSelector !== "All" &&
      valueSelector !== "Filter by Region"
    ) {
      url = `https://restcountries.com/v3.1/name/${valueInput}`;
    } else if (valueInput !== "") {
      url = `https://restcountries.com/v3.1/name/${valueInput}`;
    } else if (
      valueSelector !== "All" &&
      valueSelector !== "Filter by Region"
    ) {
      url = `https://restcountries.com/v3.1/region/${valueSelector}`;
    }
    if (valueClick != "") {
      url = `https://restcountries.com/v3.1/name/${valueClick}`;
    }

    axios
      .get(url)
      .then((response) => {
        let filteredData = response.data;

        // Se estiver buscando por nome e região, filtra manualmente
        if (
          valueInput !== "" &&
          valueSelector !== "All" &&
          valueSelector !== "Filter by Region"
        ) {
          filteredData = response.data.filter(
            (country) =>
              country.region.toLowerCase() === valueSelector.toLowerCase()
          );
        }

        setPaises(filteredData);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [valueInput, valueSelector, valueClick]);

  return (
    <>
      <BrowserRouter>
        <Header handleDark={handleDark} dark={dark} />
        <Routes>
          <Route
            path="/"
            element={
              <Body
                dark={dark}
                paises={paises}
                setValueInput={setValueInput}
                setValueSelector={setValueSelector}
                valueSelector={valueSelector}
                loading={loading}
                valueInput={valueInput}
                setValueClick={setValueClick}
              />
            }
          />
          <Route
            path="/description"
            element={
              <Description
                dark={dark}
                paises={paises}
                resetSeach={resetSeach}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
