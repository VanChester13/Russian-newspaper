import posts from "./db";
import { HashRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import DetailPost from "./pages/DetailPost/DetailPost";

function App(): React.ReactElement {
  return (
    <div id="main-container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/posts/:id" element={<DetailPost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
