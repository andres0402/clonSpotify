import React, { useState } from 'react';
export function PlaylistCard(props){
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 300); 
    }

    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onClick={handleClick} className={`${isAnimating ? 'animate-jump animate-duration-[500ms]' : ''}`}>
            <div className="flex flex-col gap-3 items-start w-[250px] hover:bg-zinc-700 rounded-xl px-3 py-3 relative group transition">
                <img src={props.img ?? "https://cdn.iconscout.com/icon/free/png-256/free-music-1767802-1502382.png"} alt={`Imagen del playlist ${props.title ?? "NaN"}`} className="rounded-xl"/>
                <button onClick={() => {
                        props.setCurrentSong("Believer")
                        props.setCurrentArtist("Imagine dragons")
                        props.setCurrentSongImg("https://i.scdn.co/image/ab67616d000048515675e83f707f1d7271e5cf8a")
                    }} className={`h-11 w-11 rounded-full bg-green-500 absolute top-44 left-44 mt-3 ml-3 hover:scale-105 opacity-0 group-hover:opacity-100 group-hover:animate-fade-up animate-duration-500 animate-ease-out transition-opacity`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="24" height="24" color="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor" />
                    </svg>
                </button>
                <p className="text-xl font-bold">{props.title ?? "Playlist"}</p>
                <p className="text-base text-zinc-400">{props.artists ?? "-"}</p>
            </div>
        </button>
    )
}