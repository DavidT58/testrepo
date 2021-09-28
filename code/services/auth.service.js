global.fetch = require('node-fetch');
global.navigator = () => null;

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
   UserPoolId: "eu-central-1_IR3DsebJb",
   ClientId: "frameless-grid-backend"
};

// const pool_region = "arn:aws:cognito-idp:eu-central-1:266443982967:userpool/eu-central-1_IR3DsebJb";
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Register = function (body, callback) {
   var name = body.name;
   var email = body.email;
   var password = body.password;
   console.log(body);
   var attributeList = [];
   
   attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
   userPool.signUp(name, password, attributeList, null, function (err, result) {
     if (err)
         callback(err);
     var cognitoUser = result.user;
     callback(null, cognitoUser);
   })
}

exports.Login = function (body, callback) {
    var userName = body.name;
    var password = body.password;
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
         Username: userName,
         Password: password
     });
     var userData = {
         Username: userName,
         Pool: userPool
     }
     var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
     cognitoUser.authenticateUser(authenticationDetails, {
         onSuccess: function (result) {
            var accesstoken = result.getAccessToken().getJwtToken();
            callback(null, accesstoken);
         },
         onFailure: (function (err) {
            callback(err);
        })
    })
 };
