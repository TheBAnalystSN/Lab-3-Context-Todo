
---

## `REFLECTION.md`

```md
# Lab 3 Reflection – Context API Todo Application

## What I Learned
This lab helped me better understand how React’s Context API works and when it should be used instead of prop drilling. Creating multiple contexts for different pieces of global state made the application easier to reason about and maintain.

I also learned how to connect contexts together, such as using the filter context to control which todos are displayed, and how context state can be persisted using localStorage.

---

## Challenges Faced
One of the biggest challenges was debugging errors related to file structure and exports. Several issues came from incorrect default exports, incorrect imports, and small JSX typos that caused the application to fail silently or render a blank screen.

Another challenge was understanding where to place logic for localStorage persistence. Initially, updates were not saving correctly, but moving persistence logic inside the context providers helped keep responsibilities clear.

Working through Vite-specific setup issues, such as running commands from the correct directory and understanding where `package.json` needed to exist, also required troubleshooting.

---

## How I Solved the Problems
I resolved most issues by carefully reading error messages in the terminal and browser console, checking file paths, and verifying exports and imports matched correctly. Breaking the project into smaller steps and testing after each change made it easier to isolate issues.

Using Context Providers to centralize logic helped reduce complexity once everything was wired correctly.

---

## What I Would Improve
If I had more time, I would improve the UI styling and add better visual feedback for active filters and completed todos. I would also add better error handling and possibly performance optimizations using memoization where appropriate.

---

## Overall Takeaway
This lab strengthened my understanding of global state management in React and showed how Context API can be an effective solution for medium-sized applications without introducing unnecessary complexity.
