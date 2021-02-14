import React from "react";
import PropTypes from "prop-types";

//component가 state가 필요하지 않아 function component로 작성한다

function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie