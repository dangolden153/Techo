import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ReactHtmlParser from 'react-html-parser';



const TutorialText = ({setContentValue, contentValue}) => {
    const handleChange = (event, editor) => {
        const data = editor.getData();
        setContentValue(data);
    };
    const viewText = ReactHtmlParser(contentValue);
    
  return (
    <div className="tutorial-text">
        <Paper className="tutorial-text-paper">
            <CKEditor
                editor={ ClassicEditor }
                onChange={ handleChange }
        className="tutorial-text-editor"
                />
                <div className="tutorial-text-preview" >
                    {viewText}
                </div>
            </Paper>
    </div>
    );


};

export default TutorialText;