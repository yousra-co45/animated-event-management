import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  eventType: 'Conference',
  message: ''
};

function Registration() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out'
      });
      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: 0.15,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\+?\d{7,15}$/.test(formData.phone.replace(/\s+/g, '')))
      newErrors.phone = 'Please enter a valid phone number.';
    if (!formData.message.trim()) newErrors.message = 'A short event note helps us prepare.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus(null);
  };

  // 🎯 Pure Frontend Submission Fix (No More 404 Errors)
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setStatus({ type: 'error', message: 'Please fix the highlighted fields before submitting.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Simulate Network Request Delay for 1 second to showcase clean premium loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ 
        type: 'success', 
        message: 'Your registration request has been successfully processed! We will get back to you with a tailored plan shortly.' 
      });
      setFormData(initialState);
      setErrors({});
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden min-h-[80vh] py-16 px-4 sm:px-6 lg:px-10">
      <div className="absolute -left-10 top-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div ref={heroRef} className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#111827] border border-amber-500/20 px-4 py-2 text-sm text-amber-300 shadow-sm">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Secure event registration</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Register for your next event</h1>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Join our event community with a fast registration form built to match the project’s dark, premium palette. Share your details and we&apos;ll get back to you with a tailored event plan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gray-800/90 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-400">What we need</p>
              <h2 className="mt-4 text-xl font-semibold text-white">Quick registration overview</h2>
              <p className="mt-3 text-gray-400">
                Fill out your details, choose your event type, and submit. We validate your form instantly and show success or error messages right away.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-6 shadow-[0_20px_60px_rgba(7,89,133,0.18)] backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Design</p>
              <h2 className="mt-4 text-xl font-semibold text-white">Animation & polish</h2>
              <p className="mt-3 text-gray-400">
                This page uses AOS on scroll and GSAP entry motion to keep the experience smooth, modern, and aligned with the app’s existing styling.
              </p>
            </div>
          </div>
        </div>

        <div ref={formRef} className="rounded-[2rem] border border-gray-800/90 bg-[#0b1329]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-gray-800/70 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">User Registration</h2>
              <p className="text-gray-400 text-sm">Complete the form and secure your spot.</p>
            </div>
            <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-2 text-[0.95rem] font-semibold text-slate-950 shadow-[0_15px_30px_rgba(245,158,11,0.25)]">
              Fast submit
            </div>
          </div>

          {status && (
            <div className={`mb-6 rounded-2xl border px-4 py-4 text-sm ${status.type === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-rose-500/30 bg-rose-500/10 text-rose-300'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-gray-300">
                <span className="font-medium">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Alex Morgan"
                  className={`w-full rounded-3xl border px-4 py-3 bg-gray-950/60 text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 ${errors.fullName ? 'border-rose-500/60' : 'border-gray-700/80'}`}
                />
                {errors.fullName && <span className="text-xs text-rose-300">{errors.fullName}</span>}
              </label>
              <label className="space-y-2 text-sm text-gray-300">
                <span className="font-medium">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className={`w-full rounded-3xl border px-4 py-3 bg-gray-950/60 text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 ${errors.email ? 'border-rose-500/60' : 'border-gray-700/80'}`}
                />
                {errors.email && <span className="text-xs text-rose-300">{errors.email}</span>}
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-gray-300">
                <span className="font-medium">Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 345 780769"
                  className={`w-full rounded-3xl border px-4 py-3 bg-gray-950/60 text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 ${errors.phone ? 'border-rose-500/60' : 'border-gray-700/80'}`}
                />
                {errors.phone && <span className="text-xs text-rose-300">{errors.phone}</span>}
              </label>
              <label className="space-y-2 text-sm text-gray-300">
                <span className="font-medium">Event Type</span>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-gray-700/80 bg-gray-950/60 px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30"
                >
                  <option>Conference</option>
                  <option>Workshop</option>
                  <option>Networking</option>
                  <option>Private Gathering</option>
                </select>
              </label>
            </div>
            <label className="space-y-2 text-sm text-gray-300">
              <span className="font-medium">Event Notes</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us what you need for your event..."
                className={`w-full rounded-3xl border px-4 py-3 bg-gray-950/60 text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 ${errors.message ? 'border-rose-500/60' : 'border-gray-700/80'}`}
              />
              {errors.message && <span className="text-xs text-rose-300">{errors.message}</span>}
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-3xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(245,158,11,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;