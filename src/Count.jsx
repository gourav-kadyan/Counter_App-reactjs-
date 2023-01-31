import { Segment, Button, Grid } from 'semantic-ui-react';
import { useState } from 'react';
import './count.css';

const Count = () => {
	const [count, setCount] = useState(0);
	return (
		<Segment raised padded>
			<Grid rows={3}>
				<Grid.Row>
					<h1>Count</h1>
				</Grid.Row>
				<Grid.Row>
					<p>{count}</p>
				</Grid.Row>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Button
							color='green'
							content='Increment'
							onClick={() => setCount(count + 1)}
						></Button>
					</Grid.Column>
					<Grid.Column>
						{count > 0 ? (
							<Button
								color='red'
								content='Decrement'
								onClick={() => setCount(count - 1)}
							></Button>
						) : (
							<Button
								color='red'
								content='Decrement'
								onClick={() => setCount(count - 1)}
								disabled
							></Button>
						)}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default Count;
