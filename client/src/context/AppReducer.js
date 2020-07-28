//how we specify application state changes in response to some actions 
export default(state,action)=>{
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return{
                ...state,
                loading:false,
                transactions:action.payload
            }
        case 'DELETE_TRANSACTION':
            return{
                //create new state 
                ...state,
                transactions: state.transactions.filter(transaction=>transaction._id!==action.payload)
                //delete the transaction with that id
            }

        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[...state.transactions,action.payload]
            }
        
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}