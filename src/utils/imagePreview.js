import { useEffect, useState } from "react";
// import product from "../OmsClient/product";

export const ImagePreview = ({ className, button, articleNumber }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState();
  const [message, setMessage] = useState("");
  const [isLoadding, setIsLoading] = useState(false);
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const uploadImage = (e) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("articleNumber", articleNumber);
    formData.append("index", 0);
    setIsLoading(true);
    fetch("v2/imageupload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("Image uploaded successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div>
        {selectedFile && (
          <img src={preview} alt="profile" className={className} />
        )}
      </div>
      <input type="file" className=" pt-2" onChange={onSelectFile} />

      <button
        disabled={isLoadding}
        className="checkout-button button alt wc-forward btn btn-block btn btn-green mt-3"
        onClick={() => uploadImage()}
      >
        {isLoadding ? "Uploading........" : button}
      </button>

      <p>{message}</p>
    </div>
  );
};
