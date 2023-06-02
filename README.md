# Ekoludki - hack4change

We are building an carpooling app @ `Hack4Change Hackathon`. Idea of app is to reduce cars on the streets by connecting people and encourage them to drive together (eg. to work!).

## Roadmap
* Design wireframes (Figma).
    * Onboarding.
    * Sign/Log in.
    * Main Page (drivers grid)
    * History.
    * Edit profile.
    * Loyality program & Rewards.
* Create views w/ Front-End tools.
* Database/Backend model (w/ SQLite, FastAPI).
* Map (Mapbox, OSM)
* Sign/Log In - User profile (or fake profiles).
    * Avalibility of drivers and passengers.
    * Car model/color/register plates (driver)
* Matching algorithms based on users data - Localization (A/B), Time.
* Loyality program instead of money revenue.

## Potential risks and how to counteract them
* Thieves may know when you are at home or not. (Do not locate your home, but area around).
* Crimes committing on passengers. (Do not enter if driver does not look the same like in the app!)

## Stack
1. Front-End:
    * React
    * TailwindCSS
    * styled-components
2. Back-End:
    * Python/FastAPI
    * SQLite
    * AWS S3 Bucket
3. Tools:
    * GraphQL
