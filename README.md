🌍 Atlas Echo Travel Blog.
A modern, creative travel blog project with pastel green-glassmorphism design, interactive photo galleries, dynamic hero section, and friendly navigation/utility components.

✨ Features
• Glassy pastel UI: All buttons, navbars, popups, and footers use real glassmorphism, with blur and soft pastel greens.

• Responsive navbar: Sticky, stylish navbar with logo, Friends, Our Team, Menu buttons.

• Animated loader: Unique introductory loader (with "See the World. Hear Its Echo." animation).

• Dynamic carousels & grids: Responsive, side-by-side carousels and image grids, with hover/ripple animation and creative effects.

• Friends popup: Glassmorphism popup with suggested friends, add buttons, and custom avatars.

• Functional Buttons: All buttons in the project — including  Start Blog, Save Draft, Explore, and navigation links — are fully functional and    trigger real interactions.

• Animated word marquees: Infinite horizontally-scrolling image and text marquees, styled like digital film.

• Footer: Elegant dark glassy pastel-green footer with info, links, and icons.

• Mobile-friendly: Every component adapts from desktop to mobile.

🗂 Project Structure
ATLAS-Echo/
├── assets/             # All images (hero, galleries, avatars, icons)
├── css/                # Separate CSS per page/module
├── js/                 # JS logic for loader, nav, popup, carousel
├── index.html          # Home
├── about.html
├── contact.html
├── drafts.html
├── services.html
├── team.html
├── works.html
├── write.html
└── README.md


🚀 Getting Started
Clone or download this project.

Add your images to the assets/ folder – use recommended sizes (at least 800x600px for hero/gallery, 32x32px+ for avatars).

Customize content:
Update hero text, gallery images, featured picks, About page, etc. with your own stories/images.

Swap out icons (emoji or PNG/SVG) as desired.
Open index.html in your browser.
All main features work with just HTML/CSS/JS—no extra build steps!

🖌 Editing & Customization
Nav & Header:
Logo includes a PNG icon (travel.png). Change the path or image as you wish.
Buttons (“Our Team”, “Friends”, “Menu”) can be reordered or hidden in header.

Loader:
Animated loader at page start. Edit text or animation delay in HTML/CSS/JS.

Gallery & Carousels:
Add carousel images in the assets/ folder and update paths in HTML.
Splash/ripple/mouse hover effects handled in CSS and main.js.

Friends popup:
Appear/disappear handled via JavaScript and glassy popup CSS.
Update user avatars and names in the popup HTML.

Footer:
Links and icons controlled under the .atlas-footer section in HTML.

Color theme:
All major colors defined in css/styles.css as pastel greens (#d6f5e3, #3cc294, etc.).

To change the whole look, adjust gradients and glass backgrounds in CSS.

⚡ Quick Tips
Logo PNG:
Place your PNG (e.g. travel.png) in /assets, then use:

xml
<div class="logo">
  <img src="assets/example.png" alt="Travel Logo Icon" class="logo-icon">
  Atlas Echo
</div>
Add a new gallery image:
Add your JPEG/PNG to assets/ and duplicate <div class="gallery-item">...</div> as needed.
Edit navigation links:
Update <nav class="custom-nav"> in header for your menu and About/Works/Services/Contact pages.

🧰 Dependencies
No external libraries required!
Everything is built with plain HTML5, CSS3, and vanilla JavaScript (ES6+) for best portability and performance.

📱 Mobile Responsiveness
Layout adapts with CSS flex and grid for all devices.
Marquees, carousels, and popups scale down for optimal readability.

📝 Credits
Logo icons: PNG from Flaticon.
Template & enhancements: Inspired and tailored based on user/project needs.

❓ Need Help?
Want a new effect, layout enhancement, or special JS upgrade?
Paste your request or code snippet—get a fast, tailored solution!
For troubleshooting, use browser dev tools and check the README "Quick Tips" above.

Atlas Echo — See the World. Hear Its Echo.


