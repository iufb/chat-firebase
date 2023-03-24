//Auth token we will use to generate a meeting and connect to it
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjYzQ2OWEwOS1lM2FmLTRkNGItYTgxOS03MmIwNDYxOGJlMzIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3OTU3MjAxNiwiZXhwIjoxODM3MzYwMDE2fQ.LeMrpoyuuPHPFd3KYphhEMCSUjAvJv6xd-Pq8DeGO_M";
// API call to create meeting
export const createMeeting = async ({ token }: { token: string }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};
