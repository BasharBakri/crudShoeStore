import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"






export default function AllShoes() {
  const data = useLoaderData();
  console.log(data);
  const ShowShoes = data.map((shoe) => {
    return (
      <div className="shoeCard" key={shoe.id}>
        <img src={shoe.avatar} alt={shoe.title}>
        </img>
        <h3>{shoe.title}</h3>
        <p>{shoe.price}</p>
        <Link to={`/a/allshoes/${shoe.id}`}>Edit/Delete</Link>
      </div>
    )
  })


  return (<>
    <main className="shoeGrid">
      {ShowShoes}
    </main>
  </>)
}