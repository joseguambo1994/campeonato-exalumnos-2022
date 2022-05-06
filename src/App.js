import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB09kwAauZOu28hndY3oxqU2Xhr8nQ3XXo",
  authDomain: "campeonato-ex-alumnos-2022.firebaseapp.com",
  projectId: "campeonato-ex-alumnos-2022",
  storageBucket: "campeonato-ex-alumnos-2022.appspot.com",
  messagingSenderId: "104223274036",
  appId: "1:104223274036:web:7909ba42a5877424cb0661",
  measurementId: "G-95GD6STVWJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Developheando
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
