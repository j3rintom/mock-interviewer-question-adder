import React, { useState } from "react";
import "./Form.css"
function MyForm() {
    const [formData, setFormData] = useState({
        question: "",
        answer: "",
        company: "",
        role: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:5000/question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    setSuccessMessage("Form submitted successfully!");
                    setFormData({
                        question: "",
                        answer: "",
                        company: "",
                        role: "",
                    });
                    setTimeout(()=>{
                        setSuccessMessage("")
                    },2000)
                } else {
                    throw new Error("Network response was not ok");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Question: <hr />
                    <input
                        type="text"
                        name="question"
                        value={formData.field1}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Answer: <hr />
                    <input
                        type="text"
                        name="answer"
                        value={formData.field2}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Company: <hr />
                    <select
                        name="company"
                        value={formData.select1}
                        onChange={handleInputChange}
                    >
                        <option value=""></option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </label>
                <br />
                <label>
                    Role: <hr />
                    <select
                        name="role"
                        value={formData.select2}
                        onChange={handleInputChange}
                    >
                        <option value=""></option>
                        <option value="option4">Option 4</option>
                        <option value="option5">Option 5</option>
                        <option value="option6">Option 6</option>
                    </select>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {successMessage && (
                <div style={{ marginTop: "20px", color: "green" }}>{successMessage}</div>
            )}
        </div>
    );
}

export default MyForm;
