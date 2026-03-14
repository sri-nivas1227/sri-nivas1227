# LinkHub: How I Built My Own Personal Internet Library

> *Because browser bookmarks were never enough.*

---

## The Problem Nobody Talks About

I'm the kind of person who gets curious about everything.

One minute I'm reading a Wikipedia article about the history of the Roman Empire, the next I'm watching a YouTube breakdown of how compilers work, then I'm deep in a blog post about sourdough fermentation science. I love it. But there's a painful side effect — by the time I want to revisit something, it's gone. Buried in browser history, lost in Instagram saves, forgotten in a YouTube playlist I made at 2am.

The tools we have today are platform-specific silos:
- Instagram saves only hold Instagram posts
- YouTube playlists only hold YouTube videos
- Browser bookmarks are a flat, cluttered mess nobody actually organizes
- Notes apps work, but they weren't built for this

I wanted **one place** — a personal internet library — where I could drop any link from anywhere, tag it, group it by topic, and actually find it again later. Something that worked the way my brain works, not the way a platform wants me to work.

So I built LinkHub.

---

## What Is LinkHub?

LinkHub is a full-stack bookmarking app that lets you save, organize, and access links across all your devices. Think of it as a personal library where you're the librarian — you decide the categories, you choose the tags, and you control what gets shared.

Here's what it does:

- **Save any link** with a title and custom tags for context
- **Organize into collections** — group related links from different platforms in one place
- **Search by keywords** — find links using the tags and titles you remember, not the exact URL
- **Share collections** — generate a shareable link so friends can instantly access a curated set of resources
- **Full profile management** — update your details, bio, and social links

> 📸 *Screenshot suggestion: Dashboard showing a collection of saved links with tags, category filters visible on the sidebar*

---

## Building It: The Technical Decisions

### The Stack

I wanted to build with tools I was comfortable with but also push myself to do things properly — not just make it work, but make it maintainable.

| Layer | Technology |
|---|---|
| Frontend | Next.js + TypeScript |
| Styling | TailwindCSS + Framer Motion |
| Backend | Flask (Python) |
| Database | MongoDB |
| Auth | JWT |
| Deployment | Docker + docker-compose |

The frontend is a responsive SPA with optimistic UI updates — actions feel instant, with toast notifications giving real-time feedback. I used Next.js Server Actions for server-side data fetching and kept state management lean with React hooks rather than pulling in a heavy state library.

The backend exposes a clean RESTful API organized around four core resources: authentication, links, categories, and user profiles. Every endpoint is JWT-protected, and the data models are clearly defined for Users, Links, and Categories.

> 📸 *Screenshot suggestion: The add link modal with URL, title, tags, and category fields visible*

### The Hardest Part: Encrypting User Data

This was the moment I stopped treating it as a side project and started treating it like a real product.

LinkHub stores personal data — your saved links tell a story about your interests, research, and habits. That's not data I was willing to handle carelessly.

The problem: I had never encrypted data at the application level before. I didn't know which encryption standards engineers actually use in production, what was overkill for my use case, and what was genuinely necessary. So I did what I always do when I don't know something — I went deep. I researched encryption best practices, read how production applications handle sensitive user data, and made deliberate, informed decisions rather than copying the first Stack Overflow answer I found.

The result is a system where user data is encrypted at rest, with security baked into the architecture rather than bolted on at the end.

### Writing Code That Lasts

My second big goal was maintainability. I've seen what happens when you just make things work — future you (or future contributors) spend more time deciphering code than shipping features.

Before writing a single line, I mapped out the folder structure, defined clear separation between modules, and researched best practices for both Flask backends and Next.js frontends. The entire app can be spun up with one command:

```bash
docker-compose up --build
```

That's it. Consistent environments across development and production, no "works on my machine" surprises.

> 📸 *Screenshot suggestion: The collections/categories view showing multiple grouped collections with link counts*

---

## The Feature I'm Most Proud Of: Shareable Collections

This one started as a "wouldn't it be cool if..." idea and became one of the most useful things about the app.

Say I spent a week curating resources for an Operating Systems exam — textbook chapters, YouTube lectures, blog posts, Wikipedia articles — all saved in one LinkHub collection. My friend asks what I used to study. Instead of copy-pasting ten links into a message, I generate one shareable link to that collection and send it over. They get everything, organized exactly how I organized it.

The use cases are endless: recipes, learning roadmaps, job listings, design inspiration, travel guides, home decor ideas. Any time you curate something worth sharing, LinkHub makes it a one-click handoff.

> 📸 *Screenshot suggestion: A shared collection viewed without login — showing the read-only public view of a collection*

---

## What's Coming Next

LinkHub is live and I use it every day, but it's far from done. Here's what I'm building toward:

**Near-term**
- [ ] Malicious URL scanning before saving
- [ ] Mobile-friendly UI improvements
- [ ] Browser extension for one-click saving from any tab

**Longer-term**
- [ ] Reminders — get nudged about links you saved but haven't read yet
- [ ] ML-powered search and recommendations based on your saved content
- [ ] Chrome extension with instant save + tagging from the browser

The reminder feature is something I'm particularly excited about — it closes the loop on the original problem. Not just saving links, but actually getting back to them.

---

## Try It Yourself

LinkHub is live at **[linkhub.srinivasmekala.dev](https://linkhub.srinivasmekala.dev)** and the source code is open on GitHub.

If you've ever lost a link you wanted to come back to — you'll get it immediately.

> 📸 *Screenshot suggestion: The landing/login page showing the app name, tagline, and sign-up CTA*

---

*Built by Srinivas Mekala · [Portfolio](https://srinivas-mekala.netlify.app) · [GitHub](https://github.com/sri-nivas1227) · [LinkedIn](https://linkedin.com/in/sri-nivas1227)*