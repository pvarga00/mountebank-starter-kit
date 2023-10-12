terragrunt_source = "git::https://git.rockfin.com/terraform/aws-ecs-app-tf.git?ref=4.3.3"

# ---------------------------------------------------------------------------------------------------------------------
# Required variables for AWS
# ---------------------------------------------------------------------------------------------------------------------

aws_region              = "us-east-2"

development_team_email        = "petervarga@quickenloans.com"
infrastructure_team_email     = "petervarga@quickenloans.com"
infrastructure_engineer_email = "kaseymiller@quickenloans.com"

# ---------------------------------------------------------------------------------------------------------------------
# Standard Module Required Variables
# ---------------------------------------------------------------------------------------------------------------------

app_id                  = "999999"
application_name        = "pepmb"                         # Alphanumeric characters, lowercase ONLY, 16 characters MAX. DO NOT EXCEED
environment             = "beta"                                # Must match the environment of the cluster, this is how it determines cluster placement

# ---------------------------------------------------------------------------------------------------------------------
# Infrastructure Tags
# ---------------------------------------------------------------------------------------------------------------------

app_tags = {
  hal-app-id  = "4240"
}

# ---------------------------------------------------------------------------------------------------------------------
# Infrastructure Variables
# ---------------------------------------------------------------------------------------------------------------------

vpc_id                  = "vpc-019d813ca896ea03f"
subnet_ids              = [ "subnet-0886ab942cdd20b44", "subnet-01a0573e244a1dd42", "subnet-040a56fcb01dc2ed7" ]     # Should be private subnets if load_balancer_type below is "private"; public subnets if load_balancer_type is "public"
desired_number_of_tasks = 1                    # Recommended values: 1 for dev/test, 3(or however many subnets you have) for beta/prod
min_number_of_tasks     = 1                    # Recommended values: 1 for dev/test, 3(or however many subnets you have) for beta/prod
max_number_of_tasks     = 1                    # Recommended values: 1 for dev/test, 9(or however many subnets you have) for beta/prod

# ---------------------------------------------------------------------------------------------------------------------
# Load Balancer Variables
# ---------------------------------------------------------------------------------------------------------------------

#use_tls                = true
#acm_certificate        = "arn:aws:acm:us-east-1:99999999999:certificate/589c9f20-383e-4a57-bb4f-21032e98d35d"
load_balancer_type     = "public"                 # Should be set to "private" for most internally hosted API's, then fronted with an API GW; public for user-facing websites
allow_connections_from_cidr_blocks = ["12.165.188.0/24","162.252.136.0/21"]    # What IP space to lock down the load balancer to, default is QL IP space

# ---------------------------------------------------------------------------------------------------------------------
# Health Check Variables
# ---------------------------------------------------------------------------------------------------------------------

health_check_path       = "/health"            # Health check path for your application

# ---------------------------------------------------------------------------------------------------------------------
# AutoScaling Variables
# ---------------------------------------------------------------------------------------------------------------------

use_auto_scaling        = false                # Recommended values: false for dev/test, true for beta/prod
use_blue_green          = false                # Recommended values: false for dev/test/beta, true for prod
