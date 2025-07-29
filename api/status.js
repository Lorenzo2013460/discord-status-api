export default function handler(req, res) {
  const userStatus = "online"; // o "offline"
  res.status(200).json({ status: userStatus });
}
