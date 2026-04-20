import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Eye } from "lucide-react";

const Projects = () => {
  const webProjects = [
    {
      title: "AI Word to Google Form Converter",
      description: "Aplikasi web cerdas untuk mengubah dokumen Word/DOCX menjadi Google Form secara otomatis yang terintegrasi dengan Gemini AI.",
      tech: ["Next.js", "React", "Gemini AI", "Tailwind"],
      github: "https://github.com/Fahrizp24/word-to-form-nextjs-app",
      link: "https://word-to-form-nextjs-app.vercel.app/"
    },
    {
      title: "Sistem Informasi Akademik",
      description: "Aplikasi web untuk manajemen data akademik dengan fitur lengkap termasuk dashboard interaktif, manajemen mahasiswa, dan pelaporan",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Fahrizp24"
    },
    {
      title: "Sistem Pencatatan Prestasi Mahasiswa JTI Polinema",
      description: "Sistem pencatatan dan manajemen prestasi mahasiswa Jurusan Teknologi Informasi Politeknik Negeri Malang",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Fahrizp24/SistemPencatatanPrestasiMahasiswaJTIPolinema"
    },
    {
      title: "Sistem Manajemen Pelaporan dan Perbaikan Fasilitas Kampus",
      description: "Platform untuk melaporkan dan mengelola perbaikan fasilitas kampus dengan tracking status real-time",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Fahrizp24/Sistem-Manajemen-Pelaporan-dan-Perbaikan-Fasilitas-Kampus"
    },
    {
      title: "Blog CMS",
      description: "Content Management System untuk blog dengan rich text editor, media management, dan SEO optimization",
      tech: ["WordPress", "PHP", "MySQL"],
      github: "https://github.com/Fahrizp24",
      link: "https://pantaujatim.com"
    },
    {
      title: "Landing Page Portfolio",
      description: "Responsive landing page dengan animasi smooth, optimized performance, dan modern UI design",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/Fahrizp24"
    }
  ];

  const cvProjects = [
    {
      title: "Vision AI: Transformasi Citra Kartu Mahasiswa Menjadi Data Digital",
      description: "Sistem Computer Vision untuk mengekstrak dan mentransformasi data dari citra kartu mahasiswa menjadi format digital secara otomatis",
      tech: ["Python", "OpenCV", "OCR", "Deep Learning"],
      link: "https://colab.research.google.com/drive/1-4Cu1jcQZe_vvCXYAttEUYi-flQEJB0d?usp=sharing"
    },
    {
      title: "Emotion AI: Deteksi & Klasifikasi Ekspresi Wajah Real-Time",
      description: "Sistem AI untuk mendeteksi dan mengklasifikasikan ekspresi wajah secara real-time menggunakan teknik Computer Vision dan Deep Learning",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
      link: "https://colab.research.google.com/drive/1TTYUxkTY1sw-xbjYxfhccRGTgoOmaWHk?usp=sharing"
    }
  ];

  const ProjectCard = ({ project, index }: { project: { title: string; description: string; tech: string[]; github?: string; link?: string }, index: number }) => (
    <div 
      className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-glow transition-all duration-300 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col h-full space-y-4">
        <div className="flex items-start justify-between">
          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Code className="w-6 h-6 text-primary" />
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
            Portofolio Proyek
          </h2>
        </div>

        {/* Web Development Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Code className="w-5 h-5 text-primary" />
            </div>
            Web Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Computer Vision Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Eye className="w-5 h-5 text-primary" />
            </div>
            Computer Vision & AI
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <a
            href="https://github.com/Fahrizp24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-hover transition-smooth"
            >
              <Github className="w-5 h-5 mr-2" />
              Lihat Semua di GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
