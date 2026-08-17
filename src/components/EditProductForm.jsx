import { useState, useRef, useEffect } from 'react';

export default function EditProductForm({ initialValue, onSave, onCancel }) {
  
  // 1. STATE: Remembers what is currently typed in the input box
  const [value, setValue] = useState(initialValue);

  // 2. REF: Creates a direct link to the HTML input element
  const inputRef = useRef(null);

  // 3. EFFECT: Runs automatically when this form first appears on the screen
  useEffect(() => {
    console.log("EditProductForm mounted. Forcing focus on input.");
    inputRef.current.focus();
  }, []);

  // 4. EVENT HANDLER: Listens for changes as you type on your keyboard
  const handleChange = (e) => {
    console.log("User is typing. Current value is:", e.target.value);
    setValue(e.target.value);
  };

  // 5. EVENT HANDLER: Listens for when the Save button is clicked
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