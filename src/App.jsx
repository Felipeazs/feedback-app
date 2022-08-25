import React from 'react';

const App = () => {
	const title = 'Blog post';
	const body = 'This is my blog post';
	const comments = [
		{
			id: 1,
			text: 'comment one',
		},
		{
			id: 2,
			text: 'comment two',
		},
		{
			id: 3,
			text: 'comment three',
		},
	];

	return (
		<div className='container'>
			<h1>{title}</h1>
			<p>{body}</p>

			<div className='comments'>
				<h3>Comments({comments.length})</h3>
				<ul>
					{comments.map((comment) => (
						<li key={comment.id}>{comment.text}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
