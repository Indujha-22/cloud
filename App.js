import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components
import HomePage from './components/home.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Dashboard from './components/main.js';
import EasyQuiz from './components/easy.js'; 
import MediumQuiz from './components/inter.js'; 
import HardQuiz from './components/hard.js'; 
import AdminQuiz from './components/admin.js';
import LoginRoute from './components/loginroute.js'; 
import Flashcard from './components/flashcard';
import Dash from './components/dash'; // Correct path for dash.js
import FileList from './components/filelist.js'; // Import FileList component
import CardAdmin from './components/cardadmin.js'; // Import CardAdmin component
import AllUsers from './components/alluser.js'; // Import AllUsers component
import UserProfile from './components/alluser.js'; // Import renamed UserProfile component

// Import FlashcardProvider for managing flashcards globally
import { FlashcardProvider } from './components/FlashcardContext'; // Correct path for FlashcardContext
import { UserProvider } from './components/allusercontext.js'; // Add UserProvider for user management

function App() {
  return (
    <Router>
      <div className="App">
        <FlashcardProvider> {/* Wrap your routes with FlashcardProvider */}
          <UserProvider> {/* Wrap routes with UserProvider for user management */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes - wrapped in LoginRoute */}
              <Route element={<LoginRoute />}>
                <Route path="/main" element={<Dashboard />} />
                <Route path="/easy" element={<EasyQuiz />} />
                <Route path="/inter" element={<MediumQuiz />} />
                <Route path="/hard" element={<HardQuiz />} />
                <Route path="/Finaldashbrd" element={<Dash />} />
                <Route path="/flashcard" element={<Flashcard />} />
                <Route path="/file-list" element={<FileList />} />
                <Route path="/cardadmin" element={<CardAdmin />} />
                <Route path="/user-profile" element={<UserProfile />} /> {/* Add UserProfile route */}
                <Route path="/all-users" element={<AllUsers />} /> {/* Add AllUsers route */}
              </Route>

              {/* Admin Route */}
              <Route path="/admin" element={<AdminQuiz />} />
            </Routes>
          </UserProvider>
        </FlashcardProvider>
      </div>
    </Router>
  );
}

export default App;
