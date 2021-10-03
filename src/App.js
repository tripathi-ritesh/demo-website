import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './Componant/register';
import Navbardemo from './Componant/navbardemo';
import Home from './Componant/home';
import { Route, Router, Switch } from 'react-router';
import Quizshala from './Componant/Quizshala';
import Techblogs from './Componant/Techblogs';
import Myproduct from './Componant/Myproduct';
import Resource from './Componant/Resource';
import Tutorial from './Componant/Tutorial';
import firebase from './Firebase';
import Signupform from './Componant/Signupform';
import Login from './Componant/Login';
import Admin from './Componant/Admin';
import Dashboard from './Componant/Dashboard';
import Sidebar from './Componant/Sidebar';
import Course1 from './Componant/Courselists/Course1';
import Course2 from './Componant/Courselists/Course2';
import Course3 from './Componant/Courselists/Course3';
import Course4 from './Componant/Courselists/Course4';
function App() {
  
  return (
   <>
   <Navbardemo/>
   
  
   <Switch>
      <Route  path="/admin" component={Admin} />
      
      <Route exact path="/" component={Home} />
      <Route path="/quizshala" component={Quizshala} />
      <Route path="/techblogs" component={Techblogs} />
      <Route path="/myproduct" component={Myproduct} />
      <Route path="/resource" component={Resource} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signupform" component={Signupform} />
     <Route path="/course1" component={Course1} />
     <Route path="/course2" component={Course2} />
     <Route path="/course3" component={Course3} />
     <Route path="/course4" component={Course4} />
      
   </Switch>
   </>
  );
}

export default App;
