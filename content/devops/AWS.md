---
title: AWS
weight: 201
bookCollapseSection: true
---

# Products

## AMI

Amazon Machine Images. Images to choose from to launch an instance.

## AWS CLI

The command-line interface to AWS services.

### Useful Commands

* `aws configure` = initial command to run in order to configure access ID, secret access key, role name and zone to access AWS resources from the CLI. It stores the configuration under `~/.aws/credentials` and `~/.aws/config`

## CloudFormation

The provisioning service of AWS. A JSON/YAML file to create a whole stack of instances, databases and volumes, automatically.

## CloudFront

The CDN (Content Delivery Network) of AWS.

## EBS

Elastic Block Store. A block storage service designed to use with EC2, attached to a single instance.

## ECS

Elastic Container Service. A managed container orchestration service.

## EFS

Elastic File System. A managed network file system that can be shared across multiple EC2 instances.

## ElasticIPs

ElasticIPs are public IP addresses associated with a VPC. The difference with normal public IP addresses is if the instance associated with an ElasticIP goes down, the IP is maintained and associated to the new instance brought up to cover the failed one. This way no interruption of connection is caused by changing the IP address.

## IAM

Identity and Access Management manages the policies of permission of users and groups to access AWS resources. Basically, users and groups in a Linux installation.

## KMS

Amazon Key Management Service. Create and control encryption keys used to encrypt and decrypt data safely.

## Lambda

Run code without thinking about servers.

### Useful Commands

* `aws lambda update-function-code --function-name $functionname --zip-file fileb://function.zip` = update a Lambda function of `$functionname` with a provided zipfile. Useful to install an app along with its external requirements (libraries not present in the standard SDK)

## RDS

Amazon Relational Database Service.

## Route 53

Amazon Domain Name System service.

## SNS

Amazon Simple Notification Service. A messaging system to send messages to multiple subscribers through a "push" mechanism.

## VPC

Virtual Private Cloud. A virtual network.

## WAF

Web Application Firewall. A firewall that protects web applications.

# Terminology

* Scalability: the ability to scale resources according to needs
* Elasticity: the ability to recover unused resources when not needed anymore
* High Availability: being able to access resources regardless of the load on the servers
* Fault Tolerancy: the ability to recover from faults or crashes, and be able to give access to resources quickly again
* AWS Region: a world zone where AWS services are given from
* Availability Zone: an actual datacenter within an AWS Region. Each region contains multiple availability zones
