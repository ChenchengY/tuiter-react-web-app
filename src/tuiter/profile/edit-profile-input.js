import React, {useState} from 'react';
import './index.css';
const EditProfileInput = ({ handleInputChange, value, label, inputType = "text" }) => {
	const[focused, setForcused] = useState(false);
    return (
        <div className="wd-profile-input-container">
            <div className="text-muted">
                <label>
                    {label}
                </label>
            </div>
            <input
                type={inputType}
                value={value}
                onChange={handleInputChange}
								onFocus={()=>setForcused(true)}
								onBlur={()=>setForcused(false)}
            style={{width:"100%", backgroundColor: focused ? "lightgray" : "white", color:"black", border:"none"}}
            />
        </div>
    )
}

export default EditProfileInput;