# Datasette Publish Tutorial

## About

In this tutorial we are going to ...

The goals of this tutorial are to use [Datasette Publish]() to publish an API that allows us to access csv data and to become familiar with SQL queries. 


## Data

#### Step 1: 1 week of emails

We are going to create a structured csv file that presents 1 week (Monday - Sunday) of our emails. We are going to do this by 

```
date,time,category,replied 

```

* **date**: YYYY-MM-DD
* **time**: HH:MM
* **category**: can be categorized as one of the following: work, personal, automated
* **replied**: true/false


#### Step 2: 

## Publish

#### Step 1: Get started with datasette publish

Go to [https://publish.datasettes.com/](https://publish.datasettes.com/)

![datasette publish website home](001_dp_home.png)

#### Step 2: Sign up with Zeit.co

Sign up with [Zeit](https://zeit.co/). [Zeit](https://zeit.co/) is a platform as a service (PaaS) that provides web space for all your wonderful internet projects. There are free and paid plans. Highly recommended if you're spinning up your own projects.

![](002_signup_zeit.png)
![](003_authenticating.png)
![](004_loggedin.png)

#### Step 3: Allow datasette publish to access

Once you're signed up you will allow datasette publish access to write to your Zeit.co account. 

![](005_allowaccess.png)


Once you allow access you'll be able to start uploading your CSVs.

### Upload your CSV

Here you will navigate to your CSV and enter in all of the necessary metadata to make your data readable and understandable when you or others decide to access your data. Note that the data that you upload will be accessible via this API.

![](006_uploadcsv.png)
![Fill in the metadata]()
![Spinning up your API]()

## Our first SQL queries


## Visualizing our data


## Challenge!

Using your dataset, find out the following pieces of information:
* 


#### Cheatsheet:

http://www.informit.com/articles/article.aspx?p=29661&seqNum=2

#### Get all records
select * from [emails-20180312-20180318]

#### Get the distinct data from the `category` field
SELECT DISTINCT category FROM [emails-20180312-20180318]

#### Get all data records where you replied
SELECT * FROM [emails-20180312-20180318] WHERE replied IS "yes"

#### Get only the records from date & category where you replied
SELECT date, category FROM [emails-20180312-20180318] WHERE replied IS "yes"

#### Get all data records where category is automated
SELECT * FROM [emails-20180312-20180318] WHERE category = "automated"
SELECT * FROM [emails-20180312-20180318] WHERE category IS "automated"

#### Get the count of the records where the category is automated
SELECT COUNT(*) FROM [emails-20180312-20180318] WHERE category = "automated"





