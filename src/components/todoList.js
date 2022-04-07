import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './todoList.css';



const Main = () => {

	const [item, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);

	const firstEvent = (event) => {
		setItem(event.target.value);
	}

	const secondEvent = () => {
		setNewItem((prev) => {
			return [...prev, item]
		});
		setItem("");
	}

	const thirdEvent = () => {
		setNewItem([]);
	}
	const [isChecked, setIsChecked] = useState(false);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div>
			<br />
			<br />
			<div className="childOne">
				<input type="text" value={item} placeholder="Add a task" onChange={firstEvent} />
				<Button className="AddBtn" onClick={secondEvent} variant="contained">
					<AddIcon />
				</Button>
				<br />
				<br />
				<ul className="textFont">
					{
						newItem.map((val) => {

							if (val !== "") {
								return <FormGroup /*key={val.id}*/ style={{ textDecoration: isChecked ? "line-through" : null }}>
									<FormControlLabel control={<Checkbox color="success" checked={isChecked}
										onChange={handleOnChange} />}										
										label={val} />
								</FormGroup>;
							}
						})
					}
				</ul>
			</div>
			<br />
			<br />
			<ButtonGroup disableElevation variant="contained" class="childTwo">
				<Button variant="contained" color="warning" className="delBtn" onClick={thirdEvent}>
					<EditIcon /> Edit
				</Button>
				<Button variant="contained" color="primary" className="delBtn" onClick={thirdEvent}>
					<DeleteIcon /> Delete Selected
				</Button>
				<Button variant="contained" color="error" className="delBtn" onClick={thirdEvent}>
					<DeleteIcon /> Delete All
				</Button>
			</ButtonGroup>
		</div>
	);
}


export default Main;

