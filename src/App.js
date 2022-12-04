import './App.css';
import { useContext } from 'react';
import { StoreContext } from '.';
import List from './components/List';

function App() {
  const {store, taskAdded, taskRemoved, taskCompleted} = useContext(StoreContext);
  
  store.dispatch(taskAdded('Buy eggs'));
  store.dispatch(taskAdded('Buy bread'));
  store.dispatch(taskAdded('Buy milk'));

  store.dispatch(taskRemoved(1));

  // store.dispatch(taskCompleted(2));

// console.log(store.getState());

  return (
    <div className="App">
        <h1>Redux</h1>
        <List></List>
    </div>
  );
}

export default App;
