import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addComment } from '../../actions/post'
import {IoIosSend} from 'react-icons/io'

const CommentForm = ({postId, addComment }) => {
    const [text, setText] = useState('')

    return (
        <div class="post-form">
            <div class="bg-primary p">
                <h3>Leave a Comment...</h3>
            </div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    addComment(postId, {text});
                    setText('');
                }
                }class="form my-1">
                <div className="postcomment">
                    <textarea
                        name="text"
                        cols="300"
                        rows="1"
                        placeholder="  Write a comment..."
                        value={text}
                        onChange = {e => setText(e.target.value)}
                        required>
                    </textarea>
                    <button type="submit"><IoIosSend size="1.5rem"/></button>
                    {/* IoIosSend */}
                    {/* <input type="submit" class="btn btn-dark my-1" value="Submit" /> */}
                </div>
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment:PropTypes.func.isRequired,
}

export default connect(null, {addComment})(CommentForm)