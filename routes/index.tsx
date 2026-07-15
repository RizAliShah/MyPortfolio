import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import {
  Bot, Mic, Workflow, Database, Zap, Calendar, Mail, Webhook, Braces, Cpu, Sparkles,
  ArrowRight, ArrowUpRight, Check, Star, Phone, MessageSquare, Building2, ShoppingCart,
  Stethoscope, UtensilsCrossed, Home as HomeIcon, Rocket, Menu, X, Brain, GitBranch,
  Play, TrendingUp, Clock, Users, Target, LineChart, Github, Linkedin, Twitter, Send
} from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";
import { WorkflowCanvas } from "@/components/portfolio/WorkflowCanvas";
import { WhatsAppWidget } from "@/components/portfolio/WhatsAppWidget";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "alpha", label: "A.L.P.H.A" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`glass rounded-2xl px-5 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-2xl" : ""}`}>
          <a href="#" className="flex items-center gap-2 font-display font-bold">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,#0077B6,#CAF0F8)"}}>
              <Bot size={18} className="text-[#02031E]"/>
            </div>
            <span className="text-slate-900">Rizwan<span className="text-[#0077B6]">.ai</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map(n => (
              <a key={n.id} href={`#${n.id}`} className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 transition rounded-lg hover:bg-slate-900/5">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 transition hover:opacity-90"
              style={{background:"linear-gradient(135deg,#0077B6,#03045E)", boxShadow:"0 8px 30px -8px #0077B6"}}>
              Book Call <ArrowRight size={14}/>
            </a>
            <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
              className="md:hidden mt-2 glass rounded-2xl p-3 flex flex-col">
              {nav.map(n => <a key={n.id} href={`#${n.id}`} onClick={()=>setOpen(false)} className="px-3 py-2 text-slate-700">{n.label}</a>)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function MouseGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        x: sx, y: sy,
        background: "radial-gradient(circle, rgba(0,119,182,0.15), transparent 60%)",
      }}
    />
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{background:"#0077B6"}}/>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{background:"#CAF0F8"}}/>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-slate-700">Available for AI automation projects · Q3 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-slate-900">
            I build <span className="text-gradient">AI Employees</span> that work
            <br/> 24/7 so businesses scale <em className="not-italic text-gradient">without hiring.</em>
          </h1>
          <div className="mt-6 text-lg md:text-xl text-slate-600 font-medium h-8">
            <span className="text-slate-500">Specialized in </span>
            <TypeAnimation
              sequence={[
                "AI Agents", 1800,
                "Voice Automation", 1800,
                "Workflow Automation", 1800,
                "Business Automation", 1800,
                "Lead Generation", 1800,
              ]}
              speed={45}
              repeat={Infinity}
              wrapper="span"
              className="text-[#0077B6] font-semibold"
            />
          </div>
          <p className="mt-6 text-slate-500 max-w-lg">
            I design AI Agents, Voice AI systems, Workflow Automations and No-Code solutions
            using modern platforms — turning manual ops into a digital workforce.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-slate-900 transition hover:scale-[1.02] glow"
              style={{background:"linear-gradient(135deg,#0077B6,#03045E)"}}>
              <Phone size={16}/> Book Discovery Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition"/>
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-slate-900 glass hover:bg-slate-900/10 transition">
              <Play size={14}/> View Projects
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "50+", l: "AI systems shipped" },
              { v: "12M", l: "Automated actions" },
              { v: "70%", l: "Avg ops reduction" },
            ].map((s,i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.4+i*0.1}}
                className="glass rounded-2xl p-4">
                <div className="text-2xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-slate-500 mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.2}}
          className="relative">
          <div className="relative rounded-3xl overflow-hidden glass-strong glow animate-float-slow">
            <img src={heroImg} alt="AI automation control room" className="w-full h-auto"/>
            <div className="absolute inset-0" style={{background:"linear-gradient(180deg, transparent 40%, #F8FAFF)"}}/>
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"linear-gradient(135deg,#0077B6,#CAF0F8)"}}>
                <Sparkles size={18} className="text-[#02031E]"/>
              </div>
              <div className="flex-1 text-xs">
                <div className="text-slate-900 font-semibold">AI Workflow · Live</div>
                <div className="text-slate-500">Processing 1,284 leads/hr · 99.2% accuracy</div>
              </div>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            </div>
          </div>

          <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:0.8}}
            className="absolute -left-6 top-1/3 glass rounded-2xl p-3 hidden md:flex items-center gap-2 shadow-xl">
            <Mic size={16} className="text-[#0077B6]"/>
            <span className="text-xs text-slate-700">Voice Agent · answering</span>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:1}}
            className="absolute -right-4 bottom-1/4 glass rounded-2xl p-3 hidden md:flex items-center gap-2 shadow-xl">
            <Workflow size={16} className="text-[#0077B6]"/>
            <span className="text-xs text-slate-700">n8n · 47 nodes running</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow: string; title: React.ReactNode; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-[#0077B6] mb-4">
            <Sparkles size={12}/> {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-4 text-slate-500">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>Engineering the <span className="text-gradient">digital workforce</span></>}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-3xl p-8">
          <p className="text-slate-700 text-lg leading-relaxed">
            I'm <b className="text-slate-900">Rizwan Ali Shah</b>, an AI Automation Engineer helping startups, agencies and
            enterprises replace repetitive work with intelligent systems. From voice agents answering calls at 3am,
            to AI SDRs qualifying leads, to invoice bots processing thousands of documents — I ship AI employees
            that scale operations without headcount.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Brain, label: "AI Agents" },
              { icon: Mic, label: "Voice AI" },
              { icon: Workflow, label: "Automations" },
            ].map((c,i) => (
              <div key={i} className="rounded-2xl p-4 border border-slate-900/10 bg-slate-900/[0.02]">
                <c.icon className="text-[#0077B6]" size={22}/>
                <div className="mt-2 text-slate-900 font-semibold">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div className="text-5xl font-display font-black text-gradient">4yrs</div>
            <div className="text-slate-500 mt-1">shipping automation systems</div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            {["ISO-27001 aware","GDPR compliant delivery","Senior-level Slack access","Async-first"].map(t => (
              <div key={t} className="flex items-center gap-2"><Check size={14} className="text-[#0077B6]"/> {t}</div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const stack = [
  "n8n","Make","Zapier","OpenAI","Anthropic","Vapi","ElevenLabs","Retell","Twilio","Supabase",
  "Pinecone","LangChain","LlamaIndex","Airtable","HubSpot","Salesforce","Stripe","Notion","Slack","Google Workspace",
  "Apollo","Clay","Instantly","Bland","GoHighLevel","Cal.com","Webhooks","Postgres","OpenRouter","Deepgram",
];

function TechMarquee() {
  return (
    <section className="py-10 border-y border-slate-900/5 overflow-hidden">
      <div className="flex animate-marquee gap-4 whitespace-nowrap">
        {[...stack, ...stack].map((s,i) => (
          <div key={i} className="glass rounded-full px-5 py-2 text-sm text-slate-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CAF0F8]"/>{s}
          </div>
        ))}
      </div>
    </section>
  );
}

const whyChoose = [
  { icon: Rocket, t: "Ship in 2 weeks", d: "Not 6 months. Systems live and generating ROI before month-end." },
  { icon: Target, t: "Business-first", d: "I speak ROI, not just tokens. Every workflow tied to a P&L outcome." },
  { icon: Brain, t: "Modern stack", d: "GPT-4.1, Claude, Vapi, n8n, Retell, Supabase — the right tool per job." },
  { icon: Zap, t: "Own your IP", d: "You get the workflows, prompts, code. No black-box vendor lock-in." },
  { icon: Users, t: "Human handoff", d: "Every agent knows when to escalate. No robot walls between you and customers." },
  { icon: LineChart, t: "Metrics baked in", d: "Dashboards, cost per action, success rates. You'll see the receipts." },
];

function WhyChoose() {
  return (
    <Section eyebrow="Why choose me" title={<>Senior engineering, <span className="text-gradient">shipped fast</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {whyChoose.map((w,i) => (
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
            className="glass rounded-3xl p-6 hover:bg-slate-900/[0.04] transition group">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition"
              style={{background:"linear-gradient(135deg,#0077B6,#03045E)"}}>
              <w.icon size={20} className="text-slate-900"/>
            </div>
            <div className="text-slate-900 font-semibold text-lg">{w.t}</div>
            <div className="text-slate-500 text-sm mt-2">{w.d}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const services = [
  { icon: Bot, t: "AI Agents", d: "Autonomous agents for sales, support, research, ops. Memory, tools, guardrails.", tags:["GPT-4.1","Claude","LangGraph"] },
  { icon: Mic, t: "Voice AI", d: "Inbound & outbound voice agents. Bookings, qualification, support — natural, fast.", tags:["Vapi","Retell","ElevenLabs"] },
  { icon: Workflow, t: "Workflow Automation", d: "End-to-end no-code pipelines connecting your stack. n8n, Make, Zapier.", tags:["n8n","Make","APIs"] },
  { icon: MessageSquare, t: "AI Chatbots", d: "Website, WhatsApp, Instagram chat agents trained on your business.", tags:["RAG","Pinecone","Twilio"] },
  { icon: TrendingUp, t: "Lead Generation", d: "AI-powered outbound: scrape → enrich → personalize → send → follow-up.", tags:["Apollo","Clay","Instantly"] },
  { icon: Database, t: "Custom AI SaaS", d: "Purpose-built AI micro-apps on top of your data. Auth, billing, dashboards.", tags:["Supabase","Next.js","Stripe"] },
];

function Services() {
  return (
    <Section id="services" eyebrow="Services" title={<>Six ways I turn ops into <span className="text-gradient">software</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s,i) => (
          <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
            className="relative neon-border glass rounded-3xl p-7 overflow-hidden group">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition" style={{background:"#0077B6"}}/>
            <div className="relative">
              <s.icon size={30} className="text-[#0077B6]"/>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{s.t}</h3>
              <p className="mt-2 text-slate-500 text-sm">{s.d}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map(t => <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-slate-900/5 text-slate-600 border border-slate-900/10">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const projects = [
  {
    industry: "Restaurant",
    icon: UtensilsCrossed,
    t: "AI Voice Reservation System",
    problem: "Missed 40% of after-hours reservation calls. Losing $8k/week.",
    solution: "Vapi-powered voice agent takes calls 24/7, checks calendar, confirms via SMS.",
    stack: ["Vapi","GPT-4.1","Twilio","Google Calendar","n8n"],
    impact: [{k:"ROI", v:"12x"},{k:"Calls handled", v:"3,400/mo"},{k:"Hours saved", v:"30/wk"}],
  },
  {
    industry: "Real Estate",
    icon: HomeIcon,
    t: "Property Lead Qualifier",
    problem: "SDR team drowning in unqualified inquiries.",
    solution: "AI qualifies leads on WhatsApp, books tours, syncs to CRM with warmth score.",
    stack: ["OpenAI","WhatsApp API","HubSpot","Supabase"],
    impact: [{k:"Tours booked", v:"240/mo"},{k:"Response time", v:"12s"},{k:"CAC drop", v:"-58%"}],
  },
  {
    industry: "SaaS",
    icon: Rocket,
    t: "Autonomous SDR Agent",
    problem: "Cold outbound wasn't converting. Manual research killed rep time.",
    solution: "Agent researches accounts, drafts personalized emails, follows up, books meetings.",
    stack: ["Claude","Apollo","Clay","Instantly","n8n"],
    impact: [{k:"Reply rate", v:"22%"},{k:"Meetings/mo", v:"85"},{k:"Cost per lead", v:"$3.40"}],
  },
  {
    industry: "Healthcare",
    icon: Stethoscope,
    t: "Patient Intake AI",
    problem: "Front desk overwhelmed, 20min avg intake, HIPAA constraints.",
    solution: "Voice + form AI collects intake, verifies insurance, schedules — all HIPAA-safe.",
    stack: ["Retell","Deepgram","Twilio","Supabase"],
    impact: [{k:"Intake time", v:"3min"},{k:"No-shows", v:"-42%"},{k:"NPS", v:"+31"}],
  },
  {
    industry: "E-commerce",
    icon: ShoppingCart,
    t: "AI Support Concierge",
    problem: "Tickets 5x'd during BFCM. Team drowning.",
    solution: "RAG chatbot handles 78% of tickets, escalates smartly with full context.",
    stack: ["OpenAI","Pinecone","Zendesk","Shopify"],
    impact: [{k:"Deflection", v:"78%"},{k:"CSAT", v:"4.7/5"},{k:"Savings", v:"$180k/yr"}],
  },
  {
    industry: "Finance",
    icon: Braces,
    t: "Invoice OCR + ERP Sync",
    problem: "AP team processing 2,000 invoices/month by hand.",
    solution: "Email → OCR → AI extract → validate → post to ERP with approval routing.",
    stack: ["GPT-4 Vision","n8n","QuickBooks","Slack"],
    impact: [{k:"Accuracy", v:"99.4%"},{k:"Time per invoice", v:"6s"},{k:"Ops cut", v:"-70%"}],
  },
];

function Projects() {
  const [active, setActive] = useState<typeof projects[number] | null>(null);
  return (
    <Section id="projects" eyebrow="Projects" title={<>Systems shipped, <span className="text-gradient">ROI proven</span></>} subtitle="Six live case studies across industries. Click any card for the full workflow.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p,i) => (
          <motion.button key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
            onClick={() => setActive(p)}
            className="text-left glass rounded-3xl p-6 hover:bg-slate-900/[0.05] transition group relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{background:"linear-gradient(135deg,#0077B6,#03045E)"}}>
                <p.icon size={20} className="text-slate-900"/>
              </div>
              <ArrowUpRight className="text-slate-500 group-hover:text-[#0077B6] group-hover:rotate-45 transition" size={20}/>
            </div>
            <div className="text-xs uppercase tracking-widest text-[#0077B6]/80 mt-4">{p.industry}</div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{p.t}</h3>
            <p className="text-sm text-slate-500 mt-2 line-clamp-2">{p.solution}</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {p.impact.map((m,j) => (
                <div key={j} className="rounded-lg bg-slate-900/5 p-2 text-center">
                  <div className="text-sm font-bold text-slate-900">{m.v}</div>
                  <div className="text-[9px] text-slate-500 uppercase mt-0.5">{m.k}</div>
                </div>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <motion.div initial={{scale:0.9,y:20}} animate={{scale:1,y:0}} exit={{scale:0.9,y:20}}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-3xl w-full p-8 my-auto">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#0077B6]">{active.industry}</div>
                  <h3 className="text-3xl font-bold text-slate-900 mt-1">{active.t}</h3>
                </div>
                <button onClick={()=>setActive(null)} className="text-slate-500 hover:text-slate-900"><X/></button>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 bg-red-500/10 border border-red-500/20">
                  <div className="text-xs uppercase text-red-300/80">Problem</div>
                  <div className="text-slate-700 text-sm mt-1">{active.problem}</div>
                </div>
                <div className="rounded-2xl p-4 bg-green-500/10 border border-green-500/20">
                  <div className="text-xs uppercase text-green-300/80">Solution</div>
                  <div className="text-slate-700 text-sm mt-1">{active.solution}</div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden glass p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Workflow</div>
                <div className="h-56"><WorkflowCanvas/></div>
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase text-slate-500">Tech Stack</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {active.stack.map(s => <span key={s} className="text-xs px-3 py-1.5 rounded-lg glass text-slate-700">{s}</span>)}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {active.impact.map((m,i)=>(
                  <div key={i} className="rounded-2xl p-4 glass text-center">
                    <div className="text-2xl font-bold text-gradient">{m.v}</div>
                    <div className="text-xs text-slate-500 mt-1 uppercase">{m.k}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function CaseStudies() {
  const cases = [
    { logo:"Acme Restaurants", quote:"Rizwan's voice agent literally saved our weekend business.", metric:"$96k recovered / quarter" },
    { logo:"Northstar Realty", quote:"Our SDRs now just close. AI handles everything before the tour.", metric:"3.2x pipeline in 90 days" },
    { logo:"HelixOps SaaS", quote:"He replaced a 4-person SDR team with one agent + one closer.", metric:"$420k saved / year" },
  ];
  return (
    <Section eyebrow="Case Studies" title={<>Real numbers, <span className="text-gradient">real teams</span></>}>
      <div className="grid md:grid-cols-3 gap-5">
        {cases.map((c,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
            className="glass rounded-3xl p-7">
            <div className="text-sm font-semibold text-[#0077B6]">{c.logo}</div>
            <p className="mt-4 text-slate-900/85 text-lg leading-snug">"{c.quote}"</p>
            <div className="mt-6 flex items-center gap-2 text-slate-900 font-bold">
              <TrendingUp size={16} className="text-[#0077B6]"/> {c.metric}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const alpha = [
  { l:"A", w:"Assess", d:"Audit your ops. Find the 3 workflows worth automating first." },
  { l:"L", w:"Layout", d:"Blueprint the architecture — models, tools, guardrails, cost ceilings." },
  { l:"P", w:"Prototype", d:"Ship a working pilot in 7-10 days. Real data, real decisions." },
  { l:"H", w:"Harden", d:"Add retries, monitoring, evals, human-in-the-loop, cost caps." },
  { l:"A", w:"Amplify", d:"Roll out company-wide. Dashboards, training, ownership handover." },
];

function AlphaFramework() {
  return (
    <Section id="alpha" eyebrow="Methodology" title={<>The <span className="text-gradient">A.L.P.H.A</span> Framework</>} subtitle="How I go from zero to a live AI system in 2 weeks — repeatable, senior-grade, no chaos.">
      <div className="grid md:grid-cols-5 gap-4 relative">
        {alpha.map((a,i) => (
          <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
            className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -top-4 -right-2 text-[100px] font-black text-slate-900/[0.04] leading-none">{a.l}</div>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-slate-900 text-lg"
                style={{background:"linear-gradient(135deg,#0077B6,#03045E)"}}>{a.l}</div>
              <div className="mt-4 text-slate-900 font-bold text-lg">{a.w}</div>
              <div className="mt-1 text-slate-500 text-sm">{a.d}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Arsenal() {
  const groups = [
    { t:"LLMs", items:["GPT-4.1","Claude 3.7","Gemini 2","Llama 3","OpenRouter"], icon: Brain },
    { t:"Voice", items:["Vapi","Retell","ElevenLabs","Deepgram","Twilio"], icon: Mic },
    { t:"Automation", items:["n8n","Make","Zapier","Pipedream","Trigger.dev"], icon: Workflow },
    { t:"Data", items:["Supabase","Postgres","Pinecone","Airtable","Weaviate"], icon: Database },
    { t:"Outbound", items:["Apollo","Clay","Instantly","Smartlead","LinkedIn API"], icon: Send },
    { t:"Integrations", items:["Stripe","HubSpot","Salesforce","Slack","Notion"], icon: Webhook },
  ];
  return (
    <Section eyebrow="Technical Arsenal" title={<>Every tool, <span className="text-gradient">every layer</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
            className="glass rounded-3xl p-6">
            <div className="flex items-center gap-3">
              <g.icon className="text-[#0077B6]" size={22}/>
              <div className="text-slate-900 font-bold text-lg">{g.t}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map(it => <span key={it} className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/5 border border-slate-900/10 text-slate-700">{it}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    { y:"2026 — Now", t:"Independent AI Automation Engineer", d:"Shipping AI systems for 20+ clients across 6 industries." },
    { y:"2024 — 2026", t:"Automation Lead · Growth Agency", d:"Built the AI ops division. $2M ARR from AI-first services." },
    { y:"2023 — 2024", t:"No-Code Consultant", d:"Delivered 40+ workflow automations on n8n / Make." },
    { y:"2022 — 2023", t:"Full-Stack Developer", d:"React / Node backgrounds — the reason my automations don't break." },
  ];
  return (
    <Section eyebrow="Experience" title={<>Four years of <span className="text-gradient">shipping systems</span></>}>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#0077B6] via-[#CAF0F8] to-transparent"/>
        {items.map((it,i)=>(
          <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
            className="relative pl-12 pb-10">
            <div className="absolute left-2 top-2 w-4 h-4 rounded-full ring-4 ring-white" style={{background:"linear-gradient(135deg,#0077B6,#CAF0F8)"}}/>
            <div className="text-xs uppercase tracking-widest text-[#0077B6]">{it.y}</div>
            <div className="text-xl text-slate-900 font-bold mt-1">{it.t}</div>
            <div className="text-slate-500 mt-1">{it.d}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const pricing = [
  { t:"Starter", p:"$1,500", d:"One workflow, live in 7 days.", f:["1 AI workflow or agent","Basic integrations (3)","1 revision round","30-day support"], hi:false },
  { t:"Growth", p:"$4,000", d:"Multi-agent system for scaling teams.", f:["3 AI workflows / agents","Voice or Chat agent","Unlimited integrations","Custom dashboard","60-day support","2 revision rounds"], hi:true },
  { t:"Scale", p:"$10k+", d:"Full digital workforce build-out.", f:["Unlimited workflows","Dedicated AI engineer","Enterprise integrations","SLA + monitoring","Team training","Retainer available"], hi:false },
];

function Pricing() {
  return (
    <Section id="pricing" eyebrow="Pricing" title={<>Straight pricing, <span className="text-gradient">no games</span></>} subtitle="Fixed-scope projects. You know the number before we start.">
      <div className="grid md:grid-cols-3 gap-5">
        {pricing.map((p,i)=>(
          <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
            className={`rounded-3xl p-8 relative ${p.hi ? "neon-border glow" : "glass"}`}
            style={p.hi ? {background:"linear-gradient(180deg, rgba(0,119,182,0.2), rgba(3,4,94,0.4))"} : undefined}>
            {p.hi && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full text-slate-900 font-semibold" style={{background:"linear-gradient(135deg,#0077B6,#CAF0F8)"}}>Most popular</div>}
            <div className="text-sm text-slate-600">{p.t}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <div className="text-5xl font-black text-slate-900">{p.p}</div>
            </div>
            <div className="mt-2 text-slate-500 text-sm">{p.d}</div>
            <div className="mt-6 space-y-2">
              {p.f.map(f => <div key={f} className="flex items-center gap-2 text-slate-700 text-sm"><Check size={14} className="text-[#0077B6]"/> {f}</div>)}
            </div>
            <a href="#contact" className={`mt-8 block text-center rounded-xl py-3 font-semibold transition ${p.hi ? "text-slate-900" : "text-slate-900 glass hover:bg-slate-900/10"}`}
              style={p.hi ? {background:"linear-gradient(135deg,#0077B6,#03045E)"} : undefined}>
              Get started
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const tests = [
  { n:"Sarah Chen", r:"COO · Acme Restaurants", s:"Rizwan's voice agent runs our entire after-hours booking. We stopped losing revenue overnight. Literally." },
  { n:"Marcus Webb", r:"Founder · HelixOps", s:"He rebuilt our whole outbound in 2 weeks. Cost per meeting dropped 68%. This isn't hype — I saw the invoices." },
  { n:"Priya Anand", r:"Head of Ops · Northstar", s:"Every ops call now starts with 'what would Rizwan automate?' That's how deep the shift went." },
  { n:"Ben Ortiz", r:"CTO · FinFlow", s:"Senior engineer wrapped in a no-code delivery model. Rare combo. Would hire again 10/10." },
];

function Testimonials() {
  return (
    <Section eyebrow="Testimonials" title={<>Founders <span className="text-gradient">who shipped</span></>}>
      <div className="grid md:grid-cols-2 gap-5">
        {tests.map((t,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
            className="glass rounded-3xl p-7">
            <div className="flex gap-1">{[...Array(5)].map((_,j) => <Star key={j} size={14} className="text-[#0077B6] fill-[#CAF0F8]"/>)}</div>
            <p className="mt-4 text-slate-900/85 text-lg leading-snug">"{t.s}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#02031E]" style={{background:"linear-gradient(135deg,#CAF0F8,#0077B6)"}}>
                {t.n.split(" ").map(x=>x[0]).join("")}
              </div>
              <div>
                <div className="text-slate-900 font-semibold text-sm">{t.n}</div>
                <div className="text-slate-500 text-xs">{t.r}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const faqs = [
  { q:"How fast can you ship?", a:"First working pilot in 7-10 days. Full production in 2-4 weeks depending on scope." },
  { q:"Do I own the workflows?", a:"Yes. All prompts, workflows, code, and configs are yours. No black boxes, no vendor lock-in." },
  { q:"Which platforms do you use?", a:"Best-tool-for-the-job: n8n, Make, Vapi, Retell, OpenAI, Claude, Supabase. I don't marry a platform." },
  { q:"What happens if the AI makes a mistake?", a:"Every system I ship has evals, monitoring, cost caps, and human-in-the-loop escalation on risky actions." },
  { q:"Do you offer retainers?", a:"Yes. Post-launch retainers start at $2k/mo — monitoring, tweaks, new nodes, priority Slack." },
  { q:"Where are you based?", a:"Remote-first. I work with clients globally, async-heavy, with 2 daily overlap hours in any timezone." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title={<>Common <span className="text-gradient">questions</span></>}>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f,i)=>(
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button onClick={()=>setOpen(open===i?null:i)} className="w-full flex items-center justify-between p-5 text-left">
              <span className="text-slate-900 font-semibold">{f.q}</span>
              <span className={`text-[#0077B6] transition ${open===i?"rotate-45":""}`}><X size={18}/></span>
            </button>
            <AnimatePresence>
              {open===i && (
                <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
                  className="overflow-hidden">
                  <div className="px-5 pb-5 text-slate-600 text-sm">{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build your <span className="text-gradient">digital workforce</span></>} subtitle="Reply within 4 hours on weekdays. Free 30-min discovery — no pitch, just diagnostics.">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-slate-900">Start a project</h3>
          <p className="text-slate-500 mt-2 text-sm">Tell me the workflow you'd like to automate.</p>
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} className="mt-6 space-y-3">
            <input required placeholder="Full name" className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#0077B6]"/>
            <input required type="email" placeholder="Work email" className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#0077B6]"/>
            <input placeholder="Company" className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#0077B6]"/>
            <textarea required rows={4} placeholder="What workflow do you want to automate?" className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-[#0077B6]"/>
            <button className="w-full rounded-xl py-3.5 font-semibold text-slate-900 transition hover:opacity-90"
              style={{background:"linear-gradient(135deg,#0077B6,#03045E)"}}>
              {sent ? "✓ Received — I'll reply within 4 hours" : "Send message"}
            </button>
          </form>
        </div>
        <div className="space-y-4">
          {[
            { icon: Calendar, t:"Book a call", d:"cal.com/rizwan-ai", href:"#" },
            { icon: Mail, t:"Email", d:"rizwan@rizwan.ai", href:"mailto:rizwan@rizwan.ai" },
            { icon: MessageSquare, t:"WhatsApp", d:"Chat with my AI concierge", href:"#" },
            { icon: Linkedin, t:"LinkedIn", d:"/in/rizwan-ali-shah", href:"#" },
          ].map((c,i)=>(
            <a key={i} href={c.href} className="flex items-center gap-4 glass rounded-3xl p-5 hover:bg-slate-900/[0.05] transition group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:"linear-gradient(135deg,#0077B6,#03045E)"}}>
                <c.icon size={20} className="text-slate-900"/>
              </div>
              <div className="flex-1">
                <div className="text-slate-900 font-semibold">{c.t}</div>
                <div className="text-slate-500 text-sm">{c.d}</div>
              </div>
              <ArrowUpRight className="text-slate-500 group-hover:text-[#0077B6] transition"/>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-900/10 mt-10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold text-slate-900">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,#0077B6,#CAF0F8)"}}>
            <Bot size={14} className="text-[#02031E]"/>
          </div>
          Rizwan.ai
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Rizwan Ali Shah. Building the digital workforce.</div>
        <div className="flex gap-3">
          {[Github, Linkedin, Twitter].map((I,i)=>(
            <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-600 hover:text-slate-900 transition"><I size={16}/></a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="relative overflow-hidden">
      <MouseGlow/>
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left" style={{scaleX, background:"linear-gradient(90deg,#0077B6,#CAF0F8)"}}/>
      <Navbar/>
      <main className="relative z-10">
        <Hero/>
        <About/>
        <TechMarquee/>
        <WhyChoose/>
        <Services/>
        <Projects/>
        <CaseStudies/>
        <AlphaFramework/>
        <Arsenal/>
        <Experience/>
        <Pricing/>
        <Testimonials/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
      <WhatsAppWidget/>
    </div>
  );
}
