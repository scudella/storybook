import Task from './Task';

const TaskList = (loading, tasks, onPinTask, onArchiveTask) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const loadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className='list-items' data-testid='loading' key={'loading'}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.list === 0) {
    return (
      <div className='list-items' key={'empty'} data-testid='empty'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <p className='title-message'>You have no tasks</p>
          <p className='subtitle-message'>Sit back and relax</p>
        </div>
      </div>
    );
  }

  // create a variable filters the order of tasks to return the state of pinned tasks first and then the rest and then map through that variable instead of all the tasks

  const tasksInOrder = [
    ...tasks.filter((task) => task.state === 'TASK_PINNED'),
    ...tasks.filter((task) => task.state !== 'TASK_PINNED'),
  ];

  return (
    <div className='list-items'>
      {tasksInOrder.map((task) => {
        <Task key={task.id} task={task} {...events} />;
      })}
    </div>
  );
};
export default TaskList;
