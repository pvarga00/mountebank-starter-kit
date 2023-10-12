# What To Change Here

1. Open **env.tfvars** and change the **environment_name** variable to the **name of your environment folder**

# Order of Creation

1. If you do not have a cluster already, create one using the **ecs-cluster** module
2. If you want to use **fargate** as your container model, us the **ecs-app-fargate** module. If you want to use EC2 backend as your model, use the **ecs-app** module