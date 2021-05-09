import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.onGetMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState(
      { shouldRedirect: false },
      async () => {
        await movieAPI.updateMovie(updatedMovie);
        this.setState({ shouldRedirect: true });
      },

    );
  }

  async onGetMovie() {
    this.setState(
      { status: 'loading' },
      async () => {
        const { match: { params: { id } } } = this.props;
        const movie = await movieAPI.getMovie(id);
        this.setState({
          status: '',
          movie,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EditMovie;
