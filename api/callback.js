export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    // Handle verification challenge
    if (body.type === "url_verification") {
      return res.status(200).send(body.challenge);
    }

    // Handle actual events
    console.log("Received event:", body);
    return res.status(200).send("ok");
  }

  res.status(405).send("Method Not Allowed");
}
