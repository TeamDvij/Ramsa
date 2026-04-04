import {
    MdBalance,
  MdCheckCircle,
  MdDiversity3,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdLanguage,
  MdRocketLaunch,
  MdTrendingUp,
} from "react-icons/md";

const RmsaLife = () => {
  return (
    <main className="pt-20">
      <section className="relative overflow-hidden py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-semibold tracking-wider uppercase mb-6">
              Life at Ramsa
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
              The Architecture of Innovation.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              We don't just build systems; we build the foundations for global
              progress. Join a collective where stability meets radical
              creativity.
            </p>
            <div className="flex gap-4">
              <button className="monolith-gradient text-on-primary px-8 py-4 rounded-lg font-headline font-bold shadow-lg">
                View Open Roles
              </button>
              <button className="text-primary px-8 py-4 rounded-lg font-headline font-bold border-2 border-transparent hover:bg-surface-container-low transition-all">
                Our Story
              </button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Ramsa Modern Workspace"
              className="w-full h-full object-cover"
              data-alt="Modern architectural interior of a tech office with floor-to-ceiling glass windows, clean lines, and soft natural sunlight filtering through"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPEkyEqvL-HHYoh64GGKqNAg1nIHGeefxD6eUwqVTeXObYwayx0QcoBLNugUGG0Wg-HEiQgQujn2uLLbc9ZyUBndO8W_u2TlZ_ePwXOcWfkcc_ZYxk7vx7FXM-VkmtwuKBDoS4IYMUZTh0LqLYjpbDCdemYHeOpx8PpH7nwT9Pc7c8jXR6L5YPzwTqXD5xdzVYBUgFTvOfmLDN92dztNcqhXxoNI6QW0iSPYBrpdFcVWb6aUjYDgkNUAe3fTL61gYGz1_gvPCWNnHB"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-headline font-bold tracking-tight mb-4">
                A Day in the Life
              </h2>
              <p className="text-on-surface-variant text-lg">
                Beyond the code and strategy, it's about the rhythm of
                collaboration and the pursuit of excellence in every moment.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-primary text-4xl">
                <MdKeyboardArrowLeft />
              </span>
              <span className="text-primary text-4xl">
                <MdKeyboardArrowRight />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-end relative overflow-hidden group">
              <img
                alt="Morning Standup"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Diverse group of tech professionals standing around a large digital display in a bright, modern conference room during a morning briefing"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxOT5fYlmgpTUUQyTWKO6-xwWU-pJDyGRgOr_zAHraBhDO1u3G7zPylyKvgPXEuRquQCxjF5TGtilxy43Inxl3GIS6xxld7HiGhYY-qh85cQogMpyyDSKHBXbs2KeiXF3bDxG3bpcOoY0II6vFJ9_KkWTGs9_MEvWXRxlYXXNvg_rYlilJmA7nEP46LCAjgOGGc-gqKw9tIlApjxUrcTeLUdeNxzCjhC45-GovscyCCv8MsH1-JdomAUQvR8teeaQWUpCIvAZNLW1_"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="relative z-10 text-on-primary">
                <p className="text-sm font-label font-bold uppercase tracking-widest mb-2">
                  09:00 AM
                </p>
                <h3 className="text-2xl font-headline font-bold mb-2">
                  The Morning Pulse
                </h3>
                <p className="opacity-80">
                  Synchronizing our vision for the day's architectural
                  challenges.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden group">
              <img
                alt="Deep Focus"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Close up of a programmer working with multiple monitors displaying complex data visualizations in a high-tech studio environment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtxRGwk9Q-YnDQbYA1kZZ6LygHofo7TWnL-H2Y9y5UGnC5JOcnWnHgIwWuOqwFzjm_9qboS_6VwCs-Xfkqx4AtFZmllF3UHP9P257SmmqZ1MMDh21x1yOmDX3YrFtkkHa6YchOYMfm1YwkTtVWqxA30TwF3k8WeVhQlApq7apu1GCH4-9a5-x9wRnIoBR79-FroDQEovqJE7rcy6lx0RpZQi_8GRdKnwKhA5cb5niXJskoeKUrvc5Bp0hnk8LosYnuMS_VVgX99adi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end text-on-primary">
                <h3 className="text-xl font-headline font-bold">
                  Deep Work Zones
                </h3>
              </div>
            </div>
            <div className="md:col-span-1 bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden group">
              <img
                alt="Collaboration"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-alt="Two colleagues laughing while having coffee in a sleek, minimalist employee lounge with wooden accents"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACBzLdZvNYasS2JFhR2KdVzhZLnc3KyDX1fuNfEzwB0TtuVVm3wbc0qls2DNevtz97nwvVVv2bCMJFP-b-1-OInLGAjhMlMyLDzd_V7nZZgkHDei5uE4GVMMcAQ6d72OJitRW_YOcAehX_SakBxyFG0HG86arPI8UuUh2lksjFjgAFG7O-vRSuXW3FqkFd6OkBbwranoWC6GAEjsWYAdAoOEMpRIRzJeEZUKsmakb3vAX8-jJ3i7djDA--I7v5-6l3NcTfPd73jksW"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col justify-end text-white">
                <h3 className="text-lg font-headline font-bold">
                  Casual Intersections
                </h3>
              </div>
            </div>
            <div className="md:col-span-1 monolith-gradient p-8 rounded-xl flex flex-col justify-center text-on-primary">
              <span className="text-4xl mb-4">
                <MdRocketLaunch />
              </span>
              <h3 className="text-lg font-headline font-bold mb-2">
                Impact Sessions
              </h3>
              <p className="text-sm opacity-70">
                Weekly brainstorms that shape our digital monolith.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  alt="Team member"
                  className="rounded-xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all"
                  data-alt="Professional portrait of a woman in tech, smiling confidently in an office setting with soft natural light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-wYEeJ2ukabtXZm5QXGwvL2v1JUO00wU0nUkZ1SauHud0yFx1fyIS_Ax2jWo_uKTCHbLblVgIs3Y_TWR0l1VeITHPcJRPVE7CkLI4iNwiPSOt5q2Bz7YrY92dQM4LFchPh5RtJez89GSKkdkM1s13n8G74L688q-VYSIhYV_Yq6_UuOyLy46_4pGTlJsawddwcSjK0sn9bk7yK7NJ_jEbA0MNk863sWY2aVBN1IvZjZZYidGay1ykw0L9b-j1fhQMVicREsd6R1ji"
                />
                <img
                  alt="Team member"
                  className="rounded-xl w-full h-48 object-cover grayscale hover:grayscale-0 transition-all"
                  data-alt="Candid photo of a male engineer wearing glasses and a casual shirt, working in a creative studio space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4J-IZtg2nrqdJ1UaETzQFx_J92a0wEG0XL93p_i6eH1feJeYGqJlXHJ3zsEq8Va1J2gCFOEVe0lDRLqIJaMEfelkZYGT742O_E4FfzI-64WwefeGHq2svqZ_HyLEFsBlXemFUKwgV37eK1OAgvEuNVj7XRjgs7y0vFxRmfN6dzuxxWoPxR2pci3_nXJCBvbX90pXXgrXiHDMVg3F8PfFlh22GzAa8QQRBdhyOUL14oSxKOEkzFKuklCPduR_wXYoAPML2Hqq4RrDM"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  alt="Team member"
                  className="rounded-xl w-full h-48 object-cover grayscale hover:grayscale-0 transition-all"
                  data-alt="Portrait of a creative professional woman looking thoughtfully at a screen, urban background blurred"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXuG1LxzEZWPcNmYYasjzr6jsRskkKn3MyzOVg9Q0ng4_nVBxhr7ylGW8oxcB-mv-iXmGjmN8zUpYbtPHCZHvNxARZYD2gzeye8LS9Bo43_vM8Xk5abXUiZxmMqubi6grDnDdDOYIBYTazU6qpc1BLjj8KK1AwEHtb7Yt8SQxvFbeS9LqEek8Lycr7RFw8sVsBLAiMKiXzkf0l6lZqMrI73GX9GPzgDDnwGRyvpfoVgzEQS59G8hAZGbHm2bE1oembdKvJDVXNRIri"
                />
                <img
                  alt="Team member"
                  className="rounded-xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all"
                  data-alt="Confident senior manager smiling, standing in a high-rise office with city views behind him"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkMDB5KB6yB9RrcNDBZq7qdL8RsQRBxkfc7Wl0HtvBgZbU06LSpDDDduBXCka_tQdojZRyAdYMHiyS3-LGf8k-ibzNLxAtBQM5vfRJ9oKW2-XCrlH3PcOUqWGKTzwpZvRZlmp9ntJ7ozcNsIbB-SgWA-qOITaatXNps2Ddu2lkFgfmL0K8AIwoHm303X6fEsj_U2F8F-3IhU0Vj3k7uC1i0_8AH7o2XnzK0liJ0FUZ2HkP5xif8ptHcsfueubweEYcpr8suMaK9aWL"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-headline font-bold tracking-tight mb-8">
                Our Global Team
              </h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                Based in 14 countries, our team is a mosaic of perspectives. We
                value the "Individual Pillar"—the unique strength each person
                brings to our collective stability.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-primary mt-1">
                    <MdLanguage />
                  </span>
                  <div>
                    <h4 className="font-headline font-bold">
                      24 Languages Spoken
                    </h4>
                    <p className="text-on-surface-variant">
                      Communication is our bridge across borders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary mt-1">
                    <MdDiversity3 />
                  </span>
                  <div>
                    <h4 className="font-headline font-bold">
                      Inclusive by Design
                    </h4>
                    <p className="text-on-surface-variant">
                      We actively foster environments where every voice anchors
                      our growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface-container-high relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[20rem] font-headline font-extrabold text-on-surface opacity-[0.03] -translate-x-20 -translate-y-20 select-none">
          "
        </div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <p className="text-2xl md:text-4xl font-headline font-medium leading-tight mb-10 text-on-surface">
            "At Ramsa, I found more than just a role; I found a platform where
            my technical curiosity is treated as a strategic asset. The
            stability of the company gives me the freedom to innovate without
            fear."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img
                alt="Sarah J."
                data-alt="Close-up headshot of a smiling female software architect with a professional background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeZRpbOeGGgBcWoY8kTFFavQGeM9yZ5kgFVawLqfEfBtjL6d1VK5CBFuet8PADazVpvbVBbCjH1rEzZPPuwuxO6eqC8ZecKqjD4wvcwREDLhV6U1MahVdorH7m4t6-6NJvkYbBkWVzTwSgXl_Vd1GwfTv1zk-VuhPOipb_IirtJ1rpihXoqPDcgMcHB_cj5IFRpYLU2Mn7nj-vwBwdXctER0Wo3q5yv2Jje9fMBFbE35wqRD3Mt8dEWrJvgOgNoYFNRRYU5I1zdaWe"
              />
            </div>
            <div className="text-left">
              <h5 className="font-headline font-bold text-on-surface">
                Sarah Jenkins
              </h5>
              <p className="text-primary font-label text-sm uppercase tracking-widest font-semibold">
                Senior Solutions Architect
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.05)] border-l-4 border-primary">
              <span className="text-primary text-5xl mb-6">
                <MdTrendingUp />
              </span>
              <h3 className="text-3xl font-headline font-bold mb-6">
                Internal Growth &amp; Mentorship
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                We invest in your vertical ascent. Through our 'Monolith
                Mentorship' program, junior talents are paired with industry
                veterans to build durable career foundations.
              </p>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-primary">
                    <MdCheckCircle />
                  </span>
                  Annual Learning Stipends
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">
                    <MdCheckCircle />
                  </span>
                  Leadership Acceleration Tracks
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">
                    <MdCheckCircle />
                  </span>
                  Technical Sabbaticals
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0_20px_40px_rgba(25,28,29,0.05)] border-l-4 border-primary-container">
              <span className="text-primary-container text-5xl mb-6">
                <MdBalance />
              </span>
              <h3 className="text-3xl font-headline font-bold mb-6">
                Equilibrium &amp; Vitality
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                A monolith is only as strong as its core. We champion work-life
                integration that prioritizes mental wellbeing and personal time
                as much as professional output.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container rounded-lg">
                  <p className="text-xs uppercase font-bold text-on-surface-variant mb-1">
                    Flexibility
                  </p>
                  <p className="font-headline font-bold">
                    Remote-First Culture
                  </p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg">
                  <p className="text-xs uppercase font-bold text-on-surface-variant mb-1">
                    Wellbeing
                  </p>
                  <p className="font-headline font-bold">Health Allowance</p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg">
                  <p className="text-xs uppercase font-bold text-on-surface-variant mb-1">
                    Rest
                  </p>
                  <p className="font-headline font-bold">Unlimited PTO</p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg">
                  <p className="text-xs uppercase font-bold text-on-surface-variant mb-1">
                    Family
                  </p>
                  <p className="font-headline font-bold">Paid Parent Leave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto monolith-gradient rounded-[2rem] p-12 md:p-20 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img
              alt="Abstract Network"
              className="w-full h-full object-cover"
              data-alt="Abstract digital network visualization with glowing lines and nodes on a dark blue background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBZBQq4q2XWFq9_CNZVs8LlMR0c4dmJib22_iktsveTVerZm3gx_s6_pVyv4w6lIKuB-e-bJUCMQBitzqBAQw2zcAYAp4a90VrW3qSOPfJKPvEtuD4AIirX5fGyMhE7GYzUMZ0c3oHHz0ilKEfaUeBgOr8rfQ4ownvb4NJthAEJYjNrK24IzSMl-l3f1s1pEH2IJXt-jpUnWWsmXI1k0SYSNTQL0eSBe3ddhY3O-arIzxsO27vp8dzStkN1Cy930zq2NG-v_7-nZVU"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-on-primary mb-8 tracking-tighter">
              Ready to become a pillar?
            </h2>
            <p className="text-xl text-on-primary/80 max-w-2xl mx-auto mb-12">
              Your skills deserve a foundation that can hold them. Explore our
              open roles and find where you belong.
            </p>
            <button className="bg-surface-bright text-primary px-12 py-5 rounded-xl font-headline font-extrabold text-lg shadow-2xl hover:scale-105 transition-all">
              Apply to Ramsa
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RmsaLife;
