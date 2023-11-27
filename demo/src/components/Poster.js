import './Poster.css';

const Poster = function (props) {
  console.log(props);

  return (
    <article className="poster">
      <img className="poster--img" src={props.imgSource} alt={props.title} />

      <h3>{props.title}</h3>

      <h4>{props.quote}</h4>
    </article>
  );
};

export default Poster;
