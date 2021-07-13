import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile'
import { MdDelete } from 'react-icons/md'
const Education = ({ education,deleteEducation }) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className='hide-sm'>{edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {' '}
                {
                    edu.to === null ? ('Now'): (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                }
            </td>
            <div className="p-1">
                <button onClick={()=> deleteEducation(edu._id)} className='btn btn-danger p-1'><MdDelete size="1.3rem"/></button>                
            </div>
            {/* <button onClick={()=> deleteEducation(edu._id)} className='btn btn-danger p-1'><MdDelete size="1.3rem"/></button> */}
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                        <th className="hide-sm">Delete?</th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation:PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education)