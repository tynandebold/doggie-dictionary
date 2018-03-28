async function getOne(dog) {
  let url;
  if (dog.length > 1) {
    url = `https://dog.ceo/api/breed/${dog[1]}/${dog[0]}/images/random`;
  } else {
    url = `https://dog.ceo/api/breed/${dog[0]}/${dog[0]}/images/random`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

export default getOne;
