import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import InnerApp from './InnerApp';

const  App = () => {
  console.log(store.getState().counter.count)
  return (
    <div className="App">
      <Provider store={store}>
        <InnerApp />
      </Provider>
    </div>
  )};

export default App;
