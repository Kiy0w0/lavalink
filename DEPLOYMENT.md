# Deploying MyLavalink to Vercel

This guide will help you deploy the MyLavalink UI dashboard to Vercel.

## Prerequisites

1. [GitHub](https://github.com/) account
2. [Vercel](https://vercel.com/) account (you can sign up with your GitHub account)

## Deployment Steps

### Option 1: One-Click Deployment

1. Fork this repository to your GitHub account
2. Click the Deploy button below to start the deployment process:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmylavalink-ui)

3. Follow the on-screen instructions to complete the deployment

### Option 2: Manual Deployment

1. Fork this repository to your GitHub account
2. Log in to your Vercel account
3. Click "Add New..." and select "Project"
4. Import your forked repository
5. Configure the project with the following settings:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

## Custom Domain (Optional)

If you want to use a custom domain for your MyLavalink dashboard:

1. Go to your project settings in Vercel
2. Navigate to the "Domains" section
3. Add your custom domain and follow the instructions to configure DNS settings

## Updating Your Deployment

Whenever you make changes to your forked repository, Vercel will automatically redeploy your site. If you want to manually trigger a redeployment:

1. Go to your project in Vercel
2. Click on "Deployments"
3. Click "Redeploy" on the latest deployment

## Important Notes

- Remember that this dashboard only helps you manage a Lavalink server; it does not actually run a Lavalink server itself.
- For running the actual Lavalink server, you'll need a VPS or dedicated server with Java 17+ installed.
- You can use the configuration and script templates provided by the dashboard to set up your Lavalink server more easily.

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel for error messages
2. Ensure all dependencies are properly installed
3. Make sure your repository has the correct structure
4. Verify that your Vercel account has the necessary permissions to deploy from your GitHub repository 