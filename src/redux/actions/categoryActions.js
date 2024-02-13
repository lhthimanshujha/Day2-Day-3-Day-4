export const ADD_CATEGORY = 'ADD_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category
});

export const updateCategory = (categoryId, updatedCategory) => ({
  type: UPDATE_CATEGORY,
  payload: { id: categoryId, category: updatedCategory }
});

export const deleteCategory = (categoryId) => ({
  type: DELETE_CATEGORY,
  payload: categoryId
});
