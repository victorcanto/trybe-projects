import React from 'react';
import PropTypes from 'prop-types';
import data from '../../../helpers/apiData';

const { Meal } = data;

function VideoRecipe(props) {
  const { name, recipe } = props;

  function getUrlYt() {
    const { strYoutube } = recipe;
    if (strYoutube) {
      return strYoutube.split('v=')[1];
    }
  }

  const urlYT = getUrlYt();

  const renderVideo = () => (
    <>
      <h2>Video</h2>
      <iframe
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
      />
    </>
  );

  return (
    <div>
      {name === Meal && renderVideo()}
    </div>
  );
}

export default VideoRecipe;

VideoRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  recipe: PropTypes.node.isRequired,
};

// Code Reference
// - Player Parameters Youtube: https://developers.google.com/youtube/player_parameters?hl=pt-br
