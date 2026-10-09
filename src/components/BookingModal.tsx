import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Phone,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SIGNATURE_SERVICES } from "../data/servicesData";
import {
  PREFERRED_TIME_SLOTS,
  submitAppointmentRequest,
  Appointment,
} from "../services/bookingService";
import {
  CLINIC_INFO,
  WHATSAPP_NUMBER,
  isConfiguredValue,
  getWhatsAppHref,
} from "../config/clinicConfig";

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialService,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(
    initialService || SIGNATURE_SERVICES[0].name
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedAppointment, setConfirmedAppointment] =
    useState<Appointment | null>(null);

  // Generate next 14 upcoming dates for clean modern calendar picker
  const upcomingDates = React.useMemo(() => {
    const list: { iso: string; dayName: string; dayNum: string; month: string }[] = [];
    const base = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const iso = d.toISOString().split("T")[0];
      const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
      const dayNum = d.toLocaleDateString("en-US", { day: "2-digit" });
      const month = d.toLocaleDateString("en-US", { month: "short" });
      list.push({ iso, dayName, dayNum, month });
    }
    return list;
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        setSelectedService(initialService);
      }
      if (!selectedDate && upcomingDates.length > 0) {
        setSelectedDate(upcomingDates[0].iso);
      }
      setErrorMsg("");
    }
  }, [isOpen, initialService, selectedDate, upcomingDates]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    setErrorMsg("");
    if (step === 1 && !selectedService) {
      setErrorMsg("Please select a treatment to continue.");
      return;
    }
    if (step === 2 && !selectedDate) {
      setErrorMsg("Please select a preferred date.");
      return;
    }
    if (step === 3 && !selectedTime) {
      setErrorMsg("Please select a preferred time window.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevStep = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!phone.trim() || !/^[+\d\s\-()]{7,20}$/.test(phone.trim())) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    const result = await submitAppointmentRequest({
      name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      message: message.trim(),
    });
    setIsSubmitting(false);

    if (!result.success || !result.appointment) {
      setErrorMsg(
        result.error ||
          "Something went wrong. Please try again or contact us on WhatsApp."
      );
      return;
    }

    setConfirmedAppointment(result.appointment);
    setStep(5);
  };

  const resetAndClose = () => {
    setStep(1);
    setConfirmedAppointment(null);
    setErrorMsg("");
    onClose();
  };

  const hasPhoneConfigured = isConfiguredValue(
    WHATSAPP_NUMBER,
    "YOUR_NUMBER_HERE"
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-[#0D0C0B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#151311] border border-[#C6A368]/35 rounded-sm shadow-2xl overflow-hidden my-8">
        {/* Top Modal Header */}
        <div className="px-6 py-5 bg-[#12100E] border-b border-[#F6F3EE]/10 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A368]">
              {CLINIC_INFO.name}
            </p>
            <h2
              id="booking-modal-title"
              className="font-serif-editorial text-2xl sm:text-3xl text-[#F6F3EE]"
            >
              {step === 5
                ? "Appointment Request Received"
                : "Request an Appointment"}
            </h2>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close appointment booking window"
            className="w-9 h-9 rounded-sm bg-[#1A1714] border border-[#F6F3EE]/15 text-[#D5CFC7] hover:text-[#F6F3EE] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper Progress Bar (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-3 bg-[#181512] border-b border-[#F6F3EE]/8 flex items-center justify-between text-xs">
            {[
              { num: 1, label: "1. Treatment" },
              { num: 2, label: "2. Date" },
              { num: 3, label: "3. Time" },
              { num: 4, label: "4. Details" },
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                disabled={s.num > step}
                onClick={() => s.num < step && setStep(s.num)}
                className={`font-medium transition-colors ${
                  step === s.num
                    ? "text-[#E2C792] font-semibold"
                    : s.num < step
                    ? "text-[#C6A368] cursor-pointer hover:underline"
                    : "text-[#A8A196]/50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div
              role="alert"
              className="mb-6 p-4 bg-[#2A1616] border border-[#E57373]/40 rounded-sm flex items-start gap-3 text-xs text-[#F6F3EE]"
            >
              <AlertCircle className="w-4 h-4 text-[#E57373] shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Select Treatment */}
          {step === 1 && (
            <div>
              <h3 className="font-serif-editorial text-2xl text-[#F6F3EE] mb-2">
                Step 1: Select Preferred Treatment
              </h3>
              <p className="text-xs text-[#A8A196] mb-5">
                Choose from our 10 signature aesthetic, skin, laser, and hair
                treatments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SIGNATURE_SERVICES.map((srv) => {
                  const active = selectedService === srv.name;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.name)}
                      className={`p-3.5 text-left rounded-sm border transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? "bg-[#C6A368]/15 border-[#C6A368] text-[#F6F3EE]"
                          : "bg-[#1A1714] border-[#F6F3EE]/10 text-[#C7C0B6] hover:border-[#F6F3EE]/30"
                      }`}
                    >
                      <div>
                        <span className="font-mono text-[11px] text-[#C6A368] block">
                          {srv.indexNumber}. {srv.category}
                        </span>
                        <span className="text-sm font-medium text-[#F6F3EE]">
                          {srv.name}
                        </span>
                      </div>
                      {active && (
                        <CheckCircle2 className="w-4 h-4 text-[#C6A368] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Select Preferred Date */}
          {step === 2 && (
            <div>
              <h3 className="font-serif-editorial text-2xl text-[#F6F3EE] mb-2">
                Step 2: Select Preferred Date
              </h3>
              <p className="text-xs text-[#A8A196] mb-5">
                Select your preferred consultation or treatment date. You can
                also pick any custom date below.
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 mb-6">
                {upcomingDates.map((d) => {
                  const isSelected = selectedDate === d.iso;
                  return (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() => setSelectedDate(d.iso)}
                      className={`p-3 rounded-sm border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#C6A368] text-[#0D0C0B] border-[#C6A368] font-semibold"
                          : "bg-[#1A1714] border-[#F6F3EE]/10 text-[#D5CFC7] hover:border-[#C6A368]/50"
                      }`}
                    >
                      <span className="block text-[10px] uppercase opacity-80">
                        {d.dayName}
                      </span>
                      <span className="block font-serif-editorial text-2xl tabular-nums my-0.5">
                        {d.dayNum}
                      </span>
                      <span className="block text-[10px] uppercase opacity-80">
                        {d.month}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div>
                <label
                  htmlFor="custom-date-input"
                  className="block text-xs uppercase tracking-wider text-[#C7C0B6] mb-2"
                >
                  Or choose another date from calendar:
                </label>
                <div className="relative">
                  <input
                    id="custom-date-input"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2.5 text-sm bg-[#1A1714] border border-[#F6F3EE]/20 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Select Time Slot */}
          {step === 3 && (
            <div>
              <h3 className="font-serif-editorial text-2xl text-[#F6F3EE] mb-2">
                Step 3: Select Preferred Time Window
              </h3>
              <p className="text-xs text-[#A8A196] mb-5">
                Select your preferred appointment request time. Our clinic
                coordinator will confirm exact slot availability with you.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PREFERRED_TIME_SLOTS.map((slot) => {
                  const active = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 px-3 rounded-sm border text-xs font-medium tabular-nums flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        active
                          ? "bg-[#C6A368] text-[#0D0C0B] border-[#C6A368] font-semibold"
                          : "bg-[#1A1714] border-[#F6F3EE]/10 text-[#D5CFC7] hover:border-[#C6A368]/50"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Customer Information */}
          {step === 4 && (
            <form id="booking-step4-form" onSubmit={handleFormSubmit} className="space-y-4">
              <div className="p-3.5 bg-[#1A1714] border border-[#C6A368]/25 rounded-sm text-xs text-[#D5CFC7] flex flex-wrap items-center justify-between gap-2 mb-4">
                <span>
                  <strong className="text-[#E2C792]">Treatment:</strong>{" "}
                  {selectedService}
                </span>
                <span className="tabular-nums">
                  <strong className="text-[#E2C792]">Preferred Slot:</strong>{" "}
                  {selectedDate} at {selectedTime}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-fullname"
                    className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="booking-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 text-sm bg-[#1A1714] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 text-sm bg-[#1A1714] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 text-sm bg-[#1A1714] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-service-confirm"
                    className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                  >
                    Preferred Treatment
                  </label>
                  <select
                    id="booking-service-confirm"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-[#1A1714] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                  >
                    {SIGNATURE_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-message"
                  className="block text-xs uppercase tracking-wider text-[#D5CFC7] mb-1.5"
                >
                  Optional Message / Consultation Notes
                </label>
                <textarea
                  id="booking-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific skin, hair, or aesthetic goals..."
                  className="w-full px-4 py-2.5 text-sm bg-[#1A1714] border border-[#F6F3EE]/15 rounded-sm text-[#F6F3EE] focus:outline-none focus:border-[#C6A368]"
                />
              </div>

              <p className="text-[11px] text-[#A8A196]">
                {CLINIC_INFO.disclaimer}
              </p>
            </form>
          )}

          {/* STEP 5: Confirmation */}
          {step === 5 && confirmedAppointment && (
            <div className="text-center py-4 space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#C6A368]/20 border border-[#C6A368] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#C6A368]" />
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#C6A368] mb-1">
                  Reference ID: {confirmedAppointment.id}
                </p>
                <h3 className="font-serif-editorial text-3xl text-[#F6F3EE]">
                  Your appointment request has been received.
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A196] mt-2 max-w-md mx-auto">
                  Our team at Shookra Aesthetics &amp; Academy will review your
                  preferred time window and contact you to confirm your visit.
                </p>
              </div>

              {/* Summary Table */}
              <div className="bg-[#1A1714] border border-[#F6F3EE]/12 rounded-sm p-5 text-left max-w-md mx-auto space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-[#F6F3EE]/8">
                  <span className="text-[#A8A196]">Client Name:</span>
                  <span className="text-[#F6F3EE] font-medium">
                    {confirmedAppointment.name}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F6F3EE]/8">
                  <span className="text-[#A8A196]">Treatment:</span>
                  <span className="text-[#E2C792] font-medium">
                    {confirmedAppointment.service}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F6F3EE]/8">
                  <span className="text-[#A8A196]">Preferred Date:</span>
                  <span className="text-[#F6F3EE] tabular-nums">
                    {confirmedAppointment.date}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#A8A196]">Preferred Time:</span>
                  <span className="text-[#F6F3EE] tabular-nums">
                    {confirmedAppointment.time}
                  </span>
                </div>
              </div>

              {/* 3 Required Confirmation Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppHref(
                    `Hello Shookra Aesthetics & Academy, I have submitted an appointment request (${confirmedAppointment.id}) for ${confirmedAppointment.service} on ${confirmedAppointment.date} at ${confirmedAppointment.time}. Name: ${confirmedAppointment.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                {hasPhoneConfigured ? (
                  <a
                    href={`tel:${WHATSAPP_NUMBER.replace(/[^\d+]/g, "")}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] bg-[#1A1714] border border-[#F6F3EE]/20 rounded-sm"
                  >
                    <Phone className="w-4 h-4 text-[#C6A368]" />
                    <span>Call Clinic</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={resetAndClose}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F6F3EE] bg-[#1A1714] border border-[#F6F3EE]/20 rounded-sm"
                  >
                    <Phone className="w-4 h-4 text-[#C6A368]" />
                    <span>Call Clinic</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#C7C0B6] hover:text-[#F6F3EE] cursor-pointer"
                >
                  <span>Back to Website</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Controls for Steps 1–4 */}
        {step < 5 && (
          <div className="px-6 py-4 bg-[#12100E] border-t border-[#F6F3EE]/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-[#C7C0B6] hover:text-[#F6F3EE] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            ) : (
              <span className="text-xs text-[#A8A196]">
                Shivalik Colony, New Delhi
              </span>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                form="booking-step4-form"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#0D0C0B] bg-[#C6A368] hover:bg-[#D5B57C] rounded-sm luxury-neon-cta cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Securing your appointment request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Appointment Request</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
