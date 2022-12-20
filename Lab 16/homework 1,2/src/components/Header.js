import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Tim Burton</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="*">
              Main
            </Link>
          </li>
          <li>
            <Link className="link" to="Earlife/">
            Early life
            </Link>
          </li>
          <li>
            <Link className="link" to="Film/">
            Filmography
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}