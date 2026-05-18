import useProducts from "../hooks/useProducts";

function Sidebar() {
  const {
    selectedOrigin,
    setSelectedOrigin
  } = useProducts();

  const origins = [
    "All",
    "Kenya",
    "Burundi",
    "Ethiopia",
    "Eritrea",
    "Rwanda",
    "Cameroon",
  ];

  return (
    <aside className="sidebar">
      <h2>Origins</h2>

      <div className="sidebar-links">
        {origins.map((origin) => (
          <button
            key={origin}
            onClick={() =>
              setSelectedOrigin(origin)
            }
          >
            {origin}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;