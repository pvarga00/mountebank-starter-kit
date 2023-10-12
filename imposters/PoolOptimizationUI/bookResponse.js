() => {
    const body = [
            {
            "bookName": "CONV_FRM_30",
            "bookLabel": "Conventional 30 Year Fixed",
            },
            {
            "bookName": "CONV_FRM_15",
            "bookLabel": "Conventional 15 Year Fixed",
            },
            {
              "bookName": "CONV_ARM",
              "bookLabel": "Conventional ARM",
            },
            {
              "bookName": "GOVT_FRM",
              "bookLabel": "Government Fixed",
            },
            {
              "bookName": "GOVT_ARM",
              "bookLabel": "Government ARM",
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
