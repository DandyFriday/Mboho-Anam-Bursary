// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import API from "../../lib/api";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const StudentDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const { data } = useQuery(["myApplication"], async () => {
//     const res = await API.get("/applications/my");
//     return res.data;
//   }, {
//     enabled: !!user,
//   });

//   const hasApp = data?.application;

//   return (
//     <main className="pt-24 max-w-6xl mx-auto px-4">
//       <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

//       {!hasApp ? (
//         <div className="p-6 bg-white rounded shadow">
//           <p>You have not applied yet.</p>
//           <button onClick={() => navigate("/student/application")} className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded">Apply for Bursary</button>
//         </div>
//       ) : (
//         <div className="p-6 bg-white rounded shadow">
//           <p>Application Status: <strong>{hasApp.status}</strong></p>
//         </div>
//       )}
//     </main>
//   );
// };

// export default StudentDashboard;


import { useQuery } from "@tanstack/react-query";
import API from "../../lib/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type ApplicationData = {
  application: {
    status: string;
  } | null;
};

const StudentDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data } = useQuery<ApplicationData>({
    queryKey: ["myApplication"],
    queryFn: async () => {
      const res = await API.get("/applications/my");
      return res.data;
    },
    enabled: !!user,
  });

  const hasApp = data?.application;

  return (
    <main className="pt-24 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      {!hasApp ? (
        <div className="p-6 bg-white rounded shadow">
          <p>You have not applied yet.</p>
          <button
            onClick={() => navigate("/student/application")}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded"
          >
            Apply for Bursary
          </button>
        </div>
      ) : (
        <div className="p-6 bg-white rounded shadow">
          <p>
            Application Status: <strong>{hasApp.status}</strong>
          </p>
        </div>
      )}
    </main>
  );
};

export default StudentDashboard;
