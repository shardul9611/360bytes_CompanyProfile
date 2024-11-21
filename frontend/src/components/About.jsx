import React from "react";
import banner from "../../public/bannerone.avif";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            About <span className="text-yellow-300">digitalsauce</span>
          </h1>
          <p className="text-lg mt-4 md:text-xl">
            Empowering businesses with cutting-edge technology and innovative solutions.
          </p>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At digitalsauce, our mission is to bridge the gap between
              businesses and technology by delivering tailored IT solutions.
              From innovative web applications to advanced AI tools, we empower
              our clients to stay ahead in the competitive digital landscape.
            </p>
          </div>
          <div>
            <img
              src={banner}
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-700">
                Innovation at Core
              </h3>
              <p className="text-gray-600 mt-2">
                We integrate the latest technologies to bring your ideas to life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                🛠️
              </div>
              <h3 className="text-xl font-bold text-gray-700">
                Customized Solutions
              </h3>
              <p className="text-gray-600 mt-2">
                Tailored IT services designed to fit your business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                🌍
              </div>
              <h3 className="text-xl font-bold text-gray-700">Global Reach</h3>
              <p className="text-gray-600 mt-2">
                Trusted by clients worldwide for our reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={banner}
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where technology transforms businesses into
              digital leaders. Through our expertise and commitment, we strive
              to be at the forefront of this transformation, delivering
              exceptional value and excellence to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg mb-6">
            Let us help you achieve your digital transformation goals with our
            expert solutions.
          </p>
          {/* <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition duration-300">
            Contact Us Today
          </button> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
