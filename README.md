# Rainfall Word

I created Rainfall Word as a playful experiment connecting meteorology and surreal language. It mixes real-world data with AI imagery and interaction design to deliver an interactive web app that merges creative thinking with technical execution.


# Overview

Rainfall Words is an interactive app where the user locks a word (“last month”, “midnight”, “banana”, “last 2 weeks”, “sunset”), and the system responds in one of two ways:

🔹 If the word is a time period:
→ Fetch real rainfall data for the user’s exact location (using geolocation + VisualCrossing API) and compute totals (weekly, yearly, monthly).

🔹 If the word is a concept:
→ Generate an absurd, photorealistic AI image interpreting the phrase “Rainfall WORD” using a Node.js backend.

This creates a playful intersection of meteorology, imagination, and visual storytelling.

# Live Demo

Demo: https://vercel.com/eleni-s-projects/rainfall-word
GitHub (Frontend): https://github.com/yourname/rainfall-words
GitHub (Backend): https://github.com/yourname/rainfall-words-server

# Features

Real-time geolocation detection
Historical rainfall aggregation (14 days, month, year)
Proxy Node.js server to protect API keys
Surreal AI image generation (DeepAI)
Rain background animation written in CSS/JS
Clean React architecture
Smooth transitions & interactive word-lock mechanic
Mobile-friendly UI

# How it Works
Weather Mode

If the user locks:

"last 2 weeks" → fetch daily rainfall for the past 14 days
"last month" → dynamic start/end dates
"last year" → 365-day rainfall aggregation

The backend fetches:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{lat},{lon}/{start}/{end}
And sums all precipitation values.
Image Mode
The backend sends:
POST /generate-image


With a surreal prompt like:
"Create an ultra-detailed, absurd, cinematic artwork where “Rainfall Trout” is represented literally…"
The result is displayed in a custom ResultCard.

# Tech Stack

# Frontend:
React 19, CSS animations, Geolocation API, Custom components (WordScroller, ResultCard, etc.)

# Backend:
Node.js, Express, VisualCrossing weather API, DeepAI Text2Image


