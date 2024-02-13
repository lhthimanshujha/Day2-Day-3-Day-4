import React from 'react';
import TaskManagerApp from '../components/TaskManagerApp';

const Home = ({ initialData }) => {
  return <TaskManagerApp initialData={initialData} />;
};

Home.getInitialProps = async () => {
  const initialData = {
    tasks: [
      { id: 1, title: 'Complete assignment' },
      { id: 2, title: 'Buy groceries' },
      { id: 3, title: 'Go for a run' },
    ],
    categories: [
      { id: 1, name: 'Work' },
      { id: 2, name: 'Personal' },
      { id: 3, name: 'Fitness' },
    ],
  };

  return {
    initialData,
  };
};

export default Home;