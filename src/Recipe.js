import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingre) => (
          <li>{ingre.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt="" />
    </div>
  );
}

export default Recipe;
