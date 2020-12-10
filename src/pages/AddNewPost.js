import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLoading,
  IonTextarea,
  IonCard,
  IonCardContent,
  IonGrid,
  IonCardTitle,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonHeader,
} from "@ionic/react";
import useForm from "../hooks/useForm";
import validateContactForm from "../validators/validateContactForm";
import "../css/Contact.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const AddNewPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [data, setData] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [postEditorState, setPostEditorState] = useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    getBlogPosts();
  }, []);

  const handleEditorChange = (e) => {
    setEditorState(e);
    const editorJSON = convertToRaw(e.getCurrentContent());
    setData(editorJSON);
    console.log(editorJSON);
  };

  const handleEditorSave = (e) => {
    console.log(data);
  };

  const getBlogPosts = async () => {
    const response = await axios.get("http://localhost:80/add/blog");
    const data = response.data;
    data.map((post, index) => {
      console.log(post.data.blocks[0].text);
    });

    setBlogPosts(data);
  };

  const handleAddBlogPost = async () => {
    const response = await axios.post("http://localhost:80/add/blog", {
      data,
    });

    console.log(response);
  };
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add New Blog Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="add-blog">
          <div
            className="title"
            style={{ width: "50%", margin: "auto", alignContent: "center" }}
          >
            <IonInput>Title</IonInput>
          </div>
          <div
            className="editor"
            style={{ width: "50%", margin: "auto", alignContent: "center" }}
          >
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={handleEditorChange}
            />
          </div>
          <button onClick={handleAddBlogPost}>Save</button>
          <div>
            {blogPosts.map((post, index) => (
              <>
                <h1>Title</h1>
                {post.data.blocks[0].text}
                <br />
              </>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddNewPost;
