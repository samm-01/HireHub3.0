import logo from './logo.svg';
import './App.css';
import './styles/tailwind.css';
import ColorTestPage from './Pages/ColorTestPage.jsx'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <header className="flex justify-between items-center p-6 bg-primary text-white">
        <h1 className="text-2xl font-bold">HireHub</h1>
        <nav>
          <a href="#" className="mr-6 hover:text-accent">
            <i className="fa fa-home"></i> Home
          </a>
          <a href="#" className="mr-6 hover:text-accent">
            <i className="fa fa-search"></i> Jobs
          </a>
          <a href="#" className="mr-6 hover:text-accent">
            <i className="fa fa-user"></i> Profile
          </a>
        </nav>
      </header>
      <ColorTestPage />



    </div>
  );
}

export default App;
