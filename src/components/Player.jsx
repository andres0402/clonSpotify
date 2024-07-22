import React from 'react';
export function Player(){
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-row gap-5">
                <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
                <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
                <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
                <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
                <button className="h-5 w-5 rounded-lg bg-zinc-400"></button>
            </div>
            <div className="flex flex-row justify-center gap-3 text-sm text-zinc-400">
                0:00 
                <input type="range" className="min-w-full"/>
                0:00
            </div>
        </div>
    )
}