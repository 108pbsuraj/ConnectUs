import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserEdit} from 'react-icons/fa'
import {BiBookAdd} from 'react-icons/bi'
import {IoBagAddSharp} from 'react-icons/io5'


const DashboardActions = () => {
    return (
        <div class="dash-buttons">
            <Link to='/edit-profile' class="btn btn-light">
            <i class="fas fa-user-circle text-primary"></i><FaUserEdit/> Edit Profile</Link>
            <Link to='/add-experience' class="btn btn-light">
            <i class="fab fa-black-tie text-primary"></i><IoBagAddSharp/> Add Experience</Link>
            <Link to='/add-education' class="btn btn-light">
            <i class="fas fa-graduation-cap text-primary"></i><BiBookAdd/> Add Education</Link>
        </div>
    )
}

export default DashboardActions