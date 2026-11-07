import { Project, SkillItem, AchievementItem, JourneyStep } from '../types';

export const personalInfo = {
  name: "M. Santhosh",
  role: "Aspiring AI Engineer | Future Tech Founder & Programming Specialist",
  collegeYear: "First-Year Student",
  degree: "B.Tech – Computer Science Engineering",
  careerGoal: "Driven by two defining aspirations: becoming an elite programming expert with deep algorithmic and architectural mastery, and launching my own innovative AI and technology startup to solve real-world problems.",
  programmingGoal: "Mastering software architecture, algorithmic design, Python systems, and scalable AI infrastructure.",
  startupGoal: "Founding an impactful technology startup building intelligent AI tools, autonomous workflow ecosystems, and practical software.",
  bio: "M. Santhosh is a first-year B.Tech Computer Science Engineering student driven by a dual ambition: mastering programming to expert depth and launching his own technology startup. He bridges computational fundamentals and practical execution by building Python tools, Generative AI applications, and autonomous workflow pipelines.",
  heroGreeting: "Hi, I'm M. Santhosh",
  heroSubtitle: "First-Year B.Tech CSE • Aspiring Programming Expert & Future Startup Founder",
  heroIntro: "I’m a first-year Computer Science Engineering student on a mission to master software engineering and launch my own tech startup. I learn by building practical solutions—from Python algorithms to deployed AI platforms like SkillPath AI and automated n8n workflows.",
  motto: "Master Programming → Build Scalable Software → Launch My Own Startup",
  emailPlaceholder: "mokanasanthosh6@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/santhosh-mokana-000023418/",
    github: "https://github.com/mokanasanthosh6-ai",
  },
  aboutPillars: [
    { label: "Programming Mastery", desc: "Pursuing deep technical expertise in algorithmic problem solving, Python architecture, and systems engineering." },
    { label: "Startup Vision", desc: "Fostering an entrepreneurial mindset to identify market voids, prototype MVPs, and launch venture-scale AI products." },
    { label: "Building", desc: "Translating theoretical logic into working, interactive web applications and robust software tools." },
    { label: "Automation", desc: "Engineering automated multi-node pipelines using n8n to connect AI models with real-world tasks." },
    { label: "Artificial Intelligence", desc: "Studying foundational principles of GenAI, LLMs, prompt pipelines, and smart applications." },
    { label: "Continuous Improvement", desc: "Reviewing code, refactoring beginner projects, and expanding knowledge daily." }
  ]
};

export const skillsData: SkillItem[] = [
  {
    name: "Python Programming",
    category: "Programming",
    levelDescription: "Core programming fundamentals, syntax, control structures, and CLI utility scripting.",
    iconName: "Terminal",
    topics: ["Variables & Datatypes", "Loops & Conditionals", "Functions & Modules", "Exception Handling"]
  },
  {
    name: "Workflow Automation (n8n)",
    category: "AI & Learning",
    levelDescription: "Building automated multi-step node workflows in n8n connecting RSS feeds, LLMs, and email dispatch.",
    iconName: "Workflow",
    topics: ["n8n Node Workflows", "Scheduled Triggers (Cron)", "LLM Pipeline Integration", "Email/Webhook Automations"]
  },
  {
    name: "Generative AI & LLMs",
    category: "AI & Learning",
    levelDescription: "Exploring prompt engineering, LLM capabilities, structured output formatting, and AI roadmaps.",
    iconName: "Sparkles",
    topics: ["Prompt Engineering", "LLM Summarization", "Structured Outputs", "AI Roadmap Generation"]
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    levelDescription: "Foundational markup, responsive layouts, flexbox, and modern UI styling.",
    iconName: "FileCode2",
    topics: ["Semantic Markup", "Responsive Design", "Flexbox & Grid", "Modern UI Styles"]
  },
  {
    name: "Basic Web Development",
    category: "Frontend",
    levelDescription: "Integrating frontend foundations into clean, interactive, and responsive web applications.",
    iconName: "Layout",
    topics: ["Interactive Pages", "UI Layout", "Responsive Design", "Client-Side Logic"]
  },
  {
    name: "AI Project Development",
    category: "AI & Learning",
    levelDescription: "Applying AI principles and beginner tools to small, functional utility projects like SkillPath AI.",
    iconName: "Cpu",
    topics: ["SkillPath AI Architecture", "Automated Workflows", "Prompt Pipelines", "Next-gen AI Ideas"]
  }
];

