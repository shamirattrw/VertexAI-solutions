import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Users,
  Clock,
  Target,
  Loader2,
  CheckCircle,
} from "lucide-react";

const GetStarted = () => {
  const AIRTABLE_TOKEN =
    "patk2v3kT84mlOdUU.c9da0f561619e64e838582e7d49113b41719eec5590dbabc8741cd5bf5cfbb11";
  const AIRTABLE_BASE_ID = "appDXxvLW4wBckXaS";
  const AIRTABLE_TABLE_NAME = "Table%201";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // <-- added
    message: "",
    bookingDate: "", // <-- added
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(""); // <-- added

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // ensure booking date/time is selected
    if (!formData.bookingDate) {
      setIsLoading(false);
      setError("Please select your preferred booking date & time.");
      return;
    }

    // ensure phone is 10 digits
    if (!/^\d{10}$/.test(formData.phone)) {
      setIsLoading(false);
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // reformat "YYYY-MM-DDTHH:mm" -> "DD-MM-YYYY HH:mm" (24h)
    const toDDMMYYYY_HHMM = (val) => {
      try {
        const [datePart, timePart] = val.split("T"); // "YYYY-MM-DD", "HH:mm"
        const [yyyy, mm, dd] = datePart.split("-");
        return `${dd}-${mm}-${yyyy} ${timePart}`;
      } catch {
        return val;
      }
    };
    const formattedDate = toDDMMYYYY_HHMM(formData.bookingDate);

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: formData.name,
                  Email: formData.email,
                  "Phone Number": formData.phone, // <-- added to Airtable
                  "Booking Date": formattedDate, // <-- added to Airtable
                  Message: formData.message,
                },
              },
            ],
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "", bookingDate: "" });

      // ✅ Fire Google Ads Conversion Event
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "conversion", {
          send_to: "AW-16896333675/et8dCJ3Zy5IbEOuu5vg-",
        });
      }

      // ✅ Fire Meta Pixel Lead Event
      if (typeof window.fbq !== "undefined") {
        window.fbq("track", "Lead");
        console.log("%c[Meta Pixel] Lead event fired ✅", "color: green; font-weight: bold;");
      } else {
        console.warn("[Meta Pixel] fbq not found — pixel may not be loaded in local dev.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-hide success notification after 2 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <section id="get-started" className="py-20 bg-light-navy relative">
      {/* Success Notification with inline animation styles */}
      {showSuccess && (
        <div
          className="fixed top-6 right-6 z-50"
          style={{
            animation: "fadeIn 0.3s ease-out forwards",
            opacity: 0,
            transform: "translateY(-10px)",
          }}
        >
          {showSuccess && (
            <div
              className="fixed top-6 right-6 z-50"
              style={{
                animation: "fadeIn 0.3s ease-out forwards",
                opacity: 0,
                transform: "translateY(-10px)",
              }}
            >
              <div className="bg-mint-green text-dark-navy px-6 py-4 rounded-lg shadow-lg flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! We'll be in touch within 24 hours.</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Inline styles for the animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Get Started Today
          </h2>
          <p className="text-xl font-inter text-text-gray max-w-3xl mx-auto mb-8">
            We're accepting our first 10 pilot clients at discounted rates.
            Schedule a free strategy call to discuss your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 bg-mint-green/5 border border-mint-green/20 rounded-lg">
              <Users className="h-5 w-5 text-mint-green" />
              <span className="text-mint-green font-inter font-medium">
                Pilot Client Pricing
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-mint-green/5 border border-mint-green/20 rounded-lg">
              <Clock className="h-5 w-5 text-mint-green" />
              <span className="text-mint-green font-inter font-medium">
                Priority Support
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-mint-green/5 border border-mint-green/20 rounded-lg">
              <Target className="h-5 w-5 text-mint-green" />
              <span className="text-mint-green font-inter font-medium">
                Custom Solutions
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-dark-navy p-8 rounded-2xl border border-mint-green/20">
            <h3 className="text-2xl font-poppins font-semibold text-white mb-6">
              Start Your Free Strategy Call
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-gray mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-navy border border-mint-green/30 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-mint-green transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-gray mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-navy border border-mint-green/30 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-mint-green transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* NEW: Phone Number Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-gray mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                   pattern="[0-9]{10}" 
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full px-4 py-3 bg-light-navy border border-mint-green/30 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-mint-green transition-colors"
                  placeholder="Enter valid phone number"
                />
              </div>

              {/* NEW: Booking Date & Time Picker */}
              <div>
                <label
                  htmlFor="bookingDate"
                  className="block text-sm font-medium text-text-gray mb-2"
                >
                  Preferred Booking Date & Time *
                </label>
                <input
                  type="datetime-local"
                  id="bookingDate"
                  name="bookingDate"
                  required
                  value={formData.bookingDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light-navy border border-mint-green/30 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-mint-green transition-colors"
                />
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-gray mb-2"
                >
                  What processes would you like to automate?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light-navy border border-mint-green/30 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-mint-green transition-colors resize-none"
                  placeholder="Tell us about your current workflows and pain points..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full ${
                  isLoading ? "bg-mint-green/80" : "bg-mint-green"
                } text-dark-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-mint-green/90 hover:scale-[1.02] transform transition-all duration-200 flex items-center justify-center group`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Schedule Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN KEPT EXACTLY AS-IS */}
          <div className="space-y-8">
            <div className="bg-dark-navy p-8 rounded-2xl border border-mint-green/20">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-mint-green mr-3" />
                <h3 className="text-xl font-poppins font-semibold text-white">
                  What to Expect
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mint-green/20 border border-mint-green rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-white">
                      Discovery Call (30 min)
                    </h4>
                    <p className="text-text-gray text-sm">
                      We'll discuss your current processes and identify
                      automation opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mint-green/20 border border-mint-green rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-white">
                      Custom Proposal
                    </h4>
                    <p className="text-text-gray text-sm">
                      Receive a detailed plan with transparent pricing within 48
                      hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-mint-green/20 border border-mint-green rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-white">
                      Development & Testing
                    </h4>
                    <p className="text-text-gray text-sm">
                      We build and test your solution with regular check-ins
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-mint-green/10 p-6 rounded-xl border border-mint-green/30">
              <h3 className="font-poppins font-semibold text-white mb-3">
                Pilot Program Benefits
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-text-gray">
                  <div className="w-2 h-2 bg-mint-green rounded-full mr-3"></div>
                  50% discount on development costs
                </li>
                <li className="flex items-center text-text-gray">
                  <div className="w-2 h-2 bg-mint-green rounded-full mr-3"></div>
                  Priority support and faster delivery
                </li>
                <li className="flex items-center text-text-gray">
                  <div className="w-2 h-2 bg-mint-green rounded-full mr-3"></div>
                  Opportunity to shape our service offerings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;