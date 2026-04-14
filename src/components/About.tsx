import { Card } from "@/components/ui/card";
import { User, GraduationCap, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Tentang Saya
          </h2>
        </div>
        
        <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Mahasiswa Politeknik Negeri Malang dengan <span className="text-primary font-semibold">IPK 3.85</span>, memiliki passion dalam pengembangan sistem informasi dan teknologi web modern.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Adaptif dalam bekerja tim, berorientasi pada hasil, dan komunikator yang baik dengan kemampuan memecahkan masalah secara efektif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
