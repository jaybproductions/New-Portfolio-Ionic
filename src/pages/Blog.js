import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonSpinner,
  IonSearchbar,
} from "@ionic/react";
import "../css/Contact.css";
import BlogPostList from "../components/BlogPostList";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);

  useEffect(() => {
    getFilteredPosts();
  }, [filter]);

  useEffect(() => {
    setLoading(false);
  }, [posts]);
  const getPosts = async () => {
    const response = await axios.get(
      "https://portfolio-jaybprod.herokuapp.com/posts" ||
        "http://localhost/posts"
    );
    setPosts(response.data);

    console.log(response.data);
    response.data.map((info) => {
      console.log(info.title);
    });
  };

  const getFilteredPosts = () => {
    const query = filter.toLowerCase();
    const matched = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.data.toLowerCase().includes(query)
      );
    });

    setFilteredPosts(matched);
    console.log(matched);
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      setFilter(e.target.value);
    }
  };
  return (
    <IonPage>
      <IonContent>
        {loading && <IonSpinner />}
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blog</IonTitle>
            <IonSearchbar value={filter} onKeyPress={handleChange} />
          </IonToolbar>
        </IonHeader>
        <div className="blog" style={{ padding: "10px" }}>
          {!filter && <BlogPostList posts={posts} />}
          {filter && <BlogPostList posts={filteredPosts} />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Blog;
