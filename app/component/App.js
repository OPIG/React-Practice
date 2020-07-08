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
      console.log(newData)
  }
  ChooseValue(id){
    this.setState({choosevalue:id})
  }

  AllChangeComplete(id){
    let newData=this.state.data.map((item,index)=>{
      if(item.id===id){
        item.complete = !item.complete
      }
      return item;
    })
    this.setState({data:newData})
  }

  AllOneDeleteItem(id){
    console.log(this.state.data)
    let newdata = this.state.data.map(function(item){
      if(item.id==id){
        item.deleteFlag = true
      }
      return item
    })
    this.setState({data:newdata})
  }

  render () {
    const { data } = this.state; 
    return (
      <div className='ui comments'>
        <h1>My Todo with React</h1>
        <div className='ui divider'></div>
        <AppForm 
          AddTodoItem={this.OnAddTodoItem.bind(this)} />
        <AppList 
          data={data}
          choosevalue={this.state.choosevalue}
          ChangeCompleteTop={this.AllChangeComplete.bind(this)}
          DeleteItemTop={this.AllOneDeleteItem.bind(this)}
        />
        <AppFooter 
          SubmitChooseValue={this.ChooseValue.bind(this)}
        />
      </div>
    )
  }
}

export default App;