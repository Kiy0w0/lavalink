import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            &larr; Back to Dashboard
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Lavalink Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about using Lavalink
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Contents</h2>
              <nav className="space-y-2">
                <a href="#introduction" className="block text-blue-600 dark:text-blue-400 hover:underline">Introduction</a>
                <a href="#requirements" className="block text-blue-600 dark:text-blue-400 hover:underline">Requirements</a>
                <a href="#configuration" className="block text-blue-600 dark:text-blue-400 hover:underline">Configuration</a>
                <a href="#clients" className="block text-blue-600 dark:text-blue-400 hover:underline">Client Libraries</a>
                <a href="#api" className="block text-blue-600 dark:text-blue-400 hover:underline">REST API</a>
                <a href="#troubleshooting" className="block text-blue-600 dark:text-blue-400 hover:underline">Troubleshooting</a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <section id="introduction" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lavalink is a standalone audio sending node based on Lavaplayer and Koe. It allows for sending audio 
                without it ever reaching any of your Discord bot shards.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With Lavalink, you can:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Stream audio from various sources like YouTube, SoundCloud, Bandcamp, and more</li>
                <li>Use minimal CPU/memory resources</li>
                <li>Control volume, seeking, and other audio features</li>
                <li>Distribute your audio load across multiple servers</li>
                <li>Enjoy enhanced stability for your Discord music bots</li>
              </ul>
            </section>
            
            <section id="requirements" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Requirements</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To run Lavalink, you'll need:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li>Java 17 LTS or newer (OpenJDK or Zulu JDK recommended)</li>
                <li>A server or VPS to host Lavalink (not compatible with serverless platforms like Vercel)</li>
                <li>Open ports for the Lavalink server (default: 2333)</li>
                <li>A Discord bot that uses a Lavalink client library</li>
              </ul>
            </section>
            
            <section id="configuration" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Configuration</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lavalink uses an <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">application.yml</code> file for configuration.
                Here's a basic example:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-gray-800 dark:text-gray-200 overflow-x-auto text-sm mt-4">
{`server:
  port: 2333
  address: 0.0.0.0
lavalink:
  server:
    password: "youshallnotpass"
    sources:
      youtube: true
      bandcamp: true
      soundcloud: true
      twitch: true
      vimeo: true
      http: true
      local: false
    bufferDurationMs: 400
    youtubePlaylistLoadLimit: 6
    playerUpdateInterval: 5
    youtubeSearchEnabled: true
    soundcloudSearchEnabled: true
    gc-warnings: true

metrics:
  prometheus:
    enabled: false
    endpoint: /metrics

sentry:
  dsn: ""
  environment: ""
`}</pre>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                The most important settings to change are:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li><strong>server.port:</strong> The port Lavalink will run on</li>
                <li><strong>lavalink.server.password:</strong> A secure password for client authentication</li>
                <li><strong>server.address:</strong> The IP address to bind to (0.0.0.0 for all interfaces)</li>
              </ul>
            </section>
            
            <section id="clients" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Client Libraries</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To connect your Discord bot to Lavalink, you'll need a client library. Here are some popular options:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">JavaScript/TypeScript</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Shoukaku</li>
                    <li>Erela.js</li>
                    <li>lavacord</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Java</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Lavalink-Client</li>
                    <li>LavaClient</li>
                    <li>JDA-Lavalink</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Python</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Wavelink</li>
                    <li>Lavapy</li>
                    <li>Pomice</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">C#/.NET</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Victoria</li>
                    <li>Lavalink4NET</li>
                    <li>DSharpPlus.Lavalink</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section id="api" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">REST API</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lavalink provides a REST API for managing players and tracks. All endpoints require authentication
                using the password specified in the configuration.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Common endpoints include:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                <li><code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">GET /loadtracks</code> - Load tracks from a URL</li>
                <li><code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">GET /decodetrack</code> - Decode a track</li>
                <li><code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">GET /decodetracks</code> - Decode multiple tracks</li>
                <li><code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">GET /version</code> - Get version information</li>
                <li><code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">GET /stats</code> - Get server statistics</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                For detailed API documentation, visit the 
                <a 
                  href="https://github.com/lavalink-devs/Lavalink/blob/master/PROTOCOL.md" 
                  className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lavalink Protocol documentation
                </a>.
              </p>
            </section>
            
            <section id="troubleshooting" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Troubleshooting</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Connection Issues</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If your bot can't connect to Lavalink, check:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Ensure the server is running and the port is open</li>
                    <li>Verify the password matches in both client and server</li>
                    <li>Check that your client library is configured correctly</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Audio Not Playing</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If audio isn't playing:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Check if the source is supported (YouTube, SoundCloud, etc.)</li>
                    <li>Verify the bot has permission to join and speak in voice channels</li>
                    <li>Look for errors in the Lavalink console output</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">High CPU Usage</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If Lavalink is using too much CPU:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1 text-sm">
                    <li>Consider distributing load across multiple Lavalink nodes</li>
                    <li>Check if Java has enough available memory</li>
                    <li>Consider upgrading your server resources</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 