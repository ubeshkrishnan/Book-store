import React ,{useEffect, useState} from 'react'
import axios from 'axios';
import Book from './Book';
import "./Book.css"
const URL = "http://localhost:5001/books";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data)
}
const Books = () => {
    const [books, setBooks] = useState()
    useEffect(() => {
      
    fetchHandler().then(data => setBooks(data.books))
     
    }, [])
    console.log(books)
  return (
   <ul>
      {books && books.map((book,i)=> (
        <li  key={i}>
            <Book book={book}/>
        </li>
      ))}
   </ul>
  )

}

export default Books