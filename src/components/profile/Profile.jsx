import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../../blocks/Profile.css";

function Profile({ onSelectCard, clothingItems, onCreateModal, avatar, username }) {
  return (
    <div className="profile">
      <SideBar avatar={avatar} username={username} />
      <ClothesSection
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
      />
    </div>
  );
}

export default Profile;