export const projectsData: Project[] = [
  {
    id: "python-vote-eligibility",
    title: "Voting Eligibility Checker with Python",
    category: "python",
    description: "A Python application that verifies citizen voting eligibility (age ≥ 18) using conditional logic (if/elif/else), calculates remaining years for underage citizens, and implements robust exception handling for invalid inputs.",
    technologies: ["Python 3", "Conditional Logic", "Exception Handling", "CLI Terminal"],
    demoType: "interactive-vote-python",
    githubUrl: "https://github.com/mokanasanthosh6-ai",
    highlights: [
      "Conditional evaluation enforcing legal democratic voting threshold (≥ 18 years)",
      "Automatic countdown calculation displaying exact remaining years for minors",
      "Robust exception handling preventing invalid negative numbers or non-numeric inputs",
      "Interactive Python terminal simulation with preset test cases and automated verification"
    ],
    codeSnippet: {
      python: `# =======================================================
# Voting Eligibility Checker (Python 3)
# Author: M. Santhosh (1st Year B.Tech CSE)
# Description: Demonstrates conditional branching, input
# validation, and structured terminal output.
# =======================================================

def check_voting_eligibility(age: int) -> dict:
    """
    Evaluates whether a citizen is eligible to vote in elections.
    Legal minimum voting age is 18 years.
    """
    VOTING_AGE = 18

    # Input validation & sanity check
    if not isinstance(age, (int, float)) or age <= 0 or age > 125:
        return {
            "eligible": False,
            "status": "Invalid Input",
            "message": "Error: Age must be a positive number between 1 and 125.",
            "code": 400
        }

    # Conditional Branching
    if age >= VOTING_AGE:
        years_registered = age - VOTING_AGE
        return {
            "eligible": True,
            "status": "Eligible to Vote",
            "message": f"Eligible! At age {age}, you have the legal democratic right to vote.",
            "years_surplus": years_registered,
            "code": 200
        }
    else:
        years_left = VOTING_AGE - age
        plural = "year" if years_left == 1 else "years"
        return {
            "eligible": False,
            "status": "Not Yet Eligible",
            "message": f"Not eligible. At age {age}, you must wait {years_left} more {plural} to vote.",
            "years_left": years_left,
            "code": 200
        }


def main():
    print("==========================================")
    print("   CITIZEN VOTING ELIGIBILITY CHECKER     ")
    print("==========================================")
    
    try:
        user_input = input("Enter citizen age: ").strip()
        age = int(user_input)
        result = check_voting_eligibility(age)
        
        print("\\n[RESULT]")
        print(f"Status  : {result['status']}")
        print(f"Message : {result['message']}")
    except ValueError:
        print("\\n[ERROR] Invalid input! Please enter a valid whole number.")

if __name__ == "__main__":
    main()`
    }
  },
  {
    id: "skillpath-ai",
    title: "SkillPath AI",
    category: "ai",
    description: "An AI-powered learning roadmap and skill pathway generator that formulates personalized, step-by-step career tracks, curated technical milestones, and recommended practice projects for aspiring tech learners and developers.",
    technologies: ["Generative AI", "React", "TypeScript", "Tailwind CSS", "Lovable"],
    demoType: "skillpath-ai",
    liveUrl: "https://skillpathai18.lovable.app",
    githubUrl: "https://github.com/mokanasanthosh6-ai",
    highlights: [
      "Live web application deployed and accessible at skillpathai18.lovable.app",
      "Generates tailored milestone roadmaps for roles like AI Engineer, Full-Stack, & Data Science",
      "Sequential learning phases with clear competency goals and hands-on project ideas",
      "Clean, modern interactive UI with customized track selection and milestone preview"
    ],
    codeSnippet: {
      prompt: `// SkillPath AI - Prompt Architecture
{
  "system_instruction": "You are SkillPath AI, an expert engineering mentor and career architect. Given a target role and user experience level, generate a structured, non-redundant, step-by-step learning roadmap divided into progressive stages.",
  "user_parameters": {
    "target_role": "AI Engineer",
    "current_level": "First-Year Computer Science Student",
    "weekly_hours": 10,
    "focus": "Hands-on projects, Python, GenAI fundamentals, and prompt engineering"
  },
  "expected_output_format": "JSON array of phases containing title, duration_weeks, core_topics, key_tools, and milestone_project"
}`,
      json: `[
  {
    "phase": 1,
    "title": "Programming & Algorithmic Foundations",
    "duration": "Weeks 1-6",
    "topics": ["Python 3 Core", "Data Structures", "Control Flow", "Object-Oriented Basics"],
    "milestone_project": "Voting Eligibility & Student Performance CLI tools"
  },
  {
    "phase": 2,
    "title": "Generative AI & LLM Prompt Engineering",
    "duration": "Weeks 7-12",
    "topics": ["Few-shot Prompting", "Model Parameters", "Structured JSON Outputs", "API Integration"],
    "milestone_project": "SkillPath AI interactive career pathway generator"
  },
  {
    "phase": 3,
    "title": "Intelligent Automation & Agents",
    "duration": "Weeks 13-18",
    "topics": ["n8n Node Workflows", "Multi-source RSS Aggregation", "Automated Email Pipelines", "Webhook Triggers"],
    "milestone_project": "Autonomous AI News Summarizer to Email Digest"
  }
]`
    }
  },
  {
    id: "n8n-ai-news-summarizer",
    title: "AI News Summarizer Automation (n8n)",
    category: "automation",
    description: "An automated end-to-end workflow built in n8n that schedules daily RSS news ingestion from premier AI feeds, synthesizes top breakthroughs using an LLM prompt pipeline, and dispatches formatted email briefings directly to inboxes.",
    technologies: ["n8n", "Workflow Automation", "LLM Summarizer", "Email / SMTP", "RSS Feeds"],
    demoType: "n8n-automation",
    githubUrl: "https://github.com/mokanasanthosh6-ai",
    highlights: [
      "Autonomous 08:00 AM daily cron schedule trigger executing in an n8n workflow",
      "Multi-source RSS feed ingestion filtering for top AI and machine learning headlines",
      "LLM prompt pipeline distilling lengthy technical articles into 3 key actionable takeaways",
      "HTML-formatted automated email dispatch delivered directly to subscriber inboxes"
    ],
    codeSnippet: {
      json: `{
  "name": "Daily AI News Summarizer & Email Dispatch",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [{ "field": "cronExpression", "expression": "0 8 * * *" }]
        }
      },
      "name": "Daily 08:00 AM Schedule",
      "type": "n8n-nodes-base.cron",
      "typeVersion": 1,
      "position": [240, 300]
    },
    {
      "parameters": {
        "url": "https://feeds.feedburner.com/oreilly/radar/atom"
      },
      "name": "Fetch AI News RSS",
      "type": "n8n-nodes-base.rssFeedRead",
      "typeVersion": 1,
      "position": [460, 300]
    },
    {
      "parameters": {
        "conditions": {
          "string": [{ "value1": "={{$json.title}}", "operation": "notEmpty" }]
        }
      },
      "name": "Filter & Deduplicate",
      "type": "n8n-nodes-base.filter",
      "typeVersion": 1,
      "position": [680, 300]
    },
    {
      "parameters": {
        "model": "gpt-4o-mini",
        "prompt": "=Analyze and summarize the following AI headline and content into 3 clear, high-signal bullet points:\\nTitle: {{$json.title}}\\nSummary: {{$json.contentSnippet}}"
      },
      "name": "LLM AI Summarizer",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [900, 300]
    },
    {
      "parameters": {
        "toEmail": "subscriber@domain.com",
        "subject": "=🤖 Today's AI Digest: {{$json.title}}",
        "html": "=<div style='font-family:sans-serif;'><h2>Daily AI Digest</h2><p>{{$json.summary}}</p><hr/><small>Automated by Santhosh via n8n</small></div>"
      },
      "name": "Send Email Newsletter",
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 1,
      "position": [1120, 300]
    }
  ]
}`,
      prompt: `// n8n LLM Node Prompt
System: You are an executive AI researcher.
Input: Raw article RSS payload with title and excerpt.
Task:
1. Extract the core breakthrough or announcement.
2. Produce exactly 3 concise bullet points formatted with markdown.
3. Highlight the practical impact on software and AI engineering.
4. Output cleanly without conversational filler.`
    }
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "B.Tech CSE Academic Admission & Foundation",
    subtitle: "Computer Science Engineering",
    status: "completed",
    description: "Secured admission to B.Tech Computer Science Engineering, building a rigorous foundation in computational theory, algorithms, discrete mathematics, and software design.",
    iconName: "GraduationCap",
    tag: "Academic Foundation",
    metric: "B.Tech CSE Year 1"
  },
  {
    title: "Python Scripting & Core Web Foundations",
    subtitle: "Algorithmic & Markup Mastery",
    status: "completed",
    description: "Attained strong hands-on proficiency in Python 3 programming, conditional logic, modular functions, exception handling, and clean responsive HTML5 & CSS3 layout design.",
    iconName: "Code2",
    tag: "Technical Competence",
    metric: "Python 3 Core"
  },
  {
    title: "Autonomous Workflow Engineering in n8n",
    subtitle: "Automated AI News to Email Pipeline",
    status: "completed",
    description: "Engineered and launched an autonomous multi-node n8n workflow executing daily cron triggers, multi-source RSS feed ingestion, LLM summarization, and automated email newsletter delivery.",
    iconName: "Workflow",
    tag: "Automation Milestone",
    metric: "n8n Production Workflow"
  },
  {
    title: "Live Deployment of SkillPath AI",
    subtitle: "Deployed at skillpathai18.lovable.app",
    status: "completed",
    description: "Designed, developed, and deployed SkillPath AI—a live AI application that formulates personalized, step-by-step career tracks, curated milestones, and recommended projects for tech learners.",
    iconName: "Sparkles",
    tag: "Shipped Platform",
    metric: "Live Web App"
  },
  {
    title: "Programming Expertise & Systems Mastery",
    subtitle: "Elite Technical Craftsmanship",
    status: "in-progress",
    description: "Deepening algorithmic problem-solving, advanced Python systems engineering, clean software architecture, and AI model orchestration to achieve true programming expertise.",
    iconName: "Code2",
    tag: "Mastery Target",
    metric: "Programming Expert"
  },
  {
    title: "Founding My Own AI & Tech Startup",
    subtitle: "Entrepreneurial Vision & Scalable Products",
    status: "in-progress",
    description: "Actively designing, validating, and building proprietary intelligent software products with the ambitious goal of launching my own high-impact technology startup.",
    iconName: "Rocket",
    tag: "North Star Goal",
    metric: "Tech Startup Founder"
  }
];

export const journeyTimeline: JourneyStep[] = achievementsData;
