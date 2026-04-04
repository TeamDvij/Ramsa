import React from "react";
import {
  MdArchitecture,
  MdArrowForward,
  MdGroups,
  MdHealthAndSafety,
  MdHomeWork,
  MdLightbulb,
  MdLocationOn,
  MdMemory,
  MdPsychology,
  MdPublic,
  MdSchool,
  MdSearch,
  MdSettingsSuggest,
  MdUploadFile,
  MdWork,
} from "react-icons/md";

const Career = () => {
  return (
    <main className="pt-20">
      <section className="relative min-h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            data-alt="Modern high-tech architectural office interior with expansive glass walls, minimalist furniture, and soft cinematic blue lighting at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBha4GKNNIUagZqGxwYh52ULm3N1WfwnD1CKn6Y4YJnp3p9twp1wds51_Jpyq7w0JFQC15HHxwTXOVQnT7WL-R72TP1ej-0slVnL3z1zgT533DVlG8HK2XQm0lf9WITJJHkZdoV3cjlI5obvGyCbIVYNKG8wmMq3uKZyMhXpblwVKDHZPwBLCndlCHIfXvYfYdxkAxf2zdFPZNMBpPEgaSFpTGsHcoQsTRXj3-XD95yRBq543gTqHF5QXRJYuTTbCzIBe2clP326Ijv"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase">
              Elite Architecture
            </span>
            <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Join the <br />
              <span className="text-primary-fixed">Monolith</span>
            </h1>
            <p className="text-body text-xl text-surface-container-highest/90 leading-relaxed mb-10 max-w-lg">
              Build the future of digital infrastructure with a team of elite
              architects and engineers. Stability, precision, and architectural
              fluidity at scale.
            </p>
            <div className="flex gap-4">
              <a
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
                href="#positions"
              >
                View Open Roles
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">
                Our Culture
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We reject the status quo of rapid tech churn for a philosophy of
                deliberate excellence. Our culture is the silent foundation that
                empowers our elite talent.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.05)] hover:bg-primary-fixed group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-low mb-6 group-hover:bg-on-primary transition-colors">
                <span className=" text-primary text-3xl">
                  <MdGroups />
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                Collaborative Excellence
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant leading-relaxed">
                High-level synchronization across departments. We move as a
                single, unified entity to solve the industry's toughest
                challenges.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.05)] hover:bg-primary-fixed group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-low mb-6 group-hover:bg-on-primary transition-colors">
                <span className="text-primary text-3xl">
                  <MdLightbulb />
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                Continuous Innovation
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant leading-relaxed">
                Innovation is not a phase; it's a constant state of evolution.
                We provide the tools and space for meaningful breakthroughs.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.05)] hover:bg-primary-fixed group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container-low mb-6 group-hover:bg-on-primary transition-colors">
                <span className="text-primary text-3xl">
                  <MdPublic />
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                Global Impact
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-primary-fixed-variant leading-relaxed">
                The infrastructure we build powers enterprises across
                continents. Your work becomes a part of the global digital
                backbone.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
              Employee Benefits
            </h2>
            <p className="text-on-surface-variant mt-4">
              Premium support for world-class talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between group">
              <div>
                <span className="text-primary text-4xl mb-6">
                  <MdHomeWork />
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  Remote-First Flexibility
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-sm">
                  We trust our architects to define their environment. Work from
                  where you are most inspired, with full support for home-office
                  engineering.
                </p>
              </div>
              <div className="mt-8">
                <img
                  className="rounded-lg h-48 w-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  data-alt="Cinematic overhead view of a clean, minimalist home office setup with high-end tech gear and soft window light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsk7oTiMF9guGYvGi2oKkdCu5c3tpOrVmypLH2wR6JaXjOM2gBVgt8YP2vtxL2eWo9AWHCNuXsD1feUftX4gr-ijTszNMhhEWbn-ZGowCXO2PKBeWIjpyu9-jXB9TzyKLt-oQr8uV46EaDAtG__e9ATD4jJNatD7YsCBzIaBaOZ0CL-e9OP-uRrAm-EsiCOzQ5k5mvj-zONz5h-tI0hicBZBulGNwJJqBEvvQAAUIeYydBBG8d5yLxvaEGc0KS5np7V7v4gbjeMyX0"
                />
              </div>
            </div>
            <div className="md:col-span-2 bg-primary p-10 rounded-xl text-on-primary flex items-center justify-between">
              <div className="max-w-xs">
                <h3 className="font-headline text-2xl font-bold mb-2">
                  Modern Tech Stack
                </h3>
                <p className="text-on-primary-container/80 text-sm">
                  Working with Kubernetes, Rust, Go, and bleeding-edge Cloud
                  Native architectures.
                </p>
              </div>
              <span className="text-6xl opacity-20">
                <MdMemory />
              </span>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-center">
              <span className="text-primary mb-4">
                <MdHealthAndSafety size={20} />
              </span>
              <h4 className="font-bold text-on-surface">
                Health &amp; Wellness
              </h4>
              <p className="text-sm text-on-surface-variant mt-2">
                Comprehensive elite medical coverage for you and your family.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-center">
              <span className="text-primary mb-4">
                <MdSchool size={20}/>
              </span>
              <h4 className="font-bold text-on-surface">Learning Stipends</h4>
              <p className="text-sm text-on-surface-variant mt-2">
                $5,000 annual budget for conferences, certifications, and
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface" id="positions">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
              Open Positions
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <input
                  className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-md focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all w-full md:w-64 text-sm"
                  placeholder="Search roles..."
                  type="text"
                />
                <span className="absolute left-3 top-2.5 text-on-surface-variant text-sm">
                  <MdSearch />
                </span>
              </div>
              <select className="bg-surface-container-high border-none rounded-md text-sm px-4 py-2 focus:ring-2 focus:ring-primary cursor-pointer">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Architecture</option>
                <option>Operations</option>
                <option>Consulting</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-lowest p-6 flex flex-col md:flex-row md:items-center justify-between transition-all hover:bg-surface-container-low group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-headline text-xl font-bold text-on-surface">
                    Senior Software Engineer
                  </h3>
                  <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    High Priority
                  </span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdLocationOn />
                    </span>{" "}
                    Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdWork />
                    </span>{" "}
                    Engineering
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="text-primary font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                  VIEW DETAILS{" "}
                  <span className="text-sm">
                    <MdArrowForward />
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 flex flex-col md:flex-row md:items-center justify-between transition-all hover:bg-surface-container-low group">
              <div className="flex-1">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
                  Cloud Architect
                </h3>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdLocationOn />
                    </span>{" "}
                    Hybrid (NY/London)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdArchitecture />
                    </span>{" "}
                    Architecture
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="text-primary font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                  VIEW DETAILS{" "}
                  <span className="text-sm">
                    <MdArrowForward />
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 flex flex-col md:flex-row md:items-center justify-between transition-all hover:bg-surface-container-low group">
              <div className="flex-1">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
                  DevOps Specialist
                </h3>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdLocationOn />
                    </span>{" "}
                    Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdSettingsSuggest />
                    </span>{" "}
                    Operations
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="text-primary font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                  VIEW DETAILS{" "}
                  <span className="text-sm">
                    <MdArrowForward />
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 flex flex-col md:flex-row md:items-center justify-between transition-all hover:bg-surface-container-low group">
              <div className="flex-1">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
                  IT Consultant
                </h3>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdLocationOn />
                    </span>{" "}
                    Hybrid (Singapore)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-sm">
                      <MdPsychology />
                    </span>{" "}
                    Consulting
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="text-primary font-bold text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                  VIEW DETAILS{" "}
                  <span className="text-sm">
                    <MdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-surface-container-highest p-12 rounded-xl text-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed rounded-full blur-[100px] opacity-20 transition-all duration-700 group-hover:scale-150"></div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Don't see a fit?
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
              Join our talent community and be the first to know when a role
              matching your architectural expertise opens up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <label className="flex items-center gap-3 bg-surface-container-lowest px-8 py-4 rounded-md border border-outline-variant/30 cursor-pointer hover:border-primary transition-all">
                <span className="text-primary">
                  <MdUploadFile size={25}/>
                </span>
                <span className="text-sm font-semibold text-on-surface">
                  Upload Resume
                </span>
                <input className="hidden" type="file" />
              </label>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-semibold text-sm hover:bg-primary-container transition-all">
                Join Talent Pool
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
