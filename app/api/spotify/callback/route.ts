import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   const searchParams = request.nextUrl.searchParams;
   const code = searchParams.get("code");
   const error = searchParams.get("error");

   if (error) {
      return new NextResponse(
         `<html>
        <body style="font-family: system-ui; padding: 40px; background: #000; color: #fff;">
          <h1>❌ Authorization Failed</h1>
          <p>Error: ${error}</p>
          <a href="/" style="color: #1DB954;">← Back to Home</a>
        </body>
      </html>`,
         { headers: { "Content-Type": "text/html" } }
      );
   }

   if (!code) {
      return new NextResponse(
         `<html>
        <body style="font-family: system-ui; padding: 40px; background: #000; color: #fff;">
          <h1>❌ No Authorization Code</h1>
          <a href="/" style="color: #1DB954;">← Back to Home</a>
        </body>
      </html>`,
         { headers: { "Content-Type": "text/html" } }
      );
   }

   const client_id = process.env.SPOTIFY_CLIENT_ID;
   const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
   const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/callback`;

   try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(
               `${client_id}:${client_secret}`
            ).toString("base64")}`,
         },
         body: new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: redirect_uri,
         }),
      });

      const data = await response.json();

      if (data.error) {
         return new NextResponse(
            `<html>
          <body style="font-family: system-ui; padding: 40px; background: #000; color: #fff;">
            <h1>❌ Token Exchange Failed</h1>
            <p>Error: ${data.error}</p>
            <p style="color: #666; font-size: 12px;">Redirect URI used: ${redirect_uri}</p>
            <p style="color: #666; font-size: 12px;">Make sure this matches exactly in Spotify Dashboard</p>
            <a href="/" style="color: #1DB954;">← Back to Home</a>
          </body>
        </html>`,
            { headers: { "Content-Type": "text/html" } }
         );
      }

      // Return the tokens in a nice HTML page
      return new NextResponse(
         `<html>
        <head>
          <style>
            body {
              font-family: system-ui;
              padding: 40px;
              background: #000;
              color: #fff;
              max-width: 800px;
              margin: 0 auto;
            }
            .success { color: #1DB954; }
            .token-box {
              background: #1a1a1a;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              border: 1px solid #333;
            }
            code {
              background: #2a2a2a;
              padding: 4px 8px;
              border-radius: 4px;
              display: block;
              margin: 10px 0;
              word-break: break-all;
              font-size: 12px;
            }
            button {
              background: #1DB954;
              color: #000;
              border: none;
              padding: 10px 20px;
              border-radius: 20px;
              cursor: pointer;
              font-weight: bold;
              margin-top: 10px;
            }
            button:hover { opacity: 0.8; }
            a { color: #1DB954; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1 class="success">✅ Spotify Authorization Successful!</h1>
          
          <div class="token-box">
            <h3>📝 Step 1: Copy Your Refresh Token</h3>
            <p>This token never expires. Copy it to your <code>.env.local</code> file:</p>
            <code id="refresh-token">${data.refresh_token}</code>
            <button onclick="copyRefreshToken()">Copy Refresh Token</button>
          </div>

          <div class="token-box">
            <h3>⚙️ Step 2: Update .env.local</h3>
            <p>Add this line to your <code>.env.local</code> file:</p>
            <code>SPOTIFY_REFRESH_TOKEN=${data.refresh_token}</code>
          </div>

          <div class="token-box">
            <h3>🔄 Step 3: Restart Dev Server</h3>
            <p>Stop your dev server (Ctrl+C) and run:</p>
            <code>npm run dev</code>
          </div>

          <div style="margin-top: 40px;">
            <a href="/">← Back to Home</a>
          </div>

          <script>
            function copyRefreshToken() {
              const token = document.getElementById('refresh-token').textContent;
              navigator.clipboard.writeText(token).then(() => {
                alert('✅ Refresh token copied to clipboard!');
              });
            }
          </script>
        </body>
      </html>`,
         { headers: { "Content-Type": "text/html" } }
      );
   } catch (error) {
      console.error("Spotify callback error:", error);
      return new NextResponse(
         `<html>
        <body style="font-family: system-ui; padding: 40px; background: #000; color: #fff;">
          <h1>❌ Server Error</h1>
          <p>Failed to exchange code for token</p>
          <a href="/" style="color: #1DB954;">← Back to Home</a>
        </body>
      </html>`,
         { headers: { "Content-Type": "text/html" } }
      );
   }
}

