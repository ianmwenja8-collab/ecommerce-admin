import { useState, useRef, useEffect } from 'react';

export default function EditProductForm({ initialValue, onSave, onCancel }) {
  
  const [value, setValue] = useState(initialValue);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("EditProductForm mounted. Forcing focus on input.");
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    console.log("User is typing. Current value is:", e.target.value);
    setValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Save button clicked. Submitting value:", value);
    onSave(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}