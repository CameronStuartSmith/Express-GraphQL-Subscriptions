import React from 'react';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const query = gql`
	subscription CommentAdded {
		commentAdded
	}
`;

const TestSubscription = () => {
	const { data, loading, } = useSubscription(query);
	return(
		<div style={{ margin: 100 }}>
			<h3>Subscription Data:</h3>
			<div>{loading && 'Loading...'}</div>
			<div>{data && data.commentAdded}</div>
		</div>
	);
}

export default TestSubscription;