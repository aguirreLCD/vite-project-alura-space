import "./Trending.css";
import trendingPhotos from "./trending.json";

export default function Trending() {
  return (
    <aside className="trending">
      <h2 className="trending-title">Trending</h2>
      <div className="trending-container">
        <ul className="trending-images">
          {trendingPhotos.map((trendingPhoto) => {
            return (
              <li key={trendingPhoto.id}>
                <img src={trendingPhoto.path} alt={trendingPhoto.alt} />
              </li>
            );
          })}
        </ul>
      </div>
      <button className="trending-btn">Show more</button>
    </aside>
  );
}
