import { Button } from "@shared/ui/Button";

const MainPage = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <form className="todo__form">
        <div className="todo__field field">
          <label className="field__label" htmlFor="new-task">
            New task
          </label>
          <input className="field__input" id="new-task" placeholder=" " autoComplete="off" />
        </div>
        <Button type="submit" label="Add new task" />
      </form>
      <form className="todo__form">
        <div className="todo__field field">
          <label className="field__label" htmlFor="search-task">
            Search task
          </label>
          <input className="field__input" id="search-task" placeholder=" " autoComplete="off" type="search" />
        </div>
      </form>
      <div className="todo__info">
        <div className="todo__total-tasks">
          Total tasks: <span>0</span>
        </div>
        <Button className="todo__delete-all-button" label=" Delete all" />
      </div>
      <ul className="todo__list">
        <li className="todo__item todo-item">
          <input className="todo-item__checkbox" id="task-1" type="checkbox" checked />
          <label className="todo-item__label" htmlFor="task-1">
            Task 1
          </label>
          <Button
            className="todo-item__delete-button"
            label="Dele1222223asracfsdffdsfdsfdsfdssgs gs fgsDele1222223asracfsdffdsfdsfdsfdssgs gs fgs gsf gasd ad asd asd asd asd asd te"
            aria-label="Delete"
            title="Delete"
          />
        </li>
        <li className="todo__item todo-item">
          <input className="todo-item__checkbox" id="task-2" type="checkbox" />
          <label className="todo-item__label" htmlFor="task-2">
            Task 2
          </label>
          <Button className="todo-item__delete-button" label="Delete" aria-label="Delete" title="Delete" />
        </li>
      </ul>
      <div className="todo__empty-message"></div>
    </div>
  );
};

export default MainPage;
