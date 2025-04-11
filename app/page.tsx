import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            MyLavalink Manager
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            A personal Lavalink instance manager that allows you to configure and interact with your Lavalink server
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Server Status Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Server Status</h2>
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Offline</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your Lavalink server is not running. Note that Vercel doesn't support running Java applications directly.
            </p>
            <div className="flex flex-col space-y-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                Deploy to External Host
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded transition-colors">
                Check Status
              </button>
            </div>
          </div>

          {/* Configuration Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Configuration</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label className="mb-1 text-gray-700 dark:text-gray-300">Server Port</label>
                <input 
                  type="text" 
                  placeholder="2333" 
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-gray-700 dark:text-gray-300">Password</label>
                <input 
                  type="password" 
                  placeholder="youshallnotpass" 
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors">
                Save Configuration
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Stats Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/download" className="block p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                <h3 className="font-medium text-blue-700 dark:text-blue-300">Download Lavalink</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">Get the latest Lavalink server JAR</p>
              </Link>
              <Link href="/docs" className="block p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
                <h3 className="font-medium text-purple-700 dark:text-purple-300">Documentation</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">Learn how to use Lavalink</p>
              </Link>
              <Link href="/plugins" className="block p-4 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                <h3 className="font-medium text-green-700 dark:text-green-300">Plugins</h3>
                <p className="text-sm text-green-600 dark:text-green-400">Enhance Lavalink with plugins</p>
              </Link>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-600 dark:text-gray-400 text-sm py-6">
          <p>MyLavalink Manager © {new Date().getFullYear()}</p>
          <p className="mt-2">
            Based on <a href="https://github.com/lavalink-devs/Lavalink" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Lavalink</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
