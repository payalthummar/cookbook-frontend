import "./categories.css";
import { useEffect, useState } from "react";
import { marked } from "marked";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Dinner(props) {
  console.log("props", props.recipes);
  const items = props.recipes.filter((data) => {
    return data.category === "Dinner";
  });
  console.log("items", items);

  const navigate = useNavigate();

  return (
    <div className="categories">
      {items.map((recipe, key) => {
        const recipeInstruction = marked(recipe.instructions);
        return (
          <Link to={`/${recipe.category}/${recipe.recipe_id}`}>
            <div className="items">
              <div className="item-title">
                <h1>{recipe.title}</h1>
                <div className="star-rating">
                  {[...Array(recipe.rating)].map(() => {
                    return <span className="star">&#9733;</span>;
                  })}
                  {[...Array(5 - recipe.rating)].map(() => {
                    return <span className="star">&#9734;</span>;
                  })}
                </div>
              </div>

              {/* <h2>{recipe.items}</h2> */}
              <img src={recipe.image} width="200px" height="200px" />
            </div>
          </Link>
        );
      })}
      <div>
        <button className="button" onClick={() => navigate("/lunch")}>
          prev
        </button>
        <button className="button" onClick={() => navigate("/dessert")}>
          next
        </button>
      </div>
    </div>
  );
}
