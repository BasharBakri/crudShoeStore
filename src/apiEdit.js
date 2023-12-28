import { json, redirect } from "react-router-dom";

export const sendEditShoe = async ({ request, params }) => {
  const id = params.shoeId;
  const sendData = await request.formData();
  const sentShoeData = {
    title: sendData.get('title'),
    price: sendData.get('price'),
    avatar: sendData.get('avatar'),
    description: sendData.get('description')
  };
  console.log(sentShoeData);
  const response = await fetch(`https://658dac0d7c48dce947399400.mockapi.io/Shoes/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(sentShoeData)
  });
  console.log(response);
  if (response.ok) {
    return redirect('/allshoes');
  } else {
    throw json({ message: 'Could not edit Item' }, { status: 400 });
  }
};