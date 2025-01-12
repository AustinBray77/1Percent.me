import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import GroupSwipeCard from './components/GroupSwipeCard.tsx';

function App() {
  return (
    <main>
      <div className="phoneScreen"> 
        <GroupSwipeCard groupInfo={""} /> 
      </div>
    </main>

  );
}

export default App;
