import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 >Unleash</h1>
        <p>your inner strength</p>
        <Link to='/a/allshoes' >VIEW ALL OF OUR PRODUCTS =={">"}</Link>
      </div>
    </div>
  )
}