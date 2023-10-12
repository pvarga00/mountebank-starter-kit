() => {
    const body = 
            {
            "optimizationValuationBatchID": 123456,
            "progressPercentage": 35,
            }

    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: 200,
        body
    };
}
