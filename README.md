# 🗣️ ShrutiVaani - VoiceBridge

**Breaking Barriers in Communication**

Take a look at Live Website : https://codestorm-shruti-vaani.vercel.app/

ShrutiVaani (VoiceBridge) is an innovative web application designed to empower people with hearing and speech impairments through real-time voice-to-text and text-to-voice translation in Indian regional languages.

## 🌟 Features

### 🎤 Voice-to-Text (Speech Recognition)
- **Real-time transcription** of spoken words into text
- **Multi-language support** for Indian dialects
- **High accuracy** optimized for various Indian accents
- **Accessibility focused** for users with speech impairments

### 📢 Text-to-Voice (Speech Synthesis)
- **Natural voice synthesis** for typed messages
- **Multiple Indian languages** support
- **Clear audio output** for users with hearing impairments
- **Customizable language selection**

### 🌐 Multi-Language Support
Supports **22+ Indian languages** including:
- Hindi, Tamil, Telugu, Bengali, Kannada
- Marathi, Gujarati, Punjabi, Malayalam
- Assamese, Bodo, Dogri, Kashmiri
- And many more regional languages

### 📴 Offline Functionality
- **Works without internet** for essential features
- **Privacy-focused** with local processing
- **Reliable** in areas with poor connectivity
- **No data sent to external servers** when offline

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **Python** (v3.7 or higher)
- **Modern web browser** with microphone support

### Installation

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd ShrutiVaani
```

#### 2. Backend Setup
```bash
cd Backend
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

The backend will start on `http://localhost:5000`

#### 3. Frontend Setup
```bash
cd Frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Web Speech API** - Browser-based speech recognition and synthesis

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Vosk** (planned) - Offline speech recognition
- **Coqui TTS** (planned) - Offline text-to-speech

## 📱 How to Use

### Voice-to-Text
1. **Select your language** from the dropdown menu
2. **Click "Start Listening"** to begin speech recognition
3. **Speak clearly** into your microphone
4. **View transcribed text** in real-time

### Text-to-Voice
1. **Type your message** in the text area
2. **Select your preferred language** for output
3. **Click "Speak"** to hear your message
4. **Adjust volume** as needed

### Language Selection
- **Choose from 22+ Indian languages**
- **Switch languages** at any time
- **All features adapt** to your selected language

## 🔧 API Endpoints

### Backend API
- `GET /` - Welcome message
- `POST /api/voice-to-text` - Speech-to-text conversion
- `POST /api/text-to-voice` - Text-to-speech conversion

## 🎯 Target Users

- **People with hearing impairments** - Can read transcribed speech
- **People with speech impairments** - Can communicate through typing
- **Elderly users** - Easy-to-use interface for communication
- **Multilingual communities** - Support for regional languages
- **Educational institutions** - Language learning and accessibility

## 🌍 Accessibility Features

- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** design
- **Responsive layout** for all devices
- **Voice feedback** for interactions

## 🔒 Privacy & Security

- **Local processing** for offline features
- **No data storage** of user conversations
- **Secure HTTPS** communication
- **Browser-based** speech processing

## 🚧 Development Status

### ✅ Completed
- Basic Flask backend setup
- React frontend with Tailwind CSS
- Web Speech API integration
- Multi-language support UI
- Responsive design

### 🔄 In Progress
- Offline speech recognition (Vosk integration)
- Offline text-to-speech (Coqui TTS)
- Enhanced language models
- Performance optimization

### 📋 Planned Features
- **Real-time translation** between languages
- **Voice command** navigation
- **Custom voice** training
- **Mobile app** development
- **API documentation** and SDK

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution
- **Language model improvements**
- **UI/UX enhancements**
- **Accessibility features**
- **Documentation**
- **Testing**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Web Speech API** for browser-based speech processing
- **Indian language communities** for linguistic support
- **Open source contributors** for various libraries
- **Accessibility advocates** for guidance and feedback

## 📞 Support

- **Issues**: Report bugs and feature requests on GitHub
- **Documentation**: Check the wiki for detailed guides
- **Community**: Join our discussions for help and ideas

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Documentation**: [Wiki]
- **API Reference**: [Coming Soon]
- **Contributing Guide**: [CONTRIBUTING.md]

## 📋 Project Structure

```
ShrutiVaani/
├── Backend/                 # Flask backend server
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   ├── models/            # ML models (planned)
│   └── utils.py           # Utility functions
├── Frontend/              # React frontend application
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── components/    # React components
│   │   │   └── VoiceBridgeDemo.js  # Main demo component
│   │   └── styles/        # CSS styles
│   ├── package.json       # Node.js dependencies
│   └── public/            # Static assets
└── README.md              # This file
```

## 🎯 Use Cases

### For Individuals with Disabilities
- **Hearing impaired users** can read what others are saying
- **Speech impaired users** can communicate through typing
- **Elderly users** can use voice commands for easier interaction

### For Educational Institutions
- **Language learning** in regional Indian languages
- **Accessibility support** for students with disabilities
- **Multilingual communication** in diverse classrooms

### For Healthcare
- **Patient communication** in preferred languages
- **Accessibility tools** for medical consultations
- **Emergency communication** in regional languages

### For Businesses
- **Customer service** in local languages
- **Accessibility compliance** for inclusive workplaces
- **Multilingual support** for diverse workforces

## 🚀 Getting Started for Developers

### Prerequisites Check
```bash
# Check Node.js version
node --version  # Should be v14 or higher

# Check Python version
python --version  # Should be v3.7 or higher

# Check if you have a modern browser
# Chrome, Firefox, Safari, or Edge with microphone support
```

### Quick Test
1. **Start both servers** (backend and frontend)
2. **Open browser** to `http://localhost:3000`
3. **Allow microphone access** when prompted
4. **Try voice-to-text** by clicking "Start Listening"
5. **Try text-to-voice** by typing and clicking "Speak"

### Troubleshooting
- **Microphone not working?** Check browser permissions
- **Backend not starting?** Ensure Python virtual environment is activated
- **Frontend not loading?** Check if Node.js dependencies are installed
- **CORS errors?** Ensure both servers are running on correct ports

---

**Made with ❤️ for inclusive communication**


*ShrutiVaani - Where every voice matters* 
