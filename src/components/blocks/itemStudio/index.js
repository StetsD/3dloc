import React, {Component} from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

export default class ItemStudio extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Item >
		      <Item.Image src={this.props.img} />

		      <Item.Content>
		        <Item.Header as='a'>12 Years a Slave</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>Union Square 14</span>
		        </Item.Meta>
		        <Item.Description>{paragraph}</Item.Description>
		        <Item.Extra>
		          <Label>IMAX</Label>
		          <Label icon='globe' content='Additional Languages' />
		        </Item.Extra>
		      </Item.Content>
		    </Item>
		)
	}
}
