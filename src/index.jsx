import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Animal from "./components/Animal/Animal";
import "./style.scss";
import data from "./data/db";
import {
  SButton,
  SInput,
  SContainer,
  SHeader,
  SForm,
  SList,
  SAnimalsSection,
  SGlobal,
} from "./styled-components/core/style";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [animals, setAnimals] = useState(data);
  const [showFavorites, setShowFavorites] = useState(false);

  // Filter animals according to the input value
  const getFilteredAnimals = () => {
    const filteredAnimals = getFavoriteAnimals().filter((animal) => {
      return animal.species.toLowerCase().includes(inputValue);
    });

    return filteredAnimals;
  };

  // Get favorite animals
  const getFavoriteAnimals = () => {
    if (showFavorites) {
      return animals.filter((animal) => {
        return animal.isFavorite;
      });
    } else {
      return animals;
    }
  };

  // Add animal to favorite animals
  const addToFavorites = (id) => {
    const newAnimals = animals.map((animal) => {
      if (animal.id === id) {
        animal.isFavorite = !animal.isFavorite;
      }
      return animal;
    });

    setAnimals(newAnimals);
  };

  // Check if there are some favorite animals
  const hasFavoriteAnimals = () => {
    return (
      getFilteredAnimals().filter((animal) => animal.isFavorite).length > 0
    );
  };

  useEffect(() => {
    if (!hasFavoriteAnimals()) {
      setShowFavorites(false);
    }
  }, [animals]);

  return (
    <>
      <SGlobal>
        <SHeader>
          <div>
            <h1>Animal Book</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </SHeader>
        <SForm>
          <div>
            <SInput
              type="search"
              value={inputValue}
              placeholder="Search an animal"
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            />
            <SButton
              highlight
              type="button"
              onClick={() => setShowFavorites(!showFavorites)}
              disabled={!hasFavoriteAnimals()}
            >
              {showFavorites ? "Show all" : "Show favorites"}
            </SButton>
          </div>
        </SForm>
        <SContainer>
          <SAnimalsSection>
            <div>
              <SList>
                {getFilteredAnimals().map((animal, index) => {
                  return (
                    <Animal
                      species={animal.species}
                      img={animal.img}
                      desc={animal.desc}
                      href={animal.href}
                      key={index}
                      id={animal.id}
                      isFavorite={animal.isFavorite}
                      addToFavorites={addToFavorites}
                    />
                  );
                })}
              </SList>
            </div>
          </SAnimalsSection>
        </SContainer>
      </SGlobal>
    </>
  );
};

render(<App />, document.querySelector("#app"));
