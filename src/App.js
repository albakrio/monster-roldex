import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleInputChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className='App'>
			  <h1>Monsters Roldex</h1>
				<SearchBox
					placeholder='search monsters'
					handleInputChange={this.handleInputChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
