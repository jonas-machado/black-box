"use client"; // is needed only if you’re using React Server Components
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";

function UploadCareButton() {
  const [files, setFiles] = useState<any>([]);
  const handleChangeEvent = (items: any) => {
    setFiles([
      ...items.allEntries.filter((file: any) => file.status === "success"),
    ]);
  };
  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="c0da41dee366bcf4c143"
      />

      <div>
        {files.map((file: any) => (
          <div key={file.uuid}>
            <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadCareButton;
