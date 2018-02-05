import React from 'react';
import TimelineFeed from './TimelineFeed';

const TimelineFeeds = ({feedData}) => { 
	return (
		<div>
		<Createfeed />
		{
			feedData.posts.map((data,index) => {
				return(
					<TimelineFeed post={data} key={index} />
				)
			})
		}
		</div>
	);
}

export default TimelineFeeds;