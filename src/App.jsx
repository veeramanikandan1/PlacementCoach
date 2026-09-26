import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import ActionPlan from "./pages/ActionPlan";
import Reassessment from "./pages/Reassessment";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
        <Route path="/plan" element={<ActionPlan />} />
        <Route path="/reassessment" element={<Reassessment />} />
        <Route path="/progress" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
