import { useNavigate, Form, useNavigation, useParams, useLoaderData } from "react-router-dom";

export default function EditShoe() {
  const data = useLoaderData()
  console.log(data);
  const params = useParams();
  console.log(params.shoeId);


  const navigation = useNavigation();
  const navigate = useNavigate();
  function cancelHandler() {
    navigate(`/a/allshoes/${params.shoeId}`);
  }

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="PUT" className="shoeItem">
      <p>
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" name="title" required defaultValue={data.title} />
      </p>
      <p>
        <label htmlFor="price">price: </label>
        <input price="price" type="text" name="price" required defaultValue={data.price} />
      </p>
      <p>
        <label htmlFor="avatar">Image URL: </label>
        <input id="avatar" type="url" name="avatar" required defaultValue={data.avatar} />
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <textarea id="description" name="description" rows="5" required defaultValue={data.description} />
      </p>
      <div className="shoeAction">
        <button type="button" onClick={cancelHandler} disabled={isSubmitting} >
          {isSubmitting ? 'Please Wait' : 'Cancel'}
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Editing...' : 'Save'}</button>
      </div>
    </Form>
  )
}

