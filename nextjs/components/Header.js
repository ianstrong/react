import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="markdown">
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
