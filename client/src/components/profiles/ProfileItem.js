import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {FaUserTie} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {CgCode} from 'react-icons/cg'

const ProfileItem = ({
    profile:{
        user : { _id, name, avatar},
        status,
        company,
        location,
        skills
}}) => {
    return <div className = "profile bg-light">
        <img src={avatar} alt='' className="round-img" />
        <div>
            <h2>{name}</h2>
            <p><FaUserTie/> {status} {company && <span> at {company}</span>}</p>
            <p className='my-1'><ImLocation2/> {location && <span>{location}</span>}</p>
            <Link to={`/profile/${_id}`} className="btn btn-primary">
                View Profile
            </Link>
        </div>
        <ul>
            {skills.slice(0,4).map((skill, index) => (
                <li key = {index} className='text-primary'><CgCode/> {skill}</li>
            ))}
        </ul>
    </div>;
};

ProfileItem.propTypes = {
    profile:PropTypes.object.isRequired
}

export default ProfileItem;