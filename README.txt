================================================================================
  UBian Journey Website — README
  Core Values & BEST Attributes Interactive Portfolio
================================================================================

OVERVIEW
--------
This is a single-page, fully front-end interactive website themed around the
University of Batangas Core Values and BEST attributes. It features:

  • Light-blue modern design with glassmorphism and floating decorations
  • Large polaroid-inspired photo cards (original modern style)
  • Horizontal carousels for each category
  • Lightbox modal with full reflection text when a photo is clicked
  • Smooth scrolling, scroll-triggered animations, hover effects
  • Fully responsive (desktop, tablet, mobile)
  • Ready for both local XAMPP testing and GitHub Pages deployment

IMPORTANT — IMAGE FILES
-----------------------
The actual photograph files were NOT included inside the source document
(only two structure reference images existed). The website correctly
references every photo using the exact filenames you provided.

You MUST place all photo files inside the "images" folder using these
exact names (case-sensitive on Linux servers):

  Faith in God - Growing in Faith.jpg
  Faith in God - Worship Through Dance.jpg
  Faith in God - Celebrating Through Worship.jpg
  Faith in God - Fellowship and Connection.jpg
  Faith in God - Growing Together in Faith.jpg

  Love of Wisdom - Academic Achievement.jpg
  Love of Wisdom - Research Presentation.jpg
  Love of Wisdom - S.M.I.L.E. Partylist President.jpg
  Love of Wisdom - S.M.I.L.E. Group Meeting.jpg
  Love of Wisdom - Call Center Training.jpg

  Service to Fellowmen - Fun Run and Street Clean-Up.jpg
  Service to Fellowmen - Community Immersion and Medicine Distribution.jpg
  Service to Fellowmen - Being a Student Teacher.jpg
  Service to Fellowmen - Giving Food and Goods to Homeless People.jpg
  Service to Fellowmen - Kalinga Community Outreach Activity.jpg

  Builder and Innovator of Knowledge (1).jpg
  Builder and Innovator of Knowledge (2).jpg
  Builder and Innovator of Knowledge (3).jpg
  Builder and Innovator of Knowledge (4).jpg
  Builder and Innovator of Knowledge (5).jpg

  Efficient Professional and Effective Communicator (1).jpg
  Efficient Professional and Effective Communicator (2).jpg
  Efficient Professional and Effective Communicator (3).jpg
  Efficient Professional and Effective Communicator (4).jpg
  Efficient Professional and Effective Communicator (5).jpg

  Social, Moral and Global-Minded Citizen (1).jpg
  Social, Moral and Global-Minded Citizen (2).jpg
  Social, Moral and Global-Minded Citizen (3).jpg
  Social, Moral and Global-Minded Citizen (4).jpg
  Social, Moral and Global-Minded Citizen (5).jpg

  Transformed Lifelong Learner (1).jpg
  Transformed Lifelong Learner (2).jpg
  Transformed Lifelong Learner (3).jpg
  Transformed Lifelong Learner (4).jpg
  Transformed Lifelong Learner (5).jpg

If an image is missing, the card will show a friendly "Image pending"
placeholder instead of a broken image icon.

FOLDER STRUCTURE (recommended)
------------------------------
  your-project-folder/
  ├── index.html
  ├── script.css
  ├── script.js
  ├── README.txt
  └── images/
      ├── Faith in God - Growing in Faith.jpg
      ├── ... (all other .jpg files)
      └── ...

HOW TO RUN LOCALLY WITH XAMPP
-----------------------------
1. Install and start XAMPP (Apache must be running).
2. Copy the entire project folder into:
     C:\xampp\htdocs\   (Windows)
     or
     /opt/lampp/htdocs/  or  /Applications/XAMPP/htdocs/  (macOS/Linux)
3. Make sure the images folder (with all photos) is inside the project folder.
4. Open a browser and go to:
     http://localhost/your-project-folder/
   or simply:
     http://localhost/your-project-folder/index.html

No PHP or MySQL is required. This is a pure HTML/CSS/JS site.

GITHUB PAGES DEPLOYMENT
-----------------------
1. Create a new GitHub repository.
2. Upload index.html, script.css, script.js, and the images/ folder
   (keep the exact folder structure).
3. Go to Settings → Pages → Source: Deploy from a branch → main / root.
4. After a minute the site will be live at:
     https://yourusername.github.io/repository-name/

Because the entry point is index.html (not index.php), GitHub Pages works
perfectly.

DESIGN NOTES
------------
• Theme: energetic light-blue with subtle gradients and glass cards
• Meaningful icons:
    - Faith in God → Christian cross
    - Love of Wisdom → Open book
    - Service to Fellowmen → Care / shield symbol
• Photos are displayed LARGE in modern polaroid-style cards
• Click any photo → big lightbox with the full personal reflection
• Carousels support mouse, touch, buttons, dots + keyboard arrows
• Flow matches official order: Core Values first, then BEST Attributes
• All reflections are clean (no citation markers)

TROUBLESHOOTING
---------------
• Images not appearing → Check the exact filename (including spaces,
  parentheses, and capitalization) and that the files are inside /images/
• Styles missing → Confirm script.css is in the same folder as index.html
• Scripts not working → Confirm script.js is present and the browser
  console shows no 404 errors

Enjoy your interactive UBian journey website!
================================================================================
