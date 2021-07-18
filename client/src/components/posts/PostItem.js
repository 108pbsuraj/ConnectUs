import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import {MdComment} from 'react-icons/md'
import { connect } from 'react-redux'
import {FaHeart} from 'react-icons/fa'
import {FaHeartBroken} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { addLike, removeLike, deletePost} from '../../actions/post'


const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth, 
    post: {
        _id,
        text,
        avatar,
        name,
        user,
        likes,
        comments,
        date
    },
    showActions
}) => {
    return <div className="post bg-white p-1 my-1">
                
                <Link to={`/profile/${user}`}>
                    <div className="postsinmobile">
                        <img
                            className="round-img"
                            src={avatar}
                            alt=""/>
                        <h4>{name}</h4>
                    </div>
                </Link>
                
                <div>
                    <p className="my-1">
                        {text}
                    </p>
                    <p className="post-date">
                        Posted on <Moment format = 'DD/MM h:mm:ss'>{date}</Moment>
                    </p>

                    { showActions && <Fragment>
                        <button onClick= {e => addLike(_id)} type="button" className="btn btn-light">
                            <span><FaHeart color="red"/> {
                                likes.length > 0 && <span>{likes.length}</span>
                            }</span>
                        </button>
                        <button onClick= {e => removeLike(_id)} type="button" className="btn btn-light">
                            <><FaHeartBroken color="red"/> </>
                        </button>
                        <Link to={`/posts/${_id}`} className="btn btn-primary">
                            <MdComment size="1.2rem"/> {
                                comments.length >0 && (
                                    <span className='comment-count'>{comments.length}</span>       
                                )
                            }
                        </Link>

                        {
                            !auth.loading && user === auth.user._id && (
                                <button onClick={
                                        e => deletePost(_id)
                                    }      
                                    type="button"
                                    className="btn btn-danger">
                                    <><ImCross/></>
                                </button>
                            )
                        }
                    </Fragment>}
                
                </div>
                {/* <div>
                    { showActions && 
                        !auth.loading && user === auth.user._id && (
                            <button onClick={
                                    e => deletePost(_id)
                                }      
                                type="button"
                                className="btn btn-danger">
                                <><ImCross/></>
                            </button>
                        )
                    }
                </div> */}
        </div>
    ;
}

PostItem.defaultProps = {
    showActions:true
};

PostItem.propTypes = {
    post:PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike:PropTypes.func.isRequired,
    removeLike:PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps, {addLike, removeLike, deletePost})(PostItem)