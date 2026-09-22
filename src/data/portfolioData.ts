import { Project, SkillItem, JourneyStep } from '../types';

export const personalInfo = {
  name: "M. Santhosh",
  role: "Aspiring AI Engineer | B.Tech Computer Science Student",
  collegeYear: "First-Year Student",
  degree: "B.Tech – Computer Science Engineering",
  careerGoal: "Aspiring AI Engineer interested in Artificial Intelligence, Generative AI, and software development.",
  bio: "M. Santhosh is a first-year B.Tech Computer Science Engineering student beginning his journey toward becoming an AI Engineer. He is currently building a foundation in web development, programming, and Generative AI by creating small practical projects.",
  heroGreeting: "Hi, I'm M. Santhosh",
  heroSubtitle: "First-Year B.Tech CSE Student & Aspiring AI Engineer",
  heroIntro: "I’m a first-year Computer Science Engineering student exploring Artificial Intelligence, Generative AI, and web development. I enjoy learning by building practical projects and continuously improving my technical skills.",
  motto: "Learning → Building → Improving → Becoming an AI Engineer",
  emailPlaceholder: "mokanasanthosh6@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/santhosh-mokana-000023418/",
    github: "https://github.com/mokanasanthosh6-ai",
  },
  aboutPillars: [
    { label: "Learning", desc: "Absorbing core computer science concepts and new AI paradigms every day." },
    { label: "Building", desc: "Translating theoretical logic into working, interactive web applications." },
    { label: "Experimenting", desc: "Testing prompts, algorithms, and simple AI tools to solve real-world problems." },
    { label: "Problem Solving", desc: "Developing analytical algorithmic thinking through Python and JavaScript." },
    { label: "Artificial Intelligence", desc: "Studying foundational principles of GenAI, LLMs, and neural concepts." },
    { label: "Continuous Improvement", desc: "Reviewing code, refactoring beginner projects, and expanding knowledge daily." }
  ]
};

export const skillsData: SkillItem[] = [
  {
    name: "HTML",
    category: "Frontend",
    levelDescription: "Foundational markup, semantic page structuring, and form handling.",
    iconName: "FileCode2",
    topics: ["Semantic tags", "Document structure", "Forms & inputs", "Audio/visual elements"]
  },
  {
    name: "CSS",
    category: "Frontend",
    levelDescription: "Styling basics, responsive layouts, flexbox, and modern color design.",
    iconName: "Palette",
    topics: ["Flexbox basics", "Box model", "Responsive design", "CSS variables"]
  },
  {
    name: "JavaScript",
    category: "Frontend",
    levelDescription: "Core DOM manipulation, event listeners, functions, and control flow.",
    iconName: "Code",
    topics: ["DOM selection", "Event handling", "Conditional logic", "Basic calculations"]
  },
  {
    name: "Basic Web Development",
    category: "Frontend",
    levelDescription: "Integrating HTML, CSS, and JS together into working responsive websites.",
    iconName: "Layout",
    topics: ["Interactive pages", "UI layout", "Client-side logic", "Mobile responsiveness"]
  },
  {
    name: "Python fundamentals",
    category: "Programming",
    levelDescription: "Core programming fundamentals, syntax, control structures, and basic scripting.",
    iconName: "Terminal",
    topics: ["Variables & datatypes", "Loops & conditions", "Functions & modules", "List operations"]
  },
  {
    name: "Basic Generative AI",
    category: "AI & Learning",
    levelDescription: "Exploring prompt engineering, LLM capabilities, and AI-assisted workflows.",
    iconName: "Sparkles",
    topics: ["Prompt structure", "LLM understanding", "AI tool exploration", "Practical use cases"]
  },
  {
    name: "AI Project Development",
    category: "AI & Learning",
    levelDescription: "Applying AI principles and beginner tools to small, functional utility projects.",
    iconName: "Cpu",
    topics: ["AI concept integration", "Structured experiments", "Learning workflows", "Next-gen ideas"]
  }
];

