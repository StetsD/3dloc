import React from 'react'
import { Link } from 'react-router';
import { Dropdown, Icon, Menu, Segment, Header } from 'semantic-ui-react'
import style from './style.scss';
import logo from './img/logo.jpg';

const HeaderBlock = () => {
    return (
        <header className="header">
			<div className="header__inner">
				<Link to="/" className="header__link header__link_logo"><img src={logo}/></Link>
				<Link to="/" className="header__link">Главная</Link>
				<Link to="/about" className="header__link">О проекте</Link>
				<Link to="/blog" className="header__link">Блог</Link>
			</div>
        </header>
    )
}

export default HeaderBlock;
