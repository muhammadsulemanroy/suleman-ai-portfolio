import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Code2, Terminal, Github, Linkedin, Mail, ExternalLink, ChevronDown,
  Star, Zap, Layers, Database, Globe, Cpu, ArrowUpRight, Menu, X,
  Download, Send, MapPin, Calendar, Award, BookOpen, Briefcase,
  Heart, Eye, Brain, Bot, Sparkles, Rocket, Shield, Server,
  MessageSquare, Phone, FileText, GitBranch, Container, Cloud,
  Wifi, Lock, Gauge, Clock, TrendingUp, CheckCircle2, ArrowRight,
  CircleDot, Hexagon, Triangle, Square, Diamond, Pentagon, Octagon
} from 'lucide-react';

// ==================== YOUR CV DATA ====================
const personalInfo = {
  name: "Muhammad Suleman",
  title: "AI Engineer & Full Stack Developer",
  subtitle: "Building Intelligent Systems with Modern Web Technologies",
  location: "Islamabad, Pakistan",
  email: "sulemanroy858755@gmail.com",
  phone: "0343-7312565",
  linkedin: "linkedin.com/in/muhammad-suleman-429031248",
  github: "github.com/muhammadsulemanroy",
  experience: "3+ Years",
  education: [
    { degree: "Bachelors of Computer Science", school: "Virtual University of Pakistan", year: "2021-2024", cgpa: "3.4" },
    { degree: "BSc Computer Science (2 years)", school: "University of The Punjab", year: "2019-2021", cgpa: "3.7" }
  ]
};

const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", level: 90, icon: "▲", color: "#000000" },
    { name: "TypeScript", level: 88, icon: "📘", color: "#3178C6" },
    { name: "Tailwind CSS", level: 92, icon: "🌊", color: "#06B6D4" },
    { name: "Redux / Zustand", level: 85, icon: "🔄", color: "#764ABC" },
    { name: "Material UI / SCAD CN", level: 88, icon: "🎨", color: "#0081CB" },
  ],
  backend: [
    { name: "Node.js", level: 92, icon: "🟢", color: "#339933" },
    { name: "NestJS", level: 90, icon: "🐱", color: "#E0234E" },
    { name: "Express.js", level: 93, icon: "🚂", color: "#000000" },
    { name: "PostgreSQL", level: 85, icon: "🐘", color: "#336791" },
    { name: "MongoDB", level: 88, icon: "🍃", color: "#47A248" },
    { name: "Redis", level: 82, icon: "🔴", color: "#DC382D" },
  ],
  aiDevops: [
    { name: "LangChain", level: 88, icon: "🔗", color: "#1C3C3C" },
    { name: "RAG Pipeline", level: 85, icon: "🧠", color: "#FF6B6B" },
    { name: "Docker", level: 80, icon: "🐳", color: "#2496ED" },
    { name: "AWS", level: 75, icon: "☁️", color: "#FF9900" },
    { name: "Git", level: 90, icon: "🔀", color: "#F05032" },
    { name: "BullMQ / RabbitMQ", level: 82, icon: "📬", color: "#FF6600" },
  ]
};

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer (Backend Focus)",
    company: "SiriusB",
    period: "Aug 2025 - Present",
    location: "Remote",
    type: "current",
    description: "AI-focused backend engineer building scalable systems with NestJS, Node.js, and MERN stack. Handles high-traffic applications using queues (BullMQ / Redis / RabbitMQ) for async and background processing. Designs performance-optimized APIs with caching, rate limiting, and load-aware architectures. Delivers secure, production-grade systems with JWT, RBAC, and robust error handling.",
    skills: ["NestJS", "Node.js", "Redis", "BullMQ", "JWT", "RBAC", "Microservices"],
    highlights: ["High-traffic APIs", "Queue Systems", "AI Workloads"]
  },
  {
    id: 2,
    role: "MERN Stack Developer",
    company: "Infini8ai",
    period: "Aug 2024 - Jul 2025",
    location: "Remote",
    type: "past",
    description: "Built scalable Node.js microservices with advanced caching, rate limiting, and high-concurrency performance. Designed a production-ready RAG pipeline enabling accurate, context-driven AI responses. Implemented asynchronous workers & message queues for reliable service orchestration.",
    skills: ["Node.js", "RAG", "Microservices", "Caching", "Rate Limiting"],
    highlights: ["RAG Pipeline", "AI Integration", "Microservices"]
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    company: "Skylarks IT Solutions",
    period: "Dec 2023 - Jul 2024",
    location: "Remote",
    type: "past",
    description: "Leveraged React.js and Next.js to architect and deliver highly responsive, visually appealing UIs. Designed and deployed scalable RESTful APIs utilizing modern architectural patterns. Implemented robust security protocols including JWT-based authentication with advanced encryption and hashing techniques.",
    skills: ["React.js", "Next.js", "REST APIs", "JWT", "Security"],
    highlights: ["Responsive UI", "REST APIs", "Security"]
  }
];

