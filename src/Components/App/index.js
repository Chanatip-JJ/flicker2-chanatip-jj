import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>NAME.NO</h1>
        <Routes>
          <Route path='/'>
              <Route index element={<p>Enter a search to begin</p>}/>
              <Route 
                  path ='/search/:queryText' 
                  element={<p>Enter a search to begin</p>}/>
              <Route/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
