// src/models/data.js (Updated with your CV)
export const personalInfo = {
  name: "Soumyadeep Maiti",
  title: "Software Engineer | AI & Cloud enthusiast",
  email: "info.soumya23@gmail.com",
  phone: "+91 9475510897",
  location: "Pune, India",
  bio: "Software Engineer with 2 years of experience specializing in AI-powered chatbots, cloud-native solutions, and full-stack development using Node.js, JavaScript, and Oracle Cloud Infrastructure (OCI).",
  github: "https://github.com/StarkOp23",
  linkedin: "https://linkedin.com/in/soumyadeep-m-bb089a131/",
  resume: "https://drive.google.com/file/d/10L0iWuLlIjeCEfwq8nSZpwITG3xPq1lL/view?usp=drivesdk",
  instagram:"https://www.instagram.com/stark__here/",
  facebook:"https://www.facebook.com/sanju.maiti.23"
}

export const skillsData = {
  frontend: [
    { name: "HTML", level: 85, icon: "🔧" },
    { name: "CSS", level: 80, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 90, icon: "📜" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Express.js", level: 85, icon: "🚂" },
  ],
  cloud: [
    { name: "Oracle Cloud Infrastructure", level: 85, icon: "🏢" },
    { name: "AWS", level: 75, icon: "☁️" },
  ],
  database: [
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "MongoDB Atlas", level: 80, icon: "📊" },
  ],
  ai: [
    { name: "Generative AI", level: 85, icon: "🤖" },
    { name: "LLMs", level: 80, icon: "🧠" },
    { name: "RAG", level: 85, icon: "🔍" },
    { name: "Conversational AI", level: 90, icon: "💬" },
    { name: "Amazon Q", level: 70, icon: "⚡" },
    { name: "Amazon Bedrock", level: 70, icon: "🏔️" },
  ],
  enterprise: [
    { name: "Oracle Digital Assistant", level: 90, icon: "🤖" },
    { name: "Oracle HCM", level: 80, icon: "👥" },
    { name: "Fusion HCM REST APIs", level: 85, icon: "🔗" },
  ],
  tools: [
    { name: "Postman", level: 85, icon: "📮" },
    { name: "GitHub", level: 90, icon: "🐙" },
    { name: "REST API Design", level: 85, icon: "🔌" },
  ]
}

export const experienceData = [
  {
    id: 1,
    company: "OMFYS Technologies India Pvt. Ltd.",
    position: "Software Engineer",
    period: "December 2023 - Present",
    location: "Pune, India",
    description: [
      "Delivered enterprise-grade Conversational AI solutions for 5+ banking and MNC clients, improving customer engagement by 30% and response accuracy by 25%",
      "Designed and implemented GenAI-driven conversational workflows using LLMs and RAG pipelines within Oracle Digital Assistant",
      // "Led mobile app integration projects for iOS applications, implementing Oracle Digital Assistant using secure REST APIs and OAuth 2.0",
      "Developed and maintained 10+ scalable backend microservices using Node.js and Express.js",
      // "Built robust HCM conversational experiences within Oracle Digital Assistant, utilizing Fusion HCM REST APIs"
    ],
    tech: ["Oracle Digital Assistant", "Node.js", "GenAI", "REST APIs", "OCI", "AWS"]
  }
]

export const educationData = [
  {
    id: 1,
    institution: "Maharshi Dayanand University, Rohtak",
    degree: "B.Tech. in Computer Science And Engineering",
    period: "2018 - 2022",
    achievements: ["CGPA: 8.2/10.0", "Specialization in Software Engineering"]
  }
]

export const certificationsData = [
  {
    id: 1,
    name: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    date: "2024"
  },
  {
    id: 2,
    name: "Oracle Digital Assistant Specialist",
    issuer: "Oracle",
    date: "2023"
  },
  {
    id: 3,
    name: "Oracle Digital Assistant Platform 2022 Solution Engineer Specialist",
    issuer: "Oracle",
    date: "2023"
  }
]

