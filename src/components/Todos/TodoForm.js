import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

export default function TodoForm({ addTodo }) {
  const [textTodo, setTextTodo] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (textTodo.length > 0) {
      addTodo(textTodo);
    }
    setTextTodo('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => setTextTodo(e.target.value)}
          placeholder="Enter new todo"
          value={textTodo}
          type="text"
        />
        <Button type="submit" title="Create Todo">
          Create Todo
        </Button>
      </form>
    </div>
  );
}
