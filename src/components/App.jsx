import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "../blocks/App.css";
import Header from "./Header";
import Main from "./MainSection";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import Profile from "./profile/Profile.jsx";
import AddItemModal from "./AddItemModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import EditProfileModal from "./EditProfileModal";
import { getWeather, filterDataFromApi } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { getItems, addItem, deleteItem, updateUserProfile, addCardLike, removeCardLike } from "../utils/api";
import { register, authorize, checkToken } from "../utils/auth";

function ProtectedRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

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
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

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
    const token = localStorage.getItem("jwt");
    addItem(values, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
        resetForm();
      })
      .catch(console.error);
  };

  const handleCardDelete = () => {
    const token = localStorage.getItem("jwt");
    deleteItem(selectedCard._id || selectedCard.id, token)
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

  const handleRegister = ({ name, avatar, email, password }) => {
    register(name, avatar, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) return;
    authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          checkToken(data.token)
            .then((user) => {
              setCurrentUser(user);
              handleCloseModal();
              navigate("/");
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  };

  const handleUserUpdate = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    updateUserProfile(name, avatar, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    if (!isLiked) {
      addCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch(console.error);
    } else {
      removeCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch(console.error);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
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
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
        });
    }
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
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={() => handleOpenModal("create")}
            city={weatherData.city}
            isLoggedIn={isLoggedIn}
            onRegisterModal={() => handleOpenModal("register")}
            onLoginModal={() => handleOpenModal("login")}
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
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onSelectCard={handleSelectedCard}
                    clothingItems={clothingItems}
                    onCreateModal={() => handleOpenModal("create")}
                    onEditProfile={() => handleOpenModal("edit-profile")}
                    onLogOut={handleLogOut}
                  />
                </ProtectedRoute>
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
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={handleCloseModal}
            onRegister={handleRegister}
            switchToLogin={() => handleOpenModal("login")}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={handleCloseModal}
            onLogin={handleLogin}
            switchToRegister={() => handleOpenModal("register")}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={handleCloseModal}
            onUpdateUser={handleUserUpdate}
          />
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;