# K-POP Hub — Prototype

This is a front-end prototype implemented with Vite + React. It demonstrates:

- Google sign-in (demo placeholder; see notes to wire Firebase)
- Artist selection (static list)
- News list (requires News API key or proxy; falls back to mock data)
- Concerts (mock data)
- Quiz with 4-choice questions and point awarding (saved to localStorage)
- Profile editing and photo upload (localStorage for prototype)

## Quick start

1. Unzip the project and open in terminal:
   ```
   cd kpop-prototype
   npm install
   npm run dev
   ```

2. Open `http://localhost:5173` (Vite default) to view.

## How to make features fully functional

- **Google Login**: Use Firebase Web SDK (v9 modular). Create a Firebase project, enable Google sign-in, copy your config, and replace the Login component with firebase auth logic. The `firebase` dependency is already in package.json.
- **News**: Get an API key from NewsAPI.org, Bing News Search, or Google News solutions; *do not* expose the key in client-side code—create a small server-side proxy that calls the news API and returns results.
- **Concerts**: Use Ticketmaster API or Songkick API. Again, use server-side proxy to protect API keys and adhere to rate limits.
- **Database**: For persistent user profiles, liked artists, and quiz history, use Firestore (Firebase), Supabase, or your own backend with a database.

## Files of interest
- `src/components/` — all UI components (Login, ArtistSelector, NewsList, Quiz, Profile, Concerts)
- `src/App.jsx` — main layout

If you'd like, I can:
- Wire up Firebase auth & Firestore using your Firebase config.
- Implement a tiny Express server that proxies NewsAPI and Ticketmaster (so keys aren't exposed).
- Deploy the prototype to Vercel / Render and give you a live URL.

Tell me which of the above you'd like next and I'll produce the code and deployment steps.
