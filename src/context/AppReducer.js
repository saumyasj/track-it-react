//how we specify application state changes in response to some actions 
export default(state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                //create new state 
                ...state,
                transactions: state.transactions.filter(transaction=>transaction.id!==action.payload)
                //delete the transaction with that id
            }

        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}