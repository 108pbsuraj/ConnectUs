import React from 'react'
import PropTypes from 'prop-types'
import {BiWorld} from 'react-icons/bi'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'


const ProfileTop = ({ 
    profile:{
        status,
        company,
        location,
        website,
        social,
        user:{
            name,
            avatar
        }
    }
 }) => {
    return (
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src={avatar}
            alt=""/>
          <h1 class="large">{name}</h1>
          <p class="lead">{status} {company && <span> at {company}</span>}</p>
          <p>{location && <span>{location}</span>}</p>
          <div class="icons my-1">

          {
              website && (
                <a href={website} target="_blank" rel="noopener noreferrer">
                <BiWorld color="black" size="1.2rem"/>
                </a>
              )
          }

          { 
              social && social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare color="black" size="1.2rem"/>
                </a>
              ) 
          }

          { 
              social && social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare color="black" size="1.2rem"/>
                </a>
              ) 
          }

          { 
              social && social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin color="black" size="1.2rem"/>
                </a>
              ) 
          }

          { 
              social && social.youtube && (
                <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutubeSquare color="black" size="1.2rem"/>
                </a>
              ) 
          }

          { 
              social && social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare color="black" size="1.2rem"/>
                </a>
              ) 
          }
          </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile:PropTypes.object.isRequired
}

export default ProfileTop