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
      apiKey="sabebc29w7v6rk8d18x2kay5mg9io0mslmpiv8lfa99fx06j"
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
          var url = `https://portalapi.ir/PortalApi/v1/Files`;
          var xhr = new XMLHttpRequest();
          var fd = new FormData();
          xhr.open("POST", url, true);

          input.onchange = function () {
            // @ts-ignore
            var file = this.files[0];

            var reader = new FileReader();
            xhr.onload = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(xhr.responseText);

                var url = `http://portalapi.ir/uploadFiles/files/${response?.resultMessage}`;
                console.log(response);
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

              // @ts-ignore
              fd.append("Data.Id", 0);
              // @ts-ignore
              fd.append("Data.ObjectId", 0);
              // @ts-ignore
              fd.append("Data.ObjectTypeId", 0);
              // @ts-ignore
              fd.append("Data.PageId", 0);
              // @ts-ignore
              fd.append("Data.SiteId", 1);
              // @ts-ignore
              fd.append("Data.CategoryId", 0);
              // @ts-ignore
              fd.append("Data.EnableComments", true);
              // @ts-ignore
              fd.append("Data.IsActive", true);
              // @ts-ignore
              fd.append("Data.File", blobInfo.blob());

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
