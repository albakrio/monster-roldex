import React from 'react';
import './search-box.css';

const SearchBox = ({ handleInputChange, placeholder }) => {
	return (
		<div>
			<input
				className='search'
				type='search'
				placeholder={placeholder}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default SearchBox;
