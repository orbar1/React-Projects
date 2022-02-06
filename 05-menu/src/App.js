import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// create a list with all the existing categories
const allCategories = ['all',...new Set(items.map(item=>item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // filter dishes by their category
  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item=>item.category===category);
    setMenuItems(newItems);
  }

  return (
    <main className=''>
    <section className="menu-section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} categories={categories}/>
      <Menu items={menuItems}/>
    </section>
    </main>);
}

export default App;
