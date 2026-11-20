export type Platform = "twitch" | "kick" | "youtube";

export interface Streamer {
  name: string;
  platform: Platform;
  // Twitch y Kick: nombre del canal. YouTube: ID del canal (empieza con UC)
  channel: string;
}

// TODO: reemplazar con los streamers reales del server
export const streamers: Streamer[] = [
  { name: "Streamer 1", platform: "twitch", channel: "canal_de_twitch" },
  { name: "Streamer 2", platform: "kick", channel: "xxxxxxxxxx" },
  { name: "Streamer 3", platform: "youtube", channel: "UCxxxxxxxxxxxxxxxxxxxxxx" },
];