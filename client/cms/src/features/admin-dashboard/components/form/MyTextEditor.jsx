/* eslint-disable react/prop-types */
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const MyTextEditor = ({ value, onChange, placeholder }) => {
  const quillRef = useRef(null);

  return (
    <>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value || ""}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default MyTextEditor;
