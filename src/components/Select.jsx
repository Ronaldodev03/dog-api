const Select = (props) => {
  return (
    <select
      onChange={(e) => {
        props.setDogId(e.target.value);
      }}
    >
      {props.breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
