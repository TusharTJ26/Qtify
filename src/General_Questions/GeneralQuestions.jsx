import "./GeneralQuestions.css";
const GeneralQuestions = () => {
  return (
    <>
      <h1>FAQs</h1>
      <br />
      <div
        className="accordion accordion-flush mx-5 px-5 adjustWidth"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Is Qtify free to use?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Yes! It is 100% free, and has 0% ads!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Can I download and listen to songs offline?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Sorry, unfortunately we don't provide the service to download and
              songs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GeneralQuestions;
