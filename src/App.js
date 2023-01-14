import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <Router>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: "black", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Login"/>
              <Route path="/dashboard" element="Dashboard"/>
              {/* Admin Tools */}
              <Route path="/orders" element="Orders"/>
              <Route path="/employees" element="Employees"/>
              <Route path="/customers" element="Customers"/>
              {/* Insights */}
              <Route path="/calender" element="Calender"/>
              <Route path="/reports" element="Reports"/>
              <Route path="/analytics" element="Analytics"/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
