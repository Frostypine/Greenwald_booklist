import './App.css';
import Book from  './components/Book';
//import ScrollToTop from "react-scroll-to-top";
import * as api from './api/index'; 
const App = () => {

  
  return (
    <div className="App">
     

      <header className="App-header">
  
    {/* <h1 className="mx-auto blogTitle placeholdertext">   </h1>   */}
  
      </header>

  <button onClick={() => api.testGet()
  .then (resp => {
    console.log(resp.data); 
  })
  } > Test Get </button>
  <button onClick={() => api.testPost()
    .then (resp => {
      console.log(resp.data); 
    })
  } > Test Post </button>

       <Book/>
      {/* <ScrollToTop smooth /> */}
       <h1></h1>
    </div>
  );        


}

export default App;
 
