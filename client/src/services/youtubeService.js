const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const UPLOAD_PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_UPLOAD_PLAYLIST_ID;


export async function loadYoutubeVideos(setLoading, setError, amount) {
    if (!API_KEY || !UPLOAD_PLAYLIST_ID) {
      setError('Missing Youtube env variables.')
      setLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams({
        key: API_KEY,
        playlistId: UPLOAD_PLAYLIST_ID,
        part: 'snippet',
        maxResults: amount,
      });

      const res = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?' + params.toString());
      if (!res.ok) {
        throw new Error('YouTube API failed with status ' + res.status);
      }

      const data = await res.json();
      const items = data.items;

      if (!items || !items[0]?.snippet?.resourceId?.videoId) {
        throw new Error('No video found for this channel.');
      }

      return items;
    } catch (e) {
      setError(e.message || 'Failed to load latest video.');
    } finally {
      setLoading(false);
    }
}