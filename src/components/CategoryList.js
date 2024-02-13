import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, deleteCategory } from '../redux/actions/categoryActions';

const CategoryList = ({ categories, addCategory, updateCategory, deleteCategory }) => {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== '') {
      const newCategory = { id: Math.random(), name: newCategoryName.trim() };
      addCategory(newCategory);
      setNewCategoryName('');
    }
  };

  const handleUpdateCategory = (categoryId, updatedCategoryName) => {
    updateCategory(categoryId, { name: updatedCategoryName });
  };

  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId);
  };

  return (
    <div>
      <h2>Category List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <input
              type="text"
              value={category.name}
              onChange={(e) => handleUpdateCategory(category.id, e.target.value)}
            />
            <button onClick={() => handleUpdateCategory(category.id, category.name)}>Update</button>
            <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories.categories
});

export default connect(mapStateToProps, { addCategory, updateCategory, deleteCategory })(CategoryList);
