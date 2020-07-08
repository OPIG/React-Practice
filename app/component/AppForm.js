import React from 'react';
import ReactUuid from 'react-uuid';

var styles={
    'title':{
        width:200,
        display:'inline-block',
        marginRight:10,
        verticalAlign:'top'
    }
}

class AppForm extends React.Component{
    handleSubmit (event){
        event.preventDefault();
        let text = this.refs.text.value

        if(!text.trim()){
            alert("input can't be null")
            return
        }

        let id = ReactUuid();
        this.props.AddTodoItem([{id,text,complete:false}])
    }

    render(){
        return (
            <form 
                className = 'ui reply form'
                onSubmit={this.handleSubmit.bind(this)}
            >
                <div className = 'field' style={styles.title}>
                    <input type="text" placeholder="TODO" ref="text"/>
                </div>

                <button type="submit" className='ui blue button'>添加</button>
            </form>
        )
    }
}

export default AppForm