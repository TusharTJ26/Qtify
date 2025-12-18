import "./GeneralQuestions.css";
const GeneralQuestions = () => {
  let questions = [
    {
      id: "flush-collapseOne",
      question: "Is Qtify free to use?",
      answer: "Yes! It is 100% free, and has 0% ads!",
    },
    {
      id: "flush-collapseTwo",
      question: "Can I download and listen to songs offline?",
      answer:
        "Sorry, unfortunately we don't provide the service to download and songs.",
    },
  ];
  return (
    <div className="question-container">
      <h1>FAQs</h1>
      <br />
      <div
        className="accordion accordion-flush mx-5 px-5 question"
        id="accordionFlushExample"
      >
        {questions.map((item) => {
          return (
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id}`}
                  // data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls={item.id}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={item.id}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GeneralQuestions;
