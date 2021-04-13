# 40Love

<img src="./images/logo.png" width="300">

40Love is a full-stack web application that helps tennis players find hits at public tennis courts. Players can select public courts on the map where they are able to play; they can see who else is available at those courts. Players can send others a request to hit, and if accepted, a hit will be scheduled. Players can rate and review each other after a hit to establish reputation.

[Live link](https://forty-love.herokuapp.com)

## Technologies

#### Front End

<a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://developers.google.com/maps"><img alt="Google Maps" src="https://img.shields.io/badge/-Google%20Maps-4285F4?style=flat-square&logo=Google%20Maps&logoColor=white" /></a>

#### Back End

<a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python&logoColor=white&" /></a>
<a href="https://flask.palletsprojects.com/en/1.1.x/"><img alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=Flask&logoColor=white" /></a>
<a href="https://www.postgresql.org/"><img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>

#### Deployment and Package Management

<a href="https://docker.com/"><img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /></a>
<a href="#"><img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /></a>
<a href="https://www.npmjs.com/"><img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /></a>
<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>

## Features

#### Minimum Viable Product

-   Authentication
-   Public Tennis Courts via Map
-   Player List @ Courts by NTRP Rating
-   Player Profile Page
-   Hit Request / Acceptance
-   Reviews

#### Future Features

-   Messaging

## Database Schema

<img src="./images/db_schema.png"/>

## API Routes

### Backend Routes

#### Auth API

| Endpoint               | HTTP Verb |                                Description |
| :--------------------- | :-------: | -----------------------------------------: |
| /api/auth              |    GET    |                          Authenticate User |
| /api/auth/login        |   POST    |                             Logs a user In |
| /api/auth/logout       |    GET    |                            Logs a user out |
| /api/auth/signup       |   POST    |        Creates a new user and logs them in |
| /api/auth/unauthorized |    GET    | Returns unauthorized JSON when failed auth |

#### Players API

| Endpoint                    | HTTP Verb |                           Description |
| :-------------------------- | :-------: | ------------------------------------: |
| /api/players/:id            | GET       |                    Gets single player |
| /api/players/:id/hits       | GET       |       Gets all hits for single player |

#### Courts API

| Endpoint                    | HTTP Verb |                           Description |
| :-------------------------- | :-------: | ------------------------------------: |
| /api/courts                 | GET       |                       Gets all courts |
| /api/courts/:id             | GET       |                     Gets single court |
| /api/courts/:id/players     | GET       | Check if current user has added court |
| /api/courts/:id/players     | POST      |          Add player to specific court |
| /api/courts/:id/hits        | GET       |            Get hits at specific court |
| /api/courts/:id/hits        | POST      |          Create hit at specific court |


#### Hits API

| Endpoint              | HTTP Verb |        Description |
| :-------------------- | :-------: | -----------------: |
| /api/hits/:id         | GET       |            Get hit |
| /api/hits/:id         | POST      |         Create hit |
| /api/hits/:id         | DELETE    |         Delete hit |

#### Reviews API

| Endpoint              | HTTP Verb |        Description |
| :-------------------- | :-------: | -----------------: |
| /api/reviews/:id      | GET       |         Get review |
| /api/reviews/:id      | POST      |      Create review |
| /api/reviews/:id      | PATCH     |        Edit review |
| /api/reviews/:id      | DELETE    |      Delete review |

