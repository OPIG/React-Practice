import React from 'react'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'

class App extends React.Component {
  state = {
      choosevalue : 1,
      data: this.props.data
  }
  
  OnAddTodoItem (newItem){
      let newData = this.state.data.concat(newItem);
      this.setState({data:newData})
  }

  render () {
    const { data } = this.state; 
    return (
      <div className='ui comments'>
        <h1>My Todo with React</h1>
        <div className='ui divider'></div>
        <AppForm 
          AddTodoItem={this.OnAddTodoItem.bind(this)} />
        <AppList data={data}/>
        <AppFooter/>
      </div>
    )
  }
}

export default App;