import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { ArrowLeft, CheckCircle2, Circle, GitBranch, GitCommit, Clock, Terminal, Globe2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { workingOnData } from '../data/workingOnData';
import { UkFlagSimple, ItFlag } from './Flags';

// Import themed styles
import "./WorkingOn.css";

const CodeSnippetHero = () => {
  const { language, toggleLanguage } = useLanguage();
  
  const codeLines = [
    'const useLanguage = () => {',
    '  const context = useContext(LanguageContext);',
    '  if (!context) throw new Error("Error");',
    '  return context;',
    '};',
    '',
    'export const Flags = () => {',
    '  const { language, toggle } = useLanguage();',
    '  return (',
    '    <button onClick={toggle}>',
    "      {language === 'en' ? '🇮🇹' : '🇬🇧'}",
    '    </button>',
    '  );',
    '};'
  ];

  return (
    <div className="code-split-hero">
      <div className="code-window-premium">
        <div className="window-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="code-content-wrapper">
          <div className="line-numbers">
            {codeLines.map((_, i) => <div key={i}>{i + 1}</div>)}
          </div>
          <pre className="mb-0">
            <code>
              <span className="syntax-kw">const</span> <span className="syntax-fn">useLanguage</span> = () =&gt; &#123;{"\n"}
              {"  "}<span className="syntax-kw">const</span> context = <span className="syntax-fn">useContext</span>(LanguageContext);{"\n"}
              {"  "}<span className="syntax-kw">if</span> (!context) <span className="syntax-kw">throw</span> <span className="syntax-kw">new</span> <span className="syntax-fn">Error</span>(<span className="syntax-str">"Error"</span>);{"\n"}
              {"  "}<span className="syntax-kw">return</span> context;{"\n"}
              &#125;;{"\n"}{"\n"}
              <span className="syntax-kw">export const</span> <span className="syntax-fn">Flags</span> = () =&gt; &#123;{"\n"}
              {"  "}<span className="syntax-kw">const</span> &#123; language, toggle &#125; = <span className="syntax-fn">useLanguage</span>();{"\n"}
              {"  "}<span className="syntax-kw">return</span> ({"\n"}
              {"    "}&lt;<span className="syntax-fn">button</span> onClick=&#123;toggle&#125;&gt;{"\n"}
              {"      "}&#123;language === <span className="syntax-str">'en'</span> ? <span className="syntax-str">'🇮🇹'</span> : <span className="syntax-str">'🇬🇧'</span>&#125;{"\n"}
              {"    "}&lt;/<span className="syntax-fn">button</span>&gt;{"\n"}
              {"  "});{"\n"}
              &#125;;
            </code>
          </pre>
        </div>
      </div>
      <div className="preview-side">
        <div className="preview-label">LIVE PREVIEW</div>
        <div className="interactive-render">
           <button 
             onClick={toggleLanguage}
             className="btn-back-glow" 
             style={{ padding: '15px 25px', borderRadius: '15px', border: '2px solid var(--neon-primary)', background: 'rgba(240, 123, 25, 0.05)' }}
           >
              {language === 'en' ? <ItFlag size={32} /> : <UkFlagSimple size={32} />}
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '10px' }}>
                {language === 'en' ? 'IT' : 'EN'}
              </span>
           </button>
        </div>
        <div className="mt-3 text-muted small">Click to test logic</div>
      </div>
    </div>
  );
};

