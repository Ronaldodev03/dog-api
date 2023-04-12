const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url);
  const breeds = await res.json();

  if (!res.ok) {
    throw Error(`${res.status} ${res.statusText} in fetch ${res.url}`);
  }

  return breeds;
};

export default getBreeds;
