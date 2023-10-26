import { SET_USER } from "./action-types"

const initialState = {
    favorites: [], // array donde guardo mis episodios fav [{1}, {2}]
    user: {}, // obj {name:, email:,}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER: {
            return {
                ...state,
                user: action.payload,
            }
        }

        default: return {...state};
    }
}

export default reducer;