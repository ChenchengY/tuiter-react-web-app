import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className='wd-profile-container'>
            <div style={{display:"flex", alignItems:"center"}}> 
							<FontAwesomeIcon icon={faArrowLeft} className='ps-3'/>
                <div className='ps-4'>
                    <div className='fw-bold fs-5'>
                        {profile.firstName} {profile.lastName}
                    </div>
                    <div className='text-muted'>
                        {profile.tweetCount} Tweets
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div style={{position:"relative"}}>
                        <img src={require(`../images/${profile.bannerPicture}`)} alt="Banner" height="200px" width="100%" />
                    </div>
                    <div style={{position:"absolute", marginTop:"-60px", marginLeft:"20px"}}>
                        <img className='rounded-circle' 
													src={require(`../images/${profile.profilePicture}`)} alt="Profile" height="120px" width="120px" />
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"flex-end"}} className="mt-3">
                    <Link className='wd-edit-profile-btn' to="/tuiter/edit-profile">
                        Edit Profile
                    </Link>
                </div>
            </div>
            <div className='fw-bold fs-5 pt-2 ps-2'>
                {profile.firstName} {profile.lastName}
            </div>
            <div className='text-muted ps-2'>
                {profile.handle}
            </div>
            <div className='pt-3 ps-2'>
                {profile.bio}
            </div>
            <div style={{display:"flex", flexDirection:"row"}} className="pt-3 ps-2">
                <span>
									<i className="bi bi-geo-alt pe-1 text-muted"></i>
									<span className='text-muted'>{profile.location}</span>
									<i className="bi bi-balloon text-muted ps-4"></i>
									<span className='text-muted'> Born {profile.dateOfBirth}</span>
									<span className='text-muted ps-4'>
									<i className="bi bi-calendar3 pe-1 text-muted"></i>  
									 Joined {moment(profile.dateJoined, "MM/YYYY").format("MMMM YYYY")}&nbsp;
									 </span>
                </span>
            </div>
            <div className='pt-3 wd-count-container'>
							<b>{profile.followingCount}</b> <span className='ps-1 text-muted'>Following</span>
							<b className='ps-4'>{profile.followersCount}</b> <span className='ps-1 text-muted'> Followers</span>
            </div>
        </div>
    )
}

export default ProfileComponent;