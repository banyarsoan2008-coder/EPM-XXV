[README.md](https://github.com/user-attachments/files/33930213/README.md)
# EPM XXV — Official Artist Site

A complete, mobile-friendly static artist website. It runs without a build step or paid service and can be hosted free with GitHub Pages.

The EPM XXV hero now uses the provided hosted solar-ring still and muted looping video. The animated layer fades in after its first frame loads. The still remains visible when reduced motion is enabled; the video and entrance choreography are disabled.

## Before publishing

1. Open `site.js`. Replace the Spotify, Apple Music, YouTube, Instagram, and email sample destinations with your real artist links and contact email.
2. Open `index.html`. Replace `VIDEO_ID` and `VIDEO_ID_2` in the YouTube embed URLs with the IDs of your videos. Update the video titles too.
3. Add your photos to `assets/images/`, then update the gallery image paths and captions in `index.html`. The included city image is placeholder artwork from the supplied ZIP, not an EPM XXV portrait.
4. To add a release track, copy an MP3 into `assets/audio/`. The on-page **Choose MP3** button previews a local file in your browser; to make a track available to all visitors, configure a permanent audio file URL in the page or replace the chooser with a standard `<audio src="assets/audio/your-track.mp3">` element.
5. Replace the sample release text and biography with your details.

## Publish free with GitHub Pages

1. Sign in to GitHub and create a new **public** repository named `EPM-XXV` (or use the repository you already use for the site).
2. Unzip this package. Open the repository, choose **Add file → Upload files**, and upload the contents of this folder (`index.html`, `style.css`, `site.js`, and `assets/`). Commit the files to the `main` branch.
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then choose **Save**.
4. GitHub will show the site address in the Pages settings. For a project repository it is usually `https://YOUR-USERNAME.github.io/EPM-XXV/`. Allow a few minutes for the first deployment.
5. When you update the site later, upload the changed files to the same repository and commit them to `main`.

If your existing Pages repository has a different name, keep that name in GitHub; the website uses relative asset paths and works from a project subfolder. This package does not publish anything or change your current live site.
