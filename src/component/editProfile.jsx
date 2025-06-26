import"../styles/editProfile.css"
import { CiCamera } from "react-icons/ci";
const EditProfile = () => {
  
  return (
    <form className="edit-profile-form" >
      <div className="form-container">
        {/* Header */}
        <div className="form-header">
          <button type="button" className="back-button" >
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1>Edit Profile</h1>
        </div>

       
        {/* Profile Image Upload */}
        <div className="profile-section">
          <div className="image-wrapper">
           
              <img src="" alt="Profile Preview" />
           
              <div className="placeholder">
                <svg className="placeholder-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
           
            <label className="camera-icon">
              <CiCamera />
              <input type="file" accept="image/*"  />
            </label>
          </div>
          <p className="image-note">Click the camera icon to upload a new photo</p>
        </div>

        {/* Form Inputs */}
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" value="user@example.com" disabled />
          <small>Email cannot be changed</small>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" value="password123" disabled />
          <small>To change password, use reset option</small>
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" className="cancel-button" >
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled="">
            
              
                Saving...
              
            
         
           
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
