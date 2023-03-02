import React from "react";
import { useEffect, useState } from "react";
import Breakfast from "./Breakfast";
import "./comp.css";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import Flag from "./flag.jpg";

export default function Home(props) {
  // get all recipes
  // create 4 categories and filter out by category (state "breakfast" should contain all breakfast recipes)
  // display each category's picture statically at first to confirm everything works
  // create a function that changes the index of a given array every x amount of seconds
  // the call to that function should happen inside of a useEffect

  console.log(props.recipes);
  const [randomnum, SetRandom] = useState(0);

  const breakfasts = props.recipes.filter(
    (recipe) => recipe.category === "Breakfast"
  );

  const lunches = props.recipes.filter((recipe) => recipe.category === "Lunch");

  const dinners = props.recipes.filter(
    (recipe) => recipe.category === "Dinner"
  );

  const desserts = props.recipes.filter(
    (recipe) => recipe.category === "Dessert"
  );

  // get Random image using function
  function random(arr) {
    const intervalId = setInterval(() => {
      const len = arr.length;
      SetRandom(Math.floor(Math.random() * len));
    }, 4000);
    return () => clearInterval(intervalId);
  }
  useEffect(() => {
    random(breakfasts);
  }, []);
  // Random image from all categories
  console.log("breakfasturl", breakfasts[randomnum].image);
  console.log("lunchurl", lunches[randomnum].image);
  console.log("dinner", dinners[randomnum].image);
  console.log("dessert", desserts[randomnum].image);
  // const randomImageIndex = Math.floor(Math.random() * breakfasts.length);
  // console.log(
  //   "index",
  //   breakfasts[randomImageIndex].fields.image.fields.file.url
  // );
  // const ary = [breakfasts, lunches, dinners, desserts];
  // const myAry = ary.map((my) => console.log(my.ary));

  // const b = breakfasts[randomImageIndex].fields.image.fields.file.url;
  // const l = lunchUrl[randomImageIndex].fields.image.fields.file.url;

  // setBreakfastUrl(b);
  // useEffect(() => {
  //   setBreakfastUrl(b);
  // }, []);

  // console.log("Breakfasts", breakfasts);
  // console.log(breakfasts[0].fields.image.fields.file.url);
  // const breakfast1 = breakfasts[0].fields.image.fields.file.url;
  // const breakfast2 = breakfasts[1].fields.image.fields.file.url;
  // const breakfast3 = breakfasts[2].fields.image.fields.file.url;
  // const breakfast4 = breakfasts[3].fields.image.fields.file.url;
  // console.log(breakfast1);
  // const breakfastfotos = [breakfast1, breakfast2, breakfast3, breakfast4];

  // console.log(breakfastfotos[3]);

  //console.log("HEREE", breakfastUrl);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const renderImage = () => {
  //       const randomImageIndex = Math.floor(
  //         Math.random() * breakfastfotos.length
  //       );
  //       console.log("index", breakfastfotos[randomImageIndex]);
  //       return setBreakfastUrl(breakfastfotos[randomImageIndex]);
  //     };
  //     renderImage();
  //   }, 5000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div id="home">
      <div id="home-categories">
        <div class="home-categories">
          <Link to={`/breakfast`}>
            <img
              src={breakfasts[randomnum].image}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{breakfasts[3].category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/lunch`}>
            <img
              src={lunches[randomnum].image}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{lunches[3].category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dinner`}>
            <img
              src={dinners[randomnum].image}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{dinners[1].category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dessert`}>
            <img
              src={desserts[randomnum].image}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{desserts[0].category}</h1>
          </Link>
        </div>
        {/* 
        <Image
          source={breakfasts[currentImageIndex]}
          style={styles.imageStyle}
        /> */}
      </div>
    </div>
  );
}
