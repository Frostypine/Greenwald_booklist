import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookList, editBook } from '../actions/books';
import { Form, Button } from 'react-bootstrap';

import { selectBook } from '../state/bookSlice';

const BookForm = ({currentId, setCurrentId}) => {
    const dispatch = useDispatch()
    
    const bookObj = {
        title:"", author: "", synopsis: ""
    }
    const [bookData, setBookData] = useState(bookObj);

    const allBooks = useSelector(selectBook)

    const foundBook = (currentId ? allBooks.find((book) => book._id === currentId) : null);

    const updateField = (e) => {
        setBookData ({
            ...bookData,
            [e.target.name]: e.target.value
        })
    }



    // clear
    const clear = () => {
        setCurrentId(0);
        setBookData(bookObj)
    }
    // new handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId === 0) {
            dispatch(createBookList(bookData))
        } else {
            dispatch(editBook(currentId, bookData))
        }
        clear()
    }


    useEffect(() => {
        if (foundBook) setBookData(foundBook);

    }, [foundBook]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>{currentId ? `Editing ${foundBook.title}` : "Add Book"}</h1>
                <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" name="title" value={bookData.title} onChange={updateField}/>
                </Form.Group>
                <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" name="author" value={bookData.author} onChange={updateField}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Synopsis</Form.Label>
                    <Form.Control as="textarea" rows={3} name="synopsis" value={bookData.synopsis} onChange={updateField}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={clear}>Clear</Button>
            </Form>
        </div>
    )
}

export default BookForm; 
