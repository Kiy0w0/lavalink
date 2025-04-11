# MyLavalink Manager

A web-based dashboard for managing and configuring [Lavalink](https://github.com/lavalink-devs/Lavalink) audio servers. This project provides a user-friendly interface to download, configure, and learn about running your own Lavalink instance.

## Features

- 📱 Modern, responsive interface
- 📖 Comprehensive documentation
- 🔧 Configuration file templates
- 📦 Startup script templates
- 🔌 Plugin showcase and resources
- 🚀 Ready to deploy on Vercel

## About Lavalink

Lavalink is a standalone audio sending node based on Lavaplayer and Koe. It allows for sending audio without it ever reaching any of your Discord bot shards. This makes music playback more stable and reduces the CPU/memory footprint of your bot.

## Important Note

This dashboard is designed to help you manage a Lavalink server, but Lavalink itself **cannot** run on Vercel or similar serverless platforms. The actual Lavalink server requires a proper VPS or dedicated server with Java installed.

This dashboard helps you:
1. Download the necessary Lavalink files
2. Get configuration templates
3. Get startup script templates
4. Learn how to use Lavalink
5. Discover plugins and resources

## Development

This project is built with Next.js and can be run locally for development:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

You can deploy this project to Vercel with just a few clicks. The included `vercel.json` configuration ensures proper handling of downloadable files.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fmylavalink-ui)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Lavalink Developers](https://github.com/lavalink-devs) for creating Lavalink
- The various plugin developers who extend Lavalink's functionality
