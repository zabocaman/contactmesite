# Warren Chanansingh — Portfolio Website

A plain HTML/CSS/JS site. It needs no build step and runs on any static host.

## Files
```
index.html          Home
work.html           My Work (projects, experience, education, skills)
case-studies.html   Three case studies (#performance, #meta-ads-101, #web)
contact.html        Contact details + contact form
css/style.css       All styling (colours are set at the top)
js/main.js          Mobile menu, scroll animations, contact-form fallback
images/             Put your headshot and project images here
```

## Before you publish
1. **Fill in the yellow highlights.** Search each HTML file for `todo`. These mark spots where public info wasn't available: dates, clients and results metrics.
2. **Add your headshot.** Save it as `images/warren.jpg`. In `index.html`, replace the `<span class="todo">…</span>` inside `.portrait` with `<img src="images/warren.jpg" alt="Warren Chanansingh">`.
3. **Contact form (optional).** Right now, submitting the form opens the visitor's email app. To get messages straight to your inbox, create a free form at formspree.io and replace `YOUR_FORM_ID` in `contact.html`.
4. **Check the project blurbs** for the GitHub repos on `work.html`. They were written from the repo names.

## Uploading
- **Netlify (easiest):** go to app.netlify.com/drop and drag the whole `warren-portfolio` folder onto the page.
- **GitHub Pages:** push these files to a repo, then go to Settings → Pages → Deploy from branch `main` / root.
- **Any cPanel or FTP host:** upload the folder contents into `public_html`.
- **Custom domain:** point your domain (for example chanansingh.com) at the host from its domain settings.
