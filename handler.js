"use strict";

const axios = require("axios");

module.exports.simple = async (event, context) => {
  const url = process.env.URL;
  const { status } = await axios.get(url);
  return {
    statusCode: status
  };
};

module.exports.text = async (event, context) => {
  const text = process.env.TEXT;
  const url = process.env.URL;
  const { status } = await axios.get(url);

  // TODO: check text

  return {
    statusCode: status
  };
};
