import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, selectBooks } from '../state/bookSlice';

const Book = () => {

  // title: "To Kill a Mockingbird" ,
  // author: "Harper Lee",
  // synop : "Boo, Scout and Gregory play in a treehouse. "
  const bookArray = [];
  const dispatch = useDispatch();
  const booksList = useSelector(selectBooks);
  //  const [title, setTitle] = useState("To Kill a Mockingbird");
  //  const [author, setAuthor] = useState("Harper Lee");
  //  const [synopsis, setSynopsis] = useState( "Boo, Scout and Gregory play in a treehouse.");


  const handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = {
      title: e.target.title.value,
      author: e.target.author.value,
      synopsis: e.target.synopsis.value
    }
    // setTitle(e.target.title.value); 
    // setAuthor(e.target.author.value);
    // setSynopsis(e.target.synopsis.value);  
    //
    bookArray.push(bookInfo);
    dispatch(addBooks(bookInfo));

  }



  return (

    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>

          <Form.Label>Title </Form.Label><br />
          <Form.Control className="mx-auto aBox"
            size="lg" type="text" name="title" />
          <br />
          <Form.Label>Author</Form.Label><br />
          <Form.Control className="mx-auto aBox"
            size="lg" type="text" name="author" />
          <br />
          <Form.Label>Synopsis</Form.Label><br />
          <Form.Control className="mx-auto synopBox text-wrap aBox"
            size="lg" type="text" name="synopsis" />
          <br /><br />
          <Button className="aButton aBox" variant="primary" type="submit"
          // onClick = {handleSubmit}
          >
            Submit
          </Button>

        </Form.Group>
      </Form>

      {
        booksList.map((book, i) => {

          return (

            <Card key={i} className="mx-auto aCard "
              style={{ height: '15rem', width: '15rem' }}>

              <Card.Body>
                <Card.Title>   {book.title}</Card.Title>
                <Card.Text>{book.author} </Card.Text>
                <Card.Text> {book.synopsis}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}

    </div>
  )

}
export default Book;