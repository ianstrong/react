import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Clear</a>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li> */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
