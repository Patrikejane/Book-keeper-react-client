import React, { useState } from 'react';
import Book from './book';



interface BookProps {
  name: string;
  price: number;
  image: string;
}


interface Props {
 booksProps : BookProps[]
}


const Booklist:React.FC<Props> = ({booksProps} ) => {
  return (
    <section>
      {booksProps.map((book:any) => {
        return <Book key={book.id}{...book} />;
      })}
    </section>
  )
}
export default Booklist