const projects = [
  {
    id: 1,
    title: "Gamora - AI Gaming Platform",
    description: "Developed and maintained scalable backend APIs for a high-traffic gaming platform. Improved performance and reliability using queues, caching, and async processing to handle traffic spikes. Designed robust backend architecture optimized for scalability and future expansion.",
    tags: ["React.js", "Node.js", "Redis", "BullMQ", "PostgreSQL", "Microservices"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "ResearchPal - AI Research Tool",
    description: "Developed an AI-powered research assistant tool to provide context-aware knowledge retrieval and faster insights. Implemented a scalable web application using React.js and Node.js for smooth frontend-backend integration. Robust admin feature for comprehensive oversight.",
    tags: ["React.js", "Redux Toolkit", "Node.js", "PostgreSQL", "LangChain", "AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
    featured: true,
    category: "AI"
  },
  {
    id: 3,
    title: "ManageKaro - Financial Platform",
    description: "Developed a scalable inventory management platform using React.js, Node.js, and microservices architecture. Optimized frontend performance with memoization, lazy loading, and code splitting. Implemented Redis caching and Pub/Sub mechanism for real-time stock updates.",
    tags: ["React.js", "Node.js", "Redis", "Microservices", "Pub/Sub", "Real-time"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
    featured: true,
    category: "Full Stack"
  }
];

const stats = [
  { label: "Years Experience", value: "3+", icon: Calendar, suffix: "" },
  { label: "Projects Delivered", value: "10+", icon: Rocket, suffix: "" },
  { label: "AI Systems Built", value: "5+", icon: Brain, suffix: "" },
  { label: "Technologies", value: "20+", icon: Code2, suffix: "" }
];

const testimonials = [
  {
    name: "Tech Lead",
    role: "SiriusB",
    text: "Suleman transformed our backend architecture with NestJS and Redis. His AI integration skills with LangChain are exceptional. The RAG pipeline he built improved our response accuracy by 40%.",
    avatar: "TL"
  },
  {
    name: "Product Manager",
    role: "Infini8ai",
    text: "Delivered our AI research platform ahead of schedule. Suleman's ability to combine full-stack development with AI engineering made him invaluable to our team.",
    avatar: "PM"
  },
  {
    name: "CTO",
    role: "Skylarks IT",
    text: "Suleman built secure, scalable APIs with excellent documentation. His JWT implementation and security protocols were production-ready from day one.",
    avatar: "CT"
  }
];

// ==================== 3D ANIMATION COMPONENTS ====================

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="shape-float absolute top-20 left-10 w-72 h-72 bg-ai-cyan/10 rounded-full blur-3xl" style={{ animationDelay: '0s' }} />
      <div className="shape-float absolute top-40 right-20 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl" style={{ animationDelay: '5s' }} />
      <div className="shape-float absolute bottom-20 left-1/3 w-80 h-80 bg-ai-pink/10 rounded-full blur-3xl" style={{ animationDelay: '10s' }} />
      <div className="shape-float absolute bottom-40 right-1/3 w-64 h-64 bg-ai-emerald/10 rounded-full blur-3xl" style={{ animationDelay: '15s' }} />

      {/* Geometric shapes */}
      <Hexagon className="absolute top-32 left-20 w-8 h-8 text-ai-cyan/20 animate-spin-slow" />
      <Triangle className="absolute top-48 right-32 w-6 h-6 text-ai-purple/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      <Square className="absolute bottom-32 left-40 w-5 h-5 text-ai-pink/20 animate-spin-slow" />
      <Diamond className="absolute top-1/2 right-20 w-7 h-7 text-ai-emerald/20 animate-spin-slow" />
      <Octagon className="absolute bottom-48 right-48 w-6 h-6 text-ai-cyan/20 animate-spin-slow" />
    </div>
  );
};

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const numericValue = parseInt(target.replace(/[^0-9]/g, ""));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  const displayValue = target.replace(/[0-9]+/, count.toString());
  return <span ref={ref} className="counter-value">{displayValue}{suffix}</span>;
};

