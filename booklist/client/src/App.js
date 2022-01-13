import './App.css';
import BookForm from './components/BookForm';
import Book from './components/Book';
import  React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { retrieveBookList } from './actions/books';

// import * as api from './API/index';

function App() {
  const [ currentId, setCurrentId ] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(retrieveBookList());
  })


  return (
    <div className="App">
      
      {/* <button onClick={ 
        () => api.testGet() 
        .then (res => {
          console.log(res.data)
        })
        }>Test Get</button>

      <button onClick={ 
        () => api.testPost() 
        .then (res => {
          console.log(res.data)
        })
        }>Test Post</button> */}
      
      <header className="App-header">
      <BookForm setCurrentId={setCurrentId} currentId={currentId} />
      </header>
      <Book setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;