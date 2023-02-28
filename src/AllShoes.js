import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"






export default function AllShoes() {
  const data = useLoaderData();
  console.log(data);
  const ShowShoes = data.map((shoe) => {
    return (
      <Link to={`/a/allshoes/${shoe.id}`} className="shoeCard" key={shoe.id}>
        <img src={shoe.avatar} alt={shoe.title}>
        </img>
        <h3>{shoe.title}</h3>
        <p>&#8362; {shoe.price}</p>
        <p className="cardDescription" >{shoe.description}</p>
      </Link>
    )
  })


  return (<>
    <main className="shoeGrid">
      {ShowShoes}
    </main>
  </>)
}