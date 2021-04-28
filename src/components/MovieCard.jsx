import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline } = movie;
    return (
      <section>
        <img src={ imagePath } alt="Movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </section>
    );
  }
}

export default MovieCard;
