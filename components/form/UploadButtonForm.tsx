"use client";
import React from "react";
import { UploadDropzone } from "@/utils/uploadthing";
// import "@uploadthing/react/styles.css";
const UploadButtonForm = ({
  setCourseImg,
}: {
  setCourseImg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <UploadDropzone
      appearance={{
        container: {
          border: "1px solid #f77272",
        },
        uploadIcon: {
          color: "#f77272",
        },
        button: {
          backgroundColor: "#f77272",
          color: "#fff",
        },
        label: {
          color: "black",
        },
      }}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        setCourseImg(res[0].url)
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default UploadButtonForm;
