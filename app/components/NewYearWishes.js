'use client';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const NewYearWishes = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isBeforeNewYear, setIsBeforeNewYear] = useState(false);

  // Sound effect
  const [audio] = useState(new Audio('/sounds/new.mp3')); // Your sound file path

  useEffect(() => {
    const currentDate = new Date();
    const newYearDate = new Date('2025-01-01');
    
    // Check if the current date is before January 1, 2025
    if (currentDate < newYearDate) {
      setIsBeforeNewYear(true);
    } else {
      setIsBeforeNewYear(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      // Play sound on submit
      audio.play();
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 text-white px-4">
      <div className="w-full max-w-lg p-8 bg-white/30 backdrop-blur-lg rounded-xl shadow-xl text-center space-y-8">
        {submitted && <Confetti />}
        {!submitted ? (
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-5xl font-extrabold text-pink-200 mb-4 animate__animated animate__bounceIn">
              🎉 Happy New Year 2025! 🎉
            </h1>
            <p className="text-lg text-yellow-100 mb-4">
              Enter your name to receive a personalized New Year wish.
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-lg bg-white text-black text-xl placeholder-gray-400 shadow-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full px-5 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg shadow-lg font-semibold transition duration-300"
            >
              Submit
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold text-yellow-200 animate__animated animate__bounceIn">
              {isBeforeNewYear
                ? `🎉 Happy New Year 2025 in Advance, ${name}! 🎉`
                : `🎉 Happy New Year 2025, ${name}! 🎉`}
            </h1>
            <p className="text-lg text-yellow-100 mb-6">
              {isBeforeNewYear
                ? `Wishing you an early celebration of the year ahead filled with love, success, and joy! 💫🎊`
                : `Wishing you an amazing year filled with love, success, and joy! 💫 Let's make this year unforgettable! 🌟💖`}
            </p>
            <motion.button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg shadow-lg font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Over 🔄
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewYearWishes;
