import React from 'react';
import { AsideItem } from './AsideItem';
import { PlaylistSelector } from './PlaylistSelector';
import 'intersection-observer';

export function Aside (){
    const options = ["Playlists", "Artistas", "Álbumes"]
  
    return (
        <aside className="flex flex-col items-start rounded-xl text-left">
            <section className="bg-zinc-800 w-full h-[100px] rounded-xl">
                <a href="#">
                    <div className="flex flex-row gap-5 items-center mt-3 ml-4">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" width="30px"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>
                        <AsideItem title="Inicio"/>
                    </div>
                </a>
                <a href="#">
                    <div className="flex flex-row gap-5 items-center mt-3 ml-4">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" width="30px"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>
                        <AsideItem title="Buscar"/>
                    </div>
                </a>
            </section>

            <section className="bg-zinc-800 w-full h-full rounded-xl mt-2">
                <div className="grid grid-cols-2 justify-between items-center">
                    <a href="#">
                        <div className="flex flex-row gap-5 items-center mt-3 ml-4">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" width="30px"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                            <AsideItem title="Tu biblioteca"/>
                        </div>
                    </a>
                    <div className="flex flex-row gap-3 justify-end mr-3">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" width="30px"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" width="30px"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg>
                    </div>
                </div>

                <nav className="flex flex-row gap-3 my-3 mx-3 font-bold justify-center">
                        {options.map(option => (
                                <button key={option} className={`rounded-full bg-zinc-700 px-3 py-1 hover:bg-zinc-600 transition`}>{option}</button>
                        ))}
                </nav>

                <div className='flex flex-col'>
                    <div className='flex flex-row justify-between px-4'>
                        <button className='rounded-full w-10 h-10 hover:bg-zinc-600 transition flex justify-center items-center py-1 px-2'>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" width={"30px"} className="Svg-sc-ytk21e-0 dYnaPI CIVozJ8XNPJ60uMN23Yg" viewBox="0 0 16 16"><path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path></svg>
                        </button>

                        <button className='flex flex-row gap-3'>
                            <span className='text-zinc-400'>Recientes</span>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" width={"30px"} className="Svg-sc-ytk21e-0 cAMMLk"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
                        </button>

                    </div>
                    <PlaylistSelector img="https://misc.scdn.co/liked-songs/liked-songs-64.png" title="Tus me gusta" info="Playlist - 1333 canciones"/>
                    <PlaylistSelector img="https://i.scdn.co/image/ab67706f0000000220c6edf377734a7a6636eb52" title="The Ultimate Hit Mix" info="Playlist - Spotify"/>
                    <PlaylistSelector/>
                    <PlaylistSelector/>
                    <PlaylistSelector/>
                    <PlaylistSelector/>

                </div>
            </section>

        </aside>

    )
}