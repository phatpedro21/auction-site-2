import React from 'react';
import ListingList from './ListingList.jsx';
import CategoryBar from './CategoryBar.jsx';


const Home = ({ topCategories, items, filterByCategory }) => {
  console.log(topCategories, "  ", items, "   ", filterByCategory);
  return (
    <div>
      <CategoryBar topCategories={topCategories} filterByCategory={filterByCategory} />
      <ListingList items={items} />
    </div>
  )
}
export default Home;


