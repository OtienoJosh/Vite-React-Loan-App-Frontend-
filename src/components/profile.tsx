import React, { useState } from 'react';
import Header from './main/header';
import Footer from './main/footer';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null); // State to store the uploaded profile picture

  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City, Country',
    occupation: 'Software Engineer',
    income: '$5,000',
  };

  // Function to handle the profile picture upload
  const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file from the selected files
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result as string); // Set the uploaded picture as the profile picture
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="card p-4 shadow">
          <h2 className="card-title text-center">Profile</h2>
          <div className="text-center mb-4">
            <div className="profile-picture-wrapper">
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="profile-picture" />
              ) : (
                <div className="profile-picture-placeholder">No profile picture</div>
              )}
              <label className="profile-picture-upload">
                <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
                <i className="fas fa-camera"></i> Upload Picture
              </label>
            </div>
          </div>
          <div className="mb-3">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="mb-3">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="mb-3">
            <strong>Phone Number:</strong> {user.phoneNumber}
          </div>
          <div className="mb-3">
            <strong>Address:</strong> {user.address}
          </div>
          <div className="mb-3">
            <strong>Occupation:</strong> {user.occupation}
          </div>
          <div className="mb-3">
            <strong>Income:</strong> {user.income}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
