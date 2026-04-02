import {
  MdArrowOutward,
  MdCloudDone,
  MdCode,
  MdCorporateFare,
  MdSettingsInputComponent,
  MdSupportAgent,
  MdTrendingUp,
} from "react-icons/md";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Home = () => {
  return (
    <main className="pt-20">
      <section className="relative min-h-[870px] flex items-center overflow-hidden px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Future-Ready Infrastructure
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              Empowering Your Future with{" "}
              <span className="text-primary-container">
                Innovative IT Solutions
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              We deliver the digital monolith your business deserves—stable,
              premium, and relentlessly forward-thinking.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase transition-all hover:opacity-90 shadow-xl">
                Get a Quote
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-surface-container-low transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover grayscale-[20%] brightness-75"
                data-alt="abstract glowing blue data lines and futuristic digital interface representing global connectivity and high-speed information infrastructure"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgST0qTbPqJSj3eCh1Q8_azYGTNs2PtLCT6n3Td1rXnmMkqHc-3Rv1QPbN39h4ySvEyCzCVbGOFZh9pQVP1PZqFZ02_NHmLBldWJtQJMpwRJ7pH52XiwCG7oH2aDI5KbmIHZY9t3DDewmo-GA_iWOKBcV1LbqUaX8a9RrtFktZR-URK-1gFAKZjhDD8cidg2ycR0iiejtLZ_GuYcPzv9IH9O8G0vITPGNHT-08uUg0P3JM3VZLQn_cksMqiwwdBERU7Gnb7OVp05QR"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary-fixed/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl font-bold mb-6 text-primary">
              The Architecture of Excellence
            </h2>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8">
              Ramsa Enterprises is more than a service provider; we are the
              silent power behind your digital operations. Founded on the
              principles of stability and architectural fluidity, we specialize
              in high-end IT frameworks that scale with your ambition.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-headline font-extrabold text-primary mb-1">
                  15+
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-outline">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-headline font-extrabold text-primary mb-1">
                  500+
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-outline">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-4xl font-headline font-extrabold text-primary mb-1">
                  99%
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-outline">
                  Uptime Guarantee
                </div>
              </div>
              <div>
                <div className="text-4xl font-headline font-extrabold text-primary mb-1">
                  24/7
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-outline">
                  Active Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-extrabold mb-4">
            Our Expertise
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-4xl text-primary">
                  <MdCloudDone />
                </span>
                <h3 className="font-headline text-2xl font-bold mb-2">
                  Enterprise IT Infrastructure
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  End-to-end management of your digital ecosystem, from cloud
                  migration to cyber-security protocols that never sleep.
                </p>
              </div>
              <span className="text-outline-variant group-hover:text-primary transition-colors">
                <MdArrowOutward />
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase rounded-full">
                Cloud Computing
              </span>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase rounded-full">
                Cybersecurity
              </span>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase rounded-full">
                DevOps
              </span>
            </div>
          </div>
          <div className="bg-primary text-on-primary p-10 rounded-xl shadow-lg relative overflow-hidden">
            <span className="text-4xl">
              <MdCorporateFare />
            </span>
            <h3 className="font-headline text-2xl font-bold mb-2">
              Business Consultancy
            </h3>
            <p className="opacity-80 leading-relaxed mb-6">
              Strategic planning and operational optimization for modern
              enterprises looking to scale effectively.
            </p>
            <div className="absolute -right-4 -bottom-6 opacity-10">
              <span className="text-9xl">
                <MdTrendingUp />
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-4xl text-primary">
              <MdCode />
            </span>
            <h3 className="font-headline text-xl font-bold mb-2">
              Software Development
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Custom-built applications designed with user-centric philosophies
              and robust backend logic.
            </p>
          </div>
          <div className="bg-surface-container-low p-10 rounded-xl">
            <span className="text-4xl text-secondary">
              <MdSupportAgent />
            </span>
            <h3 className="font-headline text-xl font-bold mb-2">
              Professional Training
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Empowering your workforce with the latest technical skills and
              leadership methodologies.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-4xl text-primary">
              <MdSettingsInputComponent />
            </span>
            <h3 className="font-headline text-xl font-bold mb-2">
              Network Integration
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Seamless connectivity across all hardware and software endpoints
              for zero-friction workflows.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-on-surface-variant">
              Don't take our word for it—listen to the architects of global
              businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface-container-lowest p-12 rounded-2xl relative">
              <span className="material-symbols-outlined text-6xl text-primary-fixed-dim absolute -top-6 -left-2 opacity-50">
                <BiSolidQuoteAltRight />
              </span>
              <p className="font-body text-xl italic text-on-surface mb-8 relative z-10">
                "Ramsa Enterprises didn't just provide a solution; they rebuilt
                our entire IT philosophy. Their attention to structural
                integrity in software is unmatched in the industry."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="professional portrait of a middle-aged male executive with glasses in a clean modern office setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_2dK4r9I-bE9uRVVGI1Wxpzw8h1nzOGzLn-2rOMWVKeyqVQaFLFfadImNPXH0oI96ziMWMd9Sj6WtOsY4_qwxGwFnmtL9BfbzriWZMs-ACgeAgMcgymT4LpM2-aG51HxQh0ioewElVK7TLSSz-VW1yLRen3luoOHveGRj81l-LcO8ODaAvNTaVMTm5jryZTFQaLPAjPpBvveosie5iGs7ZuND7sbB1-efudMn9hFo4Ttv5vTuQ1jEM_Tp2QVBlMLuowVjXZm26J04"
                  />
                </div>
                <div>
                  <div className="font-bold text-on-surface">David Chen</div>
                  <div className="text-xs uppercase tracking-wider text-outline">
                    CTO, Vertex Global
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-12 rounded-2xl relative">
              <span className="material-symbols-outlined text-6xl text-primary-fixed-dim absolute -top-6 -left-2 opacity-50">
                <BiSolidQuoteAltRight />
              </span>
              <p className="font-body text-xl italic text-on-surface mb-8 relative z-10">
                "The transition was seamless. Their team handled our cloud
                migration with the precision of a master architect. Absolute
                reliability throughout the process."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="close-up portrait of a confident female professional smiling with natural lighting in a bright business environment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCh6AP-KjUl1hKaQXF6DZPHWp5vDNR4hwNkRnZG4EcnbwTQhKoJ2q24kg54whgMuuK7gmmdq3tcjBwCJwQpfo4_jgUSluD9F-vA7UgcCuYwihctyJaxcfLEKucoohG00d1dbF8BtkRBaQ_l8QrjHvy_U7Qv28k2nduSEB6DJyzIomxC9MYhfKms-qQcBoeYar9zn9BmupTNHjjUiHdqS-DkjgrQwpLIGKMWX2gqKk2pxbgqcCKCmjDjKdKTOATukj3K7vYPndbuKM8"
                  />
                </div>
                <div>
                  <div className="font-bold text-on-surface">
                    Sarah Mitchell
                  </div>
                  <div className="text-xs uppercase tracking-wider text-outline">
                    Director of Ops, FinStream
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-12 md:p-24 text-center text-on-primary shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              className="w-full h-full object-cover"
              data-alt="high-tech circuit board pattern with blue glowing lines and abstract electronic components"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVWos4GeKGTzZ6ekAvjPuaYTX_xVyFJ1kpVbmYcl6HS8-ztJwk58bapgcn_E0ux97oNaZK3380VeU4nkCg6UBvHv00uPa5Mr5N--WhkLF7eF7-0R3FfM_FQaiQxVyYT6TVncp7MJJv3N1zGAPNAD-otAOd9dLUQl5jGTnJnXlgxWksN_Gp758-RoC4BPbQiSjZEKimqZpVY01rBQaX3mTIW67_iK474T0JTLANpbLnZRIegYSqp3CUOH2xZd7cH8SEySgJK-g3leRc"
            />
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 relative z-10">
            Ready to build the monolith?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">
            Connect with our team today and discover how we can stabilize and
            accelerate your digital journey.
          </p>
          <div className="flex justify-center gap-6 relative z-10">
            <button className="bg-surface text-primary px-10 py-4 rounded-md font-label font-bold text-sm tracking-widest uppercase hover:bg-surface-bright transition-all shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
