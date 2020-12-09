import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'
import MyList from './components/MyList'

function App(props) {  
  return (
    <div>
      <MyList theList={props.list} />
    </div>
  );
}

export default App;