// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import type { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
//   role?: "student" | "admin";
// }

// const ProtectedRoute = ({ children, role }: Props) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/" replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;



import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  role?: "student" | "admin";
}

const ProtectedRoute = ({ children, role }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
