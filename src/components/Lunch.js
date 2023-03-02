import "./categories.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Lunch(props) {
  console.log("props", props.recipes);
  const lunches = props.recipes.filter((data) => {
    return data.category === "Lunch";
  });

  const navigate = useNavigate();

  return (
    <div className="categories">
      {lunches.map((recipe, key) => {
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
        <button className="button" onClick={() => navigate("/breakfast")}>
          prev
        </button>

        <button className="button" onClick={() => navigate("/dinner")}>
          next
        </button>
      </div>
    </div>
  );
}
