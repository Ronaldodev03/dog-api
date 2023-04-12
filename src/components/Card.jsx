import Spinner from "./Spinner";

const Card = (props) => {
  const [dogStats] = props.breeds.filter((data) => props.dogId == data.id);

  if (props.loading) return <Spinner />;

  return (
    <div className="card ">
      <img
        src={props.dog.url}
        alt="dog"
        onClick={() => props.updateDog(props.dogId)}
      />
      <p>{dogStats.name}</p>
    </div>
  );
};

export default Card;
