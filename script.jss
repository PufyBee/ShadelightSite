<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shadelight</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        background-color: #000000;
        color: #f1f1f1;
      }
      .neon-text {
        text-shadow: 0 0 5px #00ffe0, 0 0 10px #00ffe0, 0 0 20px #00ffe0;
      }
    </style>
  </head>
  <body class="font-sans">
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-5xl md:text-6xl font-bold neon-text mb-6">Shadelight</h1>
      <p class="text-xl text-gray-400 mb-8 max-w-2xl">
        A sleek, professional-grade security scanner for networks and files. Built for learners. Ready for experts.
      </p>
      <a
        href="https://github.com/YOUR_USERNAME/shadelight"
        target="_blank"
        class="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-6 rounded-lg transition"
      >
        View on GitHub
      </a>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-8 bg-gray-900">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-semibold mb-12">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div>
            <h3 class="text-xl font-bold text-cyan-400">Subnet Discovery</h3>
            <p class="text-gray-400">Ping or ARP scan local subnet to identify live hosts.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-cyan-400">TCP Port Scanning</h3>
            <p class="text-gray-400">Fast multi-host, multi-port scanner with risk flagging.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-cyan-400">Banner Grabbing</h3>
            <p class="text-gray-400">Collects basic service metadata for open ports.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-cyan-400">Malware Signature Scanning</h3>
            <p class="text-gray-400">Detect known malware using custom hash-based detection.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-center text-gray-600 py-6 text-sm">
      &copy; 2025 Shadelight. For educational and ethical use only.
    </footer>
  </body>
</html>
