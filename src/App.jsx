import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Select from "./components/Select";
import getBreeds from "./helpers/getBreeds";
import getDog from "./helpers/getDog";
import Error from "./components/Error";

const initialBreeds = [{ id: 55, name: "Boxer (Default)" }];

const initialDog = {
  url: "https://cdn2.thedogapi.com/images/ry1kWe5VQ_1280.jpg",
};

function App() {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [dog, setDog] = useState(initialDog);
  const [dogId, setDogId] = useState(55);
  const [loading, setLoading] = useState(false);
  const [errorBreed, setErrorBreed] = useState(null);
  const [errorDog, setErrorDog] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  useEffect(() => {
    updateDog(dogId);
  }, [dogId]);

  const updateBreeds = () => {
    getBreeds()
      .then((data) => setBreeds(data))
      .catch((errorBreed) => {
        console.log(errorBreed);
        setErrorBreed("Error al cargar las razas");
      });
  };

  const updateDog = (id) => {
    setLoading(true);
    getDog(id)
      .then((data) => {
        setLoading(false);
        return setDog(data);
      })
      .catch((errorDog) => {
        setLoading(false);
        console.log(errorDog);
        setErrorDog("Error al cargar el perro");
      });
  };

  return (
    <div className="app">
      <Select breeds={breeds} setDogId={setDogId} />
      <Card
        dog={dog}
        breeds={breeds}
        dogId={dogId}
        updateDog={updateDog}
        loading={loading}
      />
      {errorBreed && <Error error={errorBreed} />}
      {errorDog && <Error error={errorDog} />}
    </div>
  );
}

export default App;
