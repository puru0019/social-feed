import React, { Component } from 'react';
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../actions/index';

class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {'message':''}
		this.handleChange = this.handleChange.bind(this)
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
	}
	handleChange = (e) => {
		this.setState({
			message:e.target.value
		})
	}
	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(addPost(this.state.message));
		this.setState({
			message:''
		})
	}
	render() {
		const disable = this.state.message.length > 0 ? false : true;
		return (
			<div className="createFeed">
				<form onSubmit={this.handleOnSubmit}>
			        <FormGroup
			          controlId="formBasicText"
			        >
			          <ControlLabel>Enter Your Post</ControlLabel>
	  				  	<FormControl 
	  				  	componentClass="textarea"
	  				  	placeholder="Enter your post"
	  				  	value={this.state.message}
	  				  	onChange={this.handleChange}  />
	  				  <Button className="btn btn-primary btn-large centerButton" type="submit" disabled={disable}>Post</Button>
			        </FormGroup>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: bindActionCreators(addPost,dispatch)
	}
}

export default connect(mapDispatchToProps)(CreatePost);