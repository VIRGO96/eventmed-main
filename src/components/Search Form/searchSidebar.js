import Form from 'react-bootstrap/Form';
import React from 'react';
import Slider from './Slider';
import '../../css/SearchSidebar.css';
import { useState } from 'react';

function searchSidebar(props) {
	const handleCheckboxChange = name => {
		let newArray = [...props.Catagory, name];
		if (props.Catagory.includes(name)) {
			newArray = newArray.filter(n => n !== name);
		}
		console.log({ newArray });
		props.setCategory(newArray);
	};

	const handleRadioClick = (type, value) => {
		props.setFilter(prevState => {
			// console.log(type, value);
			// console.log(prevState[type] == value);
			// if (prevState[type] == value) {
			// 	console.log('equal');
			// 	prevState[type] = '';
			// } else {
			// 	console.log('not equal');
			// 	prevState[type] = value;
			// }
			console.log({ type, value });
			let temp = {
				...prevState,
				[type]: prevState[type] == value ? '' : value,
			};
			return JSON.parse(JSON.stringify(temp));
		});
	};

	return (
		<div>
			<>
				<Form className='mt-45'>
					<Form.Label className='mt-3'>Category</Form.Label>

					<Form.Group
						className='mb-3 ml-3 p-20'
						controlId='formBasicEmail'
					>
						<Form.Check
							reverse
							label='Conference'
							name='category'
							id='Conference'
							//type='radio'
							className='form__fields'
							checked={props.filter.category == 'Conference'}
							onChange={e =>
								handleRadioClick('category', 'Conference')
							}
						/>
						<Form.Check
							reverse
							label='Congress'
							name='category'
							id='Congress'
							//type='radio'
							className='form__fields'
							checked={props.filter.category == 'Congress'}
							onChange={e =>
								handleRadioClick('category', 'Congress')
							}
						/>
						<Form.Check
							reverse
							label='Summit'
							name='category'
							id='Submit'
							//type='radio'
							className='form__fields'
							checked={props.filter.category == 'Summit'}
							onChange={e =>
								handleRadioClick('category', 'Summit')
							}
						/>
						<Form.Check
							reverse
							label='Course'
							name='category'
							id='Course'
							//type='radio'
							className='form__fields'
							checked={props.filter.category == 'Course'}
							onChange={e =>
								handleRadioClick('category', 'Course')
							}
						/>
						<Form.Check
							reverse
							label='Webinar'
							name='category'
							id='Webinar'
							//type='radio'
							className='form__fields'
							checked={props.filter.category == 'Webinar'}
							onChange={e =>
								handleRadioClick('category', 'Webinar')
							}
						/>
					</Form.Group>

					{/* location */}
					<Form.Label>Location</Form.Label>
					<Form.Group
						className='mb-3 ml-3 p-20'
						controlId='formBasicEmail'
					>
						<Form.Check
							reverse
							label='Online'
							name='location'
							id='Online'
							className='form__fields'
							checked={props.filter.location == 'Online'}
							onChange={e =>
								handleRadioClick('location', 'Online')
							}
						/>
						<Form.Check
							reverse
							label='Physical'
							name='location'
							id='Physical'
							className='form__fields'
							checked={props.filter.location == 'Physical'}
							onChange={e =>
								handleRadioClick('location', 'Physical')
							}
						/>
					</Form.Group>
					{/* Address to */}
					<Form.Label>Address to</Form.Label>
					<Form.Group
						className='mb-3 ml-3 '
						controlId='formBasicEmail'
					>
						<Form.Check
							reverse
							label='Student'
							name='Student'
							id='Student'
							className='form__fields'
							checked={props.filter.addressTo == 'Student'}
							onChange={e =>
								handleRadioClick('addressTo', 'Student')
							}
						/>
						<Form.Check
							reverse
							label='Medic'
							name='Medic'
							id='Medic'
							className='form__fields'
							checked={props.filter.addressTo == 'Medic'}
							onChange={e =>
								handleRadioClick('addressTo', 'Medic')
							}
						/>
						<Form.Check
							reverse
							label='EveryOne'
							name='EveryOne'
							id='EveryOne'
							className='form__fields'
							checked={props.filter.addressTo == 'EveryOne'}
							onChange={e =>
								handleRadioClick('addressTo', 'EveryOne')
							}
						/>
					</Form.Group>

					{/* Topic */}
					<Form.Label>Topic</Form.Label>
					<Form.Group
						className='mb-3 ml-3 '
						controlId='formBasicEmail'
					>
						<Form.Check
							reverse
							label='Surgical'
							name='Surgical'
							id='Surgical'
							className='form__fields'
							checked={props.filter.topic == 'Surgical'}
							onChange={e =>
								handleRadioClick('topic', 'Surgical')
							}
						/>
						<Form.Check
							reverse
							label='Non-Surgical'
							name='Non-Surgical'
							id='Non-Surgical'
							className='form__fields'
							checked={props.filter.topic == 'Non-Surgical'}
							onChange={e =>
								handleRadioClick('topic', 'Non-Surgical')
							}
						/>
					</Form.Group>

					<Form.Group
						className='mb-3 ml-3 p-20'
						controlId='formBasicCheckbox'
					>
						<label for='customRange3' className='form-label'>
							Price Range
						</label>
						{/* Slider */}
						<Slider
							priceRange={props.priceRange}
							setPriceRange={props.setPriceRange}
						/>
					</Form.Group>
				</Form>
			</>
		</div>
	);
}

export default searchSidebar;
