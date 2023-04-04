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
                
            <label>
                    Company: <hr />
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Role: <hr />
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                    />
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
