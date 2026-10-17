// Projects data file
// Stores all portfolio project details, categories, features, and links

export const projectFilterCategories = [
  "All",
  "Generative AI",
  "Agentic AI",
  "Machine Learning"
];

export const projects = [
  {
    id: "agentic-ai-chatbot",
    title: "Agentic AI Chatbot",
    displayCategory: "Generative AI / Agentic AI",
    filterCategories: ["Generative AI", "Agentic AI"],
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "Groq",
      "Tavily",
      "Streamlit",
      "SQLite"
    ],
    githubUrl: "https://github.com/Nagasai33/Agentic_chatbot",
    demoUrl: "https://agentic-chatbot-5qk4.onrender.com/",
    description:
      "A tool-using AI chatbot that routes requests between LLM responses, a calculator, and Tavily web search.",
    features: [
      "Conditional routing between different AI tools.",
      "Secure calculator tool.",
      "Tavily web search for context-aware answers.",
      "RAG for questions requiring information from user-provided documents.",
      "Persistent multi-thread conversations using SQLite and LangGraph checkpointing.",
      "Conversation-history management and token-usage tracking.",
      "Response streaming and tool-activity indicators.",
      "Request timeouts, retries, and error handling."
    ]
  },
  {
    id: "multi-agent-research-system",
    title: "Multi-Agent AI Research System",
    displayCategory: "Generative AI / Multi-Agent Systems",
    filterCategories: ["Generative AI", "Agentic AI"],
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "Google Gemini",
      "Tavily",
      "Streamlit",
      "Render"
    ],
    githubUrl: "https://github.com/Nagasai33/multi-agent-research-system",
    demoUrl: "https://multi-agent-research-system-k1pl.onrender.com/",
    description:
      "An AI research application that searches the web, reads relevant information, creates a structured research report, and reviews the generated answer automatically.",
    features: [
      "Four collaborating agents: Search, Reader, Writer, and Critic.",
      "Multi-step research workflow.",
      "Web research using Tavily.",
      "Structured report generation.",
      "Automated review and feedback.",
      "Streamlit interface.",
      "Deployed on Render."
    ]
  },
  {
    id: "multi-disease-prediction-system",
    title: "Multi-Disease Prediction System with Chatbot",
    displayCategory: "Machine Learning / Healthcare AI",
    filterCategories: ["Machine Learning"],
    technologies: [
      "Python",
      "XGBoost",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Flask"
    ],
    githubUrl: null,
    demoUrl: null,
    description:
      "A healthcare AI system for predicting Diabetes, Lung Cancer, and Parkinson's Disease using machine learning and deep learning models.",
    features: [
      "XGBoost for Diabetes prediction.",
      "XGBoost for Lung Cancer prediction.",
      "EfficientNetB0 for Parkinson's Disease prediction.",
      "Integrated AI chatbot for basic health guidance and explaining prediction results.",
      "Web interface built with Flask."
    ],
    evaluationMetrics: [
      { label: "Diabetes", value: "97.14%" },
      { label: "Lung Cancer", value: "97.7%" },
      { label: "Parkinson's Disease", value: "96.38%" }
    ],
    metricsDisclaimer:
      "Reported model evaluation results on test datasets. Not intended for clinical diagnosis."
  }
];
