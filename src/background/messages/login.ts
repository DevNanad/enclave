import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  //const data = await querySomeAPI(req.body.email, req.body.password)

  res.send({
    data: "XXX"
  })
}

export default handler
