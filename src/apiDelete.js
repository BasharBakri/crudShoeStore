import { json, redirect } from "react-router-dom";

console.log('check deleteShoe');
export const deleteShoe = async ({ request, params }) => {
  const id = params.shoeId;
  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/Shoes/${id}`, {
    method: 'DELETE',
  });
  console.log(response);
  if (response.ok) {
    return redirect('/a/allshoes');
  } else {
    throw json({ message: 'Could not delete Item Item' }, { status: 400 });
  }
};