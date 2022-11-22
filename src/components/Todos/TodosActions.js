import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import style from './TodosActions.module.css'


export default function TodosActions({ resetTodos, deleteTodo, completedTodosExist }) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title="Reset Todos" onClick={() => resetTodos()}>
        <RiDeleteBin2Line />
      </Button>
      <Button
        disabled={!completedTodosExist}
        title="Clear completed Todos"
        onClick={() => deleteTodo()}
      >
        <RiRefreshLine />
      </Button>
    </div>
  );
}
