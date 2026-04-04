import {
  MdArchitecture,
  MdBalance,
  MdCheckCircle,
  MdCode,
  MdContentCopy,
  MdCorporateFare,
  MdGroups,
  MdHealthAndSafety,
  MdLocationOn,
  MdMail,
  MdPayments,
  MdRocketLaunch,
  MdShare,
  MdSpeed,
} from "react-icons/md";

const JobDescription = () => {
  return (
    <main className="pt-20">
      <section className="relative bg-surface py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-3/5 z-10">
            <div className="flex gap-3 mb-6">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Engineering
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Full-Time
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary tracking-tighter mb-8 leading-[1.1]">
              Senior Software <br />
              Engineer
            </h1>
            <div className="flex flex-wrap gap-8 text-on-surface-variant mb-10">
              <div className="flex items-center gap-2">
                <span className="text-primary">
                  <MdLocationOn />
                </span>
                <span className="font-medium">San Francisco, CA / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">
                  <MdCorporateFare />
                </span>
                <span className="font-medium">
                  Cloud Infrastructure Division
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">
                  <MdPayments />
                </span>
                <span className="font-medium">$180k - $240k • Equity</span>
              </div>
            </div>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Apply Now
            </button>
          </div>
          <div className="w-full md:w-2/5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                className="w-full h-full object-cover"
                data-alt="Modern high-tech server room with glowing blue neon lights and sleek glass panels, professional corporate aesthetic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRcdSG_nwG7Xf04gMWW_oomZfEaGyrHJkBX2_v_zZc-9P6fKx8gwx7wEMQRuRGP2c4DnpF2wslXEc0AzURgGXFHt_75O9vvaEJU5doraDHsGfFdovdCclXO-p8d7nveD8EqDuZa43GBEQTK205PB9lVxk1LF1i2fWUVU4oyD-w4NuFdNEOwPD5SCNQl9nDBUrVQ6F-sdkTvbzIMFgcZLCDDHiL4vyrbwQ6867w_pEaLE5uKBQLIL-pObotk6PIWhi7WhUickDCgopZ"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-fixed rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <div className="bg-surface-container-lowest p-10 rounded-xl">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                  The Role
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  As a Senior Software Engineer at Ramsa Enterprises, you will
                  be the architectural pulse of our mission-critical systems.
                  You aren't just writing code; you are sculpting the digital
                  monolith that powers global infrastructure. You will
                  collaborate with cross-functional teams to design, develop,
                  and scale high-performance applications that define the next
                  generation of IT services.
                </p>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  We are looking for an engineer who thrives in the intersection
                  of technical precision and creative problem-solving—someone
                  who views infrastructure as an art form and scalability as a
                  mandate.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-8 ml-2">
                  Key Responsibilities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-container-lowest p-8 rounded hover:bg-primary-fixed transition-all group">
                    <span className="text-primary text-3xl mb-4">
                      <MdArchitecture />
                    </span>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary">
                      System Architecture
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      Lead the design of distributed systems ensuring high
                      availability and fault tolerance across global regions.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded hover:bg-primary-fixed transition-all group">
                    <span className="text-primary text-3xl mb-4">
                      <MdCode />
                    </span>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary">
                      Clean Execution
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      Maintain exceptional code quality through rigorous peer
                      reviews, automated testing, and architectural consistency.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded hover:bg-primary-fixed transition-all group">
                    <span className="text-primary text-3xl mb-4">
                      <MdSpeed />
                    </span>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary">
                      Performance Tuning
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      Optimize low-latency applications and data pipelines to
                      handle millions of concurrent transactions.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded hover:bg-primary-fixed transition-all group">
                    <span className="text-primary text-3xl mb-4">
                      <MdGroups />
                    </span>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary">
                      Technical Mentorship
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      Guide junior and mid-level engineers, fostering a culture
                      of excellence and continuous learning.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-10 rounded-xl border-l-4 border-primary">
                <h2 className="font-headline text-3xl font-bold text-primary mb-8">
                  Qualifications
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-primary mt-1">
                      <MdCheckCircle />
                    </span>
                    <div>
                      <p className="font-bold text-on-surface">Experience</p>
                      <p className="text-on-surface-variant">
                        7+ years of professional software development
                        experience, with at least 3 years in a senior or lead
                        role.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary mt-1">
                      <MdCheckCircle />
                    </span>
                    <div>
                      <p className="font-bold text-on-surface">Tech Stack</p>
                      <p className="text-on-surface-variant">
                        Expertise in Rust, Go, or Java and deep understanding of
                        cloud-native ecosystems (K8s, AWS, GCP).
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary mt-1">
                      <MdCheckCircle />
                    </span>
                    <div>
                      <p className="font-bold text-on-surface">
                        Database Mastery
                      </p>
                      <p className="text-on-surface-variant">
                        Proficiency with distributed databases (Cassandra,
                        CockroachDB) and relational systems (PostgreSQL).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="glass-panel p-8 rounded-xl border border-outline-variant/10 shadow-sm sticky top-28">
                <h3 className="font-headline text-2xl font-bold text-primary mb-6">
                  Why Join Us
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-primary-fixed p-3 rounded h-fit">
                      <span className="text-primary">
                        <MdRocketLaunch size={24} />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold">Monolith Scale</p>
                      <p className="text-sm text-on-surface-variant">
                        Work on infrastructure that supports 15% of the world's
                        secure web traffic.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary-fixed p-3 rounded h-fit">
                      <span className="text-primary">
                        <MdBalance size={24} />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold">Work-Life Integration</p>
                      <p className="text-sm text-on-surface-variant">
                        Flexible hours and a results-oriented environment that
                        respects deep focus time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary-fixed p-3 rounded h-fit">
                      <span className="text-primary">
                        <MdHealthAndSafety size={24} />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold">Holistic Benefits</p>
                      <p className="text-sm text-on-surface-variant">
                        Premium healthcare, 401k matching, and quarterly
                        wellness stipends.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-8 border-outline-variant/20" />
                <div className="space-y-4">
                  <p className="text-xs font-bold text-outline tracking-widest uppercase">
                    Ready to Lead?
                  </p>
                  <button className="w-full bg-primary text-on-primary py-4 rounded font-bold hover:bg-primary-container transition-colors">
                    Apply Now
                  </button>
                  <button className="w-full border border-primary text-primary py-4 rounded font-bold hover:bg-surface-container-low transition-colors">
                    Save for Later
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/20">
                  <p className="text-sm text-center text-on-surface-variant">
                    Share this position
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <span className="text-primary cursor-pointer hover:scale-110 transition-transform">
                      <MdShare />
                    </span>
                    <span className="text-primary cursor-pointer hover:scale-110 transition-transform">
                      <MdMail />
                    </span>
                    <span className="text-primary cursor-pointer hover:scale-110 transition-transform">
                      <MdContentCopy />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-24 px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h2 className="font-headline text-4xl font-extrabold text-on-primary mb-6 tracking-tight">
            Become a part of the architectural future.
          </h2>
          <p className="text-on-primary/80 text-lg mb-10">
            Ramsa Enterprises is an equal opportunity employer. We value
            diversity and are committed to creating an inclusive environment for
            all employees.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-surface-bright text-primary px-10 py-4 rounded font-bold text-lg hover:scale-95 duration-200">
              Submit Application
            </button>
            <button className="border border-on-primary text-on-primary px-10 py-4 rounded font-bold text-lg hover:bg-on-primary hover:text-primary duration-200">
              View All Careers
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container blur-[120px] opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container blur-[120px] opacity-30 -ml-48 -mb-48"></div>
      </section>
    </main>
  );
};

export default JobDescription;
