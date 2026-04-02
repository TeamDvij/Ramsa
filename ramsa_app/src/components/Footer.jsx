import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="text-xl font-bold text-blue-950 dark:text-white mb-4 block font-headline">
            Ramsa Enterprises
          </span>
          <p className="text-slate-500 dark:text-slate-400 font-inter text-sm leading-relaxed mb-6">
            Pioneering the digital frontier with architectural precision and
            innovative IT solutions.
          </p>
          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors"
              data-icon="share"
            >
              share
            </span>
            <span
              className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors"
              data-icon="public"
            >
              public
            </span>
            <span
              className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors"
              data-icon="mail"
            >
              mail
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-on-surface">Solutions</h4>
          <ul className="space-y-4 font-inter text-sm">
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Cloud Strategy
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Cyber Security
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Custom Software
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Infrastructure Management
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-on-surface">Company</h4>
          <ul className="space-y-4 font-inter text-sm">
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline decoration-2 underline-offset-4 transition-all"
                href="#"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-on-surface">Newsletter</h4>
          <p className="text-xs text-slate-500 mb-4">
            Stay updated with our latest tech insights.
          </p>
          <div className="flex flex-col gap-2">
            <input
              className="bg-surface-container-high border-none rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-md font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-inter text-sm">
          © {new Date().getFullYear()} Ramsa Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
