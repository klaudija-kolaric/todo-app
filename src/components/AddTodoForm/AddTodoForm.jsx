import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddTodoForm.module.css';

const AddTodoForm = (props) => {
  const [text, setText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault;
    if (text.trim() === '') return;
    setText('');
  };

  return (
    <form className={styles['add-todo-form']} onSubmit={handleFormSubmit}>
      <input
        type='text'
        name='text'
        id='text'
        placeholder='Add todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className={styles['add-todo-form__button']} type='submit'>
        ADD
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {};

export default AddTodoForm;
