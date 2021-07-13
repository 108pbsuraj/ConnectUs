import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteExperience } from '../../actions/profile'
import {MdDelete} from 'react-icons/md'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className='hide-sm'>{exp.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {' '}
                {
                    exp.to === null ? ('Now'): (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
                }
            </td>
            <div className="p-1">
                <button onClick={() => deleteExperience(exp._id)} className='btn btn-danger p-1'><MdDelete size="1.3rem"/></button>
            </div>
            {/* <button onClick={() => deleteExperience(exp._id)} className='btn btn-danger p-1'><MdDelete size="1.3rem"/></button> */}
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th className="hide-sm">Delete?</th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)