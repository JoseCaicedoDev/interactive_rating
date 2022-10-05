import { BrowserRouter } from 'react-router-dom'
import AppRoute from "./components/routes";
import { NumberProvider } from './components/context'

function App() {

  return (
    <>
      <NumberProvider>
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </NumberProvider>
    </>
  );
}

export default App;
