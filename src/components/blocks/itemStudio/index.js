import React, {Component} from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label, Rating } from 'semantic-ui-react'
import { Link } from 'react-router';
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
                    <Link to="/studios/3">
                        <Item.Header className='studio-item__title'>{this.props.title}</Item.Header>
                    </Link>
                    <Link to="/studios/3">
                        <Item.Meta className='studio-item__desc'>
                            <span >{this.props.description}</span>
                        </Item.Meta>
                    </Link>

                    <Item.Description className='studio-item__location'>
                        <p>{this.props.address}</p>
                        <div>
                            Рейтинг <Rating disabled icon='star' defaultRating={this.props.rating} maxRating={5}/>
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
