() => {
    const body = {
        "Result": {
             "ResultCode": 1,
             "ResultMessage": "Success",
             "CorrelationId": "Login1034542497"
         }, 
         "Value": {
              "LoginToken": "1_a0744c02-ad24-4f77-ac87-b6017eb8205a"
         }
         };

    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: 200,
        body
    };
}
