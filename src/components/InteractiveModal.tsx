import { useState } from 'react';
import { 
  X, 
  Play, 
  Code2, 
  Check, 
  Copy, 
  Sparkles, 
  Terminal, 
  RefreshCw, 
  ExternalLink,
  Workflow, 
  Mail, 
  CheckCircle2, 
  Layers,
  ShieldCheck,
  AlertCircle,
  Clock,
  Rss
} from 'lucide-react';
import { Project } from '../types';

interface InteractiveModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function InteractiveModal({ project, onClose }: InteractiveModalProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [copied, setCopied] = useState(false);

  // --- Python Vote Checker State ---
  const [pythonAgeInput, setPythonAgeInput] = useState('19');
  const [pythonTerminalOutput, setPythonTerminalOutput] = useState<string | null>(null);
  const [pythonIsRunning, setPythonIsRunning] = useState(false);
  const [pythonStatus, setPythonStatus] = useState<'idle' | 'eligible' | 'ineligible' | 'error'>('idle');
  const [pythonTestPassed, setPythonTestPassed] = useState<boolean | null>(null);

  // --- SkillPath AI State ---
  const [selectedRole, setSelectedRole] = useState<'AI Engineer' | 'Full-Stack Developer' | 'Generative AI Specialist' | 'Data Scientist'>('AI Engineer');
  const [experienceLevel, setExperienceLevel] = useState<'Beginner / 1st Year' | 'Intermediate'>('Beginner / 1st Year');
  const [skillPathGenerating, setSkillPathGenerating] = useState(false);
  const [skillPathRoadmap, setSkillPathRoadmap] = useState<{
    phase: string;
    weeks: string;
    skills: string[];
    project: string;
  }[]>([
    {
      phase: "Phase 1: Computational & Python Foundations",
      weeks: "Weeks 1 - 6",
      skills: ["Python 3 Core Syntax", "Conditionals & Loops", "Data Structures", "Algorithmic Thinking"],
      project: "Voting Eligibility & Student Performance CLI tools"
    },
    {
      phase: "Phase 2: Generative AI & Prompt Engineering",
      weeks: "Weeks 7 - 12",
      skills: ["Prompt Structuring", "LLM APIs", "Structured JSON Outputs", "Web Integration"],
      project: "SkillPath AI - Personalized Career Pathway Generator"
    },
    {
      phase: "Phase 3: Autonomous Workflow Automations",
      weeks: "Weeks 13 - 18",
      skills: ["n8n Node Orchestration", "RSS Feeds", "Automated Email Pipelines", "Webhook Triggers"],
      project: "Autonomous AI News Summarizer to Email Digest"
    }
  ]);

  // --- n8n Workflow State ---
  const [workflowRunning, setWorkflowRunning] = useState(false);
  const [workflowStep, setWorkflowStep] = useState<number>(0);
  const [workflowCompleted, setWorkflowCompleted] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('mokanasanthosh6@gmail.com');

  if (!project) return null;

  // Handler: Run Python Code
  const handleRunPythonScript = (ageVal?: string) => {
    const rawVal = ageVal !== undefined ? ageVal : pythonAgeInput;
    setPythonIsRunning(true);
    setPythonTestPassed(null);

    setTimeout(() => {
      const parsedAge = parseInt(rawVal.trim(), 10);

      if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge > 125) {
        setPythonStatus('error');
        setPythonTerminalOutput(
`$ python3 vote_checker.py
[EXECUTION RUNNER] Initializing Python 3.11 runtime...
Traceback (most recent call last):
  File "vote_checker.py", line 42, in <module>
    validate_age("${rawVal}")
ValueError: InvalidAgeError: Age must be a positive integer between 1 and 125. (Received: "${rawVal}")
[Process exited with return code 1]`
        );
      } else if (parsedAge >= 18) {
        setPythonStatus('eligible');
        const surplus = parsedAge - 18;
        setPythonTerminalOutput(
`$ python3 vote_checker.py
[EXECUTION RUNNER] Initializing Python 3.11 runtime...
--------------------------------------------------
   DEMOCRATIC CITIZEN VOTING ELIGIBILITY CHECKER
--------------------------------------------------
>>> Input parameter 'age' = ${parsedAge}
>>> Threshold check: ${parsedAge} >= 18 -> True
>>> Result Code: 200 [ELIGIBLE]

STATUS  : Eligible to Vote (Verified)
DETAILS : At ${parsedAge} years old, citizen meets all legal age requirements.
SURPLUS : ${surplus === 0 ? 'First year of full voting eligibility!' : `${surplus} year(s) of voting franchise maturity.`}
RECORD  : Status registered in electoral verification database.
--------------------------------------------------
[Process exited with return code 0 (Success)]`
        );
      } else {
        setPythonStatus('ineligible');
        const remaining = 18 - parsedAge;
        const plural = remaining === 1 ? 'year' : 'years';
        setPythonTerminalOutput(
`$ python3 vote_checker.py
[EXECUTION RUNNER] Initializing Python 3.11 runtime...
--------------------------------------------------
   DEMOCRATIC CITIZEN VOTING ELIGIBILITY CHECKER
--------------------------------------------------
>>> Input parameter 'age' = ${parsedAge}
>>> Threshold check: ${parsedAge} >= 18 -> False
>>> Result Code: 200 [INELIGIBLE]

STATUS  : Not Yet Eligible to Vote.
DETAILS : Citizen is currently a minor (${parsedAge} years old).
COUNTDOWN: Exactly ${remaining} ${plural} remaining until age 18.
GUIDANCE : Citizen can pre-register during the upcoming election cycle.
--------------------------------------------------
[Process exited with return code 0 (Success)]`
        );
      }
      setPythonIsRunning(false);
    }, 300);
  };

  // Handler: Run Python Unit Test Suite
  const handleRunPythonTests = () => {
    setPythonIsRunning(true);
    setTimeout(() => {
      setPythonTestPassed(true);
      setPythonStatus('eligible');
      setPythonTerminalOutput(
`$ python3 -m unittest test_vote_checker.py -v
test_underage_boundary (test_vote_checker.TestVoting) ... ok (age=17 -> eligible=False, remaining=1)
test_exact_threshold (test_vote_checker.TestVoting) ... ok (age=18 -> eligible=True, surplus=0)
test_adult_citizen (test_vote_checker.TestVoting) ... ok (age=25 -> eligible=True, surplus=7)
test_senior_citizen (test_vote_checker.TestVoting) ... ok (age=72 -> eligible=True, surplus=54)
test_invalid_negative (test_vote_checker.TestVoting) ... ok (age=-5 -> ValueError caught)
test_invalid_zero (test_vote_checker.TestVoting) ... ok (age=0 -> ValueError caught)

----------------------------------------------------------------------
Ran 6 tests in 0.003s

OK (All 6 test assertions passed successfully!)`
      );
      setPythonIsRunning(false);
    }, 400);
  };

  // Handler: Generate SkillPath Roadmap
  const handleGenerateSkillPath = () => {
    setSkillPathGenerating(true);
    setTimeout(() => {
      if (selectedRole === 'AI Engineer') {
        setSkillPathRoadmap([
          {
            phase: "Phase 1: Python, Calculus & Data Structures",
            weeks: "Weeks 1 - 6",
            skills: ["Python 3 Core Syntax", "Numpy & Vector Math", "Algorithm Complexity", "Git & GitHub"],
            project: "Voting Eligibility Checker & CLI Numerical Utilities"
          },
          {
            phase: "Phase 2: Generative AI, LLMs & APIs",
            weeks: "Weeks 7 - 12",
            skills: ["Prompt Engineering", "OpenAI / Gemini SDKs", "RAG Architecture", "Vector Embeddings"],
            project: "SkillPath AI (Deployed on Lovable.app)"
          },
          {
            phase: "Phase 3: Autonomous Agents & Orchestrations",
            weeks: "Weeks 13 - 18",
            skills: ["n8n Node Workflows", "API Integrations", "Autonomous Agents", "Cloud Deployment"],
            project: "AI News Summarizer Automation to Email"
          }
        ]);
      } else if (selectedRole === 'Full-Stack Developer') {
        setSkillPathRoadmap([
          {
            phase: "Phase 1: Modern Frontend Core",
            weeks: "Weeks 1 - 5",
            skills: ["HTML5 / Modern CSS", "Tailwind CSS", "TypeScript & React", "State Management"],
            project: "Responsive Developer Portfolio & Interactive Tools"
          },
          {
            phase: "Phase 2: Backend APIs & Databases",
            weeks: "Weeks 6 - 11",
            skills: ["Node.js / Express", "RESTful APIs", "PostgreSQL / SQLite", "Authentication"],
            project: "Full-Stack Task & Career Progress Dashboard"
          },
          {
            phase: "Phase 3: AI Augmentation & Automation",
            weeks: "Weeks 12 - 16",
            skills: ["AI API Integrations", "n8n Webhook Automations", "Docker Basics", "Vercel / Cloud Run"],
            project: "SkillPath AI Live Deployment with Email Notifications"
          }
        ]);
      } else if (selectedRole === 'Generative AI Specialist') {
        setSkillPathRoadmap([
          {
            phase: "Phase 1: Foundation in LLMs & Prompting",
            weeks: "Weeks 1 - 5",
            skills: ["Zero-shot & Few-shot Prompting", "Chain-of-Thought", "Python Scripting", "System Prompts"],
            project: "Automated AI Concept & Logic Tutor"
          },
          {
            phase: "Phase 2: Multimodal & Application Development",
            weeks: "Weeks 6 - 11",
            skills: ["Function Calling", "Structured JSON Schemas", "UI Prototyping in Lovable/React", "Embeddings"],
            project: "SkillPath AI - Dynamic Learning Roadmap Engine"
          },
          {
            phase: "Phase 3: Autonomous Workflow Engineering",
            weeks: "Weeks 12 - 16",
            skills: ["n8n Automation Pipelines", "Scheduled Web Scrapers", "Automated Newsletter Dispatch", "LLM Evaluation"],
            project: "AI News Summarizer Automation to Email Pipeline"
          }
        ]);
      } else {
        setSkillPathRoadmap([
          {
            phase: "Phase 1: Python & Statistics",
            weeks: "Weeks 1 - 6",
            skills: ["Python for Data Analysis", "Pandas & Numpy", "Descriptive Statistics", "Data Cleaning"],
            project: "Electoral & Demographic Voting Analysis CLI"
          },
          {
            phase: "Phase 2: Machine Learning Fundamentals",
            weeks: "Weeks 7 - 12",
            skills: ["Scikit-Learn", "Regression & Classification", "Model Evaluation", "Feature Engineering"],
            project: "Skill Path Predictor Model"
          },
          {
            phase: "Phase 3: Automated Data Pipelines",
            weeks: "Weeks 13 - 18",
            skills: ["n8n Automated Data Fetching", "LLM Insights Generation", "Automated Reporting to Email"],
            project: "Daily AI & Market Data Digest Workflow"
          }
        ]);
      }
      setSkillPathGenerating(false);
    }, 400);
  };

  // Handler: Run n8n Workflow Simulation
  const handleRunN8nWorkflow = () => {
    setWorkflowRunning(true);
    setWorkflowCompleted(false);
    setWorkflowStep(1);

    setTimeout(() => {
      setWorkflowStep(2); // Fetching RSS
      setTimeout(() => {
        setWorkflowStep(3); // Filter & Deduplicate
        setTimeout(() => {
          setWorkflowStep(4); // LLM Summarizer
          setTimeout(() => {
            setWorkflowStep(5); // Send Email
            setWorkflowRunning(false);
            setWorkflowCompleted(true);
          }, 600);
        }, 600);
      }, 500);
    }, 500);
  };

  const handleCopyCode = () => {
    let contentToCopy = '';
    if (project.codeSnippet?.python) {
      contentToCopy = project.codeSnippet.python;
    } else if (project.codeSnippet?.json) {
      contentToCopy = project.codeSnippet.json;
    } else if (project.codeSnippet?.prompt) {
      contentToCopy = project.codeSnippet.prompt;
    }
    if (contentToCopy) {
      navigator.clipboard.writeText(contentToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="project-interactive-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-interactive-modal-container"
        className="w-full max-w-3xl bg-zinc-950 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-200">
                {project.category === 'python'
                  ? 'Python 3 Program'
                  : project.category === 'ai'
                  ? 'Generative AI'
                  : 'n8n Automation'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Tech Stack: {project.technologies.join(' • ')}
            </p>
          </div>
          <button
            id="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live URL Link Banner (for SkillPath AI) */}
        {project.liveUrl && (
          <div className="px-5 py-3 bg-zinc-900 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-xs text-zinc-300">
                Live Deployment: <strong className="text-white font-mono">skillpathai18.lovable.app</strong>
              </span>
            </div>
            <a
              id="btn-visit-live-url-banner"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm shrink-0"
            >
              <span>Open Live Web App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-zinc-800 bg-black/60 px-5">
          <button
            id="tab-interactive-demo"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'demo'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            {project.category === 'python'
              ? 'Python Terminal Simulator'
              : project.category === 'ai'
              ? 'Roadmap Generator Simulator'
              : 'n8n Workflow Execution Simulator'}
          </button>
          
          <button
            id="tab-source-code"
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            {project.category === 'python'
              ? 'Python Source Code'
              : project.category === 'ai'
              ? 'Prompt & JSON Schema'
              : 'n8n Workflow JSON & Config'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'demo' ? (
            <div>
              {/* ========================================== */}
              {/* DEMO 1: PYTHON VOTING ELIGIBILITY CHECKER */}
              {/* ========================================== */}
              {project.demoType === 'interactive-vote-python' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                    <p className="font-semibold text-white mb-1 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-white" />
                      Python Conditional Logic & CLI Execution:
                    </p>
                    This project validates citizen voting age (threshold ≥ 18) using Python's conditional control flow (<code className="text-white font-mono font-semibold">if / elif / else</code>), calculates countdown years for minors, and catches invalid inputs with structured exception handling.
                  </div>

                  {/* Interactive Input Form */}
                  <div className="p-4 rounded-xl bg-black border border-zinc-800 space-y-3">
                    <label className="block text-xs font-semibold text-zinc-200">
                      Enter Citizen Age to Pass to Python <code className="text-white font-mono">check_voting_eligibility(age)</code>:
                    </label>

                    <div className="flex gap-2">
                      <input
                        id="input-python-age"
                        type="text"
                        value={pythonAgeInput}
                        onChange={(e) => setPythonAgeInput(e.target.value)}
                        placeholder="e.g. 19"
                        className="w-32 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-mono text-sm focus:outline-none focus:border-white"
                      />
                      <button
                        id="btn-run-python-cli"
                        onClick={() => handleRunPythonScript()}
                        disabled={pythonIsRunning}
                        className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-semibold flex items-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50"
                      >
                        {pythonIsRunning ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Play className="w-3.5 h-3.5 text-black" />
                        )}
                        Run Python Script
                      </button>

                      <button
                        id="btn-run-python-tests"
                        onClick={handleRunPythonTests}
                        disabled={pythonIsRunning}
                        className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium flex items-center gap-1.5 border border-zinc-700 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-white" />
                        Run Test Suite (6 Cases)
                      </button>
                    </div>

                    {/* Quick Presets */}
                    <div className="flex items-center gap-2 pt-1 flex-wrap">
                      <span className="text-[11px] font-mono text-zinc-400">Quick Test Values:</span>
                      {[
                        { label: 'Age 15 (Minor)', val: '15' },
                        { label: 'Age 18 (Exact)', val: '18' },
                        { label: 'Age 24 (Voter)', val: '24' },
                        { label: 'Invalid (-5)', val: '-5' },
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => {
                            setPythonAgeInput(preset.val);
                            handleRunPythonScript(preset.val);
                          }}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 transition-colors cursor-pointer"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Window Output */}
                  <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-inner font-mono text-xs">
                    <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-zinc-400 text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                        <span className="text-zinc-200 ml-1">Terminal • python3 vote_checker.py</span>
                      </div>
                      <span className="text-white text-[10px] font-semibold">Python 3.11 (Active)</span>
                    </div>

                    <div className="p-4 text-zinc-200 whitespace-pre-wrap leading-relaxed overflow-x-auto min-h-[160px]">
                      {pythonTerminalOutput || (
                        <div className="text-zinc-500 italic">
                          Click "Run Python Script" above or choose a preset test age to execute the Python conditional logic.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Visual Status Feedback */}
                  {pythonStatus !== 'idle' && (
                    <div className="p-3.5 rounded-xl border border-zinc-700 bg-zinc-900 text-white flex items-center justify-between text-xs animate-in fade-in">
                      <div className="flex items-center gap-2">
                        {pythonStatus === 'eligible' && <CheckCircle2 className="w-4 h-4 text-white" />}
                        {pythonStatus === 'ineligible' && <Clock className="w-4 h-4 text-zinc-400" />}
                        {pythonStatus === 'error' && <AlertCircle className="w-4 h-4 text-white" />}
                        <span className="font-semibold">
                          {pythonStatus === 'eligible'
                            ? 'Verification Passed: Citizen is Eligible to Vote'
                            : pythonStatus === 'ineligible'
                            ? 'Verification Complete: Citizen is a Minor'
                            : 'Runtime Exception: Input Rejected by Python Validator'}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {pythonTestPassed ? 'All 6 Tests Passed' : 'Evaluated in 0.002s'}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================== */}
              {/* DEMO 2: SKILLPATH AI ROADMAP GENERATOR    */}
              {/* ========================================== */}
              {project.demoType === 'skillpath-ai' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                    <p className="font-semibold text-white mb-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      SkillPath AI — Interactive Roadmap Engine:
                    </p>
                    SkillPath AI evaluates career aspirations and formulates progressive learning phases, curated competencies, and concrete portfolio projects. Try generating personalized roadmaps below or visit the live app at <a href="https://skillpathai18.lovable.app" target="_blank" rel="noopener noreferrer" className="text-white underline font-semibold">skillpathai18.lovable.app</a>.
                  </div>

                  {/* Simulator Controls */}
                  <div className="p-4 rounded-xl bg-black border border-zinc-800 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Select Target Career Role:
                        </label>
                        <select
                          id="select-skillpath-role"
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs font-medium focus:outline-none focus:border-white"
                        >
                          <option value="AI Engineer">AI Engineer</option>
                          <option value="Generative AI Specialist">Generative AI Specialist</option>
                          <option value="Full-Stack Developer">Full-Stack Developer</option>
                          <option value="Data Scientist">Data Scientist</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1">
                          Experience Level:
                        </label>
                        <select
                          id="select-skillpath-level"
                          value={experienceLevel}
                          onChange={(e) => setExperienceLevel(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs font-medium focus:outline-none focus:border-white"
                        >
                          <option value="Beginner / 1st Year">Beginner / 1st Year B.Tech</option>
                          <option value="Intermediate">Intermediate Developer</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-zinc-400 font-mono">
                        Targeting: <strong className="text-white">{selectedRole}</strong>
                      </span>
                      <button
                        id="btn-generate-skillpath"
                        onClick={handleGenerateSkillPath}
                        disabled={skillPathGenerating}
                        className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shadow-md"
                      >
                        {skillPathGenerating ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Sparkles className="w-3.5 h-3.5 text-black" />
                        )}
                        Generate AI Roadmap
                      </button>
                    </div>
                  </div>

                  {/* Generated Roadmap Timeline */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Generated Learning Pathway ({selectedRole}):
                      </span>
                      <a
                        id="btn-open-skillpath-external"
                        href="https://skillpathai18.lovable.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <span>Open on Lovable</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="space-y-3">
                      {skillPathRoadmap.map((item, index) => (
                        <div
                          key={item.phase}
                          className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                            <span className="text-xs font-bold text-white flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center text-[10px]">
                                {index + 1}
                              </span>
                              {item.phase}
                            </span>
                            <span className="text-[11px] font-mono text-white px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                              {item.weeks}
                            </span>
                          </div>

                          <div className="mb-2 flex flex-wrap gap-1.5">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-[11px] px-2 py-0.5 rounded bg-black text-zinc-300 border border-zinc-800 font-mono"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="text-xs text-zinc-300 flex items-center gap-2 pt-1 border-t border-zinc-800">
                            <span className="text-white font-semibold text-[11px]">Milestone Project:</span>
                            <span className="text-zinc-300">{item.project}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================== */}
              {/* DEMO 3: N8N AI NEWS SUMMARIZER AUTOMATION */}
              {/* ========================================== */}
              {project.demoType === 'n8n-automation' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                    <p className="font-semibold text-white mb-1 flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-white" />
                      n8n Automated Workflow Pipeline:
                    </p>
                    This autonomous pipeline runs on a daily 08:00 AM cron schedule, aggregates new articles from AI news feeds, prompts an LLM summarizer for concise high-signal bullet takeaways, and dispatches a formatted briefing email directly to your inbox.
                  </div>

                  {/* Visual Node Diagram */}
                  <div className="p-4 rounded-xl bg-black border border-zinc-800">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                      <span>n8n Pipeline Architecture</span>
                      <span className="text-[11px] text-white font-semibold">5 Nodes Connected</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
                      {[
                        { step: 1, name: "Daily Cron", desc: "08:00 AM Trigger", icon: Clock },
                        { step: 2, name: "Fetch RSS", desc: "AI News Feeds", icon: Rss },
                        { step: 3, name: "Filter Node", desc: "Deduplication", icon: Layers },
                        { step: 4, name: "LLM Agent", desc: "Summarizer Prompt", icon: Sparkles },
                        { step: 5, name: "Email Send", desc: "SMTP / Gmail", icon: Mail },
                      ].map((node) => {
                        const Icon = node.icon;
                        const isCurrent = workflowStep === node.step;
                        const isDone = workflowStep > node.step || workflowCompleted;

                        return (
                          <div
                            key={node.name}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              isCurrent
                                ? 'bg-white text-black border-white ring-2 ring-white/30 font-semibold'
                                : isDone
                                ? 'bg-zinc-900 border-zinc-600 text-white'
                                : 'bg-zinc-950 border-zinc-800 text-zinc-500'
                            }`}
                          >
                            <div className={`w-8 h-8 mx-auto mb-1.5 rounded-lg flex items-center justify-center ${isCurrent ? 'bg-zinc-200 text-black' : 'bg-black text-white'}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className={`text-xs font-bold truncate ${isCurrent ? 'text-black' : 'text-white'}`}>{node.name}</div>
                            <div className="text-[10px] opacity-75 font-mono truncate">{node.desc}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Trigger Workflow Execution */}
                    <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span>Dispatch to:</span>
                        <input
                          id="input-subscriber-email"
                          type="email"
                          value={subscriberEmail}
                          onChange={(e) => setSubscriberEmail(e.target.value)}
                          className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-white font-mono text-xs focus:outline-none focus:border-white w-56"
                        />
                      </div>

                      <button
                        id="btn-trigger-n8n-workflow"
                        onClick={handleRunN8nWorkflow}
                        disabled={workflowRunning}
                        className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 shadow-md"
                      >
                        {workflowRunning ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Play className="w-3.5 h-3.5 text-black" />
                        )}
                        <span>{workflowRunning ? 'Executing Workflow Nodes...' : 'Run Test Workflow'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Simulated Delivered Email Preview */}
                  <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
                    <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-white" />
                        <span className="font-semibold text-white">Generated Email Newsletter Preview</span>
                      </div>
                      <span className="text-[11px] font-mono text-white bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                        {workflowCompleted ? 'Delivered to Inbox' : 'Scheduled: Daily 08:00 AM'}
                      </span>
                    </div>

                    <div className="p-4 space-y-3 text-xs leading-relaxed">
                      <div className="border-b border-zinc-800 pb-2 space-y-1 font-mono text-[11px] text-zinc-400">
                        <div><strong className="text-zinc-200">Subject:</strong> 🤖 Daily AI Briefing: Next-Gen Reasoning Models & Open Source Breakthroughs</div>
                        <div><strong className="text-zinc-200">From:</strong> n8n-automation@santhosh-ai.dev</div>
                        <div><strong className="text-zinc-200">To:</strong> {subscriberEmail}</div>
                      </div>

                      <div className="space-y-2 text-zinc-200">
                        <p className="font-semibold text-white">
                          Good morning! Here are today's top 3 AI breakthroughs summarized by your n8n LLM workflow:
                        </p>
                        <ul className="space-y-1.5 list-disc list-inside text-zinc-300">
                          <li>
                            <strong className="text-white">Reasoning LLM Benchmarks:</strong> New open-weights models achieve 84% on advanced math evaluation, significantly reducing token latency.
                          </li>
                          <li>
                            <strong className="text-white">Agentic Orchestration:</strong> Autonomous workflow engines show 3x higher task completion rates when coupled with self-verification loops.
                          </li>
                          <li>
                            <strong className="text-white">Developer Tooling:</strong> Automated pipeline generators allow students and engineers to chain RSS feeds to localized LLM summarizers in minutes.
                          </li>
                        </ul>
                        <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                          <span>Automated with precision via n8n by M. Santhosh</span>
                          <span className="font-mono text-white font-semibold">200 OK • SMTP Delivered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* ========================================== */
            /* TAB 2: SOURCE CODE & CONFIG SCHEMA         */
            /* ========================================== */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">
                  {project.category === 'python'
                    ? 'Python 3 Program (Modular Functions & CLI Execution):'
                    : project.category === 'ai'
                    ? 'Prompt Template & Learning Schema Configuration:'
                    : 'n8n Workflow Node Schema (JSON) & LLM Prompt:'}
                </span>
                <button
                  id="btn-copy-code"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
              </div>

              {project.codeSnippet?.python && (
                <div>
                  <div className="text-[11px] text-white font-semibold mb-1 font-mono">
                    python3 vote_checker.py
                  </div>
                  <pre className="p-4 rounded-xl bg-black border border-zinc-800 text-zinc-200 overflow-x-auto text-xs font-mono leading-relaxed max-h-[380px]">
                    <code>{project.codeSnippet.python}</code>
                  </pre>
                </div>
              )}

              {project.codeSnippet?.json && (
                <div>
                  <div className="text-[11px] text-white font-semibold mb-1 font-mono">
                    workflow_schema.json
                  </div>
                  <pre className="p-4 rounded-xl bg-black border border-zinc-800 text-zinc-200 overflow-x-auto text-xs font-mono leading-relaxed max-h-[280px]">
                    <code>{project.codeSnippet.json}</code>
                  </pre>
                </div>
              )}

              {project.codeSnippet?.prompt && (
                <div>
                  <div className="text-[11px] text-white font-semibold mb-1 font-mono">
                    prompt_template.txt
                  </div>
                  <pre className="p-4 rounded-xl bg-black border border-zinc-800 text-zinc-200 overflow-x-auto text-xs font-mono leading-relaxed max-h-[220px]">
                    <code>{project.codeSnippet.prompt}</code>
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between">
          <div className="text-[11px] text-zinc-400 font-mono">
            {project.title} • M. Santhosh CSE Portfolio
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer border border-zinc-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
