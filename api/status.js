export default function handler(req, res) {
  // Puoi cambiare lo stato in "offline"
  const userStatus = "online";

  res.status(200).json({ status: userStatus });
}
