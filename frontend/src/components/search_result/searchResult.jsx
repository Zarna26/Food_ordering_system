import React from 'react';
import FoodItem from '../FoodItem/FoodItem'; // Assuming you want to reuse FoodItem component

const SearchResult = ({ foodItems }) => {
  return (
    <div className='search-results'>
      {foodItems.length > 0 ? (
        foodItems.map(item => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default SearchResult;
