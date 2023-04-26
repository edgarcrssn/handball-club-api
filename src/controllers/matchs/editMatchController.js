export default async (req, res) => {
  try {
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
