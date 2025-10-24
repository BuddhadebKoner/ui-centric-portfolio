import { NextResponse } from "next/server";

export async function GET() {
   const client_id = process.env.SPOTIFY_CLIENT_ID;
   const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/callback`;

   const scope = 'user-read-currently-playing user-read-playback-state user-top-read';

   const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: 'code',
      client_id: client_id!,
      scope: scope,
      redirect_uri: redirect_uri,
   }).toString()}`;

   return NextResponse.redirect(authUrl);
}
