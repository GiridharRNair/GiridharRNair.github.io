import { useState, useEffect } from "react";
import { getNowPlaying } from "../utils/NowPlaying";

const formatWithLeadingZero = (num) => (num < 10 ? `0${num}` : `${num}`);

export default function MusicPlayerCard() {
    const [song, currentSong] = useState(null);
    const [timePlayed, setTimePlayed] = useState(0);
    const pollingInterval = 3000;

    const fetchNowPlaying = async () => {
        try {
            const song = await getNowPlaying();
            currentSong(song);
            setTimePlayed(song?.timePlayed);
        } catch (error) {
            console.error("Error fetching now playing:", error);
        }
    };

    useEffect(() => {
        fetchNowPlaying();

        const interval = setInterval(() => {
            fetchNowPlaying();
        }, pollingInterval);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimePlayed((prevTime) => prevTime + 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (song && song.isPlaying) {
        let timePlayedSeconds = Math.floor(timePlayed / 1000);
        let timeTotalSeconds = Math.floor(song.timeTotal / 1000);

        if (timePlayedSeconds > timeTotalSeconds) {
            timePlayedSeconds = timeTotalSeconds;
        }

        const playedMinutes = Math.floor(timePlayedSeconds / 60);
        const playedSeconds = timePlayedSeconds % 60;

        const totalMinutes = Math.floor(timeTotalSeconds / 60);
        const totalSeconds = timeTotalSeconds % 60;

        return (
            <>
                Currently listening to:
                <div className="flex flex-row space-x-2">
                    <div>
                        <img src={song.albumCover} alt="Album Art" className="flex w-20" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <a href={song.spotifyLink} target="_blank" rel="noopener noreferrer" className="text-[#0000EE] underline">
                            <p>{song.title}</p>
                        </a>
                        <p>{song.artists}</p>
                        <p>
                            {playedMinutes}:{formatWithLeadingZero(playedSeconds)} / {totalMinutes}:{formatWithLeadingZero(totalSeconds)}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
