# Take My Care — SIH26186 frontend prototype
Static HTML/CSS/JS + Chart.js. Open `index.html` (or run `python -m http.server`). Needs internet for CDN fonts/icons/Chart.js.
Demo: Personnel `Aarav Sharma` / `demo123` · Officer `Officer Priya` / `demo123`. All state is in localStorage (`tmc_*`).
Layout: `js/data.js` mock data · `common.js` shell/modal/toast · `app.js` page renderers (swap `S`/`R`/`F` helpers for `fetch()` calls).
## Planned Flask + MySQL endpoints
POST /api/auth/login · GET /api/personnel/profile · GET /api/personnel/history · POST /api/wellness/check-in · GET /api/wellness/history · POST /api/support/requests · GET /api/officer/requests · PATCH /api/officer/requests/:id · GET /api/officer/personnel · GET /api/officer/alerts · GET /api/officer/analytics
AI-assisted indicators support welfare review and are not medical diagnoses.

## Demo accounts (password `demo123`; log in with first name, full name or ID)
Officers: Officer Priya (OF-201, Units A & C) · Officer Vikram (OF-202, Units B & D)
Personnel: Aarav Sharma PF-1042 (C) · Rohan Kumar PF-1028 (B) · Meera Singh PF-1091 (A) · Kavya Reddy PF-1017 (A) · Arjun Patel PF-1033 (B) · Sneha Iyer PF-1056 (C) · Imran Sheikh PF-1064 (D) · Deepak Joshi PF-1072 (D) · Ananya Das PF-1085 (C) · Harpreet Gill PF-1099 (B)
Each officer only sees personnel, requests and follow-ups from their own units.
