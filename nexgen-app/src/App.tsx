import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Prayer from './pages/Prayer';

// Placeholder for Profile
const Profile = () => <div className="p-4 text-center">Profile Coming Soon</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="requests" element={<Requests />} />
          <Route path="prayer" element={<Prayer />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
