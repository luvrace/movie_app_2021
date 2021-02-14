import React from "react";
import PropTypes from "prop-types";
function PracticeFood() {
  return (
    <div className="PracticeFood">
      {/* jsx is gave prop name / prop=property fav이란 이름으로 kimchi를 value로 넘겨줌*/}
      {/* <Food fav="kimchi"/> */}
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(dish=> (
        <Food 
          key={dish.id} 
          name={dish.name} 
          rating={dish.rating}
        />
      ))}

    </div>
  );
}

// function renderFood(dish){
//   return <Food name={dish.name} />
// }


const foodILike = [
  {
    id:1,
    name:"kimchi",
    rating:5
  }
  ,{
    id:2,
    name:"bibimbap",
    rating:2
  }
];
 
function Food({name, rating}){
  return (
    <div>
      <h2>hi i like {name}</h2>
      <h3>rating is {rating}</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


export default PracticeFood
