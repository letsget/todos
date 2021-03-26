import NewTaskForm from "components/NewTaskForm";
import TasksFilter from "components/TasksFilter";
import TaskList from "components/TaskList";
import {
  getCurrentFilter,
  getActiveTodosLength,
  getTodosToRender,
} from "../../selectors";
import { useDispatch } from "react-redux";
import { setCurrentFilter, removeCompleted, handleValue } from "actions/App";
import { connect } from "react-redux";

const Main = ({ filter, tasksRemaining, todosToRender }) => {
  const dispatch = useDispatch();

  const onFilter = ({ target }) => {
    const filter = target.dataset.filter;
    dispatch(setCurrentFilter(filter));
  };

  const onRemoveCompleted = () => {
    dispatch(removeCompleted(todosToRender));
  };

  const valueHandler = ({ target: { value } }) => dispatch(handleValue(value));

  return (
    <section className="todoapp">
      <NewTaskForm valueHandler={valueHandler} />
      <TaskList tasks={todosToRender} valueHandler={valueHandler} />
      <TasksFilter
        tasksRemaining={tasksRemaining}
        onFilter={onFilter}
        onRemoveCompleted={onRemoveCompleted}
        filter={filter}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: getCurrentFilter(state),
    tasksRemaining: getActiveTodosLength(state),
    todosToRender: getTodosToRender(state),
  };
};

export default connect(mapStateToProps)(Main);
