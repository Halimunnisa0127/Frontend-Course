// src/App.js

import Header from './reducer/Header';
import { UserProvider } from './reducer/UserContext';

function App() {
  return (
    <UserProvider>
      <Header />
    </UserProvider>
  );
}

export default App;

