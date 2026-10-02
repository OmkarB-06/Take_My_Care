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

## 📁 Project Structure

```text
take-my-care/
│
├── index.html
├── login.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── common.js
│   ├── data.js
│   └── charts.js
│
├── personnel/
│   ├── dashboard.html
│   ├── profile.html
│   ├── history.html
│   ├── wellness.html
│   ├── risk.html
│   └── support.html
│
└── officer/
    ├── dashboard.html
    ├── personnel.html
    ├── personnel-details.html
    ├── requests.html
    ├── follow-up.html
    ├── alerts.html
    └── analytics.html
```

## 📂 Directory & File Description

### 🌐 Root Directory

| File         | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| `index.html` | Main landing page of the Take My Care application.                     |
| `login.html` | Login page used to access the Personnel or Officer portal.             |
| `README.md`  | Project documentation, setup instructions, features, and architecture. |

### 🎨 `css/`

Contains the application's global stylesheet.

| File        | Description                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style.css` | Provides the overall UI styling, responsive layouts, dashboard components, forms, tables, buttons, modals, alerts, themes, and mobile responsiveness. |

### ⚙️ `js/`

Contains the JavaScript logic shared throughout the application.

| File        | Description                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `common.js` | Contains common functions such as navigation, theme switching, UI interactions, notifications, and shared utilities.       |
| `data.js`   | Handles application data, personnel records, check-ins, welfare requests, risk information, and browser-side data storage. |
| `charts.js` | Handles charts and data visualizations used in the Officer Analytics dashboard.                                            |

---

## 👤 Personnel Portal

The `personnel/` directory contains all pages related to personnel users.

| File             | Description                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `dashboard.html` | Personnel home dashboard showing check-in status, wellness information, risk indicators, notifications, and support requests. |
| `profile.html`   | Displays the personnel profile and personal/service information.                                                              |
| `history.html`   | Displays previous check-ins and historical activity.                                                                          |
| `wellness.html`  | Provides wellness information, self-assessment features, and support resources.                                               |
| `risk.html`      | Displays safety and risk-related information and indicators.                                                                  |
| `support.html`   | Allows personnel to submit welfare and support requests to officers.                                                          |

### Personnel Portal Flow

```text
Personnel Login
      │
      ▼
Dashboard
      │
      ├── Profile
      ├── Check-in History
      ├── Wellness
      ├── Risk
      └── Support Request
```

---

## 🛡️ Officer Portal

The `officer/` directory contains pages used by officers to monitor and manage personnel.

| File                     | Description                                                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `dashboard.html`         | Officer dashboard containing personnel statistics, check-ins, requests, alerts, and key information.                       |
| `personnel.html`         | Displays the personnel list with search, filtering, and access to individual records.                                      |
| `personnel-details.html` | Displays detailed information about a selected personnel member, including profile, history, wellness, risk, and requests. |
| `requests.html`          | Displays and manages welfare/support requests submitted by personnel.                                                      |
| `follow-up.html`         | Used to manage follow-up actions related to personnel welfare or support requests.                                         |
| `alerts.html`            | Displays important personnel alerts and issues requiring officer attention.                                                |
| `analytics.html`         | Provides charts and statistics for personnel, wellness, risk, check-ins, and support requests.                             |

### Officer Portal Flow

```text
Officer Login
      │
      ▼
Dashboard
      │
      ├── Personnel
      │     └── Personnel Details
      │
      ├── Requests
      │     └── Follow-up
      │
      ├── Alerts
      │
      └── Analytics
```

---

## 🔄 Application Architecture

```text
                       ┌─────────────────┐
                       │   Take My Care  │
                       └────────┬────────┘
                                │
                         ┌──────▼──────┐
                         │    Login    │
                         └──────┬──────┘
                                │
                 ┌──────────────┴──────────────┐
                 │                             │
        ┌────────▼────────┐           ┌────────▼────────┐
        │ Personnel Portal│           │  Officer Portal  │
        └────────┬────────┘           └────────┬────────┘
                 │                             │
        ┌────────▼────────┐           ┌────────▼────────┐
        │    Dashboard    │           │    Dashboard    │
        └────────┬────────┘           └────────┬────────┘
                 │                             │
       ┌─────────┼─────────┐          ┌────────┼─────────┐
       │         │         │          │        │         │
    Wellness   Risk    Support     Personnel Requests  Alerts
                           │            │        │
                           └────────────┴────────┘
                                      │
                                  Analytics
```

---

## 💾 Data Flow

The application currently uses **browser Local Storage** for client-side data persistence.

```text
┌──────────────┐
│  Personnel   │
└──────┬───────┘
       │
       ├── Check-in
       ├── Wellness Data
       ├── Risk Data
       └── Support Request
                │
                ▼
       ┌─────────────────┐
       │  Local Storage  │
       └────────┬────────┘
                │
                ▼
       ┌─────────────────┐
       │ Officer Portal  │
       └────────┬────────┘
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
     Requests Alerts  Analytics
```

---

## 🧩 Technology Stack

| Technology            | Purpose                             |
| --------------------- | ----------------------------------- |
| **HTML5**             | Structure and content               |
| **CSS3**              | Styling and responsive UI           |
| **JavaScript (ES6+)** | Application logic and interactions  |
| **Chart.js**          | Data visualization and analytics    |
| **Local Storage**     | Client-side data persistence        |
| **Git & GitHub**      | Version control and project hosting |

---

## 📱 Responsive Design

The application is designed to support:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Responsive CSS is used to adapt dashboards, navigation, tables, forms, cards, and other UI components to different screen sizes.

---

## 🔐 Security & Architecture Note

> **Important:** This project is currently implemented as a frontend prototype. Authentication, authorization, and data persistence are handled on the client side for demonstration purposes.

For a production-ready implementation, the application should be connected to:

* Secure backend APIs
* A production database
* Server-side authentication
* Role-based access control (RBAC)
* Secure session management
* Input validation and sanitization
* HTTPS/TLS
* Encryption for sensitive information

---

## 🚀 Future Improvements

Potential future improvements include:

* [ ] Backend API integration
* [ ] Database integration
* [ ] Secure authentication
* [ ] Role-based authorization
* [ ] Real-time notifications
* [ ] Email/SMS alerts
* [ ] Advanced analytics
* [ ] Audit logging
* [ ] Cloud deployment
* [ ] Automated testing
* [ ] Production-grade security

---

## 📌 Project Summary

**Take My Care** is a personnel welfare and monitoring web application designed around two primary user roles:

1. **Personnel** — Check in, view wellness and risk information, review history, and submit support requests.
2. **Officers** — Monitor personnel, manage welfare requests, review alerts, perform follow-ups, and analyze personnel data.

The modular structure separates common assets, personnel functionality, and officer functionality, making the project easier to maintain and extend.
