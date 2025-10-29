import "./Feedback.module.css";
import { useState } from "react";

export default function Feedback() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <>
      <div className="feedback-dropdown">
        <form>
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email ID" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="description" placeholder="Description" />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </>
  );
}

// export default function Feedback() {
//   return (
//     <>
//       <h1>Feedback</h1>
//       <form>
//         <input type="text" placeholder="Full Name" />
//         <input type="email" placeholder="Email ID" />
//         <input type="text" placeholder="Subject" />
//         <textarea name="Description" id=""></textarea>
//       </form>
//     </>
//   );
// }