export const projectsData: Project[] = [
  {
    id: "grade-calculator",
    title: "Student Grade Calculator",
    category: "web",
    description: "A simple web-based application that calculates a student's grade based on their marks. The project demonstrates basic programming logic, calculations, and user interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoType: "interactive-grade",
    githubUrl: "https://github.com/mokanasanthosh6-ai",
    highlights: [
      "Dynamic percentage computation across multiple subjects",
      "Conditional letter grade assignment (A+, A, B, C, Fail)",
      "Instant interactive feedback with pass/fail evaluation",
      "Clean input validation preventing negative or out-of-range marks"
    ],
    codeSnippet: {
      html: `<!-- Student Grade Calculator markup -->
<div class="calculator-card">
  <h2>Student Grade Calculator</h2>
  <div class="input-group">
    <label>Subject 1 Marks:</label>
    <input type="number" id="sub1" min="0" max="100" placeholder="0-100">
  </div>
  <div class="input-group">
    <label>Subject 2 Marks:</label>
    <input type="number" id="sub2" min="0" max="100" placeholder="0-100">
  </div>
  <div class="input-group">
    <label>Subject 3 Marks:</label>
    <input type="number" id="sub3" min="0" max="100" placeholder="0-100">
  </div>
  <button id="calcBtn" onclick="calculateGrade()">Calculate Grade</button>
  <div id="result" class="result-box"></div>
</div>`,
      js: `// Basic grade calculation logic
function calculateGrade() {
  const m1 = parseFloat(document.getElementById('sub1').value) || 0;
  const m2 = parseFloat(document.getElementById('sub2').value) || 0;
  const m3 = parseFloat(document.getElementById('sub3').value) || 0;

  const total = m1 + m2 + m3;
  const percentage = (total / 300) * 100;
  let grade = '';

  if (percentage >= 90) grade = 'A+ (Distinction)';
  else if (percentage >= 80) grade = 'A (Excellent)';
  else if (percentage >= 70) grade = 'B (Good)';
  else if (percentage >= 60) grade = 'C (Satisfactory)';
  else if (percentage >= 40) grade = 'Pass';
  else grade = 'Fail (Need Improvement)';

  document.getElementById('result').innerText = 
    \`Total: \${total}/300 | Percentage: \${percentage.toFixed(1)}% | Grade: \${grade}\`;
}`,
      css: `.calculator-card {
  background: #111827;
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
}
.input-group { margin-bottom: 12px; }
input { width: 100%; padding: 8px; border-radius: 6px; }
button { background: #06b6d4; color: #000; font-weight: bold; padding: 10px 16px; border-radius: 6px; }`
    }
  },
  {
    id: "voting-calculator",
    title: "Voting Eligibility Calculator",
    category: "web",
    description: "A simple application that checks whether a user is eligible to vote based on their age. The project demonstrates conditional logic and basic JavaScript programming.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoType: "interactive-vote",
    githubUrl: "https://github.com/mokanasanthosh6-ai",
    highlights: [
      "Instant age comparison against the legal voting threshold (18+)",
      "Calculation of remaining years/months when under 18",
      "Dynamic visual color coding (Eligible in green, Not Eligible in amber)",
      "Demonstrates fundamental if/else branching and DOM manipulation"
    ],
    codeSnippet: {
      html: `<!-- Voting Eligibility Calculator -->
<div class="eligibility-card">
  <h2>Voting Eligibility Checker</h2>
  <label for="userAge">Enter your Age:</label>
  <input type="number" id="userAge" min="1" max="120" placeholder="e.g. 19">
  <button onclick="checkEligibility()">Check Eligibility</button>
  <div id="statusOutput"></div>
</div>`,
      js: `// Conditional eligibility check logic
function checkEligibility() {
  const ageInput = document.getElementById('userAge').value;
  const age = parseInt(ageInput, 10);
  const output = document.getElementById('statusOutput');

  if (isNaN(age) || age <= 0) {
    output.innerText = 'Please enter a valid age!';
    return;
  }

  if (age >= 18) {
    output.innerText = \`🎉 Eligible! At age \${age}, you have the legal right to vote.\`;
    output.className = 'eligible';
  } else {
    const yearsLeft = 18 - age;
    output.innerText = \`⏳ Not yet eligible. You will be eligible in \${yearsLeft} year(s).\`;
    output.className = 'ineligible';
  }
}`,
      css: `.eligible { color: #10b981; font-weight: 600; margin-top: 10px; }
.ineligible { color: #f59e0b; font-weight: 600; margin-top: 10px; }`
    }
  },
  {
    id: "generative-ai-projects",
    title: "Generative AI Projects",
    category: "ai",
    description: "A collection of beginner-level Generative AI projects created while learning how AI tools and concepts can be applied to practical problems. Flexible architecture designed to host upcoming experiments.",
    technologies: ["Python", "Generative AI", "Prompt Engineering", "Basic APIs"],
    demoType: "ai-showcase",
    githubUrl: "https://github.com/mokanasanthosh6-ai",
    highlights: [
      "Prompt design and structured response formatting experiments",
      "Small study scripts exploring generative text and conceptual summaries",
      "Learning workflow integration: connecting basic code to AI capabilities",
      "Open roadmap: planned additions for multimodal demos and local small models"
    ]
  }
];

export const journeyTimeline: JourneyStep[] = [
  {
    title: "Started B.Tech CSE",
    subtitle: "The Foundation",
    status: "completed",
    description: "Began first-year Computer Science Engineering studies, diving into basic computational thinking, mathematics, and core concepts.",
    iconName: "GraduationCap",
    tag: "Milestone 1"
  },
  {
    title: "Learned basic web development",
    subtitle: "Frontend Fundamentals",
    status: "completed",
    description: "Mastered semantic HTML5 markup, responsive CSS styling, and fundamental JavaScript DOM manipulation and event scripting.",
    iconName: "Code2",
    tag: "Milestone 2"
  },
  {
    title: "Started exploring Generative AI",
    subtitle: "Expanding Horizons",
    status: "completed",
    description: "Investigated how Large Language Models, prompt crafting, and AI-assisted workflows function and how they can be used for software solutions.",
    iconName: "Sparkles",
    tag: "Milestone 3"
  },
  {
    title: "Built beginner projects",
    subtitle: "Hands-on Practice",
    status: "completed",
    description: "Created practical utility applications like the Student Grade Calculator and Voting Eligibility Checker, solidifying conditional logic.",
    iconName: "FolderGit2",
    tag: "Milestone 4"
  },
  {
    title: "Currently working toward becoming an AI Engineer",
    subtitle: "Current Focus & Future Goal",
    status: "in-progress",
    description: "Deepening Python programming, exploring machine learning fundamentals, and actively building beginner GenAI applications.",
    iconName: "Bot",
    tag: "Active Mission"
  }
];
