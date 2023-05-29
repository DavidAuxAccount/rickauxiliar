import { ADD_FAV, REMOVE_FAV } from "../redux/actions"
const initialState = {
  myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] }
      case REMOVE_FAV:
       console.log( 'el state es:',state.myFavorites)
        console.log("el id a remover es: ", action.payload)
        return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== parseInt(action.payload)),
      }

    default:
      return { ...state }
  }
}

export default rootReducer