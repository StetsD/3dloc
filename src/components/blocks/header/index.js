import React from 'react'
import { Dropdown, Icon, Menu, Segment, Header } from 'semantic-ui-react'
import style from './style.scss';
import logo from './img/logo.jpg';

const HeaderBlock = () => {
    return (
        <header className="header">
			<div className="header__inner">
				<a href="/" className="header__link header__link_logo"><img src={logo}/></a>
				<a href="#" className="header__link">Главная</a>
				<a href="#" className="header__link">О проекте</a>
				<a href="#" className="header__link">Блог</a>
			</div>
        </header>
    )
}

export default HeaderBlock;
