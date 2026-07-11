import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../../blocks/Profile.css";

function Profile({ onSelectCard, clothingItems, onCreateModal, onEditProfile, onLogOut }) {
  return (
    <div className="profile">
      <SideBar onEditProfile={onEditProfile} onLogOut={onLogOut} />
      <ClothesSection
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
      />
    </div>
  );
}

export default Profile;