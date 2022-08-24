# Company-get

Application created using Angular, NodeJs, MongoDb

### Table of Content
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Demo](#demo)


## General info
Company-get app basicaly just fetches data from https://finnhub.io/docs/api/* and displayes in frontend. For this project I was using two endpoins:
1. /stock/profile2?symbol=AAPL - symbol is a company code which user types in input field 
2. /stock/candle?symbol=AAPL&resolution=1&from=1631022248&to=1631627048 - user selects data which are converted to Unix timestaps and later are displayed with candlestick chart.

I used Angular, because in my oppinion it's ideal for creating SPA(single page applications) also if you are generating components using Angular Cli it creates test files. Biggest challenges for this project was passing data between components which are unrelated. I had to use RxJS BehaviorSubject. This project also have implement some nice features like ngx-spinner, ngx-toastr. Project also stores every call in MongoDb, without any headers or response body, just user actions.

*If user one to store user Actions in MongoDb* they will have to send me IP address which I need to add to mongoDb Atlas white list.

**Project deployed in Azure Devops**: https://dev.azure.com/MicroMad/_git/CompanyFinder
	
## Technologies
Project is created with:
* @angular/cli                    13.1.4
* typescript                      4.5.5
* node                            16.10.0
* npm                             6.14.8
 
[**Front package.json**](https://github.com/JuZeko/Company-get/blob/main/CompanySearch-web/package.json) 
[**Back package.json**](https://github.com/JuZeko/Company-get/blob/main/CompanySearch-bff/package.json)
  
## Setup

* Git clone
* Open CompanySearch-web in terminal write npm i then ng serve. (*Sometimes you have to do npm i or ng serve several times*)
* Open CompanySearch-bff in terminal write npm i then nodemon index.js

## Demo
