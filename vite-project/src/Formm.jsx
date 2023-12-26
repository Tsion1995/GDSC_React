import { useState } from 'react';

const Form = () => {
  const [mainTopic, setMainTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const styles = `
    main {
      font-family: 'Arial', sans-serif;
      max-width: 600px;
      margin: auto;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
    }

    form {
      display: grid;
      gap: 10px;
    }

    label {
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }

    button {
      background-color: #4caf50;
      color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <main>
        <h1>Taking Notes</h1>
        <form className="note-form" onSubmit={handleSubmit}>
          <label htmlFor="main-topic">Main Topic:</label>
          <input
            type="text"
            id="main-topic"
            placeholder="Enter main topic"
            value={mainTopic}
            onChange={(e) => setMainTopic(e.target.value)}
          />

          <label htmlFor="sub-topic">Sub Topic:</label>
          <input
            type="text"
            id="sub-topic"
            placeholder="Enter sub topic"
            value={subTopic}
            onChange={(e) => setSubTopic(e.target.value)}
          />

          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            placeholder="Enter your notes here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">Save</button>
        </form>
      </main>
    </div>
  );
};

export default Form;
