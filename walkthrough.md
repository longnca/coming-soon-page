# Project Walkthrough

Below are the steps and thought processes I did while making this project.

## 1. Define the Requirements

### Q: What is the purpose of this website?

- Inform the visitors that the website is under construction and will be available soon.

### Q: What are the technical requirements?

- Single page.
- Clean, simple, neat looking.
- Having a progress bar to show the progress and remaining time before the launch day.
- Having a countdown timer.
- Responsive.
- Color theme: modern but moody, earthy tone.

### Who are target audiences?

- Any general visitors.

## 2. Design Layout

I created a layout wireframe for my landing page. The layout will show the placement of elements like the title, sub-title, social media icons, countdown timer and/or progress bar.

I tried to keep the layout simple. In my opinion, for a 'Coming Soon page, a single-screen layout with a central focus works well.

:fire: **Tip:** You can draw layouts by handwriting or use wireframing tools like Figma, Excalidraw, Sketch, Justinmind, Moqups, etc. I used Excalidraw for this project since I love its hand-drawn style.

![wireframe](/diagrams/coming-soon-wireframe.png)

## 3. Setup the Project

I created a project folder with a structure for HTML, CSS, and JavaScript files:

- `index.html` for the markup.
- `styles.css` for styling, stored in folder `/css`.
- `script.js` for JavaScript (the countdown timer and progress bar), stored in folder `/js`.

The structure should look like this:

```bash
/coming-soon-page-project
    /css                # CSS or styling files
    /diagrams           # Diagrams like Excalidraw
    /images             # Background images in PNG or WEBP
    /js                 # JavaScript
    index.html          # Front-end file
```

## 4. Write the HTML

- Created a basic HTML5 template in `index.html`.
- Added structural elements for the countdown timer, progress bar, and other contents.
- Linked to CSS and JS script in corresponding directories.
- Check out my `index.html` file for more detail and updates.

## 5. Style with CSS

- In `/css/style.css`, I defined styles to match my planned layout and design requirements.
- Ensure the design is responsive.

## 6. Add JavaScript functionality

- Created the countdown timer in `/js/script.js`.
- Used `setInterval()` to update the timer every second, calculating the difference between the current date and the launch date.
- Connected (or synced) the countdown timer and progress bar width using JS logics.

## 7. Testing

- I regularly checked the file `index.html` for the visual and functionality by using Live Server in VS Code.
- This is optional but we can validate our HTML and CSS using online validators (e.g. W3C Markup Validation Service).
- I checked JavaScript functionality for errors and ensure the timer and progress bar work as expected.

## 8. Deployment

- Once I was happy with what I'd got, I uploaded my files to Hostinger, replacing the default welcome page with my new `index.html`, CSS, and JavaScript files.
- Tested the deployed page to ensure it loads and functions as expected on the live domain.
- I tested the page on multiple devices (my laptop screen, 27-in external monitor, and iPhone) and browsers to ensure compatibility and responsiveness.
