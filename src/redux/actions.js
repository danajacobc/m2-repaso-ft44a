import * as actionTypes from "./action-types"; //guarda en una nueva variable "actionTypes" un obj con todo lo que se traiga.
//! REDUCER: solo funciones puras, siempre va a salir bien! - por ende no axios -

export const setUser = (data) => {
    return {
        type: actionTypes.SET_USER,
        payload: data,
    }
}

export const addFav = (episode) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload: episode,
    }
}

export const deleteFav = (id) => {
    return {
        type: actionTypes.DELETE_FAVORITE,
        payload: id,
    }
}

export const ratingFav = ({id, rating}) => { //podria pasar solo data
    return {
        type: actionTypes.RATING_FAVORITE,
        payload: {id, rating}, 
    }
}

export const completeFav = (id) => {
    return {
        type: actionTypes.COMPLETED_FAVORITE,
        payload: id,
    }
}