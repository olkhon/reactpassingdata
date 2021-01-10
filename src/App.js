import './App.css';
import Card from './components/card'


function App() {
  return (
    <div className="App">
      <Card text="default text" cold={true} trees={[23, 54, 46]} changeConsole={() => console.log('changed')} />
    </div>
  );
}

export default App;
