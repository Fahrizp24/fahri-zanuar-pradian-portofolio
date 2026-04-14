'use client'

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Mari Terhubung
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-1">Email</h3>
                <a 
                  href="mailto:fahripradian@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  fahripradian@gmail.com
                </a>
              </div>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary-light text-primary-foreground transition-smooth"
              onClick={() => window.location.href = 'mailto:fahripradian@gmail.com'}
            >
              Kirim Email
            </Button>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-glow transition-all duration-300 animate-fade-in">
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-1">GitHub</h3>
                <a 
                  href="https://github.com/Fahrizp24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  github.com/Fahrizp24
                </a>
              </div>
            </div>
            <Button 
              variant="outline"
              className="w-full border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => window.open('https://github.com/Fahrizp24', '_blank')}
            >
              Kunjungi GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
