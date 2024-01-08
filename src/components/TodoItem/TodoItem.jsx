/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  return (
    <div>
      <input type='checkbox' name='' id=''></input>
      <p>Kupiti mlijeko</p>
      <button>X</button>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
