import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
   const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

   const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
         Authorization: `Basic ${basic}`,
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
         grant_type: "refresh_token",
         refresh_token: refresh_token!,
      }),
   });

   return response.json();
}

async function fetchWebApi(endpoint: string, method: string, access_token: string) {
   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
         Authorization: `Bearer ${access_token}`,
      },
      method,
   });

   if (res.status === 204) {
      return null;
   }

   return await res.json();
}

async function getNowPlaying(access_token: string) {
   const data = await fetchWebApi('v1/me/player/currently-playing', 'GET', access_token);

   if (!data || !data.is_playing) {
      return null;
   }

   return {
      isPlaying: true,
      title: data.item.name,
      artist: data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
      albumArt: data.item.album.images[0]?.url,
      url: data.item.external_urls.spotify,
   };
}

export async function GET() {
   try {
      if (!refresh_token) {
         return NextResponse.json(
            {
               nowPlaying: null,
               error: "No refresh token. Please visit /api/spotify/login to authorize."
            },
            { status: 200 }
         );
      }

      const { access_token } = await getAccessToken();
      const nowPlaying = await getNowPlaying(access_token);

      return NextResponse.json(
         {
            nowPlaying,
         },
         {
            headers: {
               "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
            },
         }
      );
   } catch (error) {
      console.error("Error fetching Spotify data:", error);
      return NextResponse.json(
         { nowPlaying: null },
         { status: 200 }
      );
   }
}

