/**https://medium.com/nerd-for-tech/how-to-store-an-image-to-a-database-with-react-using-base-64-9d53147f6c4f - accessed  06/10/2021*/
import React, { useState } from "react";
import './ImageUploader.css'
import axios from "axios";

export default function ImageUploader() {
  const [uploadImage, setUploadImage] = useState({
    myImage: "",
  });

const url = "http://localhost:8080/uploads";
const createImage = (newImage) => axios.post(url, newImage);

  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(uploadImage);
  };

  const convertImageToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (event) => {
    const image = event.target.files[0];
    const base64 = await convertImageToBase64(image);
    setUploadImage({ ...uploadImage, myImage: base64 });
  };

  return (
    <div className = 'horizontal-layout float-input'>
      <form className = 'horizontal-layout float-input' onSubmit={handleSubmit}>
      <div className = 'label' ><label for = 'myFile'>Upload Image:</label></div>
        <input className = 'text upload'
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(event) => handleFileUpload(event)}
        />
        <button className = 'float-input' >Upload</button>
      </form>
      
    </div>
  );
}