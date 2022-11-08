import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditProfileInput from "./edit-profile-input";
import './index.css';
import moment from 'moment';
import { updateProfile } from "./profile-reducer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const EditProfileComponent = () => {
    const savedProfile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [profile, setProfile] = useState(savedProfile);

    const updateProfileHandler = (event) => {
        console.log(profile);
        dispatch(updateProfile(profile));
        event.preventDefault();
        navigate('/tuiter/profile')
    }

    const handleNameInputChange = (event) => {
        const name = event.target.value;
        console.log(name)
        const [firstName, lastName = ""] = name.split(" ");
        setProfile({
            ...profile,
            firstName,
            lastName
        })
    }

    const handleInputChange = (event, fieldName) => {
        const { value } = event.target;
        console.log(value, fieldName)
        setProfile({
            ...profile,
            [fieldName]: value,
        })
    }

    return (
        <div className='wd-profile-container pt-2'>
            <form onSubmit={updateProfileHandler}>
                <div style={{justifyContent:"space-between", flexDirection:"row",display:"flex", alignItems:"center"}}>
										<div className="fs-5 fw-bold">
                        <Link to="/tuiter/profile" className="bi bi-x-lg pe-4" /> Edit Profile
											</div>
                    <div className="fs-6">
                        <input className="wd-profile-save-btn" type="submit" value="Save" />
                    </div>
                </div>
                <div className="pt-3">
									<div style={{position:"relative"}}>
											<img src={require(`../images/${profile.bannerPicture}`)} alt="Banner" height="200px" width="100%" />
									</div>
									<div style={{position:"absolute", marginTop:"-60px", marginLeft:"20px"}}>
											<img className='rounded-circle' 
												src={require(`../images/${profile.profilePicture}`)} alt="Profile" height="120px" width="120px" />
									</div>
									</div>
                
                <div style={{marginTop:"90px"}}>

                    <EditProfileInput
                        handleInputChange={handleNameInputChange}
                        value={profile.firstName + `${profile.lastName ? " " + profile.lastName : ""}`}
                        label="Name"
                    />
                    <EditProfileInput
                        handleInputChange={(event) => handleInputChange(event, "bio")}
                        value={profile.bio}
                        label="Bio"
                    />

                    <EditProfileInput
                        handleInputChange={(event) => handleInputChange(event, "location")}
                        value={profile.location}
                        label="Location"
                    />

                    <EditProfileInput
                        handleInputChange={(event) => handleInputChange(event, "website")}
                        value={profile.website}
                        label="Website"
                    />
                    

                    <EditProfileInput
                        handleInputChange={(event) => handleInputChange(event, "dateOfBirth")}
                        value={moment(profile.dateOfBirth).format('YYYY-MM-DD')}
                        label="Birth Date"
                        inputType="date"		
                    />
                    <div style={{justifyContent:"space-between", flexDirection:"row",display:"flex", alignItems:"center"}}>
                        <div>Switch to professional</div>
												<FontAwesomeIcon icon={faChevronRight}/>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default EditProfileComponent;