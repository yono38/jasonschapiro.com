# JasonSchapiro.com

After becoming a developer (focused on Javascript), I have often used name as a play on JSON. My Slack handle is often @json, and I thought it would be fun to make my personal website to utilize this similarity too.

## App Design

This website has been written in Typescript with React using modern features such as async functions, styled components, the fetch API, and react hooks.

I had originally used a library called [react-highlight](https://github.com/akiran/react-highlight/tree/master/test) to handle the JSON highlighting, but I didn't feel like I had enough flexibility in the parsing so decided to create my own set of JSON components, built off a base component [JsonPair](https://github.com/yono38/jasonschapiro.com/tree/master/jasonschpairo.com/src/components/JsonPair.tsx#59) that uses a renderProps to create individual components for regular JSON key-value pairs, arrays, and links.

My plan to make it more interactive was to allow other users to "JSON"-ify themselves using their LinkedIn portfolio. It turns out that LinkedIn does not allow easy scraping of their data (for obvious reasons!) so I decided to look into using their API, thinking I could get access to their data by hooking in an OAuth library and using their [`r_fullprofile`](https://docs.microsoft.com/en-us/linkedin/shared/references/v2/profile/full-profile) permission. Unfortunately, this is only provided to clients in their Partner Program, which they are no longer accepting entries for. Also - let's be honest, Microsoft isn't going to let a dinky little portfolio site into their Partner Program, there's no money to be made here!

Looking into alternatives and having already spent way too much time on the LinkedIn approach, I started thinking of where else people might have info on their work and decided to look into the GitHub API. Turns out their API is **super-simple** to use, thanks GitHub team! Maybe you can teach your corporation-colleagues at LinkedIn something new. I hooked into the API with the fetch API and was golden. The downside was that this is really only useful to developers, which I guess are probably the only people who would care about JSON-ifying theirselves anyway. 🤷

If you have any questions or feedback, shoot me an email or drop something into the Issues section!