export const testimonialsData = [
  {
    id: 1,
    name: "Saket Khopkar",
    role: "Software Engineer",
    company: "OMFYS Technologies",
    content: "Soumyadeep was one of the first person whom I have given Knowledge Transfer about Oracle Digital Assistant. Initially a bit hesitant as this was completely new technology to him, he showed great hunger and willingness to explore the technology. With immense determination to explore and new technologies also bringing a vibe to every team he works with, he is a superb person to have in team.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/soumyadeep-m-bb089a131?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    id: 2,
    name: "Prachi Shimpi",
    role: "Project Co-ordinator",
    company: "OMFYS Technologies",
    content: "I had the pleasure of managing Soumyadeep for one year at OMFYS Technologies, where he worked as a Junior Software Engineer on our development team. During that time, he consistently impressed me with his creativity, dedication, and ability to deliver high-quality work under pressure.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/soumyadeep-m-bb089a131?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  {
    id: 3,
    name: "Pramod Shiraganvi",
    role: "Project Manager",
    company: "OMFYS Technologies",
    content: "I had the pleasure of working with Soumyadeep Maiti on projects involving UI/UX design as well as LLM and RAG-based policy implementations. He brings a strong combination of design sensibility and technical understanding to AI-driven solutions.Soumyadeep has a keen eye for user experience and creates intuitive, clean, and effective interfaces for complex AI applications. In addition, he has a solid understanding of LLM workflows and RAG-based policy implementations, enabling him to design solutions that are not only visually appealing but also functionally robust.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/soumyadeep-m-bb089a131?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  }
]
export const skillData = {
  "Programming Languages": [
    {
      name: "JavaScript (ES6+)",
      icon: "https://imgs.search.brave.com/HXkaNsnLI-r5spZH4X9Ek5wM4yOOBK8E11MuTGbBeCY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvamF2YXNj/cmlwdC13ZWItdGVj/aG5vbG9neS1zaGll/bGQtc2l0ZS0yNjBu/dy0xMTg2MDU0NjYzLmpwZw"
    }
  ],

  "Frontend Technologies": [
    {
      name: "HTML",
      icon: "https://imgs.search.brave.com/7PcGWhK9MgfBjgHR8t792VPWIZK8Uy8gn8qm0TPAmC8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9h/cmNhZGUvMTIwMC9o/dG1sLTUuanBn"
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/?size=96&id=21278&format=png"
    }
  ],

  "Backend Technologies": [
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=96&id=54087&format=png"
    },
    {
      name: "Express.js",
      icon: "https://img.icons8.com/?size=128&id=2ZOaTclOqD4q&format=png"
    }
  ],

  "API Development": [
    {
      name: "REST API Design & Integration",
      icon: "https://img.icons8.com/?size=128&id=55497&format=png"
    }
  ],

  Databases: [
    {
      name: "MongoDB (Atlas, Compass)",
      icon: "https://img.icons8.com/?size=96&id=74402&format=png"
    }
  ],

  "Cloud Platforms": [
    {
      name: "Oracle Cloud Infrastructure (OCI)",
      icon: "https://viniciusdba.com.br/wp-content/uploads/2018/11/oci_logo.jpg"
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/?size=96&id=33039&format=png"
    }
  ],

  "AI Technologies": [
    {
      name: "Generative AI",
      icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png"
    },
    {
      name: "Large Language Models (LLMs)",
      icon: "https://img.icons8.com/fluency/96/brain.png"
    },
    {
      name: "RAG (Retrieval-Augmented Generation)",
      icon: "https://img.icons8.com/fluency/96/database.png"
    },
    {
      name: "Conversational AI",
      icon: "https://img.icons8.com/fluency/96/chatbot.png"
    },
    {
      name: "Amazon Q",
      icon: "https://brandlogos.net/wp-content/uploads/2025/05/amazon_q-logo_brandlogos.net_winaj-512x550.png"
    },
    {
      name: "Amazon Bedrock",
      icon: "https://dw2q8mfb3dci9.cloudfront.net/pub/media/magefan_blog/download_1_.jpeg"
    }
  ],

  "Enterprise Platforms": [
    {
      name: "Oracle Digital Assistant (ODA)",
      icon: "https://miro.medium.com/0*Jnr8v3xWycsdYoVF.png"
    },
    {
      name: "Oracle HCM",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbEjCqNA-BdkNHKGnGIDyVraSmFaDbf19Fw&s"
    }
  ],

  Tools: [
    {
      name: "Postman",
      icon: "https://img.icons8.com/color/96/postman-api.png"
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/ios-glyphs/96/github.png"
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/?size=96&id=22813&format=png"
    }
  ]
};
