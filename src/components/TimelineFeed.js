import React from 'react';
import UserPhoto from '../img/userphoto.png';
import { Grid, Row, Col } from 'react-bootstrap';

const TimelineFeed = ({post}) => { 
	
	return (
		<Grid className="post">
			<Row>
				<Col xs={2}>
					<img src={UserPhoto} alt="profile" className="picture"/>
				</Col>
				<Col xs={10} className="user">
					{post.user}
				</Col>
			</Row>
			<Row>
				<Col xs={12} className="message">
					{post.message}
				</Col>
			</Row>
		</Grid>
	);
}

export default TimelineFeed;