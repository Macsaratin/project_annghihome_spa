import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

// Mô tả Editor nhận `value` và `onChange` từ props để tái sử dụng linh hoạt
const DescriptionEditor = ({ value, onChange }) => {
  const [description, setDescription] = useState(value);

  // Khi giá trị `value` từ cha thay đổi, cập nhật lại state local
  useEffect(() => {
    setDescription(value);
  }, [value]);

  const handleEditorChange = (content) => {
    setDescription(content);
    onChange(content);  // Truyền lại giá trị mới cho parent component
  };

  return (
    <div>
      <h3>Mô tả</h3>
      <Editor
        apiKey="l1iwsjkxm1pu64770dvpd8mlc1nryrqv06spylo8baevggrf"  // Optional: Add your API key if necessary
        value={description}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
          ],
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',        }}
        onEditorChange={handleEditorChange}  // Gọi hàm handleEditorChange khi nội dung thay đổi
      />
    </div>
  );
};

export default DescriptionEditor;
