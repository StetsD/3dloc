import React, { Component } from 'react';
import { Button, Dropdown, Grid } from 'semantic-ui-react';
import countries from '../../../data/filters/countries';
import city from '../../../data/filters/city';
import style from './style.scss';


export default class Filters extends Component {

	constructor(props){
		super(props);

		this._handleClickUser = this._handleClickUser.bind(this);
	}

	_handleClickUser(){
		this.props.handleClickUser();
	}

    render(){
        return (
			<Grid className="filters" doubling stackable verticalAlign="middle" >
				<Grid.Column largeScreen="2" widescreen="2" tablet="4">
					<Button fluid  onClick={this._handleClickUser}>
				        <i className="user icon"></i>
				        Борис Иваныч
				    </Button>
				</Grid.Column>
				<Grid.Column largeScreen="2" widescreen="2" tablet="4">
					<Dropdown fluid item placeholder="Страна" search selection
				        options = {countries}>
				    </Dropdown>
				</Grid.Column>
				<Grid.Column largeScreen="2" widescreen="2" tablet="4">
					<Dropdown fluid item placeholder="Город" search selection
				        options = {city}>
				    </Dropdown>
				</Grid.Column>
				<Grid.Column largeScreen="2" widescreen="2" tablet="4">
					<Dropdown fluid item placeholder="Стоимость" search selection
				        options = {city}>
				    </Dropdown>
				</Grid.Column>
				<Grid.Column largeScreen="2" widescreen="2" tablet="4">
					<Dropdown fluid item placeholder="Рейтинг" search selection
				        options = {city}>
				    </Dropdown>
				</Grid.Column>
				<Grid.Column largeScreen="2" widescreen="2" tablet="4">
					<Dropdown fluid item placeholder="Специализация" search selection
				        options = {city}>
				    </Dropdown>
				</Grid.Column>
			</Grid>

        )
    }
}
