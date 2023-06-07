# README

Demonstration of rails + react + MUI + devise authentication

* rails is used as a standard backend engine/app
* /referrals is inherited from API controller, not app controller
* react is used as the front-end, not rails HTML SSR
* MUI UI is implemnted in react
* devise authentication implemented at the backend
* devise actually overridden to work with JSON responses
* react is doing devise authentication via API
* entire auth process working with react frontend and navbar morphing into a "login"/"logout" context
* session management in react/web-browser done via localStorage
* "currentUserEmail" is not idead production code/feature. we should be using a unique expirable-and-one-time-use-only token for authentication, which should fetch the user data in the backend engine, and authenticate each API call.
* ruby TDD coverage (as a sample) added for Referral model
* js, jsx, tsx added as a mix-match to showcase the skill with each
* esbuild used (most popular)
* yarn used for JS package management (npm can be used equally good)
* react code has a mix of plain-old functions and arrow-functions

NOTE: One can easily spot a lot of flaws and common-mis-outs in this code. These are intentional, by choice.

This demo showcases my ability for certain specific skills that were required in this specific scope. This is actually very far away from a production level code. Please consider this as a demo of just the things listed above.

My full skillset (hands-on) is mentioned here https://bit.ly/ramonrails-in
PS: I keep learning more. :)
