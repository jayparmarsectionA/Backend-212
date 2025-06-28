import React, { useState } from 'react';

export default function App() {
  // State for multi-upload
  const [files, setFiles] = useState(null);

  // State for random images
  const [images, setImages] = useState([]);

  // State for dog image
  const [dogUrl, setDogUrl] = useState(null);
  const [dogBlob, setDogBlob] = useState(null);

  // Handle multiple images upload
  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    await fetch('http://localhost:3000/upload-multiple', {
      method: 'POST',
      body: formData,
    });

    alert('Files uploaded!');
  };

  // Fetch random images from server
  const fetchImages = async () => {
    const res = await fetch('http://localhost:3000/random-images');
    const data = await res.json();
    setImages(data);
  };

  // Get random dog image
  const getDogImage = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    setDogUrl(data.message);

    // Get blob for uploading
    const imageRes = await fetch(data.message);
    const blob = await imageRes.blob();
    setDogBlob(blob);
  };

  // Upload dog image to Express server
  const uploadDogImage = async () => {
    const formData = new FormData();
    const file = new File([dogBlob], 'dog.jpg', { type: dogBlob.type });
    formData.append('dogImage', file);

    await fetch('http://localhost:3000/upload-dog', {
      method: 'POST',
      body: formData,
    });

    alert('Dog image uploaded!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Image Upload & Random Image Lab</h2>

      {/* Multi Upload */}
      <h3>Upload Multiple Images</h3>
      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <button onClick={handleUpload}>Upload</button>

      <hr />

      {/* Get Random Images */}
      <h3>Get Random Images</h3>
      <button onClick={fetchImages}>Get Images</button>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {images.map((url, idx) => (
          <img key={idx} src={url} alt="Random" style={{ width: '150px', borderRadius: '8px' }} />
        ))}
      </div>

      <hr />

      {/* Dog Image */}
      <h3>Get & Upload Random Dog Image</h3>
      <button onClick={getDogImage}>Get Dog Image</button>
      {dogUrl && (
        <div>
          <img src={dogUrl} alt="Dog" style={{ width: '200px', marginTop: '10px', borderRadius: '8px' }} />
          <br />
          <button onClick={uploadDogImage} style={{ marginTop: '10px' }}>
            Upload Dog Image to Server
          </button>
        </div>
      )}
    </div>
  );
}
