const socialFeed = (state=[],action) => {
	switch(action.type) {
		case 'CREATE_POST':
			return [
				...state,
				{
					id:state.length,
					"message":action.message,
					"user": "Gopi Krishnam Raju",
					"comments": [],
					"liked":false
				}
			]
		case 'LIKE_POST': 
			return state.map(post =>
				(post.id === action.id) ? {...post,liked: !post.liked} : post
			)
		case 'ADD_COMMENT':
			return state.map(post => 
				(post.id === action.id) ? {...post,comments: [...post.comments,action.comments]} : post
			)
		default:
			return state
	}
}

export default socialFeed;