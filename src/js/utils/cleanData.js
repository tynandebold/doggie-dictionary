export default function cleanData(data) {
  const dogs = [];
  
  for (const dog in data) {
    if (data[dog].length) {
      data[dog].forEach(type => {
        let typeEdit = type.charAt(0).toLowerCase() + type.substr(1);
        let dogEdit = dog.charAt(0).toLowerCase() + dog.substr(1);
        dogs.push(`${typeEdit} ${dogEdit}`)
      });
    } else {
      dogs.push(dog);
    }
  }

  return dogs.sort();
}