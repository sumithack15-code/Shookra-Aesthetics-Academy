import React, { useState } from "react";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { GENERATED_IMAGES } from "../data/servicesData";
import { getWhatsAppHref } from "../config/clinicConfig";
import { ResilientImage } from "./ResilientImage";

export const AcademySection: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [interestArea, setInterestArea] = useState("Permanent Makeup & Aesthetics");
  const [submitted, setSubmitted] = useState(false);

  const pillars = [
    {
      label: "Courses & Training Programs",
      detail:
        "Structured learning pathways designed for aspiring aesthetic and permanent makeup practitioners.",
    },
    {
      label: "Hands-On Workshops",
      detail:
        "Practical studio sessions focusing on hygiene, client consultation, and modern aesthetic technique.",
    },
    {
      label: "Certification & Mentorship",
      detail:
        "Guided curriculum and student enquiry support—connect with our academy desk for upcoming schedules.",
    },
  ];

  const handleAcademySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="academy"
      aria-labelledby="academy-heading"
      className="py-20 lg:py-28 bg-[#F6F3EE] text-[#141210]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Editorial Academy Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D3B] font-semibold mb-3">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
                <span>Shookra Aesthetics &amp; Academy</span>
              </div>

              <h2
                id="academy-heading"
                className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#141210] leading-[1.1] mb-5"
                style={{ textWrap: "balance" }}
              >
                Learn. Create. Elevate.
              </h2>

              <p className="text-base sm:text-lg text-[#3D3833] leading-relaxed mb-8 max-w-2xl">
                Explore professional beauty and aesthetic education through
                Shookra Aesthetics &amp; Academy.
              </p>

              {/* Extensible Curriculum Architecture */}
              <div className="space-y-5 mb-9">
                {pillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#EFECE6] border border-[#141210]/10 rounded-sm"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-serif-editorial text-xl font-semibold text-[#141210]">
                        0{idx + 1}. {item.label}
                      </h3>
                      <span className="text-xs text-[#8C6D3B] font-medium">
                        Enquiries Open
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#575049] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setEnquiryOpen(!enquiryOpen)}
                className="group inline-flex items-center gap-3 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#F6F3EE] bg-[#141210] hover:bg-[#26221E] rounded-sm transition-colors cursor-pointer"
              >
                <span>Explore Academy</span>
                <ArrowRight
                  className="w-4 h-4 text-[#C6A368] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>

              <a
                href={getWhatsAppHref(
                  "Hello Shookra Aesthetics & Academy, I would like to enquire about Academy courses and training workshops."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#141210] border border-[#141210]/25 hover:border-[#8C6D3B] rounded-sm transition-colors"
              >
                <span>Student Enquiry on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academy Image + Interactive Student Enquiry Drawer */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {!enquiryOpen ? (
              <div className="relative h-[380px] lg:h-full rounded-sm overflow-hidden border border-[#141210]/15 shadow-xl">
                <ResilientImage
                  src={GENERATED_IMAGES.hairAcademy}
                  alt="Professional beauty and aesthetic education at Shookra Aesthetics & Academy"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/85 via-[#0D0C0B]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F6F3EE]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#E2C792] mb-1">
                    Future-Ready Aesthetic Education
                  </p>
                  <p className="font-serif-editorial text-2xl mb-3">
                    Connect for upcoming batch schedules &amp; syllabus details
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(true)}
                    className="text-xs uppercase tracking-wider text-[#C6A368] underline cursor-pointer"
                  >
                    Request Syllabus &amp; Workshop Details →
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#141210] text-[#F6F3EE] p-8 rounded-sm border border-[#C6A368]/30 h-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#C6A368]">
                    Academy Student Desk
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setEnquiryOpen(false);
                      setSubmitted(false);
                    }}
                    className="text-xs text-[#A8A196] hover:text-[#F6F3EE] cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                {!submitted ? (
                  <form onSubmit={handleAcademySubmit} className="space-y-4">
                    <h3 className="font-serif-editorial text-2xl text-[#F6F3EE] mb-2">
                      Register Your Academy Interest
                    </h3>
                    <p className="text-xs text-[#A8A196] mb-4">
                      Course modules, workshop dates, and certification pathways
                      are shared directly by our academic coordinator.
                    </p>

                    <div>
                      <label
                        htmlFor="academy-name"
                        className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="academy-name"
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 text-sm bg-[#1D1A17] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="academy-phone"
                        className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="academy-phone"
                        type="tel"
                        required
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        placeholder="+91"
                        className="w-full px-4 py-2.5 text-sm bg-[#1D1A17] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="academy-interest"
                        className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="academy-interest"
                        value={interestArea}
                        onChange={(e) => setInterestArea(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-[#1D1A17] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                      >
                        <option value="Permanent Makeup & Aesthetics">
                          Permanent Makeup &amp; Micro-Pigmentation
                        </option>
                        <option value="Advanced Skin & Facial Protocols">
                          Advanced Skin &amp; Facial Protocols
                        </option>
                        <option value="Laser & Scalp Aesthetics">
                          Laser &amp; Scalp Aesthetics
                        </option>
                        <option value="General Workshop Enquiry">
                          General Workshop / Certification Enquiry
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm cursor-pointer mt-2"
                    >
                      Submit Student Enquiry
                    </button>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-4">
                    <CheckCircle2 className="w-10 h-10 text-[#C6A368] mx-auto" />
                    <h3 className="font-serif-editorial text-2xl text-[#F6F3EE]">
                      Academy Enquiry Logged
                    </h3>
                    <p className="text-xs text-[#C7C0B6] leading-relaxed">
                      Thank you, {studentName}. Our team at Shookra Aesthetics
                      &amp; Academy will reach out regarding{" "}
                      <span className="text-[#E2C792]">{interestArea}</span>.
                    </p>
                    <a
                      href={getWhatsAppHref(
                        `Hello Shookra Aesthetics & Academy, my name is ${studentName}. I just submitted an Academy enquiry for ${interestArea}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] rounded-sm"
                    >
                      Continue on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
