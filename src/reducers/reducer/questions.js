import { type } from "../types/types"


const initial = {
    getQuestions : []
}

const questionsReducer =(state= initial, action) =>{
    switch(action.type){
        case type.GET_QUESTIONS:
            return{
                ...state,
                getQuestions: action.payload
            }

            default:
                return state
    }
}

export default questionsReducer