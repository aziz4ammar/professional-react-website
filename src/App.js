import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Components/Navbar/Headder';
import Body from './Components/Body/Body';
import { useState } from 'react';
import { tab } from './Data';
function App() {
  const [info, setInfo] = useState(tab)
  return (
    <div className="App">
      <CollapsibleExample/>
      <div className='ab'>{info.map((el,i)=><Body el={el} key={i}/>)}</div>
    </div>
  );
}

export default App;
