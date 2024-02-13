import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../redux/actions/taskActions';

const TaskList = ({ tasks, addTask, updateTask, deleteTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = { id: Math.random(), title: newTaskTitle.trim() };
      addTask(newTask);
      setNewTaskTitle('');
    }
  };

  const handleUpdateTask = (taskId, updatedTaskTitle) => {
    updateTask(taskId, { title: updatedTaskTitle });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const memoizedTasks = useMemo(() => {
    console.log('Recalculating memoized tasks');
    return tasks;
  }, [tasks]);
  

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {memoizedTasks.map(task => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) => handleUpdateTask(task.id, e.target.value)}
            />
            <button onClick={() => handleUpdateTask(task.id, task.title)}>Update</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps, { addTask, updateTask, deleteTask })(TaskList);
