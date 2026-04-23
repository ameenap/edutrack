# EduTrack — Faculty Task & Schedule System

A Vite-powered build wrapper for EduTrack.  
All app logic lives in `index.html`. Supabase is the backend (no changes needed).

## Local development
```bash
npm install
npm run dev        # starts at http://localhost:3000
```

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploy to Cloudflare Pages
1. Push this repo to GitHub
2. Go to dash.cloudflare.com → Pages → Create a project → Connect to Git
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click Save and Deploy

## Making changes after deployment
Edit `index.html` (or any file), then:
```bash
git add .
git commit -m "your change description"
git push
```
Cloudflare auto-redeploys in ~60 seconds.

## Key locations in index.html
- Supabase URL/key: lines ~594–595
- CSS variables/theme: `:root` block ~line 14
- App logic: `<script>` block starting ~line 585
