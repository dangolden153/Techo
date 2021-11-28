import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import './styles.css' 
const RichText = () => {
    const [editorState, setEditorState] = React.useState(null);
    const [contentState, setContentState] = React.useState(null);
    const [valueText, setValueText] = React.useState('');
    const onEditorStateChange = (editorState) => { 
        setEditorState(editorState);
        setContentState(editorState.getCurrentContent().getPlainText());
    };

    console.log(contentState);



    return (
        <>
            <Editor
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                emoji: {
                    emojis: [
                        '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗',
                        '🤔', '😣', '😫', '😴', '😌', '😛', '😜', '😠', '😇', '😷',
                        '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                        '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰',
                        '👲', '🙍', '🙇', '🚶', '🏃', '💃', '⛷', '🏂', '🏌', '🏄', '🚣',
                        '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                        '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌',
                        '🙏', '🐵', '🐶', '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉',
                        '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸', '🍺',
                        '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨' ]
                }
            }}

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
