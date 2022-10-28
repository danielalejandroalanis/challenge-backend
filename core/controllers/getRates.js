const Base = require("steplix-microservice/server/routes");
const { errors, database } = require("steplix-microservice");

class Route extends Base {
  handler() {
    let arrAda = [];
    let arrBtc = [];
    let arrEth = [];
    return database.models.Rates.find({
      with: ["currency"],
      order: [["id", "DESC"]],
    }).then((model) => {
      if (!model) {
        throw new errors.NotFound(`Not found model ${id}`);
      }
      model.map((model) => {
        if (model.currency.symbol === "ADA" && model.currency.symbol) {
          arrAda.push(model);
        }
        if (model.currency.symbol === "BTC" && model.currency.symbol) {
          arrBtc.push(model);
        }
        if (model.currency.symbol === "ETH" && model.currency.symbol) {
          arrEth.push(model);
        }
      });

      const newArrayOfModels = [
        arrAda[0] || undefined,
        arrBtc[0] || undefined,
        arrEth[0] || undefined,
      ];

      return newArrayOfModels.filter((element) => {
        return element !== undefined;
      });
    });
  }
}

module.exports = new Route().handlerize();
