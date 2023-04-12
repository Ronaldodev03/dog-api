const getDog = async (id) => {
  const url = `https://api.thedogapi.com/v1/images/search?breed_ids=${id}`;
  const res = await fetch(url);
  const [dog] = await res.json();

  if (!res.ok) {
    throw Error(`${res.status} ${res.statusText} in fetch ${res.url}`);
  }

  return dog;
};

export default getDog;
