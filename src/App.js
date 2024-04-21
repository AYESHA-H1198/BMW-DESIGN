import logo from './logo.svg';
import Navbar from './Navbar';
import DCar from './3DCar';
import About from './About';
import Ourcars from './Ourcars';
import Cargrid from './cargrid';
import Lastsection from './endsection';
import './App.css';

function App() {
  return (
    <div>
   <Navbar />
   <DCar />
   <About />
   <Ourcars />
   <Cargrid />
   <Lastsection />
    </div>
  );
}

export default App;
