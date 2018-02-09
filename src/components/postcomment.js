import React from 'react';
import UserPhoto from '../img/userphoto.png';
import { Row, Col } from 'react-bootstrap';

const PostComment =({usercomments}) => {
	return (
		<Row className="comment">
			<Col xs={2}>
				<img src={UserPhoto} alt="profile" className="comment-picture"/>
			</Col>
			<Col xs={4} className="user">
				{usercomments.user}
			</Col>
			<Col xs={4} className="reply-message">
				{usercomments.replyMessage}
			</Col>
		</Row>
	)
}

export default PostComment;