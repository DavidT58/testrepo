const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

var dbclient = new DynamoDBClient({ region: "eu-central-1" });

function createUser()