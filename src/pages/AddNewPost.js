import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import {
  IonPage,
  IonContent,
  IonInput,
  IonToolbar,
  IonTitle,
  IonHeader,
} from "@ionic/react";
import "../css/Contact.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

const AddNewPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [data, setData] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [postEditorState, setPostEditorState] = useState(
    EditorState.createEmpty()
  );

  const handleEditorChange = (e) => {
    setEditorState(e);

    const editorJSON = convertToRaw(e.getCurrentContent());
    setData(draftToHtml(editorJSON));
  };

  const handleAddBlogPost = async () => {
    const response = await axios.post(
      "https://portfolio-jaybprod.herokuapp.com/add/blog" ||
        "http://localhost:80/add/blog",
      {
        data: {
          data: data,
          title: title,
        },
      }
    );

    console.log("blog post has been added!");
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
            <IonInput
              value={title}
              onIonChange={(e) => setTitle(e.target.value)}
            >
              Title
            </IonInput>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddNewPost;
