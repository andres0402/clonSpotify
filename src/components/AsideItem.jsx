import React from 'react';
export const AsideItem = (props) =>{
    return (
        <button className="text-zinc-400 hover:text-zinc-200 text-left">
                {props.title ?? "Error al obtener el titulo"}   
        </button>
                
    )
}