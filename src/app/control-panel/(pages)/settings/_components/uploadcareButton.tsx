"use client"; // is needed only if you’re using React Server Components
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (e: string) => any;
};

function UploadCareButton({ onUpload }: Props) {
  const router = useRouter();
  const handleChangeEvent = async (items: any) => {
    const file = await onUpload(items.allEntries[0].cdnUrl);
    if (file) {
      router.refresh();
    }
  };

  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="c0da41dee366bcf4c143"
      />
    </div>
  );
}

export default UploadCareButton;
