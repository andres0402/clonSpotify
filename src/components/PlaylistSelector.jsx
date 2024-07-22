import React from "react";

export function PlaylistSelector ( props ) {
    return (
        <a href="#">
            <div className="flex flex-row gap-3 hover:bg-zinc-700 rounded-lg mx-3 my-3 h-16 transition">
                <img className="rounded-xl px-2 py-2" src={props.img ?? "https://cdn.iconscout.com/icon/free/png-256/free-music-1767802-1502382.png"} alt="Playlist selector" height={"64px"} width={"64px"}/>
                <div className="flex flex-col gap-2 justify-center">
                    <h2 className="font-bold">{props.title ?? "Playlist"}</h2>
                    <h3 className="text-base text-zinc-400">{props.info ?? "Info"}</h3>
                </div>
            </div>
        </a>
    )
}