import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./MainSection";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./profile/Profile.jsx";
import AddItemModal from "./AddItemModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { getWeather, filterDataFromApi } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { getItems, addItem, deleteItem } from "../utils/api";
import avatar from "../assets/avatar.svg";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({
    temp: { F: 0, C: 0 },
    city: "",
    condition: "",
  });

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleOpenModal = (modalName) => setActiveModal(modalName);
  const handleCloseModal = () => setActiveModal("");

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (values, resetForm) => {
    addItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
        resetForm();
      })
      .catch(console.error);
  };

  const handleCardDelete = () => {
    deleteItem(selectedCard._id || selectedCard.id)
      .then(() => {
        setClothingItems(
          clothingItems.filter(
            (item) => (item._id || item.id) !== (selectedCard._id || selectedCard.id)
          )
        );
        handleCloseModal();
      })
      .catch(console.error);
  };

  const isDay = new Date().getHours() >= 6 && new Date().getHours() < 18;

  useEffect(() => {
    getWeather()
      .then((data) => {
        const filteredData = filterDataFromApi(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={() => handleOpenModal("create")}
          city={weatherData.city}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherTemp={weatherData.temp[currentTemperatureUnit]}
                weatherCondition={weatherData.condition}
                isDay={isDay}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCreateModal={() => handleOpenModal("create")}
                avatar={avatar}
                username="Terrence Tegegne"
              />
            }
          />
        </Routes>

        <Footer />

        <AddItemModal
          isOpen={activeModal === "create"}
          onClose={handleCloseModal}
          onAddItem={handleAddItemSubmit}
        />

        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={handleCloseModal}
          onDeleteCard={() => handleOpenModal("delete")}
        />

        <DeleteConfirmationModal
          isOpen={activeModal === "delete"}
          onClose={handleCloseModal}
          onDelete={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;