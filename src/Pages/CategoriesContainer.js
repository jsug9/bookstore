import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus('Under Construction'));
  };

  return (
    <div className="categories">
      <h2>Categories section</h2>
      <ul>
        {categories.map((catetory) => (
          <li key={1}>
            {catetory}
          </li>
        ))}
      </ul>
      <button type="button" className="status" onClick={() => handleClick()}>Check Status</button>
    </div>
  );
};

export default CategoriesContainer;
