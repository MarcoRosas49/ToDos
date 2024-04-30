import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      dueDate,
      notes,
      image,
    };
    onAddTodo(newTodo);
    setTitle('');
    setDueDate('');
    setNotes('');
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
