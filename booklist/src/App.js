import './App.css';
import BookList from  './components/BookList';
//import ScrollToTop from "react-scroll-to-top";

const App = () => {

  
  return (
    <div className="App">

      <header className="App-header">
  
    <h1 className="mx-auto blogTitle placeholdertext">   </h1>  
    
      </header>  
      {/* <ScrollToTop smooth /> */}
       <BookList/>
    </div>
  );        


}

export default App;
 
