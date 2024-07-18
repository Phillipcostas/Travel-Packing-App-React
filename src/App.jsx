import React, { useState, useEffect } from 'react';

import Suitcase from './Components/Suitcase'


const App = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    Suitcase: initialSuitcase,
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogin = (username, password) => {
    setUser({ username, password, suitcase: initialSuitcase });
  };

  const togglePacked = (categoryIndex, itemIndex) => {
    const updatedSuitcase = [...user.suitcase];
    updatedSuitcase[categoryIndex].items[itemIndex].packed = !updatedSuitcase[categoryIndex].items[itemIndex].packed;
    setUser({ ...user, suitcase: updatedSuitcase });
  };

  return (
    <div>
      <h1>User: {user.username}</h1>
      {user.suitcase.map((category, catIndex) => (
        <div key={catIndex}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.name} - {item.packed ? 'Packed' : 'Not Packed'}
                <button onClick={() => togglePacked(catIndex, itemIndex)}>Toggle</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default App;
