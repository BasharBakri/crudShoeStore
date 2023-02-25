import { useParams } from "react-router-dom";
import { useNavigate, useLoaderData } from "react-router-dom";

export default function EditShoe() {
  const data = useLoaderData()
  console.log(data);
  const params = useParams();
  console.log(params.shoeId);

  const navigate = useNavigate();
  function cancelHandler() {
    navigate(`/a/allshoes/${params.shoeId}`);
  }
  return (
    <form className="shoeItem">
      <p>
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" name="title" required defaultValue={data.title} />
      </p>
      <p>
        <label htmlFor="id">ID: </label>
        <input id="id" type="text" name="id" required defaultValue={data.id} />
      </p>
      <p>
        <label htmlFor="image">Image URL: </label>
        <input id="image" type="url" name="image" required defaultValue={data.avatar} />
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <textarea id="description" name="description" rows="5" required defaultValue={data.description} />
      </p>
      <div className="shoeAction" >
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  )
}
