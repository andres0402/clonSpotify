import React from 'react';
export function SongOptions(){
    return (
        <div className="flex flex-row gap-5 items-center justify-end mr-5">
            <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
            <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
            <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
            <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
            <input type="range" className="w-20"/>
            <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
            <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
        </div>
    )
}