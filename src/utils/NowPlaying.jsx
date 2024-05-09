import { getAccessToken } from "./GetAccessToken";

const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

export const getNowPlaying = async () => {
    try {
        const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const song = await response.json();

        return (
            song.currently_playing_type !== "ad" && {
                isPlaying: song.is_playing,
                albumCover: song.item.album.images[0].url,
                spotifyLink: song.item.external_urls.spotify,
                title: song.item.name,
                artists: song.item.artists.map((artist) => artist.name).join(", "),
                timePlayed: song.progress_ms,
                timeTotal: song.item.duration_ms,
            }
        );
    } catch (error) {
        console.error(error);
        return null;
    }
};
