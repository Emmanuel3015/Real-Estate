import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "811afb6e-0e3e-44c7-a982-e17b389d07c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto capitalize">
        Ready to make a move, let's build your future together
      </p>
      <form
        className="max-w-2xl mx-auto pt-8 text-gray-600"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              className="w-full border border-gray-300 py-3 px-4 mt-2 rounded"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-6">
            Email
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              className="w-full border border-gray-300 py-3 px-4 mt-2 rounded"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="message"
            required
            placeholder="Write a comment"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
