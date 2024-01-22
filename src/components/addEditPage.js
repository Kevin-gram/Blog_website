import React, { useState } from 'react';
import axios from 'axios';
import '../styles/addblog.css';

const AddEditPage = () => {
  const [formData, setFormData] = useState({
    imageFile: null,
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];

      if (file && file.type.startsWith('image/')) {
        setFormData({
          ...formData,
          [name]: file,
        });
      } else {
        // Handle non-image file or no file selected
        setFormData({
          ...formData,
          [name]: null,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.imageFile);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);

    try {
      // Send POST request to your API endpoint
      const response = await axios.post(
        'https://blogapi-se2j.onrender.com/api/v1/blogs',
        formDataToSend
      );

      // Handle the response as needed
      console.log('API Response:', response.data);

      // Optionally, reset the form after successful submission
      setFormData({
        imageFile: null,
        title: '',
        description: '',
      });
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageFile">Image Upload:</label>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>

      {/* Display the post using the provided component */}
      <div className="post">
        {formData.imageFile && (
          <img
            className="blog-image"
            src={URL.createObjectURL(formData.imageFile)}
            alt="Blog Post"
          />
        )}
        <h2>{formData.title}</h2>
        <p className="post-text">{formData.description}</p>

        <button className="post-button">View Page</button>
      </div>
    </div>
  );
};

export default AddEditPage;
