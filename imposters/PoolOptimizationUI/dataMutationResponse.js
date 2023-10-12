(config) => {

  const createValuationError = {
    statusCode: 500,
    headers: {
      "content-type": "application/json"
    },
    body: {
      error: "Unsupported Request"
    }
  };
  const updateValuationError = {
    statusCode: 500,
    headers: {
      "content-type": "application/json"
    },
    body: {
      error: "Unsupported Request"
    }
  };
  const valuationSuccess = {
    statusCode: 200,
    headers: {
      "content-type": "application/json"
    },
    body: {
      success: "successful request"
    }
  };
  if (config.request.method === "POST") {
    if (config.request.path.includes("/createValuation")) {
      if (config.request.body.includes("CONV_FRM_30")) {
        return createValuationError;
      } else {
        return valuationSuccess;
      }
    }
  }
  if (config.request.method === "PUT") {
    if (config.request.path.includes("/updateValuation")) {
      if (config.request.body.includes("thisshouldfail")) {
        return updateValuationError;
      } else {
        return valuationSuccess;
      }
    }
  }
}
