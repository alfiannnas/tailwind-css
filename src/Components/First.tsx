import { useNavigate } from "react-router-dom";

export default function First() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-44 ml-4">
        <h1>oke</h1>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            name="password"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="your password"
          />
        </label>
        <button className="rounded-md bg-sky-600 text-white mt-5 w-28" onClick={() => navigate("/home")}>
          Login
        </button>
      </div>
    </>
  );
}
