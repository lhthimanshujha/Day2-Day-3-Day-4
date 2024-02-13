import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../actions/categoryActions';

const initialState = {
  categories: []
};

const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.id ? action.payload.category : category
        )
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      };
    default:
      return state;
  }
};

export default categoryReducer;
