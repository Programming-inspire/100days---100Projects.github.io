## HTTP Video Stream

In this project, I’ll be building a video streaming app using Node.js. Specifically, I’ll build a server-side Node.js app that will handle fetching and streaming videos.
The HTML5 video element makes a request to the /video endpoint, and the server returns a file stream of the video, along with headers to tell which part of the video 
i will sending over. For a chunk size, I've decided 1MB but you could change that to whatever you like! Another great benefit of this is that we don't need to code the 
stream to continuously deliver the video data, the browser handles that gracefully for us.

## How to run?

