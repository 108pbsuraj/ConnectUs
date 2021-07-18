import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = ({ addPost,auth }) => {
    const [text, setText] = useState('');

    return (
        <div>
            <div class="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <div class="post bg-white p-1">
                
                <div className="postsinmobile">
                    {/* <img
                        className="round-img"
                        src={auth.user.avatar}
                        alt=""/>

                    <h4>{auth.user.name}</h4> */}

                </div>
                <form onSubmit={
                        e => {
                            e.preventDefault();
                            addPost({text});
                            setText('');
                        }
                    }class="form my-1">
                    <textarea
                        name="text"
                        cols="30"
                        rows="3"
                        placeholder="What is on your mind..."
                        value={text}
                        onChange = {e => setText(e.target.value)}
                        required>
                    </textarea>
                    <input type="submit" class="btn btn-primary my-1" value="Post" />
                </form>
            </div>
        </div>
    )
}

PostForm.propTypes = {
    addPost:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps, {addPost})(PostForm)