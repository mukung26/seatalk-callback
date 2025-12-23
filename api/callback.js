export default async function handler(req, res) {
  if (req.method === "POST") {
    let body = req.body;

    // Fallback: parse raw body if needed
    if (!body || typeof body !== "object") {
      try {
        body = JSON.parse(req.rawBody || "{}");
      } catch (e) {
        return res.status(400).send("Invalid JSON");
      }
    }

    // SeaTalk verification
    if (body.seatalk_challenge) {
      return res.status(200).send(body.seatalk_challenge);
    }

    // Log other events
    console.log("Received event:", body);
    return res.status(200).send("ok");
  }

  res.status(405).send("Method Not Allowed");
}
