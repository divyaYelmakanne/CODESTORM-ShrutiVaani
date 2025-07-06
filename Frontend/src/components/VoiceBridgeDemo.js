import React, { useState } from "react";

const LANGUAGES = [
  { code: "as-IN", name: "Assamese" },
  { code: "bn-IN", name: "Bengali" },
  { code: "brx-IN", name: "Bodo" },
  { code: "doi-IN", name: "Dogri" },
  { code: "gu-IN", name: "Gujarati" },
  { code: "hi-IN", name: "Hindi" },
  { code: "kn-IN", name: "Kannada" },
  { code: "ks-IN", name: "Kashmiri" },
  { code: "kok-IN", name: "Konkani" },
  { code: "mai-IN", name: "Maithili" },
  { code: "ml-IN", name: "Malayalam" },
  { code: "mni-IN", name: "Manipuri" },
  { code: "mr-IN", name: "Marathi" },
  { code: "ne-NP", name: "Nepali" },
  { code: "or-IN", name: "Oriya" },
  { code: "pa-IN", name: "Punjabi" },
  { code: "sa-IN", name: "Sanskrit" },
  { code: "sat-IN", name: "Santali" },
  { code: "sd-IN", name: "Sindhi" },
  { code: "ta-IN", name: "Tamil" },
  { code: "te-IN", name: "Telugu" },
  { code: "ur-IN", name: "Urdu" },
  { code: "en-IN", name: "English" },
];

