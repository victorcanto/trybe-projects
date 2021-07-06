import React from 'react';
import PropTypes from 'prop-types';
import c from '../../../pages/DetailScreen/constants';

function VideoRecipe(props) {
  const { name, recipeDetails } = props;

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
      {name === c.Meal && <iframe
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
  recipeDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};

// Code Reference
// - Player Parameters Youtube: https://developers.google.com/youtube/player_parameters?hl=pt-br
