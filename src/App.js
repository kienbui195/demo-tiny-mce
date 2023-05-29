import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";



function App() {
  const [tiny, setTiny] = useState('')
  const [ck, setCk] = useState('')

  return (
    <>
      <div style={{ background: 'wheat', padding: '8ox' }}>
        <div>
          <strong style={{ fontSize: '24px' }}>TinyMCE</strong>
        </div>
        <div >
          <div style={{ display: 'flex', flexDirection: 'row', padding: '8px', border: '2px solid black' }}>
            <div>

              <Editor
                init={{
                  height: 500,
                  min_width: 800,
                  menubar: true,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                }}
                onEditorChange={(ev) => setTiny(ev)}
              />
            </div>
            <div  style={{ marginLeft: '24px' }}>
              <Editor
                value={tiny}
                init={{
                  toolbar: false,
                  menubar: false,
                  inline: true,
                  max_width: 500,

                }}
                disabled={true}
               
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginTop: '20px', background: 'wheat', padding: '8px' }}>
        <div>
          <strong style={{ fontSize: '24px' }}>CK Editor</strong>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', padding: '8px', border: '2px solid black' }}>
          <CKEditor
            editor={ClassicEditor}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              let data = editor.getData();
              setCk(data)
            }}
            style={{ height: '500px', width: '800px' }}
            config={{

            }}

          />
          <CKEditor
            editor={ClassicEditor}
            data={ck}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              editor.ui.view.toolbar.element.remove();
            }}
            disabled={true}
            style={{ height: '500px', width: '800px', marginLeft: '10px' }}

          />
        </div>
      </div>
    </>
  );
}

export default App;
