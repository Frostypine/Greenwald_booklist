import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBook } from '../state/bookSlice';
import {deleteBook} from '../actions/books'
import {  Card, Button } from 'react-bootstrap';

function Book({setCurrentId}) {
  const dispatch = useDispatch();
  const list = useSelector(selectBook)
  return (
      <div>
          {list.map((book, i) => (
          <Card style={{ width: '18rem' }} key={i}>
              <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                  <Card.Text >
                  {book.synopsis}
                  </Card.Text>
                  <Button onClick={() => {setCurrentId(book._id)}}>Edit </Button>
                  <Button onClick={() => {dispatch(deleteBook(book._id))}}>Delete </Button>
              </Card.Body>
          </Card>
          ))}
      </div>
  )
}

export default Book;