export const WorkingOnDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const project = workingOnData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Mouse tracking for hover card glows
    const cards = document.querySelectorAll('.bento-card');
    const handleMouseMove = (e) => {
        for(const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!project) {
    return (
      <div className="working-on-page d-flex align-items-center justify-content-center">
         <div className="text-center bento-card" style={{ maxWidth: '400px' }}>
            <h2 className="text-white mb-4">Project not found</h2>
            <Button variant="outline-light" onClick={() => navigate('/')}>Back Home</Button>
         </div>
      </div>
    );
  }

  const transKey = project.translationKey;
  const title = t(`working_on_content.${transKey}.title`);
  const description = t(`working_on_content.${transKey}.description`);
  const roadmap = t(`working_on_content.${transKey}.roadmap`);
  
  // Resolve stage text
  let stageText = project.stageKey;
  if (project.stageKey === "building") stageText = t('current.stages.building');
  else if (project.stageKey === "backend") stageText = t('current.stages.backend');
  else if (project.stageKey === "frontend") stageText = t('current.stages.frontend');
  else if (project.stageKey === "planning") stageText = t('current.stages.planning');

  return (
    <div className="working-on-page">
      <Container>
        
        {/* Mockup Header Row */}
        <div className="detail-header-row">
            <button className="btn-back-glow" onClick={() => navigate('/')}>
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <div className="status-badge-glow">
              Status: {stageText}
            </div>
        </div>

        <div className="bento-container">
          
          {/* Card 1: Title & Overview */}
          <div className="bento-card card-overview">
            <div className="section-label">Project Details</div>
            <h1 className="hero-title">{title}</h1>
            <p className="lead mb-4" style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.6' }}>
              {description}
            </p>
            <div className="mt-auto d-flex gap-2 flex-wrap">
               {project.technologies?.map((tech, i) => (
                 <span key={i} className="status-badge-glow d-flex align-items-center gap-2" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>
                   {tech === 'React' && (
                     <svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14">
                       <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                       <g stroke="#61dafb" strokeWidth="1" fill="none">
                         <ellipse rx="11" ry="4.2"/>
                         <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                         <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                       </g>
                     </svg>
                   )}
                   {tech === 'Context API' && <Globe2 size={12} />}
                   {tech}
                 </span>
               ))}
            </div>
          </div>

          {/* Card 2: Visual Hero */}
          <div className="bento-card card-hero">
            <div className="section-label">
                {project.id === 'lang-btn' ? 'Logic Implementation' : 'Interface Design'}
            </div>
            <div className="hero-visual-container">
                {project.id === 'lang-btn' ? (
                  <CodeSnippetHero />
                ) : (
                  <img src={project.imgUrl} alt="Preview" className="mockup-img" />
                )}
            </div>
          </div>

          {/* Card 3: Full Width Progress */}
          <div className="bento-card card-progress-full">
            <div className="section-label">Current Progress</div>
            <div className="progress-inner-container">
                <div className="progress-large-text">{project.progress}%</div>
                <div className="progress-track-wide">
                    <div className="progress-fill-wide" style={{ width: `${project.progress}%` }}></div>
                </div>
            </div>
          </div>

          {/* Card 4: Roadmap (Vertical) */}
          <div className="bento-card card-roadmap-v">
            <div className="section-label">Development Roadmap</div>
            <div className="roadmap-v-list">
                {roadmap && roadmap.map((item, index) => {
                    const stepProgress = (index + 1) * (100 / roadmap.length);
                    const isCompleted = project.progress >= stepProgress;
                    const isCurrent = !isCompleted && project.progress >= stepProgress - (100 / roadmap.length);

                    return (
                        <div key={index} className="roadmap-step-v">
                            <div className={`step-status-icon ${isCompleted ? 'completed' : isCurrent ? 'current' : ''}`}>
                                {isCompleted ? <CheckCircle2 size={16} /> : <Circle size={10} />}
                            </div>
                            <div className={`step-v-text ${isCompleted ? 'completed' : isCurrent ? 'current' : ''}`}>
                                {item}
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>

          {/* Card 5: Stats */}
          <div className="bento-card card-stats">
            <div className="section-label">Build Context</div>
            <div className="stats-list">
                <div className="stat-item">
                    <div className="stat-label"><GitBranch size={14} className="me-2" />Branch</div>
                    <div className="stat-value">{project.buildContext?.branch || 'main'}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label"><GitCommit size={14} className="me-2" />Commit</div>
                    <div className="stat-value">{project.buildContext?.commit || '#0000000'}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label"><Clock size={14} className="me-2" />Updated</div>
                    <div className="stat-value">{project.buildContext?.updated || 'N/A'}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-label"><Terminal size={14} className="me-2" />Environment</div>
                    <div className="stat-value">{project.buildContext?.env || 'Production'}</div>
                </div>
            </div>
            
            <div className="mt-auto pt-4 text-center">
                <div style={{ color: '#444', fontSize: '0.7rem', letterSpacing: '1px' }}>
                    LAST BUILD SUCCESSFUL
                </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};
