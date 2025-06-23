# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cca4b8b8-a4fb-4d7d-bc99-83a9b617cca6

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. 

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Automatic Deployment:**
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://[your-username].github.io/genesis-evolution-system/`

3. **Manual Deployment (Optional):**
   ```bash
   npm install
   npm run deploy
   ```

### Configuration

- The project uses Vite with proper base path configuration for GitHub Pages
- Client-side routing is handled with a 404.html fallback
- The build output is automatically deployed to the `gh-pages` branch

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cca4b8b8-a4fb-4d7d-bc99-83a9b617cca6) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cca4b8b8-a4fb-4d7d-bc99-83a9b617cca6) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
