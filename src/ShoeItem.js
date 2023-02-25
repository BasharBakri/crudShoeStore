import { Link, useSubmit } from "react-router-dom";

function ShoeItem({ shoe }) {
  const submit = useSubmit();
  function startDeleteHandler() {

    const proceed = window.confirm('Are you sure?')
    if (proceed) {
      submit(null, { method: 'delete' })
    }
  }

  return (
    <article className="shoeItem" >
      <img src={shoe.avatar} alt={shoe.title} />
      <h1>{shoe.title}</h1>
      <p>{shoe.description}</p>
      <menu className="shoeAction" >
        <Link to={`/a/allshoes/${shoe.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default ShoeItem;