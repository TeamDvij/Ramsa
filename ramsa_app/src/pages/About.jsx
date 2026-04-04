import { MdArchitecture, MdAutoAwesome, MdDiversity3, MdRocketLaunch, MdSupportAgent, MdVerifiedUser, MdVisibility } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";

const About = () => {
  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-3/5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6 font-label">
            Established 2024
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-8">
            Architecting the{" "}
            <span className="text-primary italic">Digital Frontier</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
            Ramsa Enterprises is more than a service provider. We are the
            silent, powerful infrastructure behind industry leaders, delivering
            stable and forward-thinking digital solutions.
          </p>
        </div>
        <div className="w-full md:w-2/5 aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative group">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            data-alt="Modern architectural glass building reflecting a clear blue sky, emphasizing structural integrity and corporate stability"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHr9Xb0l7tUpI309JOYev173Tyk-XIrG3u7_FpmJmRv2ySk_ig6xfpwKXTjrRKhnH2Nb0lX-1pt-91JfBr-Ul_zZb62Buw_exe01IIQENCAfnXNdvRSmUAOek-FvuKnZ8aMMQ8Qvgjj5TQStWD_jeJW8u5usTAcNlwkeq9kWaT7VGcQeIdhNb5FHfEsCdJxG2SnGaTamo2cyl6H7J6PwlI2G8kKVcltxEzYcSb08DHxhgiamM3ktDCH6g_7vb9wQMoq3-MH6Be1fyb"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
        </div>
      </section>
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-primary text-4xl mb-6">
                  <MdVisibility />
                </span>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">
                  Our Vision
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  To become the global benchmark for architectural fluidity in
                  IT, where technology feels invisible yet remains the most
                  reliable foundation for human progress.
                </p>
              </div>
              <div className="mt-8 border-t border-outline-variant/10 pt-6">
                <p className="font-label text-sm text-primary font-bold tracking-tighter">
                  GLOBAL REACH • ZERO LATENCY
                </p>
              </div>
            </div>
            <div className="md:col-span-5 bg-gradient-to-br from-primary to-primary-container p-12 rounded-xl text-on-primary flex flex-col justify-center min-h-[400px]">
              <span
                className="text-on-primary-container text-4xl mb-6"
                data-weight="fill"
              >
                <MdRocketLaunch />
              </span>
              <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-on-primary-container text-lg leading-relaxed">
                Empowering enterprises through precision-engineered digital
                services that eliminate friction, ensure security, and foster
                relentless innovation.
              </p>
            </div>
            <div className="md:col-span-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6">
                  <span className="text-primary">
                    <MdVerifiedUser size={25} />
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">
                  Uncompromising Integrity
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Transparency in every line of code and every business
                  partnership we forge.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6">
                  <span className="text-primary">
                    <MdAutoAwesome size={25} />
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">
                  Technical Excellence
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Striving for the apex of performance and security in every
                  digital infrastructure.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6">
                  <span className="text-primary">
                    <MdDiversity3 size={25} />
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">
                  Collective Synergy
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Combining diverse expertise to build solutions greater than
                  the sum of their parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
            Why Choose Ramsa?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group">
            <div className="aspect-square bg-surface-container-lowest rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
              <span className="text-5xl text-primary group-hover:scale-110 transition-transform">
                <MdArchitecture />
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">
              Architectural Fluidity
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dynamic systems that grow with your business needs without
              structural friction.
            </p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface-container-lowest rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
              <span className="text-5xl text-primary group-hover:scale-110 transition-transform">
                <FaShieldHeart />
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">
              Military-Grade Security
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Protecting your data as if it were our own, with zero-trust
              architecture.
            </p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface-container-lowest rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
              <span className="text-5xl text-primary group-hover:scale-110 transition-transform">
                <LuChartNoAxesCombined />
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">
              Actionable Intelligence
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Turning raw data into strategic insights that drive your bottom
              line.
            </p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface-container-lowest rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
              <span className="text-5xl text-primary group-hover:scale-110 transition-transform">
                <MdSupportAgent />
              </span>
            </div>
            <h4 className="font-headline font-bold text-lg mb-2">
              24/7 Strategic Support
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dedicated expert consultants available whenever complexity arises.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="relative bg-gradient-to-br from-primary to-primary-container rounded-3xl p-16 overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-primary mb-6">
              Ready to fortify your digital infrastructure?
            </h2>
            <p className="text-on-primary-container text-lg">
              Let’s discuss how Ramsa Enterprises can elevate your technological
              capabilities.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary-fixed transition-colors text-lg shadow-xl shadow-black/20">
              Work with Us
            </button>
          </div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-primary-container/30 rounded-full blur-2xl"></div>
        </div>
      </section>
    </main>
  );
};

export default About;
