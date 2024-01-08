import React, { FC, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

type ITextEditorInput = {
  value: any;
  onChange: any;
};

const TextEditorInput: FC<ITextEditorInput> = ({ value, onChange }) => {
  const editorRef = useRef<any>(null);

  return (
    <Editor
      apiKey="x7e5npbnun1h6db5gye2trbco63i0h45ah6278rnm5dcmxto"
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      onEditorChange={onChange}
      init={{
        height: 500,
        width: "100%",
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        // @ts-ignore
        selector: "textarea", // change this value according to your HTML
        mobile: {
          toolbar_drawer: "floating",
        },
        file_picker_types: "file image media",

        file_picker_callback: function (cb, value, meta) {
          var input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          var url = `http://localhost:5005/api/v1/gallery`;
          var xhr = new XMLHttpRequest();
          var fd = new FormData();
          xhr.open("POST", url, true);

          input.onchange = function () {
            // @ts-ignore
            var file = this.files[0];

            var reader = new FileReader();

            xhr.onload = function () {
              if (xhr.readyState === 4 && xhr.status === 201) {
                console.log("yes");

                // File uploaded successfully
                var response = JSON.parse(xhr.responseText);

                var url = `https://arazdev.storage.iran.liara.space//api/v1/gallery/${response?.src[0].image}`;
                // Create a thumbnail of the uploaded image, with 150px width
                cb(url, { title: file?.name });
              }
            };

            reader.onload = function () {
              var id = "blobid" + new Date().getTime();
              var blobCache =
                // @ts-ignore
                window.tinymce.activeEditor.editorUpload.blobCache;
              // @ts-ignore
              var base64 = reader.result.split(",")[1];

              var blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);

              // call the callback and populate the Title field with the file name

              fd.append("file", blobInfo.blob());

              xhr.send(fd);
            };

            reader.readAsDataURL(file);
          };

          input.click();
        },
        toolbar:
          "undo redo | blocks | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | image",
        content_style:
          "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900&display=swap'); @import url('https://v1.fontapi.ir/css/Vazir'); body { font-family:Vazir, Arial,sans-serif; font-size:16px, direction: rtl }",
      }}
    />
  );
};

export default TextEditorInput;
