import { Link } from "react-router-dom"

export default function ShoeNav() {
  return (<>
    <nav>
      <ul className="listNavBar">
        <li>
          <Link to='/a/allshoes'>all Shoes</Link>
        </li>
        <li>
          <Link to='/a/allshoes/addshoe' >Add a new product</Link>
        </li>
      </ul>
    </nav>


  </>)
}