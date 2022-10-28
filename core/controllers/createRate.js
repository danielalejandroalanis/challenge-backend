'use strict';

const _ = require('lodash');
const P = require('bluebird');
const moment = require('moment');
const Base = require('steplix-microservice/server/routes');
const { errors, database } = require('steplix-microservice');
const { validator, logger: { events } } = require('steplix-microservice/helpers');
const { Rates } = require('../models/currenciesRates.model');

class Route extends Base {
    /**
     * Validate request
     */
    validate (req) {
        if (_.isEmpty(req.body)) {
            throw new errors.BadRequest('Bad request. Please set body parameters');
        }
        if (!validator.isInteger(req.body.id_currency)) {
            throw new errors.BadRequest('Bad request. Please use "id_currency" on body parameters');
        }
        if (!req.body.value) {
            throw new errors.BadRequest('Bad request. Please use "value" on body parameters');
        }
        return P.resolve();
    }

    /**
     * Handle request
     */
    handler (req) {
        const context = {
            logger: req.logger,
            id_currency: req.body.id_currency,
            value: req.body.value,
        };

        return P.bind(this)
            .then(() => this.save(context))
            .catch(error => {
                console.log(error)
            });
    }

    /**
     * Save on database
     */
    save (context) {
        const data = {
            id_currency: context.id_currency,
            value: context.value,
            created_at: moment().format(),
        };

        // Create new Rates model.
        return database.models.Rates.create(data).then(rate => {
            if (!rate) {
                throw new errors.InternalServerError('Not saved rate');
            }
            context.rate = rate;
            return rate;
        });
    }
}

module.exports = (new Route("Rates", {Rates})).handlerize();
