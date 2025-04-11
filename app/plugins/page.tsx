import Link from 'next/link';

export default function PluginsPage() {
  // Sample plugin data
  const plugins = [
    {
      name: "Lavalink-DPotify",
      description: "A plugin for Lavalink that adds Spotify support",
      author: "topi314",
      version: "1.0.0",
      github: "https://github.com/topi314/Lavalink-DPotify",
      category: "source"
    },
    {
      name: "sponsorblock-plugin",
      description: "Lavalink plugin that uses SponsorBlock API to skip sponsored YouTube segments",
      author: "topi314",
      version: "1.0.0",
      github: "https://github.com/topi314/sponsorblock-plugin",
      category: "filter"
    },
    {
      name: "lavalink-filter-plugin",
      description: "A Lavalink plugin that adds audio filtering capabilities",
      author: "esmBot",
      version: "1.0.1",
      github: "https://github.com/esmBot/lavalink-filter-plugin",
      category: "filter"
    },
    {
      name: "lavasrc",
      description: "Advanced audio sources for Lavalink, including Spotify, Apple Music, Deezer, and more",
      author: "topi314",
      version: "4.0.0",
      github: "https://github.com/topi314/LavaSrc",
      category: "source"
    },
    {
      name: "lavasearch",
      description: "Advanced search functionality for Lavalink",
      author: "topi314",
      version: "1.0.0",
      github: "https://github.com/topi314/LavaSearch",
      category: "search"
    }
  ];

  // Group plugins by category
  const pluginsByCategory = plugins.reduce((acc, plugin) => {
    if (!acc[plugin.category]) {
      acc[plugin.category] = [];
    }
    acc[plugin.category].push(plugin);
    return acc;
  }, {} as Record<string, typeof plugins>);

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
            Lavalink Plugins
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Enhance your Lavalink server with these community-created plugins
          </p>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Plugins</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Lavalink 4 introduced a plugin system that allows extending functionality without modifying 
            the core codebase. Plugins can add new audio sources, filters, commands, and more.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            To install a plugin, download the JAR file and place it in the <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">plugins</code> folder
            in your Lavalink directory. Then restart your Lavalink server.
          </p>
        </div>

        {/* Render plugins by category */}
        {Object.entries(pluginsByCategory).map(([category, categoryPlugins]) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 capitalize">
              {category} Plugins
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryPlugins.map((plugin, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{plugin.name}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs">
                      v{plugin.version}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 my-3 text-sm">
                    {plugin.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      By <span className="text-gray-700 dark:text-gray-300">{plugin.author}</span>
                    </div>
                    
                    <a 
                      href={plugin.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      <svg 
                        className="w-4 h-4 mr-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Creating Plugins</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Interested in creating your own Lavalink plugin? The process is straightforward for Java developers:
          </p>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
            <li>Create a new Java/Kotlin project</li>
            <li>Add Lavalink's plugin API as a dependency</li>
            <li>Implement the plugin interface</li>
            <li>Build your plugin as a JAR file</li>
          </ol>
          <div className="mt-6">
            <a 
              href="https://github.com/lavalink-devs/Lavalink/blob/master/PLUGINS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors inline-flex items-center"
            >
              Read Plugin Development Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 