# What To Change Here

1. **aws_region** - Change AWS region to **your region folder name**
2. **app_tags**
   1.  **development-team-email** -  Update to your primary enginnering team's distribution
   2.  **infrastructure-team-email** - Update to the infrastructure team's distribution
   3.  **infrastructure-engineer-email** - Update to infrastructure owner's email address.
   4.  **hal-app-id** - Application ID in HAL of HAL App to push infrastructure (see confluence page for more details)
3.  **vpc_id** - ID of the VPC you wish to place the infrastructure in
4.  **subnet_ids** - Subnet Ids of the **private** subnets this infrastructure should be in
5.  **alb_public_subnet_ids** - Subnet Ids of the **public** (or QL public) subnets that will be associated with the **ALB** (Application Load Balancer)
6.  **route_53_zone_id** - The ID of the Hosted Zone in Route53 you wish to use.
7.  **website_dns_name** - The DNS name you wish to use to communicate with Mountebank. The format will be **{nameofyourchoice}.{yourhostedzonedomain}**. e.g. **testmock.np.rocketmortgage.com**
8.  **application_name** - "Application" Name you wish to associate with infrastructure. eg: **RocketMortgage-mb**
9.  **environment** - Environment this infrastructure lives in. **Recommended**: Make the the name of the environment folder.