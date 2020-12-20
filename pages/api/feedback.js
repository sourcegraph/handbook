import axios from "axios"

export default async (req, res) => {
  if (req.method === "POST") {
    const username = process.env.USERNAME_ISSUES
    const password = process.env.GITHUB_ACCESS_TOKEN
    const repo = process.env.REPO_ISSUES
    try {
      if (!username || !password || !repo) {
        res
          .status(501)
          .json({ message: "Username, password and repo must be added to the .env file" })
      }
      const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64")
      const url = `https://api.github.com/repos/${username}/${repo}/issues`

      const response = await axios({
        url,
        method: "POST",
        headers: {
          Authorization: `Basic ${token}`,
        },
        data: {
          title: `${req.body.reaction} comment on ${req.body.location}`,
          body: req.body.comment,
          labels: [req.body.location],
        },
      })
      res.status(200).json({ message: "sent" })
    } catch (error) {
      res.status(400).json({ message: "error" })
    }
  } else {
    // Handle any other HTTP method
    res.status(400).json({ message: "only post methods supported" })
  }
}
