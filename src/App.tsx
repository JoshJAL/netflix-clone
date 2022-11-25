import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { store } from './app/store';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout);
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
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
        }
      </Router>
    </div>
  );
};

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
