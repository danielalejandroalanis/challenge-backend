const Base = require("steplix-microservice/server/routes");
const { errors, database } = require("steplix-microservice");
class Route extends Base {
  handler(req) {
    return database.models.Rates.find({
      with: ["currency"],
      order: [["created_at", "DESC"]],
    }).then((model) => {
      if (!model) {
        throw new errors.NotFound(`Not found model ${id}`);
      }

      return model.filter(
        (model) => model.currency.symbol === req.params.symbol.toUpperCase()
      )[0];
    });
  }
}

module.exports = new Route().handlerize();
