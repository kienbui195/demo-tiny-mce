import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

export default function App() {
  const [content, setContent] = useState();



  return (
    <>
      <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        onEditorChange={(ev) => {
          setContent(ev)
        }}
        init={{
          height: 500,
          menubar: true,

          plugins: ['preview', 'importcss', 'searchreplace', 'autolink', 'autosave', 'save', 'directionality', 'code', 'visualblocks', 'visualchars', 'fullscreen', 'image', 'link', 'media', 'template', 'codesample', 'table', 'charmap', 'pagebreak', 'nonbreaking', 'anchor', 'insertdatetime', 'advlist', 'lists', 'wordcount', 'help', 'charmap', 'emoticons'],
          toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        }}
        value={content}
      />

      <div className='res'>{content}</div>
    </>
  );
}