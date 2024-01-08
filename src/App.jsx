import { Title, VisibilityToolbar, AddTodoForm, TodoList } from './components';

export default function App() {
  return (
    <div>
      <Title text='My tasks' />
      <VisibilityToolbar />
      <AddTodoForm />
      <TodoList />
    </div>
  );
}
