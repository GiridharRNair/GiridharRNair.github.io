import { useState, useEffect } from "react";

const formatTime = (timeInMs) => {
    const minutes = Math.floor(timeInMs / 1000 / 60);
    const seconds = Math.floor((timeInMs / 1000) % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const songs = [
    {
        albumCover: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
        spotifyLink: "https://open.spotify.com/track/0wwPcA6wtMf6HUMpIRdeP7",
        title: "Hotline Bling",
        artists: "Drake",
        duration: 267066,
    },
    {
        albumCover: "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
        spotifyLink: "https://open.spotify.com/track/5mCPDVBb16L4XQwDdbRUpz",
        title: "Passionfruit",
        artists: "Drake",
        duration: 298940,
    },
];

export default function FakeMusicPlayerCard() {
    const [song] = useState(songs[Math.floor(Math.random() * songs.length)]);
    const [timePlayed, setTimePlayed] = useState(Math.floor(Math.random() * song.duration));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimePlayed((prevTime) => (prevTime + 1000) % song.duration);
        }, 1000);

        return () => clearInterval(interval);
    }, [song.duration]);

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
                    <p>{`${formatTime(timePlayed)} / ${formatTime(song.duration)}`}</p>
                </div>
            </div>
            <p className="text-xs italic">*The songs I listen to aren&apos;t a reflection of my beliefs or opinions</p>
        </>
    );
}
