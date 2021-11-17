import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState, convertToRaw, ContentState } from 'draft-js';

import './styles.css' 
const RichText = () => {
    const [editorState, setEditorState] = React.useState(null);
    const [contentState, setContentState] = React.useState(null);
    const onEditorStateChange = (editorState) => { 
        setEditorState(editorState);
        setContentState(editorState.getCurrentContent());
    };


    return (
        <>
            <Editor
  editorState={editorState}
  toolbarClassName="richtext-toolbar"
  wrapperClassName="richtext-wrapper"
  editorClassName="richtext-editor"
  onEditorStateChange={onEditorStateChange}
/>;
        </>
    )
}

export default RichText
