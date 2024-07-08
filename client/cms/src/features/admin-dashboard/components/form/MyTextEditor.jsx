import { useRef } from "react";
import ReactQuill from "react-quill";

// eslint-disable-next-line react/prop-types
const MyTextEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  const modules = {
    toolbar: [
      [
        { header: [1, 2, false] },
        {
          font: [],
        },
      ],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "align",
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
    "video",
  ];

  const handleChange = (content) => {
    onChange(content);
  };

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      className="w-full h-full"
    />
  );
};

export default MyTextEditor;
