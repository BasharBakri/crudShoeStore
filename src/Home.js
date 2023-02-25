import { Link } from "react-router-dom"

export default function Home() {
  return (<>
    <h1>check home page</h1>
    <p>Go to <Link to='/a/allshoes' >all shoes</Link></p>
  </>)
}