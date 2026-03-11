import { useState, useEffect } from "react";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./MainSection";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { defaultClothingItems } from "../utils/clothingItems";
import { getWeather, filterDataFromApi } from "../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    city: "",
    condition: "",
  });

  const handleOpenModal = (modalName) => setActiveModal(modalName);
  const handleCloseModal = () => setActiveModal("");

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeather()
      .then((data) => {
        const filteredData = filterDataFromApi(data);
        setWeatherData(filteredData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <Header 
        onCreateModal={() => handleOpenModal("create")} 
        city={weatherData.city} 
      />
      <Main
        weatherTemp={weatherData.temp}
        weatherCondition={weatherData.condition}
        onSelectCard={handleSelectedCard}
        clothingItems={clothingItems}
      />
      <Footer />
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "create"}
        name="create"
        onClose={handleCloseModal}
      >
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            className="modal__input"
            placeholder="Name"
            required
          />
        </label>
        <label className="modal__label">
          Image
          <input
            type="url"
            name="link"
            className="modal__input"
            placeholder="Image URL"
            required
          />
        </label>
      </ModalWithForm>
      <ItemModal
        isOpen={activeModal === "preview"}
        card={selectedCard}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;