import { CheckCircle, Heart, Users, Lightbulb, Globe } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section with Brand Story */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-rose-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-800 mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Zcreation was born from a vision to create comfortable and
              graceful hijabs for Namaz, designed to support women in their
              prayer with ease and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="/Zcreation Logo_1754559093824.png"
                alt="Zcreation Logo"
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-800 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Zcreation, a brand dedicated to creating comfortable
                and graceful Hijabs for Namaz. Founded 5 years ago by Mrs.
                Zulekha Sayed, a devoted homemaker, Zcreation began with the
                purpose of providing women with quality Hijabs that bring ease
                and dignity during prayer.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What started as a small effort has now grown with the aim of
                reaching women throughout the country. At Zcreation, we believe
                Namaz is a time of peace and connection, and our Hijabs are made
                to support that sacred experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                The brand is guided by the dedication of Mrs. Zulekha Sayed,
                while her son, Mr. Abdullah Sayed Parvez, manages the marketing
                to help Zcreation connect with people across India.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Together, we strive to make Zcreation a trusted name for
                sincerity, comfort, and quality.
              </p>
              {/* <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Premium Quality Materials
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Ethical Production Practices
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Contemporary Designs
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ZCreation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-primary-300" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                We never compromise on the quality of our materials and
                craftsmanship
              </p>
            </div>

            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-rose-400" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                Building a supportive community of empowered women
              </p>
            </div>

            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lightbulb className="w-10 h-10 text-primary-300" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Continuously refining our hijabs to bring ease and dignity in every prayer.
              </p>
            </div>

            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="w-10 h-10 text-rose-400" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Committed to ethical and sustainable production practices
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
