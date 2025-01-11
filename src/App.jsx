import childrenImg from "./assets/children.jpeg";
import charityImg from "./assets/charity.jpg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY);
const App = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const email = "corporateent@consultant.com";
  const subject = "INQUIRY";

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_af3fw3o",
        "template_yy8ufmb",
        form.current
      );
      setIsLoading(false);
      alert("Your message has been sent successfully");
      form.current.reset();
    } catch (error) {
      alert("An error occurred, please try again");
      setIsLoading(false);
      form.current.reset();
      console.error(error);
    }
  };

  return (
    <div className="py-4">
      <div className="flex flex-col items-center justify-center">
        <img src="/company-logo.png" alt="" height={50} width={50} />
        <p className="text-2xl font-bold text-white">MUSK FOUNDATION</p>
        <p className="text-8xl font-extrabold text-white">
          <span className="block md:inline">TO</span>
          <span className="block md:inline">GE</span>
          <span className="block md:inline">TH</span>
          <span className="block md:inline">ER</span>
        </p>
        <p className="text-3xl font-bold text-center text-white">
          <span className="block md:inline">Let's Donate, </span>
          <span className="block md:inline">Empower, </span>
          <span className="block md:inline">and </span>
          <span className="block md:inline">Transform</span>
        </p>

        <button
          onClick={() =>
            (window.location.href = `mailto:${email}?subject=${encodeURIComponent(
              subject
            )}`)
          }
          className="bg-amber-500 text-rose-800 border-2 border-rose-800 px-12 py-3 rounded-lg my-4"
        >
          Contact us
        </button>
      </div>
      <img src={charityImg} alt="" className="w-full" />
      <div>
        <p className="bg-rose-800 px-4 text-center text-amber-500 py-10">
          <p className="text-5xl font-bold mx-4 mb-2">Our Mission</p>
          <p>
            To connect generous donors with impactful causes, empowering them to
            make a real difference in the lives of others
          </p>
        </p>
        <div className="h-1/4">
          <img src={childrenImg} alt="" className="w-full aspect-[4/3]" />
        </div>
        <p className="bg-amber-500 px-4 text-rose-800 text-center py-10">
          <p className="text-5xl font-bold mx-4 mb-2">Our Vision</p>
          <p>
            A world where every individual has the opportunity to thrive, fueled
            by a global network of empowered donors and impactful causes
          </p>
        </p>
        <div className="m-4 bg-transparent flex flex-col items-center justify-center text-center text-white">
          <p className="text-6xl font-semibold">
            Your Donation on Can Make a Difference
          </p>
          <p className="text-lg">
            Your donation, no matter the size, can make a world of difference.
            Donate today and be the change
          </p>
          <form
            className="m-3 w-full space-y-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="px-5 py-3 rounded-lg md:w-[30%] outline-amber-500 text-black"
              placeholder="First name*"
              name="firstName"
              required
            />
            <br />
            <input
              type="text"
              className="px-5 py-3 rounded-lg md:w-[30%] outline-amber-500 text-black"
              placeholder="Last name*"
              name="lastName"
              required
            />
            <br />
            <input
              type="email"
              className="px-5 py-3 rounded-lg md:w-[30%] outline-amber-500 text-black"
              placeholder="Email address*"
              name="email"
              required
            />
            <br />
            <input
              type="number"
              className="px-5 py-3 rounded-lg md:w-[30%] outline-amber-500 text-black"
              placeholder="Phone number*"
              name="phone"
              required
            />
            <br />
            <input
              type="number"
              className="px-5 py-3 rounded-lg md:w-[30%] outline-amber-500 text-black"
              placeholder="Amount*"
              name="amount"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className={`"block bg-amber-500 text-rose-800 border-2 border-rose-800 px-12 py-3 rounded-lg my-4 ${
                  isLoading && "opacity-75"
                }`}
              >
                <span>{isLoading ? "Submitting..." : "Register"}</span>
                {isLoading && (
                  <>
                    <svg
                      className="animate-spin ml-2 mr-3 h-5 w-5 text-white inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
