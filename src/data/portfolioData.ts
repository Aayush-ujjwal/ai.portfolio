export const PERSONAL = {
  name: "Aayush Ujjwal",
  firstName: "Aayush",
  lastName: "Ujjwal",
  title: "AI Engineer | Data Scientist",
  location: "India",
  bio: "Hi, I'm Aayush Ujjwal, an AI Engineer and Data Scientist with 1+ year of industry experience building machine learning models and AI-powered applications. I specialize in predictive analytics, NLP, and data-driven systems that help businesses make smarter decisions. I enjoy transforming complex data into actionable insights and building scalable AI solutions using Python, TensorFlow, PyTorch, and modern data technologies.",
};

export const SKILLS = {
  intelligence: {
    title: "Intelligence",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "Predictive Modeling",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Hugging Face",
    ],
  },
  insights: {
    title: "Insights",
    items: [
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "A/B Testing",
      "Pandas",
      "NumPy",
      "SQL",
      "Power BI",
      "Tableau",
    ],
  },
};

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string;
  image: string;
  demo?: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI-HA (AI Hiring Assistant)",
    category: "AI / Full Stack",
    description:
      "An AI-powered hiring assistant that automates technical interviews, evaluates candidates, and generates interview insights.",
    tech: "Next.js, TypeScript, Gemini AI, Vercel AI SDK, TailwindCSS",
    image: "/images/ai-ha.png",
    demo: "https://theaiha.com/",
    github: "https://github.com/Aayush-ujjwal/AI-HA",
  },
  {
    id: "2",
    title: "Talent Scout",
    category: "AI / NLP",
    description:
      "An AI system that conducts interviews using NLP.",
    tech: "Python, NLP, OpenAI/Gemini API",
    image: "/images/talent-scout.png",
    demo: "https://talent-scout-hiring-assistant-ten.vercel.app/",
    github: "https://github.com/Aayush-ujjwal/TS-Interviewer",
  },
  {
    id: "3",
    title: "Fake News Detection System",
    category: "ML / NLP",
    description:
      "Machine learning model that detects fake news articles using NLP and classification algorithms.",
    tech: "Python, Scikit-learn, NLP",
    image: "/images/fake-news.png",
    github: "https://github.com/Aayush-ujjwal/Fake-news-detection",
  },
  {
    id: "4",
    title: "Smart Strategies for EV Battery Performance",
    category: "Battery Optimization Research",
    description:
      "Developed strategies to enhance electric vehicle battery performance through data analysis and machine learning algorithms.",
    tech: "Python • Data Analysis • Machine Learning • Predictive Modeling",
    image: "/images/ev-battery.png",
    github:
      "https://github.com/Aayush-ujjwal/Smart-Strategies-for-Enhanced-Electric-Vehicle-Battery-Performance",
  },
];

export const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "Devout Growth Media Pvt. Ltd.",
    year: "Jan 2025 – Feb 2026",
    description:
      "Python • Machine Learning • Pandas • NumPy • SQL • Power BI • Data Visualization • ETL Pipelines",
  },
  {
    role: "AI Engineer Intern",
    company: "Devout Growth Media Pvt. Ltd.",
    year: "Jul 2024 – Jan 2025",
    description:
      "Python • Machine Learning • Pandas • NumPy • SQL • Power BI • Data Visualization • ETL Pipelines",
  },
];

export const EDUCATION = [
  {
    degree: "MS in Data Science",
    institution: "Vellore Institute of Technology",
    year: "2026 – 2028 (expected)",
    description:
      "Pursuing advanced studies in data science, machine learning, and analytics. Focus on research and industry-ready applications.",
  },
  {
    degree: "BCA in AI and Data Science",
    institution: "K R Mangalam University",
    year: "2024",
    description: "Graduated with focus on AI and Data Science.",
  },
];

export const COURSES = [
  "Python for Data Science",
  "Power BI",
  "SQL for Data Science",
  "Data Science Foundations",
  "AI in Digital Marketing",
  "Android Development",
];

export const CERTIFICATIONS = [
  {
    id: "1",
    name: "R Programming for Data Science",
    link: "https://verify.netcredential.com/roy8g3LxbW",
  },
  {
    id: "2",
    name: "Deep Learning & Neural Networks",
    link: "https://verify.netcredential.com/roy89njcvt",
  },
  {
    id: "3",
    name: "ML & Pattern Recognition",
    link: "https://verify.netcredential.com/roy84TipnN",
  },
  {
    id: "4",
    name: "Data Visualization & Story Telling",
    link: "https://verify.netcredential.com/roy8i70tTs",
  },
  {
    id: "5",
    name: "View All Certificates",
    link: "https://drive.google.com/drive/folders/1nDDM-swwuDQXdnq83o_7fx2jqP5aHwWl",
  },
];

export const CONTACT = {
  email: "aayushujjwal@gmail.com",
  github: "https://github.com/Aayush-ujjwal",
  linkedin: "https://www.linkedin.com/in/aayush-ujjwal/",
  instagram: "https://instagram.com/aayush.ujjwal",
  resumeUrl: "/resume.pdf",
};
