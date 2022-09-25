
import './App.css';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import Progress from './components/Progress';
import CustomerReview from './components/CustomerReview';
import Contacts from './components/Contacts';
import WorkContent from './components/WorkContent';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Main/>
     <Services/>
     <Progress/>
     <WorkContent/>
     <CustomerReview/>
     <Contacts/>
    </div>
  );
}

export default App;
