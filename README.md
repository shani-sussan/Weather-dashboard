# Weather-dashboard

 Weather Dashboard
A simple weather dashboard hosted on AWS EC2 with Docker.


📌 Features

✅ Fetches real-time weather data using an API
✅ Dockerized for easy deployment
✅ Hosted on AWS EC2 (Free Tier) via CloudFormation
✅ Configured Security Groups for secure access
✅ Uses Elastic IP for a fixed public address

📌 AWS CloudFormation Deployment


I used AWS CloudFormation to automate EC2 and Security Group creation. Below is a summary:

🔹 EC2 Instance: Launched an Amazon Linux 2 instance
🔹 Security Groups: Allowed HTTP (80) & SSH (22) access
🔹 Key Pair: Used for SSH authentication


##AWSTemplateFormatVersion: '2010-09-09'
Description: CloudFormation template to deploy an EC2 instance with a web server.
Parameters:
  InstanceType:
    Description: EC2 instance type
    Type: String
    Default: t2.micro
    AllowedValues:
      - t2.micro
      - t2.small
      - t3.micro
Resources:
  ServerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Allow SSH and HTTP access
      SecurityGroupIngress:
      - IpProtocol: tcp
        FromPort: 22
        ToPort: 22
        CidrIp: "0.0.0.0/0"
      - IpProtocol: tcp
        FromPort: 80
        ToPort: 80
        CidrIp: "0.0.0.0/0"
  WebServerInstance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: !Ref InstanceType
      ImageId: ami-08a84371426a8acd1  # Ubuntu 22.04 LTS (Update based on region)
      SecurityGroupIds:
        - !Ref ServerSecurityGroup
      KeyName: cloud-key  # Update with your key pair name
      Tags:
        - Key: Name
          Value: WeatherDashboard
      UserData:
        Fn::Base64: |
          #!/bin/bash
          sudo apt update -y
          sudo apt install -y nginx
          sudo systemctl start nginx
          sudo systemctl enable nginx
Outputs:
  InstancePublicIP:
    Description: Public IP of the EC2 instance
    Value: !GetAtt WebServerInstance.PublicIp





 



☁️ How I Deployed on AWS?

1️⃣ Created an EC2 Instance via AWS CloudFormation
2️⃣ Installed Docker
3️⃣ Cloned the GitHub repository
4️⃣ Built & Ran the Docker Container
5️⃣ Configured Security Groups to allow HTTP traffic

![image](https://github.com/user-attachments/assets/ec48193d-d204-470a-bc2d-d7fce9d1d64c)
