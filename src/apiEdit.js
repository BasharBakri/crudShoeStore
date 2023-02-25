import { json, redirect } from "react-router-dom";

export const sendEditShoe = async ({ request, params }) => {
  const id = params.shoeId
  const sendData = await request.formData();
  const sentShoeData = {
    title: sendData.get('title'),
    price: sendData.get('price'),
    avatar: sendData.get('avatar'),
    description: sendData.get('description')
  }
  console.log(sentShoeData);
  const response = await fetch(`https://63f9f2ca473885d837d55e59.mockapi.io/api/Shoes/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(sentShoeData)
  });
  console.log(response);
  if (response.ok) {
    return redirect('/a/allshoes');
  } else {
    throw json({ message: 'Could not edit Item' }, { status: 400 })
  }
};