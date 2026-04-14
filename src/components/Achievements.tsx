'use client'

import { Trophy, Medal, BookOpen, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Juara II - Batur Geopark Literacy Competition",
      organizer: "Batur UNESCO Global Geopark",
      date: "Nov 2025",
      description: "Pemenang Juara II dalam kompetisi literasi tingkat nasional dengan judul esai 'Pembangunan Berkelanjutan di Batur Geopark Melalui Pendekatan Geo-Circular Living Lab'.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <section id="achievements" className="py-32 px-6 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Prestasi & Penghargaan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pengakuan atas dedikasi dan kompetensi dalam kompetisi tingkat nasional maupun internasional.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 shadow-card">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="bg-primary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors font-poppins">
                        {item.title}
                      </h3>
                      <span className="px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30">
                        {item.date}
                      </span>
                    </div>
                    
                    <p className="text-lg font-medium text-primary">
                      {item.organizer}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-2 pt-2 text-primary/80">
                      <Star className="w-4 h-4 fill-primary" />
                      <span className="text-sm font-medium italic">Batur UNESCO Global Geopark Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
