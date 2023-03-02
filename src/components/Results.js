import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ErrorPage from "./ErrorPage";
import styles from "./Results.css";

export default function Results({ recipes }) {
  const { search } = useParams();

  const result = recipes.filter((recipe) => {
    //console.log("result", recipes);
    if (search === "") {
      return recipe;
    } else {
      return recipe.title.toLowerCase().includes(search);
    }
  });
  console.log(recipes);

  return (
    <div>
      {result.map((recipe) => (
        <div key={uuidv4()} className="result">
          <Link to={`/${recipe.category}/${recipe.recipe_id}`}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="img" />
          </Link>
        </div>
      ))}
    </div>
  );
}
