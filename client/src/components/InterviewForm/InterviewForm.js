import "./InterviewForm.css"
import React, { useState } from "react";
function MyForm() {
    const [formData, setFormData] = useState({
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

        fetch("http://localhost:5000/interview", {
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
                        company: "",
                        role: ""
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
                
                <br />
                <label>
                    Company: <hr />
                    <select
                        name="company"
                        value={formData.company}
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
                        value={formData.role}
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
