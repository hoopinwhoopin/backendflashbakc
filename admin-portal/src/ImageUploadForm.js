// ImageUploadForm.js
import React, { useState } from 'react';
import client from './sanity';

function ImageUploadForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    client
      .create({
        _type: 'image',
        title,
        image,
      })
      .then(() => {
        setTitle('');
        setImage(null);
      });
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload Image</button>
    </form>
  );
}

export default ImageUploadForm;