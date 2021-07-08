import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import c from '../../../pages/DetailScreen/constants';
import DetailContext from '../../../context/DetailScreen/DetailContext';

const { Meal } = c;

function VideoRecipe(props) {
  const { name } = props;
  const { recipeDetails } = useContext(DetailContext);

  function getUrlYt() {
    const { strYoutube } = recipeDetails;
    if (strYoutube) {
      return strYoutube.split('v=')[1];
    }
  }

  const urlYT = getUrlYt();

  return (
    <div>
      <h2>Video</h2>
      {name === Meal && <iframe
        data-testid="video"
        width="100%"
        height="215"
        src={ `https://www.youtube.com/embed/${urlYT}` }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture"
        allowFullScreen
      />}
    </div>
  );
}

export default VideoRecipe;

VideoRecipe.propTypes = {
  name: PropTypes.string.isRequired,
};

// Code Reference
// - Player Parameters Youtube: https://developers.google.com/youtube/player_parameters?hl=pt-br
