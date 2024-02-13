import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskManagerApp from './components/TaskManagerApp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskManagerApp />  
      </div>
    </Provider>
  );
}

export default App;
                                                                                                                                                                                          
                                