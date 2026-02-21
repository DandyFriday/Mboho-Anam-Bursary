// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Forum from "./pages/Forum";
// import Contact from "./pages/Contact";
// import News from "./pages/News";
// import Bursary from "./pages/Bursary";

// import ProtectedRoute from "./components/layout/ProtectedRoute";
// import StudentDashboard from "./pages/student/Dashboard";
// import Application from "./pages/student/Application";
// import AdminDashboard from "./pages/admin/Dashboard";

// const App = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar stays fixed at top */}
//       <Navbar />

//       <main className="flex-grow">
//         <Routes>
//           {/* -------- Public Routes -------- */}
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/bursary" element={<Bursary />} />
//           <Route path="/forum" element={<Forum />} />

//           {/* -------- Auth Routes -------- */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* -------- Student Routes -------- */}
//           <Route
//             path="/student/dashboard"
//             element={
//               <ProtectedRoute role="student">
//                 <StudentDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/student/application"
//             element={
//               <ProtectedRoute role="student">
//                 <Application />
//               </ProtectedRoute>
//             }
//           />

//           {/* -------- Admin Routes -------- */}
//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute role="admin">
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* -------- Fallback Route -------- */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;



// // const App = () => {
// //   return (
// //     <div style={{ padding: "50px" }}>
// //       <h1>APP IS RENDERING</h1>
// //     </div>
// //   );
// // };

// // export default App;





import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Bursary from "./pages/Bursary";

import ProtectedRoute from "./components/layout/ProtectedRoute";
import StudentDashboard from "./pages/student/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import Application from "./pages/student/Application";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Padding because Navbar is fixed */}
      <main className="flex-grow pt-16">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/bursary" element={<Bursary />} />
          <Route path="/forum" element={<Forum />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Student */}
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student/application"
            element={
              <ProtectedRoute role="student">
                <Application />
              </ProtectedRoute>
            }
          />

          {/* Admin */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
