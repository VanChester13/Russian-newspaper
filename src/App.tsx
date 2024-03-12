import posts from "./db";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import DetailPost from "./pages/DetailPost/DetailPost";

function App(): React.ReactElement {
  return (
    <div id="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/posts/:id" element={<DetailPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
