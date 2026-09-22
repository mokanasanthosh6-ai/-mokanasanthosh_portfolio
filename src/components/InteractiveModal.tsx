import { useState } from 'react';
import { X, Play, Code2, Check, Copy, Sparkles, Award, UserCheck, RefreshCw } from 'lucide-react';
import { Project } from '../types';

interface InteractiveModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function InteractiveModal({ project, onClose }: InteractiveModalProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [copied, setCopied] = useState(false);

  // Grade calculator state
  const [gradeMarks, setGradeMarks] = useState({ sub1: '85', sub2: '78', sub3: '92' });
  const [gradeResult, setGradeResult] = useState<{
    total: number;
    percentage: number;
    grade: string;
    status: 'pass' | 'fail';
    remarks: string;
  } | null>(null);

  // Voting calculator state
  const [voteAge, setVoteAge] = useState('19');
  const [voteResult, setVoteResult] = useState<{
    isEligible: boolean;
    message: string;
    yearsDiff: number;
  } | null>(null);

  // GenAI experiment interactive state
  const [aiPromptTopic, setAiPromptTopic] = useState('Binary Search');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [aiSimulating, setAiSimulating] = useState(false);

  if (!project) return null;

  // Grade calculation
  const handleCalculateGrade = (e: React.FormEvent) => {
    e.preventDefault();
    const m1 = Math.max(0, Math.min(100, parseFloat(gradeMarks.sub1) || 0));
    const m2 = Math.max(0, Math.min(100, parseFloat(gradeMarks.sub2) || 0));
    const m3 = Math.max(0, Math.min(100, parseFloat(gradeMarks.sub3) || 0));

    const total = m1 + m2 + m3;
    const percentage = Number(((total / 300) * 100).toFixed(1));

    let grade = 'F';
    let remarks = 'Needs improvement. Practice foundational topics.';
    let status: 'pass' | 'fail' = 'fail';

    if (percentage >= 90) {
      grade = 'A+';
      remarks = 'Outstanding performance! Exemplary conceptual understanding.';
      status = 'pass';
    } else if (percentage >= 80) {
      grade = 'A';
      remarks = 'Excellent work! Strong command of subject matter.';
      status = 'pass';
    } else if (percentage >= 70) {
      grade = 'B';
      remarks = 'Good work! Solid foundational clarity.';
      status = 'pass';
    } else if (percentage >= 60) {
      grade = 'C';
      remarks = 'Satisfactory. Can improve with regular revision.';
      status = 'pass';
    } else if (percentage >= 40) {
      grade = 'D';
      remarks = 'Passed. Recommend reviewing problem areas.';
      status = 'pass';
    }

    setGradeResult({
      total,
      percentage,
      grade,
      status,
      remarks,
    });
  };

  // Voting calculation
  const handleCheckVoting = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voteAge, 10);
    if (isNaN(age) || age <= 0) {
      setVoteResult({
        isEligible: false,
        message: 'Please enter a valid age above 0.',
        yearsDiff: 0,
      });
      return;
    }

    if (age >= 18) {
      setVoteResult({
        isEligible: true,
        message: `At ${age} years old, the user meets the legal minimum voting threshold of 18 years.`,
        yearsDiff: age - 18,
      });
    } else {
      const remaining = 18 - age;
      setVoteResult({
        isEligible: false,
        message: `At ${age} years old, the user is not yet eligible to vote. They will be eligible in ${remaining} year${remaining === 1 ? '' : 's'}.`,
        yearsDiff: remaining,
      });
    }
  };

  // AI Prompt simulation
  const handleRunAiExperiment = () => {
    setAiSimulating(true);
    setTimeout(() => {
      if (aiPromptTopic.toLowerCase().includes('search')) {
        setAiOutput(
          `[GenAI Concept Experiment: "${aiPromptTopic}"]\n\n` +
          `• Concept Summary: An efficient algorithm that divides a sorted array in half repeatedly with O(log n) time complexity.\n` +
          `• Applied Prompt Pattern: "Explain ${aiPromptTopic} simply for a 1st year CSE student with pseudo-code and edge cases."\n` +
          `• Key Takeaway: Precision in prompt parameters yields significantly cleaner algorithmic breakdowns.`
        );
      } else {
        setAiOutput(
          `[GenAI Concept Experiment: "${aiPromptTopic}"]\n\n` +
          `• Problem Framing: Synthesizing core technical concepts for rapid study and project ideation.\n` +
          `• Prompt Template: Few-shot context framing with structured markdown output.\n` +
          `• Key Takeaway: Using structured system prompts prevents hallucinations in beginner study aids.`
        );
      }
      setAiSimulating(false);
    }, 450);
  };

  const handleCopyCode = () => {
    if (!project.codeSnippet) return;
    const fullCode = `/* HTML */\n${project.codeSnippet.html}\n\n/* JAVASCRIPT */\n${project.codeSnippet.js}\n\n/* CSS */\n${project.codeSnippet.css}`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="project-interactive-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-interactive-modal-container"
        className="w-full max-w-2xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category === 'web' ? 'Web Application' : 'AI Experiment'}
              </span>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Built with: {project.technologies.join(' • ')}
            </p>
          </div>
          <button
            id="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs: Live Interactive Demo vs Source Code */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-5">
          <button
            id="tab-interactive-demo"
            onClick={() => setActiveTab('demo')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'demo'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            Live Interactive Demo
          </button>
          {project.codeSnippet && (
            <button
              id="tab-source-code"
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Vanilla Source Code
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'demo' ? (
            <div>
              {/* Demo 1: Student Grade Calculator */}
              {project.demoType === 'interactive-grade' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <p className="font-semibold text-white mb-1">How it works:</p>
                    Enter marks (0-100) for three subjects. The JavaScript function calculates total marks, percentage, and assigns a letter grade using conditional logic.
                  </div>

                  <form onSubmit={handleCalculateGrade} className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Mathematics (0-100)
                        </label>
                        <input
                          id="input-math-grade"
                          type="number"
                          min="0"
                          max="100"
                          value={gradeMarks.sub1}
                          onChange={(e) => setGradeMarks({ ...gradeMarks, sub1: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Physics (0-100)
                        </label>
                        <input
                          id="input-physics-grade"
                          type="number"
                          min="0"
                          max="100"
                          value={gradeMarks.sub2}
                          onChange={(e) => setGradeMarks({ ...gradeMarks, sub2: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Computer Science (0-100)
                        </label>
                        <input
                          id="input-cs-grade"
                          type="number"
                          min="0"
                          max="100"
                          value={gradeMarks.sub3}
                          onChange={(e) => setGradeMarks({ ...gradeMarks, sub3: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                          required
                        />
                      </div>
                    </div>

                    <button
                      id="btn-calculate-grade"
                      type="submit"
                      className="w-full py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      Calculate Grade & Percentage
                    </button>
                  </form>

                  {gradeResult && (
                    <div
                      id="grade-result-box"
                      className={`p-4 rounded-xl border animate-in fade-in slide-in-from-top-2 ${
                        gradeResult.status === 'pass'
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                          : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase font-mono tracking-wider font-semibold">
                          Calculated Result:
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-900 border border-slate-700">
                          Grade: {gradeResult.grade}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs py-2 border-y border-slate-800 my-2">
                        <div>
                          <span className="text-slate-400 block">Total Marks:</span>
                          <span className="font-bold text-white">{gradeResult.total} / 300</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Percentage:</span>
                          <span className="font-bold text-cyan-300">{gradeResult.percentage}%</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Academic Status:</span>
                          <span className={`font-bold ${gradeResult.status === 'pass' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {gradeResult.status === 'pass' ? 'Passed' : 'Needs Retest'}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 mt-1 italic">
                        "{gradeResult.remarks}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Demo 2: Voting Eligibility Calculator */}
              {project.demoType === 'interactive-vote' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <p className="font-semibold text-white mb-1">How it works:</p>
                    Evaluates if the entered age meets the legal democracy voting threshold (≥ 18). Demonstrates conditional branching (if/else), number parsing, and user feedback styling.
                  </div>

                  <form onSubmit={handleCheckVoting} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Enter Citizen Age:
                      </label>
                      <input
                        id="input-voting-age"
                        type="number"
                        min="1"
                        max="120"
                        value={voteAge}
                        onChange={(e) => setVoteAge(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                        placeholder="e.g. 19"
                        required
                      />
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setVoteAge('16')}
                        className="text-xs px-3 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        Try Age 16 (Minor)
                      </button>
                      <button
                        type="button"
                        onClick={() => setVoteAge('18')}
                        className="text-xs px-3 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        Try Age 18 (Exact)
                      </button>
                      <button
                        type="button"
                        onClick={() => setVoteAge('22')}
                        className="text-xs px-3 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        Try Age 22 (Adult)
                      </button>
                    </div>

                    <button
                      id="btn-check-voting"
                      type="submit"
                      className="w-full py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4" />
                      Check Voting Eligibility
                    </button>
                  </form>

                  {voteResult && (
                    <div
                      id="vote-result-box"
                      className={`p-4 rounded-xl border animate-in fade-in slide-in-from-top-2 ${
                        voteResult.isEligible
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                          : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-semibold text-sm mb-1">
                        {voteResult.isEligible ? (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            <span>Status: Eligible to Vote</span>
                          </>
                        ) : (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span>Status: Not Yet Eligible</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-slate-300">{voteResult.message}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Demo 3: Generative AI Experiments */}
              {project.demoType === 'ai-showcase' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <p className="font-semibold text-white mb-1">Generative AI Explorations:</p>
                    Testing how beginner developers can combine prompt patterns and Python scripting to summarize engineering concepts and structure AI outputs.
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Choose or Type a Topic to Test Prompt Structuring:
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="input-ai-topic"
                        type="text"
                        value={aiPromptTopic}
                        onChange={(e) => setAiPromptTopic(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                        placeholder="e.g. Binary Search, Neural Networks, Bubble Sort"
                      />
                      <button
                        id="btn-run-ai-experiment"
                        onClick={handleRunAiExperiment}
                        disabled={aiSimulating}
                        className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {aiSimulating ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Sparkles className="w-3.5 h-3.5" />
                        )}
                        Simulate Prompt
                      </button>
                    </div>
                  </div>

                  {aiOutput && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed animate-in fade-in">
                      {aiOutput}
                    </div>
                  )}

                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400">
                    💡 <em>Note: This section is flexible and will expand with more Python and LLM experiment notebooks throughout my B.Tech journey.</em>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Source Code Tab */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Clean beginner HTML5, CSS3, & Vanilla JS:
                </span>
                <button
                  id="btn-copy-code"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>

              {project.codeSnippet && (
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="text-[11px] text-cyan-400 font-semibold mb-1">1. HTML Markup:</div>
                    <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 overflow-x-auto">
                      <code>{project.codeSnippet.html}</code>
                    </pre>
                  </div>

                  <div>
                    <div className="text-[11px] text-amber-400 font-semibold mb-1">2. Vanilla JavaScript Logic:</div>
                    <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 overflow-x-auto">
                      <code>{project.codeSnippet.js}</code>
                    </pre>
                  </div>

                  <div>
                    <div className="text-[11px] text-purple-400 font-semibold mb-1">3. CSS Styling:</div>
                    <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 overflow-x-auto">
                      <code>{project.codeSnippet.css}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            Student Project • M. Santhosh CSE
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
