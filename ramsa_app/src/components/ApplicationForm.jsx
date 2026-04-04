import {
  MdArrowForward,
  MdCheckCircle,
  MdCloudUpload,
  MdHub,
  MdLanguage,
  MdLink,
  MdVerified,
} from "react-icons/md";

const ApplicationForm = () => {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            Join the Monolith.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            We build the silent infrastructure that powers the future. Apply to
            become part of a legacy defined by technical precision and
            architectural fluidity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
                  1
                </div>
                <div>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase text-primary">
                    Stage One
                  </p>
                  <p className="text-on-surface font-medium">
                    Personal Details
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 opacity-40">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant font-bold">
                  2
                </div>
                <div>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase">
                    Stage Two
                  </p>
                  <p className="text-on-surface font-medium">
                    Professional Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 opacity-40">
                <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant font-bold">
                  3
                </div>
                <div>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase">
                    Stage Three
                  </p>
                  <p className="text-on-surface font-medium">
                    Cultural Alignment
                  </p>
                </div>
              </div>
              <div className="pt-8 mt-8 border-t border-surface-container">
                <div className="bg-surface-container-low p-6 rounded-xl">
                  <span className="text-primary mb-3">
                    <MdVerified />
                  </span>
                  <p className="text-sm font-medium text-on-surface leading-snug">
                    Ramsa values data integrity. Your application is encrypted
                    and stored in our secure private cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(25,28,29,0.05)]">
              <form className="space-y-10">
                <section>
                  <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-outline">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:bg-surface-container-lowest focus:ring-0 focus:border-b-2 focus:border-primary transition-all duration-200"
                        placeholder="Johnathan Doe"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-outline">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:bg-surface-container-lowest focus:ring-0 focus:border-b-2 focus:border-primary transition-all duration-200"
                        placeholder="j.doe@enterprise.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-outline">
                        Phone Number
                      </label>
                      <input
                        className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:bg-surface-container-lowest focus:ring-0 focus:border-b-2 focus:border-primary transition-all duration-200"
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                      />
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">
                    Professional Footprint
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-outline">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-outline text-xl">
                          <MdLink />
                        </span>
                        <input
                          className="w-full bg-surface-container-high border-none rounded-lg pl-12 pr-4 py-3.5 focus:bg-surface-container-lowest focus:ring-0 focus:border-b-2 focus:border-primary transition-all duration-200"
                          placeholder="https://linkedin.com/in/username"
                          type="url"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-outline">
                        Portfolio URL
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-outline text-xl">
                          <MdLanguage />
                        </span>
                        <input
                          className="w-full bg-surface-container-high border-none rounded-lg pl-12 pr-4 py-3.5 focus:bg-surface-container-lowest focus:ring-0 focus:border-b-2 focus:border-primary transition-all duration-200"
                          placeholder="https://yourportfolio.com"
                          type="url"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-outline">
                        Resume Upload
                      </label>
                      <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center bg-surface hover:bg-surface-container-low transition-colors cursor-pointer">
                        <span className=" text-4xl text-primary mb-3">
                          <MdCloudUpload />
                        </span>
                        <p className="text-sm font-medium text-on-surface">
                          Drag and drop your PDF or{" "}
                          <span className="text-primary underline">browse</span>
                        </p>
                        <p className="text-xs text-outline mt-1">
                          Max file size: 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-headline font-bold text-on-surface mb-8">
                    Why Ramsa?
                  </h2>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline">
                      Your Statement
                    </label>
                    <textarea
                      className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3.5 focus:bg-surface-container-lowest focus:ring-0 focus:border-b-2 focus:border-primary transition-all duration-200 resize-none"
                      placeholder="Tell us how your expertise aligns with our digital monolith philosophy..."
                      rows="5"
                    ></textarea>
                  </div>
                </section>
                <div className="pt-8 flex items-center justify-between">
                  <button
                    className="text-primary font-label font-bold uppercase text-xs tracking-widest hover:underline px-4"
                    type="button"
                  >
                    Save Progress
                  </button>
                  <button
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-headline font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2"
                    type="submit"
                  >
                    Submit Application
                    <span>
                      <MdArrowForward />
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-xl mb-2">
                    Our Culture
                  </h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">
                    We value autonomy over micromanagement and precision over
                    speed. Join a team where excellence is the baseline.
                  </p>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <span className="text-[120px]">
                    <MdHub />
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant border-opacity-10">
                <h3 className="font-headline font-bold text-xl mb-2 text-primary">
                  Benefits
                </h3>
                <ul className="text-on-surface-variant text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">
                      <MdCheckCircle />
                    </span>{" "}
                    Global Remote-First Team
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">
                      <MdCheckCircle />
                    </span>{" "}
                    Annual Tech Stipend
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">
                      <MdCheckCircle />
                    </span>{" "}
                    Equity &amp; Performance Bonuses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplicationForm;
