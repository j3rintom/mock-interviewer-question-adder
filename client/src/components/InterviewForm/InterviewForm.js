import Question from "../Question/Question";
import "./InterviewForm.css"
import React,{ useEffect, useState } from "react";
function MyForm() {
    const [formData, setFormData] = useState({
        company: "",
        role: "",
        questions:[]
    });
    const [data,setData] = useState([])
    const [successMessage, setSuccessMessage] = useState("");
    const [questionCount,setQuestionCount] = useState(0)
    const [question,setQuestion] = useState("")
    const [answer,setAnswer] = useState("")
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const addQuestion = () => {
        if (question === "" || answer === "" || formData.company === "" || formData.role === "") {
          alert("Fields can't be blank");
        } else {
          const newData = data.concat({ question: question, answer: answer });
          setData(newData)
          setQuestionCount(questionCount + 1);
          setQuestion("");
          setAnswer("");
        }
      };
    useEffect(()=>{
        setData(data)
        setFormData({...formData,questions:data})
    },[data])
      

    const handleSubmit = (event) => {
        if(questionCount<10){
            alert("Minimum number of questions is 10. Add more questions")
        }
        else{
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
                        role: "",
                        questions:[]
                    });
                    setData([])
                    setQuestionCount(0)
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
        }
    };

    return (
        <div className="form-div">
            <form>
                
            <label>
                    Company: <hr />
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
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
                        required
                    />
                </label>
                <br />
                <div className="question-container">
                {data.length === 0 && <h3>No questions added!</h3>}

                    {data.map((d)=> (<Question key={d.answer} question={d.question} />))}
                    
                    
                </div>
                <br />
                <label>
                    Question: <hr />
                    <input
                        type="text"
                        name="question"
                        value={question}
                        onChange={(e)=> setQuestion(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Answer: <hr />
                    <input
                        type="text"
                        name="answer"
                        value={answer}
                        onChange={(e)=> setAnswer(e.target.value)}
                        required
                    />
                </label>
            </form>
                <button onClick={addQuestion}>Add Question</button>
                <br />
                <button onClick={handleSubmit}>Add Interview</button>
            {successMessage && (
                <div style={{ marginTop: "20px", color: "green" }}>{successMessage}</div>
            )}
        </div>
    );
}

export default MyForm;
