import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Tasks", path: "/tasks" },
    { name: "Notes", path: "/notes" },
  ];

  return (
    <div className="h-screen w-60 bg-gray-600 text-white p-5">
      <h1 className="text-2xl font-bold">TaskFlow</h1>

      <div className="mt-6">
        <div className="text-sm text-gray-300 mb-2">Workspace</div>
        <div className="bg-gray-500 px-3 py-2 rounded">My Workspace</div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-gray-400 mb-2">Menu</p>
        <div className="space-y-2">
          {menu.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded transition ${
                  isActive ? "bg-gray-100 text-black" : "hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
