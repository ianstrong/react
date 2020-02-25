import Link from "next/link";
import Navbar from "./navbar";
import { Fragment } from "react";

const Sidebar = props => {
  return (
    <React.Fragment>
    <Navbar />
    <div
      className="sidebar"
      style={{ height: "calc(100vh - 56px)", overflow: "auto" }}
    >
      <ul>
        {props.pokemon.map((pokemon, index) => (
          
          <li key={index + 1} className="p-2 text-center">
            <Link href="/p/[id]" as={`/p/${index + 1}`}>
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </React.Fragment>
  );
};

export default Sidebar;
// bg-primary text-white