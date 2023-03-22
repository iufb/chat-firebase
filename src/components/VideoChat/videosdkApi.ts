const API_BASE_URL = "https://api.videosdk.live";
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjYzQ2OWEwOS1lM2FmLTRkNGItYTgxOS03MmIwNDYxOGJlMzIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3OTM5ODg2MywiZXhwIjoxODM3MTg2ODYzfQ.CQXkC0LpkL6RKnC9hANQG7BvwLIFkbSx0C01bxvB9xs";
export const createMeeting = async ({ token }: { token: string }) => {
  const url = `${API_BASE_URL}/v2/rooms`;
  const options = {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
  };

  const { roomId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error("error", error));

  return roomId;
};
export const validateMeeting = async ({
  roomId,
  token,
}: {
  roomId: string;
  token: string;
}) => {
  const url = `${API_BASE_URL}/v2/rooms/validate/${roomId}`;

  const options = {
    method: "GET",
    headers: { Authorization: token, "Content-Type": "application/json" },
  };

  const result = await fetch(url, options)
    .then((response) => response.json()) //result will have meeting id
    .catch((error) => console.error("error", error));

  return result ? result.roomId === roomId : false;
};
