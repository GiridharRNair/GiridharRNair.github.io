import React from 'react';

function Title({ children, id }) {
   return (
      <h1
         id={id && id}
         className="text-2xl font-bold decoration-4 mb-4 text-stone-900 dark:text-white"
      >
         {children}
      </h1>
   )
}

export default Title;

