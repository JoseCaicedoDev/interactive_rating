import { BrowserRouter } from 'react-router-dom'
import AppRoute from "./components/routes";
import { UseNumberProvider } from './components/context'

function App() {

  return (
    <>
      <UseNumberProvider>
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </UseNumberProvider>
    </>
  );
}

export default App;
