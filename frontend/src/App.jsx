import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import InterviewPractice from './pages/InterviewPractice'
import JobRecommendations from './pages/JobRecommendations'
import Landing from './pages/Landing'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import PlacementTracker from './pages/PlacementTracker'
import Register from './pages/Register'
import ResumeAnalyzer from './pages/ResumeAnalyzer'
import Settings from './pages/Settings'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">

  <NavLink className="brand" to="/">
    CareerForge<span> AI</span>
  </NavLink>


  <nav className="nav-links">

    <NavLink to="/">Home</NavLink>

    <NavLink to="/login">
      Login
    </NavLink>

    <NavLink to="/register">
      Register
    </NavLink>

    <NavLink to="/dashboard">
      Dashboard
    </NavLink>

    <NavLink to="/resume-analyzer">
      Resume AI
    </NavLink>

    <NavLink to="/job-recommendations">
      Jobs
    </NavLink>

    <NavLink to="/placement-tracker">
      Tracker
    </NavLink>

    <NavLink to="/interview-practice">
      Interview
    </NavLink>

    <NavLink to="/settings">
      Settings
    </NavLink>

  </nav>

</header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
            <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
            <Route path="/job-recommendations" element={<JobRecommendations />} />
            <Route path="/placement-tracker" element={<PlacementTracker />} />
            <Route path="/interview-practice" element={<InterviewPractice />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
