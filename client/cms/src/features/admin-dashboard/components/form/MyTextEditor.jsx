import { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// eslint-disable-next-line react/prop-types
const MyTextEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);
  const observerRef = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }, { font: [] }],
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

  useEffect(() => {
    if (quillRef.current) {
      observerRef.current = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            const [node] = mutation.addedNodes;
            if (node && node.tagName === "DIV") {
              const quill = quillRef.current.getEditor();
              const delta = quill.clipboard.convert(node);
              quill.updateContents(delta);
            }
          }
        }
      });

      observerRef.current.observe(quillRef.current.getEditor().root, {
        childList: true,
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default MyTextEditor;
