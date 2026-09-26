import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadState, updateState } from "../utils/storage";
import { buildDemoState } from "../utils/demo";

const roles = ["Software Developer", "Data Analyst", "Data Scientist", "AI/ML Engineer"];
const languages = ["Python", "Java", "C++", "JavaScript"];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"];
const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

export default function Profile() {
  const navigate = useNavigate();
  const existing = loadState().profile;
  const [form, setForm] = useState(
    existing || {
      name: "",
      college: "",
      branch: "",
      year: "3rd Year",
      targetRole: "Software Developer",
      language: "Python",
      experience: "Beginner",
    }
  );
  const [error, setError] = useState("");

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.college.trim() || !form.branch.trim()) {
      setError("Please fill in name, college, and branch before starting the assessment.");
      return;
    }
    updateState({ profile: { ...form, name: form.name.trim(), college: form.college.trim(), branch: form.branch.trim() } });
    navigate("/assessment");
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-bold text-slate-900">Student Profile</h1>
      <p className="mt-1 text-slate-600">A few details so your plan can use your target role.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Student Name
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          College
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.college}
            onChange={(e) => setField("college", e.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Branch
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.branch}
            onChange={(e) => setField("branch", e.target.value)}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Year
          <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.year} onChange={(e) => setField("year", e.target.value)}>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Target Placement Role
          <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.targetRole} onChange={(e) => setField("targetRole", e.target.value)}>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Programming language
          <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.language} onChange={(e) => setField("language", e.target.value)}>
            {languages.map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Current experience
          <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.experience} onChange={(e) => setField("experience", e.target.value)}>
            {experienceLevels.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </label>

        {error ? <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-800">{error}</p> : null}

        <button type="submit" className="w-full rounded-lg bg-indigo-600 py-2.5 font-medium text-white hover:bg-indigo-700">
          Start Assessment
        </button>
        <button
          type="button"
          onClick={() => {
            buildDemoState();
            navigate("/results");
          }}
          className="w-full rounded-lg border border-slate-300 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Load Demo Student
        </button>
      </form>
    </div>
  );
}
