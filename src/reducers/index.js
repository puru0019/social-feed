import { combineReducers } from 'redux';
import socialFeed from './reducer_renderpost';

const rootReducer = combineReducers({
	posts: socialFeed
});

export default rootReducer;