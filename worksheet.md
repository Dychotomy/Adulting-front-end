# Project Overview

## Project Links

- [https://github.com/Dychotomy/adulting-front-end](Front-end)
- [https://github.com/Dychotomy/adulting-back-end](Back-end)

## Project Description

Adulting is a web based game where the user follows one of two character's journey through the work week. The characters will have to survive unexpected challenges during the week like flat tires and getting sick. All for the goal to make it to the weekend to celebrate.   


## Game Play

Adulting's play is very simple. It's very much like a choose your own adventure book. Each character has an array of attributes and experiences 5 events, one for each work day. The user gets to choose how the character handles the event, each event presents two options for the user to pick from. The results are recorded into the character's resources. At the end of the week if the character's resources reach a certain threshold the user wins the game.

## Art Resources

Due to the time contraints of the project I've elected to use unsplashed photos altered with filters to "game-ify" the images. The following are some test samples.

- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1597062729/Project%204/jasmin-chew-OXZI7Si8JCU-unsplash_u66fuh.jpg] (Before)
- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1597062733/Project%204/jasmin-test_tqotyo.jpg] (after)

- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1597062757/Project%204/flattire_pb25bb.jpg] (Before)
- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1597062759/Project%204/flattire-test_qyexrt.jpg] (after)


## Models

| Character | Description | Physical | Social | Wits | Resources
| --- | :---: | --- | --- | --- | --- |
| Jill | the barista | 2 | 5 | 4 | $0 
| Jack | the telemarketer | 3 | 4 | 4 | $0 


| Event | Description | Option A | Option B |
| --- | --- | --- | --- |
| Flat tire | event text | change flatt | call AAA |

| A-Good |A-G-Score| A-Bad |A-B-Score| B-Good |B-G-Score| B-Bad |B-B-Score| Event_id
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Success text | 10 | Failure text | -10 |Success text| 5 | Failure text | -5 | 1


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1597059617/Project%204/Wireframes_nohwxy.png](Wireframes)
- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1597060275/Project%204/react_architecture_vqii0f.png](React Architecture)


### MVP/PostMVP 

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  


#### MVP 
- Character selection 
- Implement game logic
- Render events

#### PostMVP 

- Deploy desktop app using electron.js
- Customizable characters
- importable images
- additional events
- save function

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header |
| Nav | This will allow the user to exit the game 
| Footer | This will render the footer | 
| Splash Screen | The landing page |
| Home Page | Game instructions and start button |
| Game Container | Contains all game components |
| Character Selection | Choosing a character |
| Event Artwork | Primary image |
| Event Text | Description of the sotry event |
| option Buttons | Seletors for user choice |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| React Framework | H | 8hrs| -hrs | -hrs |
| Ruby on Rails Database | H | 4hrs| -hrs | -hrs |
| CSS & Styling | M | 16hrs | -hrs | -hrs |
| Deployment | H | 4hrs | -hrs | -hrs |
| Story Elements | M | 8hrs | -hrs | -hrs |
| Electron.js | H | 8hrs | -hrs | -hrs |
| Total | H | 48hrs| -hrs | -hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

 Electron.js

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```