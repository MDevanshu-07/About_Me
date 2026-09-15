import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-white/10 py-8 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <p className="text-zinc-400 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Devanshu. My Journey in Tech.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/MDevanshu-07"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/m-devanshu-a15956361?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:devanshumattam1405@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;