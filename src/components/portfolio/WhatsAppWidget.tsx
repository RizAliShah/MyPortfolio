import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Smile } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Msg = { from: "user" | "ai"; text: string; time: string };

const suggested = ["Book a discovery call", "See pricing", "Show case studies", "Voice AI demo"];

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "ai", text: "👋 Hi! I'm Rizwan's AI assistant. Ask me anything about AI automation.", time: "now" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" }); }, [msgs, typing]);

  function send(text: string) {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: "user", text, time: "now" }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "ai", text: reply(text), time: "now" }]);
    }, 1200);
  }

  function reply(t: string) {
    const q = t.toLowerCase();
    if (q.includes("pricing")) return "Starter $1.5k · Growth $4k · Scale $10k+. Want me to send the deck?";
    if (q.includes("voice")) return "Voice AI handles calls 24/7 — bookings, support, qualification. I can demo one right now.";
    if (q.includes("book") || q.includes("call")) return "Perfect. Grab a slot here → cal.com/rizwan-ai";
    if (q.includes("case")) return "Restaurant AI saved 30hrs/week · Real estate AI booked 240 tours/mo · Invoice AI cut ops 70%.";
    return "Great question — I'll ping Rizwan and get back within the hour. Meanwhile, want to book a call?";
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[340px] h-[500px] rounded-3xl overflow-hidden glass-strong flex flex-col shadow-2xl"
          >
            <div className="p-4 flex items-center gap-3" style={{background:"linear-gradient(135deg,#075E54,#128C7E)"}}>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">R</div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#075E54]"/>
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">Rizwan AI Assistant</div>
                <div className="text-white/70 text-xs">online · typically replies instantly</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white"><X size={18}/></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{background:"#0b141a"}}>
              {msgs.map((m,i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${m.from === "user" ? "bg-[#005c4b] text-white rounded-br-sm" : "bg-[#202c33] text-white rounded-bl-sm"}`}>
                    {m.text}
                    <div className="text-[10px] opacity-60 mt-1 text-right">{m.time}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-[#202c33] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    {[0,1,2].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse-node" style={{animationDelay:`${i*0.15}s`}}/>)}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-2 pt-2">
                {suggested.map(s => (
                  <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition">{s}</button>
                ))}
              </div>
            </div>

            <div className="p-3 flex items-center gap-2" style={{background:"#1f2c33"}}>
              <button className="text-white/60 hover:text-white"><Smile size={20}/></button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Type a message"
                className="flex-1 bg-[#2a3942] text-white text-sm rounded-full px-4 py-2 outline-none placeholder:text-white/40"
              />
              {input ? (
                <button onClick={() => send(input)} className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white"><Send size={16}/></button>
              ) : (
                <button className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white"><Mic size={16}/></button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative"
        style={{background:"linear-gradient(135deg,#25D366,#128C7E)"}}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400/40"/>
        {open ? <X className="text-white relative" size={26}/> : <MessageCircle className="text-white relative" size={26}/>}
      </motion.button>
    </div>
  );
}
