import React, {Component} from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label, Rating } from 'semantic-ui-react'
import style from './style.scss';

export default class ItemStudio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Item className='studio-item'>
                <Item.Image verticalAlign='middle' className='studio-item__img' src={this.props.img}/>

                <Item.Content>
                    <Item.Header className='studio-item__title'>12 Years a Slave</Item.Header>
                    <Item.Meta className='studio-item__desc'>
                        <span >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                    </Item.Meta>
                    <Item.Description className='studio-item__location'>
                        <p>г. Санкт-Петербург, ул.Морской Пехоты 23</p>
                        <div>
                            Рейтинг <Rating icon='star' defaultRating={3} maxRating={5}/>
                        </div>
                    </Item.Description>

                    <Item.Extra>
                        <Label className='studio-item__tag' icon='settings' content='Формы для выпечки'/>
                        <Label className='studio-item__tag' icon='globe' content='Скульптуры'/>
                    </Item.Extra>
                    <Button className='studio-item__write' positive>Написать</Button>
                </Item.Content>

            </Item>
        )
    }
}
