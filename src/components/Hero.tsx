'use client'

import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 animate-fade-in">
            <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={profilePhoto.src}
                alt="Fahri Zanuar Pradian"
                className="relative w-full h-full rounded-full border-4 border-primary shadow-glow object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-left order-1 lg:order-2 animate-fade-in-up space-y-8">
            <div>
              <p className="text-primary font-semibold text-lg mb-4 tracking-wide">HALO, SAYA</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-poppins leading-tight">
                Fahri Zanuar<br />Pradian
              </h1>
              <div className="space-y-2 mb-6">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Junior Web Developer
                </p>
                <p className="text-base text-muted-foreground/80">
                  Mahasiswa Teknik Informatika
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-lg">
                  <span className="text-xl">🏆</span>
                  <span className="text-foreground font-semibold text-sm">Tersertifikasi BNSP</span>
                </div>
                <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/30 px-4 py-2 rounded-lg">
                  <span className="text-xl">🤖</span>
                  <span className="text-foreground font-semibold text-sm">AI Ignition Certified</span>
                </div>
                <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-lg">
                  <span className="text-xl">🥈</span>
                  <span className="text-foreground font-semibold text-sm">Juara II Batur Geopark</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="default"
                className="bg-primary hover:bg-primary-light text-primary-foreground shadow-hover transition-smooth text-sm font-bold px-8 group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Proyek Saya
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth text-sm font-bold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hubungi Saya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
