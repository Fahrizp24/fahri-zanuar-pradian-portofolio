import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/30 backdrop-blur-md border-t border-border py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <h3 className="text-2xl font-bold font-poppins text-foreground tracking-tight">
              Fahri Zanuar<br />
              <span className="text-primary">Pradian</span>
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Junior Web Developer Tersertifikasi BNSP & AI Enthusiast. 
              Mahasiswa Teknik Informatika Polinema yang berfokus pada inovasi digital.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Fahrizp24" target="_blank" className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:fahripradian@gmail.com" className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-xs">Navigasi</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Portofolio</a></li>
              <li><a href="#certification" className="text-muted-foreground hover:text-primary transition-colors">Sertifikasi</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-widest text-xs">Kontak</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Malang, Jawa Timur<br />Indonesia
            </p>
            <a href="mailto:fahripradian@gmail.com" className="text-sm text-primary font-semibold hover:underline">
              fahripradian@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Fahri Zanuar Pradian. Designed with precision.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Tech Stack</span>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <span className="text-[10px] font-bold">NEXT.JS</span>
               <span className="text-[10px] font-bold">REACT</span>
               <span className="text-[10px] font-bold">TAILWIND</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
