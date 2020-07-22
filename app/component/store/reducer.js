import {INPUT_CHANGE, CLICKBTN, DELETEITEM} from './actionTypes'

const defaultState={
    inputValue:'placeholder',
    listData:[
        "this is a react demo",
        "study every day"
    ]
}

export default (state=defaultState,action)=>{
    console.log(state,action)
    //reducer只能接收state,不能改变state
    if(action.type===INPUT_CHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type===CLICKBTN){
        const newState = JSON.parse(JSON.stringify(state))
        newState.listData.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }

    if(action.type===DELETEITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.listData.splice(action.value,1)
        return newState
    }

    return state
}