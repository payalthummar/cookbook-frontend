import "../App.css";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./categories.css";

export default function Breakfast(props) {
  console.log("props", props.recipes);
  const breakfasts = props.recipes.filter((data) => {
    return data.category === "Breakfast";
  });

  const navigate = useNavigate();

  return (
    <div className="categories">
      {breakfasts.map((recipe, key) => {
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
              <img
                src={recipe.image}
                width="200px"
                height="200px"
                className="item-img"
              />
            </div>
          </Link>
        );
      })}
      <button className="button" onClick={() => navigate("/lunch")}>
        next
      </button>
    </div>
  );
}
