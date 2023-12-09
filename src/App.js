import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
