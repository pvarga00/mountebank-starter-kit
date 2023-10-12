() => {
    const deployDateDay = new Date();

    const body = {
        "data": {
            "Last Deployed:": deployDateDay
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
