import { Link } from "react-router-dom"


export default function MainNav() {


  return (<>
    <header className="headerNavBar">
      <nav>
        <ul className="listNavBar">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/a'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>


  </>)
}