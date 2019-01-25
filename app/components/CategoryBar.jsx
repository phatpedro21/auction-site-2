import React from 'react';

const CategoryBar = ({ topCategories, filterByCategory }) => {
  return (
    <ul>
      <li key={-1}>
        <a href="#" onClick={() => filterByCategory("")}>Show all items</a>
      </li>
      {topCategories.map((cat, index) => (
        <li key={index}>
          <a href="#" onClick={() => filterByCategory(cat)}>
            {cat}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default CategoryBar;