import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserPhoto from '../img/userphoto.png';
import { Grid, Row, Col, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { comment, thumbsOUp } from 'react-icons-kit/fa';
import  PostComment  from '../components/postcomment';
import { connect } from 'react-redux';
import { commentPost,likedPost } from '../actions/index';
import { bindActionCreators } from 'redux';

const RenderPost = ({post,onClickPost,onSubmitComment,onCommentChange,commentMessage,id}) => {
	const Comments = post.comments.map((commentData,index)=>{
		return (
			<PostComment usercomments={commentData} key={index} />
		)
	});
	let isLiked = post.liked === true ? "liked" : "not-liked";
	let isDisabled = (commentMessage && commentMessage.length > 0) ? false : true;
	let inputCommentName = "formBasicText_" + id,formControlRef=null;
	function onClickComment () {
		ReactDOM.findDOMNode(formControlRef).focus();
	}
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
				<Col xs={12} lg={12} className="post-message align-text">
					{post.message}
				</Col>
			</Row>
			<Row className="footer">
				<Col xs={6} lg={6} className="message">
					<div className={isLiked} onClick={onClickPost}><Icon icon={thumbsOUp} size={20}/>Like</div>
				</Col>
				<Col xs={6} lg={6} className="message">
					<div onClick={onClickComment}><Icon icon={comment}  size={20}/>Comment</div>
				</Col>
				{ post.liked ? <div className="align-text">You Just Liked the post</div> : null}
			</Row>

			<hr/>
			<Row>
				<Col xs={12} lg={12}>
					<div>
						{Comments}
						<form onSubmit={onSubmitComment}>
					        <FormGroup
					          controlId={inputCommentName}
					        >
					         <FormControl 
					         	componentClass="textarea"
					         	ref={(input) => { formControlRef = input }}
			  				  	placeholder="Enter your comments"
			  				  	value={commentMessage ? commentMessage : ""}
			  				  	onChange={onCommentChange}
			  				  	/>
			  				  <Button className="btn btn-primary btn-large commentButton" type="submit" disabled={isDisabled}>Comment</Button>
					        </FormGroup>
						</form>
					</div>
				</Col>
			</Row>
		</Grid>
	)
}

class RenderPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			replyMessage: [],
			user:"Gopi Krishnam Raju"
		}
	}
	postClicked (id) {
		this.props.dispatch.likedPost(id);
	}
	handleCommentChange(i,e) {
		this.setState({
			replyMessage:{...this.state.replyMessage,[i]:e.target.value}
		});
	}
	handleCommentSubmit(id, e) {
		console.log(this.state)
		let commentState = {replyMessage:this.state.replyMessage[id], user:this.state.user};
		e.preventDefault();
		this.props.dispatch.commentPost(id,commentState);
		this.setState({
			replyMessage:{...this.state.replyMessage,[id]:''}
		})
	}
	render() {
		return this.props.posts.map((data,index) => {
			return(
				<RenderPost post={data} key={index} id={index} onClickPost={this.postClicked.bind(this,data.id)} onCommentChange={this.handleCommentChange.bind(this,index)} onSubmitComment={this.handleCommentSubmit.bind(this,data.id)} commentMessage={this.state.replyMessage[index]}/>
			)
		})	
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: bindActionCreators({commentPost,likedPost},dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderPosts);