import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import {getProfileById} from '../../actions/profile'
import { Link } from 'react-router-dom'
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'
import {TiEdit} from 'react-icons/ti'
import {AiOutlineRollback} from 'react-icons/ai'

const Profile = ({ getProfileById, profile:{ profile, loading}, match, auth }) => {
    useEffect(() => {
        getProfileById(match.params.id );
    }, [getProfileById, match.params.id]);

    return <Fragment>
        {profile === null || loading ? <Spinner/> : <Fragment>
            <Link to='/profiles' className="btn btn-primary">
               <AiOutlineRollback size="1.2rem"/>
            </Link>
            {
                auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id &&
                (<Link to='/edit-profile' className = "btn btn-dark">
                    <TiEdit color="white" size="1.2rem"/>
                </Link>)
            }
            <div class="profile-grid my-1">
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
                <div className="profile-exp bg-white p-2">
                    <h2 className="text-primary">
                        Experience
                    </h2>
                    {
                        profile.experience.length >0 ? (
                            <Fragment>
                                {
                                    profile.experience.map(
                                        experience => (
                                            <ProfileExperience key = {experience._id}
                                            experience={experience}/>
                                        )
                                    )
                                }
                            </Fragment>
                        )
                        :
                        (<h4>No Experience Credentials</h4>)
                    }
                </div>
                <div className="profile-edu bg-white p-2">
                    <h2 className="text-primary">
                        Education
                    </h2>
                    {
                        profile.education.length >0 ? (
                            <Fragment>
                                {
                                    profile.education.map(
                                        education => (
                                            <ProfileEducation key = {education._id}
                                            education={education}/>
                                        )
                                    )
                                }
                            </Fragment>
                        )
                        :
                        (<h4>No Education Degrees found</h4>)
                    }
                </div>

                {
                    profile.githubusername && (
                        <ProfileGithub username = {profile.githubusername} />
                    )
                }


            </div>
            </Fragment>
        }
    </Fragment>;
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps,{getProfileById})(Profile)