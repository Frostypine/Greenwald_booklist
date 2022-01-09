import './App.css';
import Book from  './components/Book';
//import ScrollToTop from "react-scroll-to-top";

const App = () => {

  
  return (
    <div className="App">

      <header className="App-header">
  
    <h1 className="mx-auto blogTitle placeholdertext">   </h1>  
  
      </header>
       <Book/>
      {/* <ScrollToTop smooth /> */}
       <h1></h1>
    </div>
  );        


}

export default App;
 
