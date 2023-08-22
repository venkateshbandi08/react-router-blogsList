// Write your JS code here
import './index.css'

const UserInfo = () => (
  <div className="user-info-container">
    <div className="profile-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-image"
      />
    </div>
    <div>
      <h1 className="profile-name">Wade Warren</h1>
    </div>
    <div>
      <p className="designation"> Software Developer at UK</p>
    </div>
  </div>
)

export default UserInfo
