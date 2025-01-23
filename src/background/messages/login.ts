import type { PlasmoMessaging } from "@plasmohq/messaging"

import { login } from "~api/auth"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const data = await login(req.body.email, req.body.password)

  res.send({
    data
  })
}

export default handler
