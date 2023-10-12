# Mountebank Starter Kit
This repo is the place to be to get started using Mountebank for your train!

## What Is Mountebank?

Mountebank is a cross-platform, multi-protocol service mocking tool

Mountebank allows you to create "fake" downstream dependencies' API responses - so that you can test your API in isolation (without having to call the "real" dependency API). 

Gump: Mountebank provides you the ability to create mocks for your dependent services, and shape the API responses that you're looking for. 

Using mocks gives you the ability to:
1. Simulate still-in-development service(s) based off API contracts
2. Mock existing services for reasons of simplicity, repeatability, reliability, and "weird-scenarios" (500s, long latency, etc.)

It is recommended that you check the official Mountebank website for more detailed information, (along with our own internal QL documentation):
- [Mountebank's Website](http://www.mbtest.org/)
- [Mountebank (QL) Confluence Page](https://shorty/mbdocs)
- [Mountebank Code Examples](https://git.rockfin.com/QAPOW/mountebank-examples)


#### Quick Terminology used in MounteBank and this Guide:
The official terminology by mountebank can be found in the [documentation here](http://www.mbtest.org/docs/mentalModel)
  - Imposter: mock representing your entire api/application.
  - Stub: a complete block of code capturing your request and response information
  - Predicate: request information to be matched against (Part of a stub)
  - Response: response that should be send back (Part of a stub)
<br>

# Getting Started:
- Documentation below starts with the easiest concepts, builds on the sample examples, and continues enhancing your knowledge:
  - Easiest Setup: [Record and Replay](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/RecordReplay/)
  - Moderate Setup: [Predicate Matching](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/PredicateMatching/), [Modularized Setup](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/ModularizedSetup/)
  - Expert Setup: [(Predicate/Response) Injection](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/Injection/), [Behaviors](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/Behaviors/) 
  
  Order of learning concepts:
  1. [Record and Replay](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/RecordReplay/)
  2. [Predicate Matching](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/PredicateMatching/)
  3. [Modularized Mocks](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/ModularizedSetup/)
  3. [Injection](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/Injection/)
  4. [Behaviors](https://git.rockfin.com/QAPOW/mountebank-examples/tree/master/Behaviors/)
  
Now that you've determined what type of mocks you want to implement, and have the requisite background knowledge:
- Navigate to the "imposters" folder within this repo: [imposters](XXXXX) <br>
- Create a new folder named for your application that you want to generate mocked API endpoints for <br>
- Create a <b>stubs.ejs</b> file, where you'll define all of the mocked API endpoints for your application <br>
  - Check out this documentation on how to create mocks/stubs: (http://www.mbtest.org/docs/api/stubs)
  - And this documentation on how to create json predicates: (http://www.mbtest.org/docs/api/json)
- Add your newly created <b>stubs.ejs</b> file to this file: [imposters.ejs](XXXX) <br>
- Note: Whenever you commit a code change (into master) - A [CircleCI pipeline workflow](https://circleci.foc.zone/gh/otpod/workflows/mountebank-pep) gets kicked off, and we'll automatically build and deploy Mountebank, with your new imposters/mocks included!
- When the CircleCI workflow is completed, and Mountebank has been successfully deployed (with your new changes), you can now find your newly added endpoint(s) added here: XXXXX <br>

<br>

## Admin/Infrastructure Stuff
Please reference [this confluence page](https://confluence/display/SV/Mountebank%3A+Getting+Mountebank+Up+And+Running+in+AWS) for more information. <br>

- ProdEligPlatforms: AWS Secret Access Key : XXX <br>
- ProdEligPlatforms: HAL Token : https://secretserver/SecretView.aspx?secretid=44374 <br>
- CircleCI: https://circleci.foc.zone/gh/otpod/workflows/mountebank-pep <br>
- HAL MB Config: https://hal9000.rockfin.com/applications/3693/dashboard <br>
- HAL MB IAC Config: https://hal9000.rockfin.com/applications/3665/dashboard <br>
- ProdEligPlatforms Mountebank HealthCheck (From EC2 LoadBalancer): XXXX

<br>

## Running Locally (in-progress):
1. Install relevant programs:
- [Node](https://nodejs.org/en/)
- [Bash (git)](https://git-scm.com/downloads)
- [Docker (optional)](https://docs.docker.com/docker-for-windows/install/)

2. Use node package manager to install mountebank:
`npm install -g mountebank`

3. Run `local.sh` script. Optional parameters:
- `-d` Run mountebank in docker image that builds from local dockerfile
- `-l` Log level. Pass in log level for mountebank to use. Acceptable levels: debug, info, warn
