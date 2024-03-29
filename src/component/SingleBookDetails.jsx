import React from 'react'
import { useParams } from 'react-router-dom';
import {
  books,
} from "@/data";

const SingleBookDetails = () => {
  const { id } = useParams();


  const book = books.find((book) => book.id === id);
  console.log(book)

  return (
    <div className='mt-24'>
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-5 mt-5">
        <div className="flex flex-col items-center gap-3 w-[700px]">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-md text-gray-700">{book.author}</p>
          <p className="text-md text-gray-700 text-center">{book.description}</p>
          <p className="text-md text-gray-700">Price: {book.price}</p>
          <p className="text-md text-gray-700">Rating: ⭐⭐⭐⭐⭐</p>

        </div>
        <img src="/img/book1.jpg" alt={books.title} className="h-[600px] object-cover rounded-lg" />
      </div>
    </div>

  )
}

export default SingleBookDetails;