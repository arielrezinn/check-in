# Mood Map 
Keep tabs on your Mental Health.
- https://checkin-57d38.web.app
- https://arielrezinn.github.io/check-in/

![banner](src/moodmap-banner.png)

## Problem
As college students, we've noticed that quarantine has significantly changed our lives. **Our screen time is now higher than ever** as we rely on the Internet for everything from classes to communicating with friends. This means that **it can be hard to find a quick moment** for introspection and self-reflection.
 
## Why Mood Map?
Our web app integrates mood check ups into your daily life in order to reconnect you with your inner emotions. Every time you open up a new tab, Mood Map gives you a moment to reflect on how you, the person sitting in front of the computer, are doing. This gives you a brief respite from the ongoing hustle of Zoom meetings and coursework and everything else you might have going on.

Through Mood Map, **the user can see trends in their moods** over the course of time, helping them to connect with and understand their emotions not only by logging them, but also by **seeing data visualizations**. 

## Demo via Gif

### Check-in process
<p align="center"> 
<img src="src/navigation-0.gif" alt="check-in navigation">
</p>

### Viewing aggregate results and personal history
<p align="center"> 
<img src="src/navigation-1.gif" alt="data visualization">
</p>

### Authentication
<p align="center"> 
<img src="src/navigation-2.gif" alt="authentication navigation">
</p>

## Technologies Used

- [Grommet](https://v2.grommet.io) (an accessibility-focused React framework)
- [Firebase](https://firebase.google.com/) (Realtime Database and Authentication)
- [chart.xkcd](https://github.com/timqian/chart.xkcd) (an xkcd-style chart library used for data visualization)
- [React Calendar Heatmap](https://github.com/kevinsqi/react-calendar-heatmap) (used to display mood over the course of recent months)

## Hosting Storytime
While trying to deploy to Github pages, we discovered an unexpected error. Our app uses Google auth to manage user sign-in, which doesn't play very nicely with Github pages :( We then attempted a last-ditch effort to migrate to firebase hosting, which also did not work out. We will be running our demo locally for judging!

## Other links

- Feel free to take a look at the [Figma board](https://www.figma.com/file/J8fGf4TZweJL5xlWayeYJB/checkin?node-id=0%3A1) we used to mock everything up!
