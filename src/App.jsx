// src/App.jsx
import { useState } from "react";
import HeroSection from "./components/HeroSection";

const MOCKED_API_DATA = {
  age: 4.2,
  breed: "Beagle",
  avg_daily_steps: 7500,
  avg_resting_hr: 62,
  avg_daily_sleep: 8.3,
  meals_per_day: 3,
  activity_level: "High",
  health_events: 0
};

const DOG_BREEDS = ['Beagle',
  'Great Dane',
  'German Shepherd',
  'Australian Shepherd',
  'Cocker Spaniel',
  'Boxer',
  'Cavalier King Charles Spaniel',
  'Dachshund',
  'Pomeranian',
  'French Bulldog',
  'Pug',
  'Chihuahua',
  'Rottweiler',
  'Border Collie',
  'Golden Retriever',
  'Jack Russell Terrier',
  'Bulldog',
  'Siberian Husky',
  'Labrador Retriever',
  'Dalmatian']

function App() {
  // Form state
  const [form, setForm] = useState({
    age: "",
    breed: "",
    avg_daily_steps: "",
    avg_resting_hr: "",
    avg_daily_sleep: "",
    meals_per_day: "",
    activity_level: "Low",
    health_events: ""
  });

  // Loading & status
  const [loading, setLoading] = useState(false);
  const [predictLoading, setPredictLoading] = useState(false);
  const [statusIdx, setStatusIdx] = useState(0);
  const [premium, setPremium] = useState(null);
  const STATUS_STEPS = [
    "Connecting to Tractive Server",
    "Authenticating session…",
    "Fetching latest activity data of your pet…",
    "Processing wearable metrics…",
    "Populating form fields…"
  ];

  // After loader finishes, fill form with mock data
  const fillFormWithMock = () => {
    setForm({ ...MOCKED_API_DATA });
    setLoading(false);
    setStatusIdx(0);
  };

  // Simulate API connect + loader
  const handleConnect = () => {
    setLoading(true);
    setStatusIdx(0);
    // Advance through STATUS_STEPS one by one
    STATUS_STEPS.forEach((_, idx) => {
      setTimeout(() => {
        setStatusIdx(idx + 1);
        if (idx === STATUS_STEPS.length - 1) {
          // Final step: fill form
          setTimeout(fillFormWithMock, 1000);
        }
      }, idx * 2000 + 500);
    });
  };

  const handleChange = ({ target: { name, value } }) =>
    setForm(f => ({ ...f, [name]: value }));


  const handleSubmit = async e => {
    e.preventDefault();
    setPredictLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("https://pet-insurance-price-prediction-api-production.up.railway.app/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });
        // const response = await fetch("http://127.0.0.1:8000/predict ", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(form)
        // });

        if (!response.ok) {
          throw new Error("Failed to fetch prediction");
        }

        const data = await response.json();
        setPredictLoading(false);
        setPremium(data.premium);
        // alert(`Predicted Premium: ${data.premium}`);
      } catch (error) {
        console.error("Error:", error);
        setPredictLoading(false);
        alert("An error occurred while predicting the premium.");
      }
    }
      , 6000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-2xl bg-gray-100 font-serif">
      <div className="">
        <HeroSection />
        <div className="hidden md:flex gap-4 mt-6 mb-6">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1632498301446-5f78baad40d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3MlMjBodW1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Happy dog"
              className="rounded-lg shadow-xl h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy cat"
              className="rounded-lg shadow-xl h-full object-cover"
            />
          </div>
        </div>
        <div className="md:hidden lg:hidden sm:flex gap-4 mt-6 mb-6">
          <img
            src="https://images.unsplash.com/photo-1736128081617-b468f8bf7920?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhdHMlMjBhbmQlMjBkb2dzJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="CatAndDo"
            className="rounded-lg shadow-xl h-full object-cover"
          />
        </div>
      </div>

      <p class="mt-10 mb-6 text-gray-600 text-lg leading-relaxed text-center">

        If your pup already wears a smart health tracker, then connect using CHIP ID,
        to auto-populate every field—no typing required.
      </p>
      {/* Connect Button */}
      <div className="flex flex-col items-center">
        {(
          <button
            onClick={handleConnect}
            className="mb-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Connect to Tractive
          </button>
        )}
      </div>

      {!loading && (
        <>
          <p className="flex flex-col items-center text-2xl font-semibold mb-6 leading-relaxed">OR</p>
          <p className="flex flex-col mb-6 items-center text-gray-600 text-lg">
            You may enter manually.
          </p>
        </>)}

      {loading && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="p-6 bg-white rounded-lg shadow-lg flex items-center">
            <svg
              className="animate-spin h-8 w-8 mr-3 text-green-600"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            <span className="text-gray-700">
              {STATUS_STEPS[Math.min(statusIdx, STATUS_STEPS.length - 1)]}
            </span>
          </div>
        </div>
      )}

      {predictLoading && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
          <div className="p-6 bg-white rounded-lg shadow-lg flex items-center">
            <svg
              className="animate-spin h-8 w-8 mr-3 text-green-600"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="4"
              />
              <path
                className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            <span className="text-gray-700">
              {/* {STATUS_STEPS[Math.min(statusIdx, STATUS_STEPS.length - 1)]} */}
              <p>Please Hang on! We are fetching an estimated premium...</p>
              <p>Our Machine Learning Algorithms are working hard to deliver the best rate for your pet!</p>
            </span>
          </div>
        </div>
      )}

      <div className="bg-gray-100 rounded-lg shadow-2xl p-6 mt-6">
        {/* Form */}
        {!loading && (
          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div>
              <label className="block font-medium">Age (Years):</label>
              <input
                type="number" name="age" step="0.1" value={form.age}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Breed:</label>
              <select
                name="breed" value={form.breed} onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">--Select--</option>
                {DOG_BREEDS.map(breed => <option>{breed}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Avg Daily Steps:</label>
                <input
                  name="avg_daily_steps" type="number" value={form.avg_daily_steps}
                  onChange={handleChange}
                  className="w-full border p-2 rounded" required
                />
              </div>
              <div>
                <label className="block font-medium">Resting HR:</label>
                <input
                  name="avg_resting_hr" type="number" value={form.avg_resting_hr}
                  onChange={handleChange}
                  className="w-full border p-2 rounded" required
                />
              </div>
              <div>
                <label className="block font-medium">Avg Sleep (hrs):</label>
                <input
                  name="avg_daily_sleep" type="number" step="0.1" value={form.avg_daily_sleep}
                  onChange={handleChange}
                  className="w-full border p-2 rounded" required
                />
              </div>
              <div>
                <label className="block font-medium">Meals/Day:</label>
                <input
                  name="meals_per_day" type="number" min="0" max="5" value={form.meals_per_day}
                  onChange={handleChange}
                  className="w-full border p-2 rounded" required
                />
              </div>
              <div>
                <label className="block font-medium">Activity Level:</label>
                <select
                  name="activity_level" value={form.activity_level}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>Low</option>
                  <option>Med</option>
                  <option>High</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Health Events/Year:</label>
                <input
                  name="health_events" type="number" min="0" value={form.health_events}
                  onChange={handleChange}
                  className="w-full border p-2 rounded" required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
            >
              Predict Premium
            </button>
          </form>
        )}

        {/* Loader + Result */}
        {predictLoading ? (
          <div className="flex justify-center items-center mt-6">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : !loading && premium !== null && (
          <div className="mt-6 p-5 bg-sky-500 text-white rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold">🎉 Predicted Premium:</h2>
            <p className="text-4xl font-bold mt-2">DKK {premium}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
