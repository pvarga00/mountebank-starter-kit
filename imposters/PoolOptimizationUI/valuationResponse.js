() => {
    const token = 'T' + (new Date).getTime().toString() + Math.random().toString(36).substring(2);
    const date = (new Date).getTime().toString();

    const body = [
            {
            "optionValuationBatchID": 101,
            "bookName":"CONV_FRM_30",
            "bookLabel": "Conventional 30 Year Fixed",
            "createDate":"2019-06-02T13:32:00",
            "batchCompletionDate":"2019-06-02T13:42:00",
            "username":"cbrooks1",
            "commonID": 56788,
            "hasPriceDiffOverride": false,
            "marketDataDate":"2019-06-02T13:32:00",
            "isActive": true,
            "optimizations":[
                {
                "poolOptimizationBatchID": 201,
                "createDate": "2019-06-02T13:42:00",
                "optionValuationBatchID": 101,
                "userName": "cbrooks1",
                "poolOptimizationRunID": 12345,
                "solverTimeLimit": 5,
                "runStartTime": "2019-06-02T13:42:00",
                "runFinishedTime": "2019-06-02T13:47:00",
                "isSavedBatch": false,
                "optionCount": 123456,
                "test": "test",
                "isFeasible": false,
                "optimizationFile": "",
                "status": "Finished"
                }
                ]
            },
            {
            "optionValuationBatchID": 102,
            "bookName":"CONV_FRM_15",
            "bookLabel": "Conventional 15 Year Fixed",
            "createDate":"2019-08-14T09:04:00",
            "batchCompletionDate":"2019-08-14T09:08:00",
            "username":"cbrooks1",
            "commonID": 56788,
            "hasPriceDiffOverride": false,
            "marketDataDate":"2019-08-14T00:00:00",
            "isActive": true,
            "optimizations":[]
            },
            {
            "optionValuationBatchID": 103,
            "bookName":"CONV_ARM",
            "bookLabel": "Conventional ARM",
            "createDate":"2019-12-12T12:12:00",
            "batchCompletionDate":"2019-12-12T12:16:00",
            "username":"pbaldwin",
            "commonID": 56788,
            "hasPriceDiffOverride": false,
            "marketDataDate":"2019-12-12T00:00:00",
            "isActive": true,
            "optimizations":[]
            }
        ]

    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: 200,
        body
    };
}
