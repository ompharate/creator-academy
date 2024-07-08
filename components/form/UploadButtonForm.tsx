"use client";
import React from "react";
import { UploadDropzone } from "@/utils/uploadthing";
const UploadButtonForm = () => {
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
        label:{
          color:"black"
        }
      }}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default UploadButtonForm;
