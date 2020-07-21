import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from '../store'
// import 'antd/dist/antd.css'



class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.inputChangeValue = this.inputChangeValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    render() { 
        return (  
        <div style={{margin:"10px"}}>
            <div>
                <Input 
                    placeholder={this.state.inputValue}
                    style={{marginRight:'10px',width:'250px'}}
                    onChange={this.inputChangeValue}
                    value = {this.state.inputValue}
                />
                <Button type='primary'>Add Item</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={ this.state.listData } 
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                />
            </div>
        </div>
        );
    }

    inputChangeValue(e){
        //console.log(e.target.value)
        const action = {
            type:'input_change',
            value:e.target.value
        }
        store.dispatch(action)
    }
   
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default TodoList;