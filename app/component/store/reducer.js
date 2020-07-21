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
    if(action.type==='input_change'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}