const SkillBar3D = ({ skill, delay, index }) => {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill.level), delay * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, delay]);

  return (
    <div 
      ref={ref}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-medium text-sm text-ai-text">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-ai-cyan">{skill.level}%</span>
      </div>

      <div className="relative h-3 bg-ai-dark rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1500 ease-out"
          style={{ 
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: isHovered ? `0 0 20px ${skill.color}66` : 'none',
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-lg transition-opacity duration-300 -z-10"
        style={{
          opacity: isHovered ? 0.1 : 0,
          background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
        }}
      />
    </div>
  );
};

const ProjectCard3D = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 20;
    const y = (e.clientX - rect.left - rect.width / 2) / 20;
    setRotation({ x: -x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className="project-card-3d relative"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass rounded-2xl overflow-hidden border border-ai-border/50">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ai-dark via-ai-dark/50 to-transparent" />

          {project.featured && (
            <div className="absolute top-4 left-4 ai-badge px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-ai-cyan" />
              <span className="text-ai-cyan">Featured</span>
            </div>
          )}

          <div className="absolute top-4 right-4 bg-ai-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-ai-cyan border border-ai-cyan/30">
            {project.category}
          </div>

          <div className={`absolute inset-0 bg-ai-cyan/10 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <a href={project.github} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-ai-cyan/20 transition-all hover:scale-110">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href={project.live} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-ai-cyan/20 transition-all hover:scale-110">
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 group-hover:text-ai-cyan transition-colors">{project.title}</h3>
          <p className="text-sm text-ai-muted mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium bg-ai-dark border border-ai-border text-ai-muted hover:border-ai-cyan/50 hover:text-ai-cyan transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline3D = ({ exp, index, isLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 mb-12`}
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-cyan via-ai-purple to-ai-pink transform -translate-x-1/2" />

      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div 
          className={`glass rounded-2xl p-6 hover-lift transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {exp.type === 'current' && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-ai-emerald/20 text-ai-emerald border border-ai-emerald/30">
                Current
              </span>
            )}
            <span className="text-xs font-mono text-ai-cyan">{exp.period}</span>
          </div>

          <h3 className="font-bold text-lg mb-1">{exp.role}</h3>
          <p className="text-ai-cyan font-medium text-sm mb-3">{exp.company}</p>
          <p className="text-sm text-ai-muted mb-4 leading-relaxed">{exp.description}</p>

          <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {exp.skills.map(skill => (
              <span key={skill} className="px-2 py-1 rounded-md text-xs bg-ai-dark border border-ai-border text-ai-muted">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-ai-cyan shadow-lg shadow-ai-cyan/50 animate-pulse-glow" />
      </div>

      {/* Spacer for other side */}
      <div className="w-5/12" />
    </div>
  );
};

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [index, text, speed]);

  return (
    <span className="font-mono">
      {displayText}
      {!isComplete && <span className="animate-pulse text-ai-cyan">|</span>}
    </span>
  );
};

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-0 transition-opacity duration-300"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
};

// ==================== MAIN APP ====================
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-ai-darker text-ai-text relative">
      {/* Noise Overlay */}
      <div className="noise" />

      {/* Mouse Glow Effect */}
      <MouseGlow />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong border-b border-ai-border/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-9 h-9 bg-gradient-to-br from-ai-cyan to-ai-purple rounded-lg flex items-center justify-center animate-pulse-glow">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Suleman<span className="text-ai-cyan">.AI</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.id 
                      ? 'text-ai-cyan bg-ai-cyan/10 border border-ai-cyan/30' 
                      : 'text-ai-muted hover:text-ai-text hover:bg-ai-card'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-2 text-ai-muted hover:text-ai-cyan transition-colors hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 text-ai-muted hover:text-ai-cyan transition-colors hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-ai-cyan to-ai-purple text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-ai-cyan/25 hover:scale-105"
              >
                <Send className="w-4 h-4 inline mr-2" />
                Hire Me
              </button>
            </div>

            <button 
              className="md:hidden p-2 text-ai-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-strong border-t border-ai-border">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.id 
                      ? 'text-ai-cyan bg-ai-cyan/10' 
                      : 'text-ai-muted hover:text-ai-text'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <FloatingShapes />
        <ParticleField />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 ai-badge px-4 py-2 rounded-full text-sm font-medium mb-8 badge-glow">
              <Bot className="w-4 h-4 text-ai-cyan" />
              <span className="text-ai-cyan">AI Engineer & Full Stack Developer</span>
              <Sparkles className="w-4 h-4 text-ai-purple" />
            </div>

            {/* Main Title with 3D Effect */}
            <h1 className="hero-title font-bold mb-6 tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text-ai glitch" data-text="Muhammad Suleman">Muhammad Suleman</span>
            </h1>

            {/* Typing Effect */}
            <div className="text-xl sm:text-2xl md:text-3xl text-ai-muted font-mono mb-8 h-12">
              {typingComplete ? (
                <span>I build <span className="text-ai-cyan">AI-powered</span> web applications</span>
              ) : (
                <TypingEffect text="I build AI-powered web applications" speed={60} />
              )}
            </div>

            <p className="text-lg text-ai-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              3+ years of experience building intelligent systems with <span className="text-ai-cyan">NestJS</span>, 
              <span className="text-ai-purple"> React</span>, and <span className="text-ai-pink">LangChain</span>. 
              Specializing in RAG pipelines, microservices, and scalable backend architectures.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-ai-cyan to-ai-purple text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-ai-cyan/30 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border border-ai-border hover:border-ai-cyan text-ai-text px-8 py-4 rounded-xl font-semibold transition-all hover:bg-ai-cyan/5 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            {/* Stats with Animated Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass rounded-2xl p-6 hover-glow transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                >
                  <stat.icon className="w-6 h-6 text-ai-cyan mb-3 mx-auto" />
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-xs text-ai-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator text-ai-muted hover:text-ai-cyan transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 text-ai-cyan text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                About Me
              </div>
              <h2 className="section-title font-bold mb-6">
                Building the <span className="gradient-text-ai">Future</span> with AI & Code
              </h2>
              <p className="text-ai-muted mb-6 leading-relaxed">
                I'm a passionate <span className="text-ai-cyan font-medium">AI Engineer & Full Stack Developer</span> with 3+ years 
                of experience building intelligent web applications. My expertise spans from crafting beautiful React frontends 
                to designing scalable NestJS backends with AI integration.
              </p>
              <p className="text-ai-muted mb-8 leading-relaxed">
                I specialize in <span className="text-ai-purple font-medium">RAG pipelines</span>, 
                <span className="text-ai-pink font-medium"> microservices architecture</span>, and 
                <span className="text-ai-cyan font-medium"> high-performance APIs</span>. Currently working at SiriusB 
                building AI-focused backend systems with queue processing and real-time data handling.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass rounded-xl p-4 border border-ai-border/50">
                  <div className="text-2xl font-bold text-ai-cyan mb-1">3.7</div>
                  <div className="text-xs text-ai-muted">CGPA - Punjab University</div>
                </div>
                <div className="glass rounded-xl p-4 border border-ai-border/50">
                  <div className="text-2xl font-bold text-ai-purple mb-1">3.4</div>
                  <div className="text-xs text-ai-muted">CGPA - Virtual University</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['AI Integration', 'Microservices', 'Problem Solver', 'Team Player', 'Fast Learner'].map(trait => (
                  <span key={trait} className="px-4 py-2 glass rounded-lg text-sm font-medium text-ai-muted border border-ai-border/50 hover:border-ai-cyan/50 hover:text-ai-cyan transition-all">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* 3D Profile Card */}
            <div className="relative flex justify-center">
              <div className="relative w-80 h-80">
                {/* Orbiting skills */}
                <div className="absolute inset-0 animate-spin-slow">
                  {skills.frontend.slice(0, 4).map((skill, i) => (
                    <div 
                      key={skill.name}
                      className="absolute text-2xl"
                      style={{
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 4)}%`,
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 4)}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {skill.icon}
                    </div>
                  ))}
                </div>

                {/* Main Profile Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-ai-cyan/30 animate-morph">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Muhammad Suleman"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ai-dark/80 to-transparent" />
                </div>

                {/* Glow ring */}
                <div className="absolute inset-4 rounded-full border border-ai-cyan/20 animate-pulse-glow" />

                {/* Floating badges */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 ai-badge px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Bot className="w-3 h-3 text-ai-cyan" />
                  <span className="text-ai-cyan">AI Expert</span>
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 ai-badge px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-ai-purple" />
                  <span className="text-ai-purple">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Skills Section with 3D Cards */}
      <section id="skills" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-ai-cyan text-sm font-medium mb-4">
              <Cpu className="w-4 h-4" />
              Technical Expertise
            </div>
            <h2 className="section-title font-bold mb-4">
              My <span className="gradient-text-ai">Tech Stack</span>
            </h2>
            <p className="text-ai-muted max-w-2xl mx-auto">
              Technologies I use to build intelligent, scalable, and performant applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass rounded-2xl p-8 border-animate hover-glow transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-ai-cyan/20 to-ai-cyan/5 rounded-xl flex items-center justify-center border border-ai-cyan/30">
                  <Layers className="w-6 h-6 text-ai-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Frontend</h3>
                  <p className="text-xs text-ai-muted">User Interface & Experience</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.frontend.map((skill, i) => (
                  <SkillBar3D key={skill.name} skill={skill} delay={i} index={i} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass rounded-2xl p-8 border-animate hover-glow transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-ai-purple/20 to-ai-purple/5 rounded-xl flex items-center justify-center border border-ai-purple/30">
                  <Server className="w-6 h-6 text-ai-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Backend</h3>
                  <p className="text-xs text-ai-muted">APIs & Database Architecture</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.backend.map((skill, i) => (
                  <SkillBar3D key={skill.name} skill={skill} delay={i} index={i} />
                ))}
              </div>
            </div>

            {/* AI & DevOps */}
            <div className="glass rounded-2xl p-8 border-animate hover-glow transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-ai-pink/20 to-ai-pink/5 rounded-xl flex items-center justify-center border border-ai-pink/30">
                  <Brain className="w-6 h-6 text-ai-pink" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI & DevOps</h3>
                  <p className="text-xs text-ai-muted">Intelligence & Infrastructure</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.aiDevops.map((skill, i) => (
                  <SkillBar3D key={skill.name} skill={skill} delay={i} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-ai-cyan text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Portfolio
            </div>
            <h2 className="section-title font-bold mb-4">
              Featured <span className="gradient-text-ai">Projects</span>
            </h2>
            <p className="text-ai-muted max-w-2xl mx-auto">
              A selection of my work combining AI engineering with full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard3D key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href={`https://${personalInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ai-cyan hover:text-ai-purple font-medium transition-colors group"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-ai-cyan text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Career Journey
            </div>
            <h2 className="section-title font-bold mb-4">
              Work <span className="gradient-text-ai">Experience</span>
            </h2>
            <p className="text-ai-muted max-w-2xl mx-auto">
              My professional journey from MERN Stack to AI-focused backend engineering.
            </p>
          </div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <Timeline3D 
                key={exp.id} 
                exp={exp} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Testimonials */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-ai-cyan text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="section-title font-bold mb-4">
              What People <span className="gradient-text-ai">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 hover-glow transition-all duration-500 relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-ai-cyan/10 font-serif">"</div>
                <p className="text-ai-muted mb-6 relative z-10 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-ai-cyan to-ai-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-ai-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 text-ai-cyan text-sm font-medium mb-4">
                <Mail className="w-4 h-4" />
                Get In Touch
              </div>
              <h2 className="section-title font-bold mb-6">
                Let's Build <span className="gradient-text-ai">Something Amazing</span>
              </h2>
              <p className="text-ai-muted mb-8 leading-relaxed">
                Have an AI project or web application in mind? I'm always open to discussing 
                new opportunities, creative ideas, or ways to bring your vision to life.
              </p>

              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 glass rounded-xl border border-ai-border/50 hover:border-ai-cyan/50 transition-all group">
                  <div className="w-12 h-12 bg-ai-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-ai-cyan/30 transition-colors">
                    <Mail className="w-5 h-5 text-ai-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-ai-muted">Email</div>
                    <div className="font-medium">{personalInfo.email}</div>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 p-4 glass rounded-xl border border-ai-border/50 hover:border-ai-cyan/50 transition-all group">
                  <div className="w-12 h-12 bg-ai-purple/20 rounded-xl flex items-center justify-center group-hover:bg-ai-purple/30 transition-colors">
                    <Phone className="w-5 h-5 text-ai-purple" />
                  </div>
                  <div>
                    <div className="text-sm text-ai-muted">Phone</div>
                    <div className="font-medium">{personalInfo.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-xl border border-ai-border/50">
                  <div className="w-12 h-12 bg-ai-pink/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-ai-pink" />
                  </div>
                  <div>
                    <div className="text-sm text-ai-muted">Location</div>
                    <div className="font-medium">{personalInfo.location}</div>
                  </div>
                </div>

                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-xl border border-ai-border/50 hover:border-ai-cyan/50 transition-all group">
                  <div className="w-12 h-12 bg-ai-emerald/20 rounded-xl flex items-center justify-center group-hover:bg-ai-emerald/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-ai-emerald" />
                  </div>
                  <div>
                    <div className="text-sm text-ai-muted">LinkedIn</div>
                    <div className="font-medium">{personalInfo.linkedin}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-ai-border/50">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-ai-muted">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-ai-dark border border-ai-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ai-cyan transition-colors text-ai-text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-ai-muted">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-ai-dark border border-ai-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ai-cyan transition-colors text-ai-text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-ai-muted">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-ai-dark border border-ai-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ai-cyan transition-colors text-ai-text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-ai-muted">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-ai-dark border border-ai-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ai-cyan transition-colors resize-none text-ai-text"
                  />
                </div>
                <button 
                  type="button"
                  className="w-full bg-gradient-to-r from-ai-cyan to-ai-purple text-white py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-ai-cyan/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ai-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-ai-cyan to-ai-purple rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">Suleman<span className="text-ai-cyan">.AI</span></span>
            </div>

            <div className="text-sm text-ai-muted">
              © 2026 Muhammad Suleman. Built with React, Tailwind & AI.
            </div>

            <div className="flex items-center gap-4">
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="p-2 text-ai-muted hover:text-ai-cyan transition-colors hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 text-ai-muted hover:text-ai-cyan transition-colors hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 text-ai-muted hover:text-ai-cyan transition-colors hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;