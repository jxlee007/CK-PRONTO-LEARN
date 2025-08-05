# 🌗 Build a Theme Switcher UI (Step-by-Step Instructions)

---

## 🧱 Step 1: Set Up Your Project

1. **Create three files** in your project folder:

   * `index.html`
   * `style.css`
   * `app.js`

2. Open `index.html` and type `!` followed by `Tab` to scaffold the HTML boilerplate (if you're using Emmet in VS Code).

3. In the `<head>`, do the following:

   * Link your stylesheet:

     ```html
     <link rel="stylesheet" href="style.css">
     ```
   * Add your JS file with the `defer` attribute:

     ```html
     <script src="app.js" defer></script>
     ```
   * Add a custom Google Font:

     ```html
     <link href="https://fonts.googleapis.com/css2?family=YourFontChoice&display=swap" rel="stylesheet">
     ```

---

## 🏗️ Step 2: Create the HTML Structure

1. Add a `class="light"` to your `<body>` for the default theme.

2. Inside the `<body>`, add the following structure:

   * A `<nav>` or `<ul>` acting as a **navbar**.
   * A `header` with:

     * An `<img>` logo.
     * An `<h1>` headline.
     * A `<p>` subheadline or description.
   * A `<main>` section with some sample text (`<p>Lorem ipsum...</p>`).

3. In the navbar, include:

   * Navigation items.
   * A list item with a `class="has-dropdown"` containing a dropdown for theme switching:

     ```html
     <li class="has-dropdown">
       <a href="#">Themes</a>
       <ul class="dropdown">
         <li><a id="light" href="#">Light</a></li>
         <li><a id="dark" href="#">Dark</a></li>
         <li><a id="solar" href="#">Solar</a></li>
       </ul>
     </li>
     ```

---

## 🎨 Step 3: Add Basic CSS Styling

1. Reset some default browser styles:

   ```css
   * {
     margin: 0;
     padding: 0;
     list-style: none;
   }
   ```

2. Set all links to inherit the current text color:

   ```css
   a {
     color: currentColor;
     text-decoration: none;
   }
   ```

3. Style the navbar:

   * Set fixed height and full width.
   * Use Flexbox to arrange navigation items.

---

## 📥 Step 4: Build the Dropdown Menu (CSS Only)

1. In your CSS, style the dropdown:

   ```css
   .has-dropdown {
     position: relative;
   }

   .dropdown {
     position: absolute;
     opacity: 0;
     width: 500px;
     background: var(--nav-bg);
     display: flex;
     gap: 1rem;
     padding: 1rem;
     border-radius: 10px;
     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
     z-index: 2;
     pointer-events: none;
     transition: opacity 0.3s ease;
   }

   .has-dropdown:focus-within .dropdown {
     opacity: 1;
     pointer-events: all;
   }
   ```

2. Add Flexbox styling to align theme links horizontally inside the dropdown.

---

## 🎯 Step 5: Add Visual Theme Indicators

1. For each theme option, use a pseudo-element `::before` to show a colored circle:

   ```css
   .dropdown a::before {
     content: '';
     width: 1rem;
     height: 1rem;
     border-radius: 50%;
     display: inline-block;
     margin-right: 0.5rem;
     background-color: currentColor;
   }

   #light::before {
     background: gray;
   }

   #dark::before {
     background: black;
   }

   #solar::before {
     background: goldenrod;
   }
   ```

---

## 🎨 Step 6: Create Theme Styles Using CSS Variables

1. In your `:root`, define a palette of CSS variables:

   ```css
   :root {
     --gray0: #f8f9fa;
     --gray6: #212529;
     --blue: #228be6;
     --yellow: #fab005;
     --text-color: var(--gray6);
     --background: var(--gray0);
     --nav-bg: var(--blue);
     --border-color: var(--gray6);
   }
   ```

2. Create `.light`, `.dark`, and `.solar` classes for the `body`:

   ```css
   .light {
     --text-color: var(--gray6);
     --background: var(--gray0);
   }

   .dark {
     --text-color: var(--gray0);
     --background: var(--gray6);
   }

   .solar {
     --text-color: #000;
     --background: var(--yellow);
   }
   ```

3. Apply these variables throughout your styles:

   ```css
   body {
     background: var(--background);
     color: var(--text-color);
     transition: background 0.3s ease, color 0.3s ease;
   }

   nav {
     background: var(--nav-bg);
   }
   ```

---

## ⚙️ Step 7: Add Theme Switch Logic in JavaScript

1. In `app.js`, select the theme buttons and the `body`:

   ```js
   const light = document.getElementById('light');
   const dark = document.getElementById('dark');
   const solar = document.getElementById('solar');
   const body = document.body;
   ```

2. Add event listeners:

   ```js
   light.addEventListener('click', () => {
     body.classList.replace('dark', 'light');
     localStorage.setItem('theme', 'light');
   });

   dark.addEventListener('click', () => {
     body.classList.replace('light', 'dark');
     localStorage.setItem('theme', 'dark');
   });

   solar.addEventListener('click', () => {
     if (body.classList.contains('solar')) {
       body.classList.remove('solar');
       solar.innerText = 'Solar';
       localStorage.removeItem('isSolar');
     } else {
       body.classList.add('solar');
       solar.innerText = 'Normal';
       localStorage.setItem('isSolar', true);
     }
   });
   ```

---

## 💾 Step 8: Remember Theme with `localStorage`

1. At the top of `app.js`, load saved preferences:

   ```js
   const theme = localStorage.getItem('theme');
   const isSolar = localStorage.getItem('isSolar');

   if (theme) {
     body.classList.add(theme);
   }

   if (isSolar) {
     body.classList.add('solar');
     solar.innerText = 'Normal';
   }
   ```

2. This ensures your theme and solar mode persist after reloads.

---

## 🌈 Step 9: Add Logo Hover Animation

1. In your CSS, create a hue-rotation animation:

   ```css
   @keyframes color-rotate {
     from {
       filter: hue-rotate(0deg);
     }
     to {
       filter: hue-rotate(360deg);
     }
   }

   img:hover {
     animation: color-rotate 1s infinite alternate;
   }
   ```

---

✅ You're Done!

You now have a working multi-theme website:

* Click to switch between Light, Dark, and Solar themes.
* Your theme is saved in localStorage.
* Logo animates on hover for a nice interactive touch.