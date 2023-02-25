import { useNavigate, Form } from "react-router-dom";
export default function AddShoe() {

  const navigate = useNavigate();
  function cancelHandler() {
    navigate(`/a/allshoes/`);
  }
  return (
    <Form method="post" className="shoeItem">
      <p>
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" name="title" required />
      </p>
      <p>
        <label htmlFor="price">price: </label>
        <input price="price" type="text" name="price" required />
      </p>
      <p>
        <label htmlFor="avatar">Image URL: </label>
        <input id="avatar" type="url" name="avatar" required />
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <textarea id="description" name="description" rows="5" required />
      </p>
      <div className="shoeAction" >
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  )
}