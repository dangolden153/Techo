import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';


const TutorialText = ({setContentValue}) => {
    const handleChange = (event, editor) => {
        const data = editor.getData();
        setContentValue(data);
    };
  return (
    <div className="tutorial-text">
        <Paper className="tutorial-text-paper">
            <CKEditor
                editor={ ClassicEditor }
                onChange={ handleChange }
                />
            </Paper>
    </div>
    );


};

export default TutorialText;