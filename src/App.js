import React, {useState} from 'react';
import './App.css';
import Card from './components/card'


function App() {

  const[theme, setTheme] = useState("dark");

  return (
    <div className="App" className={theme}>
      <Card
      text="default text"
      cold={true}
      trees={[23, 54, 46]}
      changeConsole={() => console.log('changed')}
      toggleTheme = { () => setTheme('grey')}
      />
    </div>
  );
}

export default App;
