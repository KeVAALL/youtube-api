import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [youtubeData, setYoutubeData] = useState("");

  const YOUTUBE_PLAYLIST_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  async function getServerData() {
    try {
      const response = await fetch(
        `${YOUTUBE_PLAYLIST_API}?part=snippet&maxResults=50&playlistId=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );

      const data = await response.json();

      console.log(data);
      setYoutubeData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="App">
      <h1>My Playlists</h1>

      <ul>
        {youtubeData.items.map((item) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { videoId } = resourceId;
          const { medium = {} } = thumbnails;

          return (
            <li key={id}>
              <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                <p>
                  <img
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                    alt=""
                  />
                </p>
                <h3>{title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
