export default (req, res) => {
  const data = Array(10).fill({
    username: "Qaren",
    post:
      "This is a post where I'm not screaming racially charged obsenities or wishing ill on marginilazed folk. Also, there are no consipiracies for sure. I'm a very stable genius.",
  });

  res.render("index", { data });
};
