
import './App.css';
import 'firebase/compat/firestore';
import Navbar from './components/Navbar';
import Taskcontainer from './components/Taskcontainer';


function App() {
  

  return (
    <>
    <Navbar/>
   <Taskcontainer/>
    </>
  );
};

export default App;