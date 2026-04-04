import React from "react";
import { MdArrowForward, MdCloudQueue, MdInventory, MdLan, MdMemory, MdTerminal, MdWeb } from "react-icons/md";

const Service = () => {
  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-3/5">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6 leading-none">
            Architecting the Future of{" "}
            <span className="text-primary-container">Enterprise Value</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            We provide a dual-spectrum approach to business infrastructure,
            blending cutting-edge digital solutions with essential physical
            supply chain management.
          </p>
          <div className="flex gap-4">
            <span className="inline-flex items-center rounded-full bg-secondary-container px-4 py-1.5 text-sm font-medium text-on-secondary-container">
              IT Innovation
            </span>
            <span className="inline-flex items-center rounded-full bg-surface-container-high px-4 py-1.5 text-sm font-medium text-on-surface-variant">
              Core Logistics
            </span>
          </div>
        </div>
        <div className="md:w-2/5 aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl">
          <img
            alt="Corporate Office"
            className="w-full h-full object-cover"
            data-alt="Modern minimalist office interior with floor-to-ceiling glass windows, architectural white columns, and soft afternoon sunlight filtering through"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyM0OHOthZwL-fq92Nd7crh-FgRw2j4CsT6Zj7T6OO70rydxTSKgRv-R5SX33T0C1UTm0F_5P2OMTw-bXFqr6M1gamcLbWUgVj5jHAes_tImmyPTJM-E5xhCIzLqqHTxhoaaknMcrB1hKiccaYFf5OgjJIWQ7BjNjToXyZ9wsykCZiQHzym09FQdxr5KdrRv7W9_xzaeLfq3lucEQDHiNmltwbaPEK_blCeDuhSRSq8NdqDVJrK3CxraXHiE-ChsjnTYz2PAZoiiha"
          />
        </div>
      </section>
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline text-sm font-extrabold uppercase tracking-widest text-primary mb-4">
                Digital Infrastructure
              </h2>
              <h3 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
                IT Products &amp; Services
              </h3>
            </div>
            <div className="h-[2px] flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
            <div className="text-on-surface-variant font-medium">
              01 // Digital Assets
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:bg-primary-fixed hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center mb-6">
                <span>
                  <MdTerminal />
                </span>
              </div>
              <h4 className="font-headline text-2xl font-bold text-on-surface mb-4">
                Software Development
              </h4>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Custom enterprise applications built for scalability and
                performance. We transform complex workflows into intuitive
                digital experiences.
              </p>
              <a
                className="inline-flex items-center text-primary font-bold group-hover:text-on-primary-fixed"
                href="#"
              >
                Explore Engineering{" "}
                <span className="ml-2 text-sm">
                  <MdArrowForward />
                </span>
              </a>
            </div>
            <div className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:bg-primary-fixed hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center mb-6">
                <span>
                  <MdWeb />
                </span>
              </div>
              <h4 className="font-headline text-2xl font-bold text-on-surface mb-4">
                Website Development
              </h4>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                High-performance web platforms that combine editorial aesthetics
                with technical excellence. Responsive, SEO-optimized, and
                brand-aligned.
              </p>
              <a
                className="inline-flex items-center text-primary font-bold group-hover:text-on-primary-fixed"
                href="#"
              >
                View Showcase{" "}
                <span className="ml-2 text-sm">
                  <MdArrowForward />
                </span>
              </a>
            </div>
            <div className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:bg-primary-fixed hover:translate-y-[-4px]">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded flex items-center justify-center mb-6">
                <span>
                  <MdCloudQueue />
                </span>
              </div>
              <h4 className="font-headline text-2xl font-bold text-on-surface mb-4">
                Cloud Hosting Solutions
              </h4>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Secure, resilient cloud architectures designed for 99.9% uptime.
                Managed services that grow with your organizational
                requirements.
              </p>
              <a
                className="inline-flex items-center text-primary font-bold group-hover:text-on-primary-fixed"
                href="#"
              >
                Cloud Ops{" "}
                <span className="ml-2 text-sm">
                  <MdArrowForward />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline text-sm font-extrabold uppercase tracking-widest text-secondary mb-4">
                Physical Operations
              </h2>
              <h3 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
                Non-IT Products &amp; Services
              </h3>
            </div>
            <div className="h-[2px] flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
            <div className="text-on-surface-variant font-medium">
              02 // Core Supply
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <div className="aspect-square bg-surface-container rounded-xl mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  alt="Enterprise Hardware"
                  className="w-full h-full object-cover"
                  data-alt="Cinematic shot of high-end enterprise server hardware with blue indicator lights in a darkened data center environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbutCSZtjMCw8at27BAL67_Y8b_ipKJpFDSbgkdxHOST-v_jAywePVYxsmDEAeEIluBdUs65Dc9_N1AxIVi9djsYknEHfnykKrecIXQRg0DHBDDnsLy12fLLEXZAh41AqXbGldRh1ekooYfOgnTZlpX0Tj6AqW4TQ1BmP39WH8h-TStiDhdRlcWEPiH1pznHpeETb8R6wpftWembAwi33Bp-djbtb5xNlKp8X9_8AikHNwjHfvl-xQLJRJQXqWkqbjjzh2BIxlb9NE"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-3xl">
                  <MdMemory />
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold text-on-surface mb-2">
                    Hardware Solutions
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Comprehensive procurement and maintenance of
                    enterprise-grade hardware, from workstations to specialized
                    server components.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="aspect-square bg-surface-container rounded-xl mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  alt="Networking"
                  className="w-full h-full object-cover"
                  data-alt="Abstract view of organized networking cables in a server rack, glowing with soft blue fiber optic light highlights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtMhZKgeLUtqFUgMa7hkzwXgD3CONzd0xX7p3QGw5d9ffeNe8xXtpnjQx825SNnAk3RhjhTMba1yS6AnqfAhRwZiKXgBTrX4QCwh1PcuMPeX2gMkG_8LnQ5OURrGWGS0ws2edDbtK9s_AC8tZmwVHwHTiATlmN8XHn2Eg-AppbVEFlnhgMbG55FXQFPETaaulHbYhmkadF3BOTc0yvG1nL_ZJD2ZVmCMDVhc1xwJs8lvMkyKxPXmGKFIa3TibK40o69bM2SFdky-AV"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-3xl">
                  <MdLan />
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold text-on-surface mb-2">
                    Networking Services
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Robust network design and implementation ensuring seamless
                    connectivity across your physical and remote office
                    locations.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="aspect-square bg-surface-container rounded-xl mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  alt="Stationery"
                  className="w-full h-full object-cover"
                  data-alt="Top-down view of premium designer stationery on a concrete surface, featuring heavy-weight paper and architectural pens"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6M1rE0O3qnGVARbqZO_5CJioybYyBP-RfKLtFlNxnTHezbOM7tntINvKcZbs8KlgKeBbECosrfhecb-_jXNLvgP_iah-QuemF7AiWDoiClMUU9DuCW5qGuA3SE82ZKj4ij07nxIbPRY11-2-UmQMPEmaV8UveujVr9X48E8QOHTE6a6ZV2BBh4F1-WLNjigAOFCYVigD2mltykO4oAkuHbHMvZbiFrRN0n-bZBbvUjd-EPrPz_vul_bQR6djyV2ZtfQWuar_EhuGk"
                />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary text-3xl">
                  <MdInventory />
                </span>
                <div>
                  <h4 className="font-headline text-xl font-bold text-on-surface mb-2">
                    Stationery Supply
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Managed supply chain for essential office resources,
                    providing premium stationery and administrative tools for
                    the modern workplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="bg-primary-container rounded-2xl p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
              Ready to stabilize your{" "}
              <span className="text-on-primary-container">infrastructure?</span>
            </h2>
            <p className="text-on-primary-container/80 text-xl mb-12">
              Partner with Ramsa Enterprises for an integrated approach to
              technology and logistics that drives sustainable growth.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-white text-primary px-8 py-4 rounded font-bold hover:bg-surface-container-low transition-colors">
                Request a Consultation
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        </div>
      </section>
    </main>
  );
};

export default Service;
