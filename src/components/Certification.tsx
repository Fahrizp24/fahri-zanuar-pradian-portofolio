import { Card } from "@/components/ui/card";
import { Award, CheckCircle2, ExternalLink, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certification = () => {
  return (
    <section id="certification" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Sertifikasi Profesional
          </h2>
        </div>
        
        <div className="space-y-12 max-w-3xl mx-auto">
          {/* BNSP Certification */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl" />
              <div className="relative bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-glow">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary blur-2xl rounded-full opacity-30" />
                    <div className="relative bg-gradient-to-br from-[#10b981] to-[#0ea5e9] p-8 rounded-2xl">
                      <Award className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg">
                      <span className="text-primary font-bold text-sm tracking-wide">BNSP CERTIFIED</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground font-poppins">
                      Junior Web Developer
                    </h3>
                    
                    <p className="text-lg text-muted-foreground">
                      Badan Nasional Sertifikasi Profesi
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">Standar kompetensi nasional web development</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">Validasi keahlian frontend dan backend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Ignition Certification */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-3xl" />
              <div className="relative bg-card border-2 border-secondary/30 rounded-2xl p-8 md:p-12 shadow-glow">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary blur-2xl rounded-full opacity-30" />
                    <div className="relative bg-gradient-to-br from-[#10b981] to-[#0ea5e9] p-8 rounded-2xl">
                      <Brain className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 px-4 py-2 rounded-lg">
                      <Sparkles className="w-4 h-4 text-secondary" />
                      <span className="text-secondary font-bold text-sm tracking-wide">GOOGLE & KUMPUL CERTIFIED</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground font-poppins">
                      AI Ignition Training
                    </h3>
                    
                    <p className="text-lg text-muted-foreground">
                      KUMPUL.ID, AVPN & Google.org
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">Penguasaan Generative AI & Large Language Models (LLMs)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">Penerapan Prompt Engineering & 30 Jam Pelatihan (JP)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
