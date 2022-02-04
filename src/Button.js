import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function App() {
return (
	<div style={{ display: 'block',
				width: 700,
				padding: 30 }}>
	<Dropdown>
		<Dropdown.Toggle variant="success">
		Document
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="#">
			Add
		</Dropdown.Item>
		<Dropdown.Item href="#">
			Delete
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}
