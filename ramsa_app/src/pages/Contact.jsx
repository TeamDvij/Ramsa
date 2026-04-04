import { MdCall, MdLocationOn, MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold tracking-wider mb-6">
            CONNECT WITH US
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
            Let's Build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Future
            </span>{" "}
            Together.
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Have a technical challenge or a vision for your infrastructure? Our
            engineering team is ready to collaborate on your next
            enterprise-scale solution.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-sm">
            <h2 className="text-2xl font-headline font-bold mb-8">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-outline tracking-widest uppercase">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-primary"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-outline tracking-widest uppercase">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-primary"
                    placeholder="john@enterprise.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline tracking-widest uppercase">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-primary"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-outline tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-0 focus:bg-surface-container-lowest transition-all duration-300 border-b-2 border-transparent focus:border-primary resize-none"
                  placeholder="Tell us about your project requirements..."
                  rows="5"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  className="w-full md:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-bold tracking-tight hover:shadow-lg transition-all duration-300 active:scale-95"
                  type="submit"
                >
                  Dispatch Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white p-10 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-headline font-bold mb-8">
                  Corporate Headquarters
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="text-primary-fixed">
                      <MdLocationOn size={24} />
                    </span>
                    <div>
                      <p className="font-medium text-primary-fixed">Address</p>
                      <p className="text-on-primary-container text-sm">
                        1200 Innovation Drive, Suite 400
                        <br />
                        Silicon Valley, CA 94025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary-fixed">
                      <MdCall size={24}/>
                    </span>
                    <div>
                      <p className="font-medium text-primary-fixed">Phone</p>
                      <p className="text-on-primary-container text-sm">
                        +1 (800) RAMSA-IT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary-fixed">
                      <MdMail size={24}/>
                    </span>
                    <div>
                      <p className="font-medium text-primary-fixed">Email</p>
                      <p className="text-on-primary-container text-sm">
                        solutions@ramsa-enterprises.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container rounded-full opacity-20 blur-3xl"></div>
            </div>
            <div className="h-[300px] w-full bg-surface-container-low rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Modern architectural map view of a city grid with clean white and blue lines in a professional tech style"
                  data-location="San Francisco"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1PdbwSV8BtgQfOqZZ8A48mASsMYvWf0nmbQIGoJTd3XR2lVQrQtDaWAUIGPyqFY6qSqgQ7EzR5UMRYITWRV54CHlcaUVkaKRIy-uLWTsK3Uf4uxoPxk_vJHy4ZzRyQZctQMqj_Y2pRp-kqzSqp2fuIMB23VS89wtFVwTkAZ6z9l21qEs5Z16QQFZDO11Piyg2drxErynE6Wb4jC0mZEvDfQOQOim6KUH8IjUK3tVJsEkzFtCbNg5s3gHqBY2lJEvvHmPs935MqHkx"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary/90 text-white p-4 rounded-full shadow-2xl glass-effect">
                  <span className="text-4xl">
                    <MdLocationOn />
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant/20 shadow-lg">
                <p className="text-xs font-bold text-primary tracking-tight">
                  RAMSA TECHNOLOGY CENTER
                </p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Global Operations Command
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
