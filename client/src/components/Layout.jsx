import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
        <h2 className="siderbar-title-text">Windfarm Dashboard</h2>
        <i id="sidebar-icon" className="fa-solid fa-wind"></i>
        </div>
        <small>Build your dream windfarm</small>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/edit">Edit</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}