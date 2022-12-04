import './App.css';
import AddItem from './components/AddItem';
import Completed from './components/Completed';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="text-center">
        <Navbar></Navbar>
        <div className="grid justify-center">
          <AddItem></AddItem>
        </div>
        <div className='grid grid-cols-2'>
          <List></List>
          <Completed></Completed>
        </div>
    </div>
  );
}

export default App;
