import React from 'react';
import './App.css';

class App extends React.Component {

state = {
    value: '',
    list: [],
  }

updateInput= (event) => {
  this.setState({value : event.target.value})
}

addListItem = (event) => {
  event.preventDefault()
  let current = this.state.value
  let currentList = this.state.list
  this.setState({list: [...currentList, current]})
  this.setState({ value: '' })
}

  render() {
  return (
    <div className="main-body">
      <div className="row1">
      <form onSubmit={this.addListItem}>
        <input placeholder="Enter Contact's Name and Number" className="input-box" type="text" onChange={this.updateInput} value={this.state.value} ></input>
        <button className="submit-button" type="submit">Click to Submit or Press Enter</button>
      </form>
      </div>
      <div className="row2">
      <div className="list-style-address">
        <ul className="list">
        {this.state.list.map(listItem => {
          return <ListItem value={listItem} />
        })} 
        </ul>
      </div>
        <div className="some-writing">
          <img src="https://marcusmichaels.com/img/squiggle/the-squiggle-alpha.png" width="400px"></img>
          <img src="https://marcusmichaels.com/img/squiggle/the-squiggle-alpha.png" width="400px"></img>
          <img src="https://marcusmichaels.com/img/squiggle/the-squiggle-alpha.png" width="400px"></img>
          <img src="https://marcusmichaels.com/img/squiggle/the-squiggle-alpha.png" width="400px"></img>
          
        </div>
      </div>
    </div>
  )
}
}

let ListItem = props => { 
  return(
  <li> {props.value}</li>
  )
}


export default App;
