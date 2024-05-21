import React from 'react'

interface BookProps {
    name: string;
    price: number;
    image: string;
  }

const Book:React.FC<BookProps> = ({name,price,image}) => {
  return (
    <div>
        <article className='book'>

            <img src={image} alt={name} className='img' />
            <div>
                <h4>{name}</h4>
                <p>{price}</p>
            </div>
        </article>
      
    </div>
  )
}

export default Book
