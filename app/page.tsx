"use client";

import { Button } from "@/components/ui/button";
import { Nunito } from 'next/font/google';
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import hamdiPic from "./assets/hamdi.jpg";
import { Switch } from "@/components/ui/switch";
import { Mail, Phone, MapPin, User, MessageSquare, Instagram, Linkedin, Github, Menu } from "lucide-react"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { div } from "framer-motion/client";



export default function Home() {

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const [showTools, setShowTools] = useState(false);

  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Java", icon: "/icons/java.svg" },
  ];

  const tools = [
    { name: "Github", icon: "/icons/github.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "Visual Studio", icon: "/icons/vs.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Canva", icon: "/icons/canva.svg" },
    { name: "Microsoft 365", icon: "/icons/365.svg" },
    { name: "Google Workspace", icon: "/icons/google.svg" },
    { name: "Trello", icon: "/icons/trello.svg" },
  ];

  const projects = [
    {
      title: "Psykit AI Chatbot",
      image: "/images/psykit.png",
      url: "https://psykit.online",
    },
    {
      title: "Le Cucci Website",
      image: "/images/lecucci.png",
      url: "https://github.com/altimitmineos/LeCucciApp",
    },
    {
      title: "Visit Indonesia (Laravel Practice)",
      image: "/images/VisitIndonesia.png",
      url: "https://github.com/altimitmineos/VisitIndonesia",
    },
    {
      title: "Deep Learning Research towards Cervical Cancer",
      image: "/images/computationalbiology.png",
      url: "https://www.canva.com/design/DAGCdkSWbfU/MoZ9gbv57bFc0jyk1cRRSg/edit?utm_content=DAGCdkSWbfU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Book Marketplace Web (Laravel Practice)",
      image: "/images/bookexchange.png",
      url: "https://github.com/altimitmineos/bookexchangeAOL",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      url: "https://github.com/altimitmineos/bookexchangeAOL",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#e0e7f5]">
      <header className="fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 bg-[#c2d4f9] shadow-lg shadow-slate-400">
        <h1 className="text-2xl font-extrabold font-nunito">Hamdi&apos;s Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-9 text-lg font-bold">
          <a href="#about" className="hover:underline underline-offset-4 transition font-bold">About</a>
          <a href="#skills" className="hover:underline underline-offset-4 transition font-bold">Skills</a>
          <a href="#projects" className="hover:underline underline-offset-4 transition font-bold">Projects</a>
          <a href="#contact" className="hover:underline underline-offset-4 transition font-bold">Contact</a>
        </nav>

        {/* Mobile Nav (ShadCN Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" size="icon" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#c2d4f9] text-foreground">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle> {/* Hidden but accessible */}
              <nav className="flex flex-col gap-4 mt-10 text-lg font-bold px-6">
                <a href="#about" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</a>
                <a href="#skills" onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>Skills</a>
                <a href="#projects" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</a>
                <a href="#contact" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="md:px-12 lg:px-24 bg-[#e0e7f5]">
        {/* Hero Section */}
        <section className="pt-20 flex flex-col items-center justify-center min-h-screen bg-[#e0e7f5] text-foreground text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-nunito">
              Hi, I’m Hamdi
              <motion.span
                animate={{
                  rotate: [0, 20, -10, 20, -5, 0], // wave motion
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="inline-block origin-[70%_70%]"
              >
                👋
              </motion.span>
            </h2>

            <p className="text-base sm:text-xl md:text-2xl mt-4 font-medium">
              Software Developer
            </p>
          </motion.div>
        </section>

        <section id="about" className="px-6 py-16 bg-[#e0e7f5] text-foreground scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20">

            {/* Profile Image with animation */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src={hamdiPic}
                  alt="Hamdi Profile"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content with stagger animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold font-nunito mb-6 leading-tight"
              >
                About Me
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl leading-relaxed font-nunito mb-6"
              >
                I&apos;m Muhammad Khidir Alhamdi, a passionate software developer driven by a love for
                cutting-edge technology and innovation. My current focus is on full-stack development
                and artificial intelligence, with a growing interest in blockchain technology. With a
                background in computer science, I strive to build projects that help make the world a
                better place.
              </motion.p>

              <motion.a
                href="https://drive.google.com/file/d/1RQm4ccWdkKdz0-GKwp1BjqEi0FCs0Nmj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <Button variant="default" className="bg-[#427efd] hover:bg-[#6493f7] text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition">
                  View Resume
                </Button>
              </motion.a>
            </motion.div>
          </div>
        </section>
        <section id="skills" className="px-6 py-50 bg-[#e0e7f5] text-foreground scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-extrabold font-nunito mb-12 text-center md:text-left">
              Skills & Tools
            </h3>

            <div className="grid grid-cols-1 lg:[grid-template-columns:auto_1fr] gap-12 items-start">
              {/* Left: Toggle + text */}
              <div className="flex flex-col gap-6">
                <div className="inline-flex p-1 bg-[#c2d4f9] rounded-full w-fit">
                  <Button
                    variant="ghost"
                    onClick={() => setShowTools(false)}
                    className={cn(
                      "rounded-full px-6 py-2 text-sm font-bold transition-all",
                      !showTools ? "bg-[#427efd] text-white shadow" : "text-black"
                    )}
                  >
                    Skills
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setShowTools(true)}
                    className={cn(
                      "rounded-full px-6 py-2 text-sm font-bold transition-all",
                      showTools ? "bg-[#427efd] text-white shadow" : "text-black"
                    )}
                  >
                    Tools
                  </Button>
                </div>

                <p className="text-base leading-relaxed">
                  {showTools
                    ? "Here are the tools I use to build and manage my projects."
                    : "These are the technical skills and programming languages I work with."}
                </p>
              </div>

              {/* Right: Icon grid */}
              <motion.div
                key={showTools ? "tools" : "skills"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {(showTools ? tools : skills).map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                    variants={itemVariants}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20 px-6 scroll-mt-20">
          <div className="grid grid-cols-1 md:[grid-template-columns:300px_1fr] gap-12 items-start max-w-7xl mx-auto">
            {/* Left Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-nunito mb-12 text-center md:text-left">
                Explore My Projects
              </h2>
              <p className="text">
                Each project represents a step in my growth — from UI/UX to full-stack
                implementations. Hover to preview the title. Click to explore more.
              </p>
            </div>

            {/* Project Grid with Framer Motion */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {projects.map((project, i) => (
                <motion.a
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="block"
                >
                  <Card className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] group p-0 bg-white">
                    {/* Image section */}
                    <div className="relative w-full h-60 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-4 text-center">
                        <span className="text-white text-lg font-semibold">
                          {project.title}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <CardContent className="p-4">
                      <p className="text-sm text-black">
                        Click to view this project on{" "}
                        {project.url.includes("github.com") ? "GitHub" : "Live Demo"}.
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="contact" className="py-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto px-4">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-nunito mb-6">
                Have a Project? Feel Free to Contact Me!
              </h2>
              <p className="mb-6 text-black">
                Kindly complete the form, and I’ll be in touch with you as soon as possible.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 text-black" />
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p>Jl. H. Zaini I No.9RT.1/RW.7, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-1 text-black" />
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+628558784667 (WhatsApp & Cellular)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-1 text-black" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>muhammad.alhamdi@outlook.com</p>
                  </div>
                </div>
              </div>

              {/* Socials (if needed) */}
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/muhammd_hamdi?igsh=MXZxNHM2MHRmMTMwdA==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 hover:text-[#427efd] transition" />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-khidir-alhamdi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-[#427efd] transition" />
                </a>
                <a href="https://github.com/altimitmineos" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-[#427efd] transition" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#c2d4f9] p-6 rounded-xl shadow-md">
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement & {
                    name: HTMLInputElement;
                    email: HTMLInputElement;
                    phone: HTMLInputElement;
                    message: HTMLTextAreaElement;
                  };

                  const data = {
                    name: form.name.value.trim(),
                    email: form.email.value.trim(),
                    phone: form.phone.value.trim(),
                    message: form.message.value.trim(),
                  };

                  const newErrors: typeof errors = {};

                  if (!data.name) newErrors.name = "Name is required.";
                  if (!data.email) newErrors.email = "Email is required.";
                  else if (!/^\S+@\S+\.\S+$/.test(data.email))
                    newErrors.email = "Invalid email format.";
                  if (!data.phone) newErrors.phone = "Phone is required.";
                  else if (data.phone.length < 8)
                    newErrors.phone = "Phone number must be at least 8 characters.";
                  if (!data.message) newErrors.message = "Message is required.";
                  else if (data.message.length < 10)
                    newErrors.message = "Message must be at least 10 characters.";

                  if (Object.keys(newErrors).length > 0) {
                    setErrors(newErrors);
                    return;
                  }

                  setErrors({});
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    alert("Message sent successfully!");
                    form.reset();
                  } else {
                    alert("Failed to send message.");
                  }
                }}
              >
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <div className={`flex items-center border rounded px-3 bg-white ${errors.name ? 'border-red-500' : 'border-gray-300'}`}>
                    <User className="h-4 w-4 text-black mr-2" />
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g John Doe"
                      className="flex-1 py-2 bg-transparent outline-none text-sm"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <div className={`flex items-center border rounded px-3 bg-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}>
                    <Mail className="h-4 w-4 text-black mr-2" />
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g johndoe@gmail.com"
                      className="flex-1 py-2 bg-transparent outline-none text-sm"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <div className={`flex items-center border rounded px-3 bg-white ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}>
                    <Phone className="h-4 w-4 text-black mr-2" />
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      className="flex-1 py-2 bg-transparent outline-none text-sm"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <div className={`flex items-center border rounded px-3 bg-white ${errors.message ? 'border-red-500' : 'border-gray-300'}`}>
                    <MessageSquare className="h-4 w-4 text-black mr-2 mt-3" />
                    <textarea
                      name="message"
                      placeholder="Write message..."
                      className="flex-1 py-2 bg-transparent outline-none text-sm min-h-[120px] resize-none"
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">SEND</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-center text-sm text-black py-6 border-t mt-12 bg-[#c2d4f9]">
        © {new Date().getFullYear()} Muhammad Khidir Alhamdi. All rights reserved.
      </footer>
    </div >
  );
}
