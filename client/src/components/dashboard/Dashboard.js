import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import DashboardActions from './DashboardActions'
import { deleteAccount, getCurrentProfile } from '../../actions/profile'
import Experience from './Experience'
import Education from './Education'
import {CgProfile} from 'react-icons/cg'
import {ImProfile} from 'react-icons/im'
import { FaUserTimes } from 'react-icons/fa'

const Dashboard = ({getCurrentProfile, deleteAccount, auth: {user}, profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return (
        loading && profile === null ? <Spinner/> : <Fragment>
            <h1 className= "large tex-primary"><ImProfile/> Dashboard</h1>
            <p className= "lead">
                <>
                <CgProfile/>
                </>
                 {" "}Welcome { user && user.name }
            </p>
            {profile !== null ? <Fragment>
                <DashboardActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                <div className='my-2'>
                    <button className='btn btn-danger' onClick={()=> deleteAccount()}><FaUserTimes size="1.3rem"/> Delete My Account</button>
                </div>
            </Fragment>
             : 
            <Fragment>
                <p>You have not yet setup your profile. Please add some info using below link</p>
                <Link to="create-profile" className= "btn btn-primary my-1">
                    Create Profile
                </Link>
            </Fragment> }
        </Fragment>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
