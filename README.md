# Shookra Aesthetics & Academy — Official Clinic & Academy Website

A luxury, conversion-focused full-stack web application built for **Shookra Aesthetics & Academy** located in Shivalik Colony, New Delhi.

## 1. Brand Overview & Details

- **Business Name**: Shookra Aesthetics & Academy
- **Address**: 8, Road, Shivalik Rd, Shivalik Colony, New Delhi, Delhi 110017, India
- **Google Rating**: 5.0 / 5.0 (22 Reviews)
- **Core Services (All 10 Included)**:
  1. Permanent Makeup
  2. MNRF Treatment
  3. Laser Hair Removal Treatment
  4. Tattoo Removal
  5. Hydra Facial
  6. Vampire Facial
  7. Carbon Facial Peel
  8. Scar Removal
  9. Scalp Micro Pigmentation
  10. Hairfall Treatment

## 2. Key Features

- **5-Step Appointment Booking System**:
  - Step 1: Select Treatment
  - Step 2: Select Preferred Date
  - Step 3: Select Time Slot
  - Step 4: Customer Information (with input validation & sanitization)
  - Step 5: Confirmation with Reference ID, WhatsApp follow-up, and Call links
- **Dedicated SEO-Friendly Treatment Views**: Complete overview, benefits, suitability criteria, 3-step treatment experience, and treatment-specific FAQs with responsible clinical disclaimers.
- **Interactive Masonry Gallery & Lightbox**: Filterable by Clinic, Beauty, Skin, Hair, Treatments, and Results with keyboard arrow navigation and mobile swipe support.
- **Academy Student Enquiry System**: Dedicated section for courses, workshops, and student enquiries.
- **Configurable External Integrations**: Zero hardcoded fake phone numbers or social links; easily configured via `.env`.

## 3. Environment Configuration (`.env`)

Copy `.env.example` to `.env` and set your live clinic details:

```bash
VITE_WHATSAPP_NUMBER="9198XXXXXXXX"
VITE_INSTAGRAM_URL="https://www.instagram.com/your_handle"
VITE_GOOGLE_MAPS_URL="https://www.google.com/maps/embed?pb=..."
VITE_BOOKING_URL=""
```

## 4. Development & Production Deployment

### Local Development
```bash
npm install
npm run dev
```
Runs the Express + Vite full-stack server on `http://0.0.0.0:3000`.

### Production Build & Start
```bash
npm run build
npm run start
```
Builds optimized static assets into `dist/` and serves both the frontend SPA and `/api/appointments` REST endpoints via `server.ts`.
