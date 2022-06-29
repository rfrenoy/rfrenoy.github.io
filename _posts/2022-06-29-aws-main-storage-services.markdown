---
layout: post
title:  AWS - Main storage and database services (WIP)
date:   2022-06-29
categories: database, cloud, AWS
excerpt_separator: <!-- excerpt-end -->
---
<p>One of my goals this year is to improve my knowledge of cloud managed services, especially AWS. I have used Azure, AWS and GCP these last years, but I have the feeling I never used cloud services at their full potential. For example I ran a lot of things manually on EC2 instances. I am currently studying the main AWS services and will put some notes here, beginning today with DynamoDB. This article is a work in progress that will evolve over time.</p>

<!-- excerpt-end -->
<i>Disclaimer: This list of services is not exhaustive, nor are the information for each service.</i>

<h2>DynamoDB</h2>
<p>DynamoDB is basically a distributed B-tree data structure. It is a key-value database, which means you won't be able to run complex queries over DynamoDB the same way you would with a relational database. You will have to fetch all necessary data and run your query on the application side. You will run your requests farther away from your data than you would with a relational database. However, DynamoDB offers interesting guarantees:</p> 
<ul>
    <li>it offers <em>low read/write latency</em>,</li> 
    <li>you can choose between <em>eventually consistent or strongly consistent reads</em> (at the cost of increased latency, default is eventually consistent read),</li> 
    <li>you can use <em>global or local secondary indexes</em> (for more info about global and local secondary indexes, see for example <a href="https://www.amazon.fr/dp/B06XPJML5D/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">Designing Data-Intensive Applications by M. Kleppmann</a> p. 206-210).</li>
</ul>

Hence it is an option to consider if you have high I/O and no need for relational features.

<h3>Billing</h3>

<p>One of the things to think about when using DynamoDB is whether to use the <em>on-demand pricing or the provisioned pricing</em>. The <em>on-demand pricing is much more expensive</em> (around 6 to 7 times the provisioned pricing at the time I am writing). However <em>on-demand pricing is very practical</em>, you do not have to know in advance how many requests you will have to serve, you do not have to monitor and make sure you have provisioned what you need. A simple heuristic would be to <em>start with on-demand</em> to put things in place and see how it works, quickly build tools to monitor your needs, and once you have a fair understanding of your requirements, <em>switch to provisioned capacity</em>.</p>

<h3>Useful resources</h3>
<a href="https://www.aws.training/Details/Curriculum?id=65583&redirect=false">AWS DynamoDB training course</a>

<h2>Relational Database Service (RDS)</h2>
<p>RDS is a managed service to operate <em>relational databases on the cloud</em>. It supports Online Transaction Processing (OLTP) and supports the main database engines such as MySQL, MariaDB or PostgreSQL. RDS provides many services such as <em>automatic failover</em>, <em>read replicas</em> and <em>multi-availability zones deployments</em>. RDS instances can be scaled up (compute and storage), however storage cannot be scaled down. RDS instances rely on <a href="https://aws.amazon.com/fr/ebs/">EBS (Elastic Blob Store)</a>.You can use GP2 (General Purpose SSD) for most usage (up to 3000 I/O operations per second) and provisioned IOPS for intensive workloads.</p>

<h2>Aurora</h2>
<p>Aurora is an <em>AWS proprietary database</em>. It is fully managed and offers features such as replication and failover. There are two types of replication: Aurora replication and MySQL read replication. Both are asynchronous, Aurora replication is in-region (vs cross-region for MySQL replication), Aurora offers automated failover and limited replication latency (milliseconds) when MySQL replication has medium latency (seconds), meaning that in case of failover Aurora replicas promoted as master should suffer less data loss.</p>
<p>Aurora offers a <em>multi-master</em> feature to scale writes. I did not get into the details of how they handle concurrent writes, as it is one of the biggest challenges with multi-master. Still it is good to know and I will study this deeper in case I face a case with high loads or peaks of write requests.</p>

<h3>RDS vs Aurora</h3>
<p>Aurora offers more features and performance. Hence it is more suited for high workloads. The expected downside being that it is more expensive than RDS. For a more detailed comparison between the two see <a href="https://medium.com/awesome-cloud/aws-difference-between-amazon-aurora-and-amazon-rds-comparison-aws-aurora-vs-aws-rds-databases-60a69dbec41f">this article</a>.</p>

<h2>Simple Storage Service (S3)</h2>
<p>S3 can be seen as a persisted hash table in the cloud with values being any piece of data <em>up to 5TB</em> (however the largest object that can be uploaded in a single PUT is 5GB). It is considered one of the cheapest ways to store data, especially if you take into account the redundancy you get by using S3. S3 is <em>durable</em>, <em>highly available</em>, <em>infinitely scalable</em>. On the other hand <em>S3 may not be your preferred solution if you have high latency requirements.</em> S3 automatically replicates the stored objects over multiple devices across multiple availability zones in an Amazon S3 region. S3 updates are atomic (you either get the old or the new object), and <em>S3 provides read after write consistency</em>. In terms of scaling, S3 can achieve 3500 PUT/POST/DELETE and 5500 GET requests per second per prefix in a bucket.</p>

<h3>Billing</h3>
<p>We previously said S3 may be the cheapest way to store data. However, you must remember <em>you are also charged by requests</em>. This could lead to seriously rethinking your use of S3, but should not be an issue if you do not have very high request frequency (at least millions of requests a day).</p>

<h2>Redshift</h2>
Redshift is AWS managed database service for <em>Online Analytics Processing</em>. It works as a cluster and is able to scale to PBs of data. In the same fashion as classic OLAP solutions, Redshift takes advantage of columnar data storage (as opposed to row data storage for OLTP databases, see chapter 3 of <a href="https://www.amazon.fr/dp/B06XPJML5D/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">Designing Data-Intensive Applications by M. Kleppmann</a> for a refresher). It also heavily relies on data compression and parallel processing. As Redshift relies on EC2 instances, you can scale up by increasing the computing power and storage of your instances or scale out by adding more instances. Redshift only works in <em>one availability zone</em> but can restore snapshots in other zones. Redshift stores two copies of data in addition to the original: one replica on compute nodes (a Redshift cluster is composed of a leader node and compute nodes) and one on S3. It provides continuous backup and backups are by default kept one day (it can be configured to be kept up to 35 days).

<h3>Billing</h3>
Redshift is billed based on computing time, backup storage and data transfer.