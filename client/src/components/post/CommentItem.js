import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteComment } from '../../actions/post'
import {AiTwotoneDelete} from 'react-icons/ai'


const CommentItem = ({
    postId,
    comment:{
        _id,
        name,
        avatar,
        user,
        date,
        text
    },
    auth,
    deleteComment
}) =>
    <div class="finalcomment postcommentimg bg-white p-0 my-0">
        <div>
            <Link to={`/profile/${user}`}>
                <img
                    class="round-img"
                    src={avatar}
                    alt=""/>
            </Link>
        </div>
        <div>
            <p>
                <strong>
                    <Link to={`/profile/${user}`}>{name}</Link>
                </strong>
                {' '}{text}
            </p>
            {/* <p><strong>{name} */}
            {/* </strong> {text}</p> */}
            <p class="post-date">
                <Moment format='DD/MM hh:mm'>{date}</Moment>
            </p>
            
        </div>
        <div className="p-1">
            {
                !auth.loading && user === auth.user._id && (
                    <button onClick={e=> deleteComment(postId, _id)} type='button' >
                        <><AiTwotoneDelete color="red" size="1.46rem"/></>
                    </button>
                )
            }
        </div>
    </div>

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment:PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {deleteComment})(CommentItem);