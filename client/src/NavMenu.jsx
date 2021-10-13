//https://react.semantic-ui.com/collections/menu/#types-tabular-on-top - accessed 22/09/2021
import React, { Component } from 'react'
import {Menu, Segment } from 'semantic-ui-react'
import NewTask from './NewTask.jsx'
import './index.css'
import FindTask from './FindTask.jsx'



export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'Find a Task' }

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })  

  render() {
    const { activeItem } = this.state

    return (
      <div className ='container'>
        <Menu attached='top' tabular>
          <Menu.Item
            name='iService'
            active={activeItem === 'iService'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Post a Task'
            active={activeItem === 'Post a Task'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Become an Expert'
            active={activeItem === 'Become an Expert'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Find a Task'
            active={activeItem === 'Find a Task'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='How it Works'
            active={activeItem === 'How it Works'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <button className='button button-primary'>Sign In</button>
          </Menu.Item>          
        </Menu>

        <Segment attached='bottom'>
        {activeItem === 'iService' ?
          <img src='https://picsum.photos/1080/500' />
          :
          null
          }
          {activeItem === 'Post a Task' ?
          <NewTask />
          :
          null
          }
          {activeItem === 'Become an Expert' ?
          null
          :
          null
          }
          {activeItem === 'Find a Task' ?
          <FindTask />
          :
          null
          }
           {activeItem === 'How it Works' ?
          null
          :
          null
          }
        </Segment>
      </div>
    )
  }
}
