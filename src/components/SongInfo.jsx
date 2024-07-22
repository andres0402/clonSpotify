import React from 'react';
export function SongInfo(props){
    return (
        <div className="flex flex-row gap-4 items-center text-left ml-4 ">
            <img className="rounded-lg" src={`${props.img}`} alt={`Imagen del artista ${props.artist ?? "NaN"}`}/>
            <div className="flex flex-col">
                <a href="#" className="hover:underline">
                    <p className="font-bold">{props.song ?? "NaN"}</p>
                </a>
                <a href="#" className="hover:underline">
                    <p className="text-sm text-zinc-400">{props.artist ?? "NaN"}</p>
                </a>
            </div>
            <button className="rounded-full bg-green-500 h-5 w-5 text-center"></button>
        </div>
    )
}