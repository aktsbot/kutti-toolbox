import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const paths = [
  {
    id: 1,
    name: "json",
    path: "/json",
  },
  {
    id: 2,
    name: "jwt",
    path: "/jwt",
  },
  {
    id: 3,
    name: "uuid",
    path: "/uuid",
  },
  {
    id: 4,
    name: "randomstring",
    path: "/randomstring",
  },
];

function Nav() {
  const navRef = useRef(null);
  const location = useLocation();

  return (
    <>
      <nav
        className="nav"
        tabIndex="-1"
        onClick={() => navRef.current.focus()}
        ref={navRef}
      >
        <div className="container">
          <Link
            to="/"
            className={
              "pagename " + (location.pathname === "/" ? "current" : "")
            }
          >
            Home
          </Link>
          {paths.map((p) => (
            <Link
              key={p.id}
              to={p.path}
              className={location.pathname === p.path ? "current" : ""}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </nav>
      <button className="btn btn-sm btn-close">&times;</button>
    </>
  );
}

export default Nav;
