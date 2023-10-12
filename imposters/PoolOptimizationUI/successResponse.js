() => {

    const body = {
        "data": {
              "optionValuationBatchID": 22222,
              "bookName": "CONV_FRM_15",
              "createDate": new Date(),
              "batchCompletionDate": null,
              "username": "CBrooks1",
              "commonID": 12121,
              "hasPriceDiffOverride": false,
              "marketDataDate": new Date(),
              "isActive": true,
              "optimizations": []
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
