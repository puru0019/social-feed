export const addPost = (message) => {
	return {
		type: 'CREATE_POST',
		message
	}
}

export const likedPost = (id) => {
	return {
		type: 'LIKE_POST',
		id
	}
}

export const commentPost = (id,comments) => {
	return {
		type: 'ADD_COMMENT',
		id,
		comments
	}
}