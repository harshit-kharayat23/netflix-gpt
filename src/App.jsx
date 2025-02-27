import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appStore from './utils/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
      <Body />
      <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
