import './App.css';
import TreeView from './components/TreeView.jsx';
import slideMenu from './data.js';

function App() {
  return (
    <div className="App">
      <TreeView menus={slideMenu} />
    </div>
  );
}

export default App;
