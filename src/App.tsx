import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth)
      } else {

      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) :
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