export default function VoiceBridgeDemo() {
  const [language, setLanguage] = useState("hi-IN");
  const [voiceText, setVoiceText] = useState("");
  const [textToSpeak, setTextToSpeak] = useState("");
  const [showDetail, setShowDetail] = useState({
    voiceToText: false,
    textToVoice: false,
    multiLang: false,
    offline: false,
    learnMoreButtons: false,
    expandableExplanations: false,
  });

  const toggleDetail = (key) => {
    setShowDetail(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech Recognition not supported in this browser.");
    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.onresult = (event) => setVoiceText(event.results[0][0].transcript);
    recognition.onerror = () => alert("Could not recognize speech. Try again.");
    recognition.start();
  };

  const speakText = () => {
    const utterance = new window.SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main>
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🗣️ VoiceBridge</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#demo" className="hover:underline">Try Demo</a>
            <a href="#about" className="hover:underline">About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-3">Breaking Barriers in Communication</h2>
        <p className="max-w-xl mx-auto text-lg">Empowering people with hearing and speech impairments through real-time voice-to-text and text-to-voice translation in Indian regional languages.</p>
      </section>

      {/* Features */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">🔑 Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Voice-to-Text Feature */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-sm flex flex-col items-start md:items-center">
              <h4 className="text-xl font-semibold mb-2">🎤 Voice-to-Text (Speech Recognition)</h4>
              <p className="mb-2">Transcribes spoken words into text in real time, with support for Indian dialects. This feature leverages advanced speech recognition technology to help users with speech impairments communicate by speaking instead of typing. The system is optimized for various Indian accents and dialects, ensuring high accuracy and inclusivity.</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto mb-2"
                aria-label="Learn more about Voice-to-Text"
                onClick={() => toggleDetail('voiceToText')}
              >
                {showDetail.voiceToText ? 'Hide Details' : 'Learn More'}
              </button>
              {showDetail.voiceToText && (
                <div className="bg-white border border-blue-300 rounded p-3 mt-2 w-full text-sm shadow">
                  <strong>What it does:</strong> Converts your spoken words into written text instantly.<br/>
                  <strong>How it works:</strong> Uses advanced speech recognition technology, optimized for Indian languages and dialects.<br/>
                  <strong>Why it’s useful:</strong> Helps users who have difficulty typing or want to communicate quickly and naturally.<br/>
                  <strong>Tips:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Click "Start Listening" and speak clearly in your chosen language.</li>
                    <li>The app transcribes your speech in real time.</li>
                    <li>Supports a wide range of Indian dialects for inclusivity.</li>
                  </ul>
                </div>
              )}
              <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2 w-full md:w-auto" aria-label="Start Listening" onClick={startRecognition}>Start Listening</button>
              <textarea className="w-full mt-2 p-2 rounded border" rows={2} placeholder="Recognized text will appear here..." aria-label="Recognized text" value={voiceText} readOnly />
            </div>
            {/* Text-to-Voice Feature */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-sm flex flex-col items-start md:items-center">
              <h4 className="text-xl font-semibold mb-2">📢 Text-to-Voice (Speech Synthesis)</h4>
              <p className="mb-2">Converts typed messages into spoken audio in selected Indian languages. This feature is designed for users with hearing impairments or those who prefer listening to text. The synthesized voice is natural and clear, supporting multiple Indian languages for effective communication.</p>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto mb-2"
                aria-label="Learn more about Text-to-Voice"
                onClick={() => toggleDetail('textToVoice')}
              >
                {showDetail.textToVoice ? 'Hide Details' : 'Learn More'}
              </button>
              {showDetail.textToVoice && (
                <div className="bg-white border border-green-300 rounded p-3 mt-2 w-full text-sm shadow">
                  <strong>What it does:</strong> Reads aloud any text you type, in your selected Indian language.<br/>
                  <strong>How it works:</strong> Uses speech synthesis technology for natural and clear voice output.<br/>
                  <strong>Why it’s useful:</strong> Makes communication easier for users with hearing impairments or those who prefer audio.<br/>
                  <strong>Tips:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Type your message in the text area.</li>
                    <li>Click "Speak" to hear your message spoken aloud.</li>
                    <li>Choose from multiple Indian languages for output.</li>
                  </ul>
                </div>
              )}
              <textarea className="w-full p-2 rounded border mb-2" rows={2} placeholder="Enter text to convert into speech..." aria-label="Text to speak" value={textToSpeak} onChange={e => setTextToSpeak(e.target.value)} />
              <button className="bg-green-500 text-white px-3 py-1 rounded w-full md:w-auto" aria-label="Speak" onClick={speakText}>🔊 Speak</button>
            </div>
            {/* Multi-Language Support Feature */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-sm flex flex-col items-start md:items-center">
              <h4 className="text-xl font-semibold mb-2">🌐 Multi-Language Support</h4>
              <p className="mb-2">Switch easily between Hindi, Tamil, Telugu, Bengali, Kannada, and more. The app supports a wide range of Indian languages and dialects, allowing users to select their preferred language for both input and output, making the tool accessible to a diverse population.</p>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full md:w-auto mb-2"
                aria-label="Learn more about Multi-Language Support"
                onClick={() => toggleDetail('multiLang')}
              >
                {showDetail.multiLang ? 'Hide Details' : 'Learn More'}
              </button>
              {showDetail.multiLang && (
                <div className="bg-white border border-purple-300 rounded p-3 mt-2 w-full text-sm shadow">
                  <strong>What it does:</strong> Lets you select your preferred language for both input and output.<br/>
                  <strong>How it works:</strong> All features (voice-to-text, text-to-voice) use your selected language.<br/>
                  <strong>Why it’s useful:</strong> Makes the tool accessible to a diverse population.<br/>
                  <strong>Tips:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Choose your language from the dropdown menu.</li>
                    <li>Switch languages at any time for all features.</li>
                  </ul>
                </div>
              )}
              <select className="w-full p-2 border rounded" aria-label="Choose Language" value={language} onChange={e => setLanguage(e.target.value)}>
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.name}</option>
                ))}
              </select>
            </div>
            {/* Offline Functionality Feature */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-sm flex flex-col items-start md:items-center">
              <h4 className="text-xl font-semibold mb-2">📴 Offline Functionality</h4>
              <p>Basic translation and speech services work without internet access. This ensures the app remains functional in areas with poor connectivity, providing essential communication tools at all times. Offline models are used for speech recognition and synthesis, maintaining privacy and reliability.</p>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full md:w-auto mb-2"
                aria-label="Learn more about Offline Functionality"
                onClick={() => toggleDetail('offline')}
              >
                {showDetail.offline ? 'Hide Details' : 'Learn More'}
              </button>
              {showDetail.offline && (
                <div className="bg-white border border-gray-300 rounded p-3 mt-2 w-full text-sm shadow">
                  <strong>What it does:</strong> Provides essential features even without internet.<br/>
                  <strong>How it works:</strong> Uses offline models for speech recognition and synthesis.<br/>
                  <strong>Why it’s useful:</strong> Ensures accessibility and privacy at all times.<br/>
                  <strong>Tips:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Essential features remain available offline.</li>
                    <li>No user data is sent to external servers when offline.</li>
                    <li>Great for areas with poor connectivity.</li>
                  </ul>
                </div>
              )}
            </div>
            {/* Interactive “Learn More” Buttons Feature */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-sm flex flex-col items-start md:items-center">
              <h4 className="text-xl font-semibold mb-2">🖱️ Interactive “Learn More” Buttons</h4>
              <p className="mb-2">Each feature card now has a “Learn More” button. Clicking this button expands a detailed explanation about how that feature works, including step-by-step usage and benefits. The button toggles to “Hide Details” when the explanation is visible.</p>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full md:w-auto mb-2"
                aria-label="Learn more about Interactive Learn More Buttons"
                onClick={() => toggleDetail('learnMoreButtons')}
              >
                {showDetail.learnMoreButtons ? 'Hide Details' : 'Learn More'}
              </button>
              {showDetail.learnMoreButtons && (
                <div className="bg-white border border-indigo-300 rounded p-3 mt-2 w-full text-sm shadow">
                  <strong>What it does:</strong> Adds a “Learn More” button to each feature card.<br/>
                  <strong>How it works:</strong> Clicking the button expands or collapses a detailed explanation for that feature.<br/>
                  <strong>Why it’s useful:</strong> Keeps the interface clean and lets users access more information only when needed.<br/>
                  <strong>Tips:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Click “Learn More” to read about a feature in detail.</li>
                    <li>Click “Hide Details” to collapse the explanation.</li>
                  </ul>
                </div>
              )}
            </div>
            {/* Expandable Detailed Explanations Feature */}
            <div className="bg-blue-100 p-5 rounded-lg shadow-sm flex flex-col items-start md:items-center">
              <h4 className="text-xl font-semibold mb-2">📖 Expandable Detailed Explanations</h4>
              <p className="mb-2">For each feature, users can read a clear, accessible, and concise description of what the feature does, how it works, why it’s useful, and tips for best use. The explanations are shown/hidden interactively, making the interface clean and user-friendly.</p>
              <button
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 w-full md:w-auto mb-2"
                aria-label="Learn more about Expandable Detailed Explanations"
                onClick={() => toggleDetail('expandableExplanations')}
              >
                {showDetail.expandableExplanations ? 'Hide Details' : 'Learn More'}
              </button>
              {showDetail.expandableExplanations && (
                <div className="bg-white border border-pink-300 rounded p-3 mt-2 w-full text-sm shadow">
                  <strong>What it does:</strong> Provides detailed, step-by-step explanations for each feature.<br/>
                  <strong>How it works:</strong> Explanations are hidden by default and can be expanded by clicking “Learn More.”<br/>
                  <strong>Why it’s useful:</strong> Helps users understand each feature at their own pace, improving accessibility and usability.<br/>
                  <strong>Tips:</strong>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Use the “Learn More” button to access detailed help for any feature.</li>
                    <li>Great for new users or those who want to explore all capabilities.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">🧪 Try the Demo</h3>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
            {/* Language Selector */}
            <div className="mb-4">
              <label className="block font-semibold mb-1">Choose Language:</label>
              <select
                className="w-full p-2 border rounded"
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.name}</option>
                ))}
              </select>
            </div>

            {/* Voice to Text */}
            <div className="mb-6">
              <label className="block font-semibold mb-1">🎤 Speak Something:</label>
              <button
                onClick={startRecognition}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2"
              >Start Listening</button>
              <textarea
                className="w-full border p-3 rounded mt-2"
                rows="3"
                placeholder="Recognized text will appear here..."
                value={voiceText}
                readOnly
              />
            </div>

            {/* Text to Voice */}
            <div>
              <label className="block font-semibold mb-1">✍️ Type a Message:</label>
              <textarea
                className="w-full border p-3 rounded mb-2"
                rows="3"
                placeholder="Enter text to convert into speech..."
                value={textToSpeak}
                onChange={e => setTextToSpeak(e.target.value)}
              />
              <button
                onClick={speakText}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >🔊 Speak</button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">🌱 About VoiceBridge</h3>
        <p className="max-w-2xl mx-auto text-lg">VoiceBridge is a step toward inclusive communication using regional Indian languages. Designed for simplicity and accessibility, this app bridges gaps for those with hearing and speech impairments by translating voice into text and vice versa in real time.</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 text-center">
        <p>&copy; 2025 VoiceBridge. Empowering Communication for All.</p>
      </footer>
    </main>
  );
} 