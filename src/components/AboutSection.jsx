import mycv from "@/assets/CV.pdf"
import { Cloud, Container, GlobeLock } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Passionate DevOps Engineer & Tech Enthusiast</h3>

            <p className="text-muted-foreground text-justify">I am a passionate DevOps Engineer with a strong interest in cloud computing, cybersecurity, automation, and modern infrastructure technologies. My expertise includes Linux system administration, Docker, CI/CD pipelines, networking, and secure deployment practices. I enjoy building efficient and scalable environments that improve reliability, performance, and operational workflows.</p>

            <p className="text-muted-foreground text-justify">With a background in Software Engineering and a growing focus on DevOps and cybersecurity, I continuously explore new technologies and industry best practices. I am driven by problem-solving, continuous learning, and creating innovative solutions that bridge the gap between development and operations while ensuring security and stability in every system I work on.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href={mycv} download="CV_of_S._M._Redwan.pdf" className="px-6 py-2 rounded-full border-primary text-primary border-2 hover:bg-primary hover:text-background transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Container  className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Containerization</h4>
                  <p className="text-muted-foreground ">
                    Experienced in containerization technologies, including Docker, for building consistent, scalable, and portable application environments.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
               <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                < GlobeLock className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cyber Security</h4>
                  <p className="text-muted-foreground ">
                    Focused on implementing secure system architectures and best security practices to protect infrastructure, networks, and applications.
                    </p>
                </div>
              </div>
            </div>
            </div>
            <div className="gradient-border p-6 card-hover">
               <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Cloud  className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Computing</h4>
                  <p className="text-muted-foreground ">
                    Experienced in designing and managing scalable cloud-based infrastructure and services for modern application deployment.
                    </p>
                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}