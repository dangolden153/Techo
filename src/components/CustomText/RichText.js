import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState, convertToRaw, ContentState } from 'draft-js';

import './styles.css' 
const RichText = () => {
    const [editorState, setEditorState] = React.useState(null);
    const [contentState, setContentState] = React.useState(null);
    const [valueText, setValueText] = React.useState('');
    const onEditorStateChange = (editorState) => { 
        setEditorState(editorState);
        setContentState(editorState.getCurrentContent());
    };
const handleChange = (e) => { 
    setValueText(e.target.value);
};

console.log(valueText)

    return (
        <>
            <Editor
            toolbarHidden
  editorState={editorState}
  toolbarClassName="richtext-toolbar"
  wrapperClassName="richtext-wrapper"
  editorClassName="richtext-editor"
  onChange={handleChange}
  value={valueText}
  onEditorStateChange={onEditorStateChange}
/>;

        </>
    )
}

export default RichText
