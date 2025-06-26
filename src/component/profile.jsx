import "../styles/profile.css";
import { CiCamera } from "react-icons/ci";
const Profile = () => {
    return (


        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <h1>My Profile</h1>
                </div>
                <div className="profile-body">
                    <div className="profile-image-container">
                        <div className="profile-image">
                           
                                <img src="" alt="Profile" />
                            
                                <div className="profile-placeholder">No Image</div>
                            

                            <div className="camera-icon">
                                <CiCamera />
                            </div>
                        </div>
                    </div>
                    <div className="profile-details">
                        <div className="input-box1">
                            <label>First Name:</label>
                            <input type="text" value="" disabled />
                        </div>
                        <div className="input-box1">
                            <label>Last Name:</label>
                            <input type="text" value="" disabled />
                        </div>
                        <div className="input-box1">
                            <label>Email:</label>
                            <input type="email" value="" disabled />
                        </div>


                        <button >
                            Edit Profile
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Profile