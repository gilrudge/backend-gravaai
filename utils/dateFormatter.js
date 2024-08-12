const data = new Date()

const dateFormatter = Intl.DateTimeFormat("pt-br", {
  dateStyle: "short",
  timeStyles: "short"
});


const formatedData = dateFormatter.format(data)

module.exports = formatedData