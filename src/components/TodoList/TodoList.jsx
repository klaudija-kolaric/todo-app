/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList(props) {
  return (
    <ul className={styles['todo-list']}>
      <TodoItem
        todo={{
          id: 1,
          done: false,
          text: 'Kupiti mlijeko',
        }}
      />
    </ul>
  );
}

TodoList.propTypes = {};

export default TodoList;
