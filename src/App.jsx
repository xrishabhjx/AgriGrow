import React, { useState, useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar, { SidebarContext } from "./components/Sidebar";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Analyze from "./pages/Analyze";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthContext from "./AuthProvider/AuthContext";
import ExpertsPage from "./pages/ExpertsPage";
import PlantNutrition from './pages/PlantNutrition';
import ManurePage from './pages/ManurePage';
import FinancialAssistancePage from './pages/FinancialAssistancePage';
import EducationalSupportPage from './pages/EducationalSupportPage';
import WeatherPage from "./pages/WeatherPage"; // Import the weather page

function App() {
    const location = useLocation();
    const { isAuthenticated } = useContext(AuthContext);
    const noSidebarRoutes = ["/login", "/signup"];
    const showSidebar = !noSidebarRoutes.includes(location.pathname);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/analyze":
                return "Analyze";
            case "/experts":
                return "Expert Advice";
            case "/login":
                return "Login";
            case "/signup":
                return "Sign Up";
            case "/plant-nutrition":
                return "Plant Nutrition";
            case "/manure":
                return "Manure";
            case "/financial-assistance":
                return "Financial Assistance";
            case "/educational-support":
                return "Educational Support";
            case "/weather":
                return "Weather Forecast"; // Title for the new weather page
            default:
                return "Plant Health App";
        }
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            <div className="flex min-h-screen bg-gray-50">
                {showSidebar && <Sidebar />}

                <div
                    className={`flex flex-col flex-grow transition-all duration-300 
                    ${showSidebar ? (isSidebarOpen ? 'ml-64' : 'ml-20') : ''}`}
                >
                    {showSidebar && (
                        <div className="sticky top-0 z-20 bg-white shadow-sm">
                            <Header title={getPageTitle()} />
                        </div>
                    )}

                    <main className="flex-grow p-6 pt-4">
                        <Routes>
                            {/* Public routes */}
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />

                            {/* Protected routes */}
                            <Route element={<ProtectedRoute />}>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/analyze" element={<Analyze />} />
                                <Route path="/experts" element={<ExpertsPage />} />
                                <Route path="/plant-nutrition" element={<PlantNutrition />} />
                                <Route path="/manure" element={<ManurePage />} />
                                <Route path="/financial-assistance" element={<FinancialAssistancePage />} />
                                <Route path="/educational-support" element={<EducationalSupportPage />} />
                                <Route path="/weather" element={<WeatherPage />} /> {/* New Weather Route */}
                            </Route>

                            {/* Redirect based on auth state */}
                            <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
                            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </SidebarContext.Provider>
    );
}

export default App;
