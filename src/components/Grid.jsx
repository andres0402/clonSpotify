import { SongInfo } from "./SongInfo"
import { Player } from "./Player"
import { SongOptions } from "./SongOptions"
import { PlaylistCard } from "./PlaylistCard"
import { useState } from "react"
import { Aside } from "./Aside"
import React from 'react';

export function Grid(){
    const [currentSong, setCurrentSong] = useState("deja vu")
    const [currentArtist, setCurrentArtist] = useState("Olivia Rodrigo")
    const [currentSongImg, setCurrentSongImg] = useState("https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a")
   
    return (
        <>
            <section className="grid lg:grid-cols-[380px_1fr] md:grid-cols-[280px_1fr] sm:grid-cols-[280px_1fr]">

                <Aside/>
            
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ml-5 gap-6 mb-3 z-10 bg-zinc-800 rounded-xl">
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>
                    <PlaylistCard img="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb0accbbe13e1aa147dd27671c/2/es-419/default" title="Mix diario" artists="Muse, Imagine Dragons" setCurrentSong={setCurrentSong} setCurrentArtist={setCurrentArtist} setCurrentSongImg={setCurrentSongImg}/>


                </div>

                <footer className="bg-zinc-950 [grid-area: footer] col-span-2 h-20 rounded-xl grid grid-cols-3 justify-between">
                    <SongInfo img={currentSongImg} song={currentSong} artist={currentArtist}/>
                    <Player/>
                    <SongOptions/>
                </footer>


            </section>

        </>
    )
}