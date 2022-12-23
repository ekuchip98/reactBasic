import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodoComponent from './Todos/ListTodoComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Simple TODO Apps with React.js
        </p>
        <ListTodoComponent/>
      </header>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </div>
  );
}

export default App;
