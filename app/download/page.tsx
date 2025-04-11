import Link from 'next/link';

export default function DownloadPage() {
  // Simulate available versions
  const versions = [
    { version: "4.0.8", date: "September 20, 2024", stable: true },
    { version: "4.0.7", date: "August 15, 2024", stable: true },
    { version: "4.0.6", date: "July 3, 2024", stable: true },
    { version: "3.7.12", date: "February 18, 2023", stable: true },
  ];

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
            Download Lavalink
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get the latest version of Lavalink to run on your server
          </p>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Available Versions</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-900 dark:text-white">
              <thead className="border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 font-medium">Version</th>
                  <th className="px-4 py-3 font-medium">Release Date</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {versions.map((version, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3">{version.version}</td>
                    <td className="px-4 py-3">{version.date}</td>
                    <td className="px-4 py-3">
                      {version.stable ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          Stable
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                          Beta
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <a 
                        href={`https://github.com/lavalink-devs/Lavalink/releases/download/v${version.version}/Lavalink.jar`} 
                        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Configuration Files</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">application.yml</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                Standard configuration file for Lavalink server
              </p>
              <a 
                href="/application.yml" 
                download
                className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm transition-colors"
              >
                Download Template
              </a>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Start Scripts</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                Scripts to start your Lavalink server
              </p>
              <div className="flex space-x-2">
                <a 
                  href="/start.sh" 
                  download
                  className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm transition-colors"
                >
                  Linux/macOS
                </a>
                <a 
                  href="/start.bat" 
                  download
                  className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm transition-colors"
                >
                  Windows
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Installation Guide</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">1. Prerequisites</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Make sure you have Java 17 LTS or newer installed on your server.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">2. Download Lavalink</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Download the Lavalink.jar file from the table above.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">3. Configure Lavalink</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Download and customize the application.yml file to configure your Lavalink server.
                Place it in the same directory as your Lavalink.jar file.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">4. Start Lavalink</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Download the start script for your operating system, place it in the same directory as your Lavalink.jar file, and execute it.
                <br />
                Alternatively, run the command: <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">java -jar Lavalink.jar</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 