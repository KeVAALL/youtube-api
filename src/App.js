import { useEffect } from "react";
import "./App.css";

const YOUTUBE_PLAYLIST_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerData() {
  const response = await fetch(YOUTUBE_PLAYLIST_API);

  const data = await response.json();

  console.log(data);
}

function App() {
  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="App">
      <h1>Youtube API</h1>
    </div>
  );
}

export default App;
