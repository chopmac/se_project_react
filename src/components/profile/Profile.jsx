import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";

function Profile({ onSelectCard, clothingItems, onCreateModal }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
      />
    </div>
  );
}

export default Profile;