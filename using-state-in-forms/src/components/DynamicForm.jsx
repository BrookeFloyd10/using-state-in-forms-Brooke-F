import { useState } from "react";

function DynamicForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value}));
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}></input>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" name="email" value={formData.email} onChange={handleChange}></input>
                <label htmlFor="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} maxLength="200"></textarea>
                <button type="submit">Submit Feedback</button>
            </form>

            <div id="preview-container">
                <h2>Form Preview:</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Feedback: {formData.feedback}</p>

            </div>
        </div>
    );
}

export default DynamicForm;