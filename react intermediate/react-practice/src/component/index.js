import './index.css'
import React from "react";

const Profile = (props) => {
    const { hello } = props;
    return <div className='card'>
        <h2>{hello.name}  </h2>
        <p> {hello.role}</p>
    </div>
}
export default Profile