() => {
    const token = 'T' + (new Date).getTime().toString() + Math.random().toString(36).substring(2);

    const body = {
        "data": {
            "service-name": "PoolOptimizationUI",
            "success": false
        }
    };

    return {
        headers: {
            'Content-Type': 'application/json'
        },
        statusCode: 500,
        body
    };
}
