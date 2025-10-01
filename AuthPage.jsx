import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="text-black">Ace</span>
          <span className="text-black relative">
            Win
            <span className="absolute -top-2 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </span>
        </h1>

        {/* Tabs */}
        <div className="flex mb-6">
          {["login", "signup", "reset"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-1/3 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-400"
              }`}
            >
              {tab === "login"
                ? "LOGIN"
                : tab === "signup"
                ? "SIGN UP"
                : "RESET"}
            </button>
          ))}
        </div>

        {/* Forms */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "login" && (
              <motion.div
                key="login"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="password"
                  placeholder="Input password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600">
                  LOGIN
                </button>
                <div className="text-sm text-center mt-2">
                  Forgot your password?{" "}
                  <button
                    onClick={() => setActiveTab("reset")}
                    className="text-blue-500 hover:underline"
                  >
                    Reset here
                  </button>
                </div>
                <div className="text-sm text-center">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setActiveTab("signup")}
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "signup" && (
              <motion.div
                key="signup"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="password"
                  placeholder="Input password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="text"
                  placeholder="Refer ID"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Input OTP here"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    GET OTP
                  </button>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600">
                  SIGNUP
                </button>
                <div className="text-sm text-center">
                  Remember your Password?{" "}
                  <button
                    onClick={() => setActiveTab("login")}
                    className="text-blue-500 hover:underline"
                  >
                    Login here
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "reset" && (
              <motion.div
                key="reset"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="password"
                  placeholder="Input password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Input OTP here"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                    GET OTP
                  </button>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600">
                  RESET PASSWORD
                </button>
                <div className="text-sm text-center">
                  Remember your Password?{" "}
                  <button
                    onClick={() => setActiveTab("login")}
                    className="text-blue-500 hover:underline"
                  >
                    Login here
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
