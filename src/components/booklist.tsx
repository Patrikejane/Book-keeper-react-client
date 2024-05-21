import React, { useState } from 'react';
import Book from './book';


const Booklist:React.FC<any> = ({books} ) => {
  return (
    <section>
      {books.map((book:any) => {
        return <Book key={book.id}{...book} />;
      })}
    </section>
  )
}
export default Booklist