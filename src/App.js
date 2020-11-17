import React,{useState} from 'react'
// import logo from './logo.svg';
import data from './data'
import Menu from './Menu'
import Categories from './Categories'

const all = ['all', ...new Set(data.map((item) => item.category))]
// console.log(all)

function App() {
const [menuItems, setMenuItems] = useState(data);
const [categories,setCategories] = useState(all);

const filterItems = (category) => {
  if(category === 'all'){
    setMenuItems(data);
    return;
  }
  const newItems = data.filter((item) => item.category === category);
  setMenuItems(newItems)
}

  return (
    <div className="App">
     <section className="menu section">
<div className="title">
  <h2>Our menu</h2>
  <div className="underline"></div>
</div>
<Categories categories={categories} filterItems={filterItems}/>
<Menu items={menuItems}/>
     </section>
    </div>
  );
}

export default App;
