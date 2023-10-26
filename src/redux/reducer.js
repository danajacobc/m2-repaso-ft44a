import { ADD_FAVORITE, DELETE_FAVORITE, SET_USER } from "./action-types"

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

        case ADD_FAVORITE: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }

        case DELETE_FAVORITE: {
            const filterFav = state.favorites.filter((fav) => fav.id !== action.payload);
            return {
                ...state,
                favorites: filterFav,
            }
        }

        default: return {...state};
    }
}

export default reducer;