import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {MdDeveloperMode} from 'react-icons/md'
import {IoLogOut} from 'react-icons/io5'
import {BsFilePost} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {GiStabbedNote} from 'react-icons/gi'
import { IoLogIn } from 'react-icons/io5';

const Navbar = ({auth:{isAuthenticated, loading}, logout}) => {

  const authLinks = (
    <ul>
        <li><Link to='/profiles'>
        <MdDeveloperMode/>
        {'  '}
        <span className= "hide-sm">Developers</span>
        </Link></li>

        <li><Link to='/posts'>
        <BsFilePost/>
        {'  '}
        <span className= "hide-sm">Posts</span>
        </Link></li>

        <li><Link to='/dashboard'>
        <CgProfile/>
        {'  '}
        <span className= "hide-sm">Dashboard</span>
        </Link></li>

        <li><Link onClick= {logout} to="/login">
        <IoLogOut/>
        {'  '}
        <span className= "hide-sm">Logout</span>
        </Link></li>
    </ul>
  );
  const guestLinks = (
    <ul>
        <li><Link to='/profiles'>
        <MdDeveloperMode/>
        {'  '}
        <span className= "hide-sm">Developers</span>
        </Link></li>
        <li><Link to='/register'>
        <GiStabbedNote/>
        {'  '}
        <span className= "hide-sm">Register</span>
        </Link></li>
        <li><Link to='/login'>
        <IoLogIn/>
        {'  '}
        <span className= "hide-sm">Login</span>
        </Link></li>
    </ul>
  );
    return (
        <nav className="navbar bg-dark">
      <h1>
        <Link to='/'><i className="fas fa-code"></i> DevLinkUs</Link>
      </h1>
      {!loading &&(<Fragment>{isAuthenticated? authLinks: guestLinks}</Fragment>)}
    </nav>
    )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps= state =>({
  auth : state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);