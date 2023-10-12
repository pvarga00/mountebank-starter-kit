# Start with finding your Release Train's Non-Prod AWS Account #
Search for your Release Train in Cloud Hub: https://cloudhub.foc.zone/reporting/accounts

# Infrastructure

This folder contains the Terraform code for creating the infrastructure to run Mountebank in AWS. Mountebank is ran in a Docker container hosted in an ECS (Elastic Container Service) cluster.

# What To Change Here

You'll need to change the following here:

1. Change the account # folder (123456789) name to **your AWS account number**
2. You'll also need to update the account number in the **.hal9000.yml** file
