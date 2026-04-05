const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;


export async function loadLatestVideo(setVideo, setLoading, setError) {
    if (!API_KEY || !CHANNEL_ID) {
      setError('Missing Youtube env variables.')
      setLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams({
        key: API_KEY,
        channelId: CHANNEL_ID,
        part: 'snippet',
        order: 'date',
        maxResults: '1',
        type: 'video'
      });

      const res = await fetch('https://www.googleapis.com/youtube/v3/search?' + params.toString());
      if (!res.ok) {
        throw new Error('YouTube API failed with status ' + res.status);
      }

      const data = await res.json();
      const item = data.items && data.items[0];

      if (!item || !item.id || !item.id.videoId) {
        throw new Error('No video found for this channel.');
      }

      setVideo({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description
      });
    } catch (e) {
      setError(e.message || 'Failed to load latest video.');
    } finally {
      setLoading(false);
    }
}