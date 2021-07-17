import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Profile() {
  function getEmail() {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) return data.email;
  }

  return (
    <div>
      <Header title="Perfil" icon="false" />
      <p data-testid="profile-email">{getEmail()}</p>
      <div>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
      </div>
      <Link to="/">
        <button
          onClick={ () => localStorage.clear() }
          type="button"
          data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;
