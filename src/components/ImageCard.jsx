import React from 'react';
export function ImageCard (props){
    return (
        <article>
            <div className="my-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Rr4V9UkkPakFZk__s0rD7fM_CjiAlwrP5UU6Yde5Z1WhcV37" alt='Gato' className="w-full rounded-full"/>
                <p>{props.fact ?? "Error al obtener el dato"}</p>
            </div>
        </article>
    )
}
