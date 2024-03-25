import PostsList from "./feacture/posts/PostsList";
import AddPostForm from "./feacture/posts/AddPostForm";
import "./index.css";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
