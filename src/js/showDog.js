import getOne from './getOne';

async function showDog(selected) {
  const dog = selected.split(' ');
  const imageUrl = await getOne(dog);

  // document.querySelector('.dog-image').src = imageUrl;
  document.querySelector('.dog-image').style.backgroundImage = `url(${imageUrl})`;
}

export default showDog;
