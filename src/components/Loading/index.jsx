import React from 'react';
import { BiCookie } from 'react-icons/bi';

import styles from './loading.module.scss';

function Loading() {
  return (
    <main className={ styles.container }>
      <div className={ styles.animation }>
        <BiCookie color="#faae2b" size="4rem" />
      </div>
      <h2>LOADING...</h2>
    </main>
  );
}

export default Loading;
