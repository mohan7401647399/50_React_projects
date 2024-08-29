import './App.css';
import FeatureGlobalState from './component/context';
import FeaturedFlag from './component/index'

function App() {
  return (
    <div className="App">
      <FeatureGlobalState>
        <FeaturedFlag />
      </FeatureGlobalState>
    </div>
  );
}

export default App;
