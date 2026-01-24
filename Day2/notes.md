        Episode: 2 Igniting our APP

(1) -> package.json is a configuration file for our packages that is for our project that we will install in our project using NPM

(2) -> Bundler - Used to bundle our project file in efficient way to make it shipable/Production-ready. ex. vite, parcel, webpack, etc.

(3) -> Dev. Dependencies requires while we are developing, Normal dependency is used in production.

(4) -> tilde (~), (^) caret (^) -> is for Automatic minor upgradation (Preferrable) (~) -> is for any major automatic upgradation.

(5) -> Package-lock.json 
        - Keeps a hash version (integrity) 
        -Keeps exact version of every dependency.

(6) Transitive dependencies -> Dependencies for a primary dependency

(6) -> We can re-install all the node modules Using package.json Hence,node_modules doesnot need to be in production (or pushed to GitHub)

(7) we Donot use React via CDN
                -New version availability
                -Unnecessary network calls

(8) Normal JS file Doesnot have import so we declare "module" when linking JS file to our HTML.

(9) Parcel: -> Dev-Build / Production-Build 
            -> Creates local server 
            -> HMR (Hot module replacement) 
            -> File watching Algorithm - written in C++ 
            -> Caching - Faster builds 
            -> Image optimization 
            -> minification of files 
            -> It will do Bundling of files 
            -> Compressing of files 
            -> Consistent Hashing 
            -> Code splitting 
            -> Differential Bundling 
            -> Diagnostics 
            -> Error Handling 
            -> HTTPS Server 
            -> Tree shaking algorithm i.e remove unused code



        Episode:3 Laying the foundation



# j.son script to start and build a project is
        - "npm run start"/ "npm start" -> to start the project
        - "npm run build "  - is to build the project

# React element is an object and when we render it into ReactDOM it becomes HTML

# jsx is different from HTML having similar syntax like HTMl as js engine only understand ES
   "Parcel" transpille jsx into js using "babel"
    we use camaleCase in jsx

# React component start with Upper case

# Types of React components
        ->class based component(old way)
        ->function based component(new way)
          ie. a js function which return Reactelement made using jsx
          
# component composition is putiing component inside a component



        Episode:4 Talk is cheap , show me the code




/* design the layout and components before writing the code */

# Passing a prop to a component is similar to passing an argument to a js function
# Config. Driven UI means the UI will change as the configuration data changes
   -> (ex. different UI for a single Website based on Geographical location of user)

# Props ex. < RestaurantCard (resname="") /->

 Self Explanation ==> we send this "Prop" that is created in each card </->  and then send it into the factory
 where all these cards are beign made , defining the "Layout" for each such "Props"

# Destructuring  Methods of Props recived as Para meters for card layout(i.e factory) methods;
        Ex::
                1 -> on the fly: ({resName,cousines})

                2 -> const[resName,cousines] = Props
                   : in this qwe are telling the programme to look into the props and make variable out of each name as well
                   i.e here, variable name is same as the content of the prop

                3 ->  normal method: in layout( props.resName,props.cousines)

Self Explanation ==>  Props follow this sequence
 1> Kya data dalna he?(for each card)
 2> kese(Position/Layout) Data dalna he har ek card me
 3> Kitne Card me data dalna he
 4> Wapas bata do kitna card banaya he

# Always give "Key" we we use ".Map" for number of card looping
  -> no "key" >>> index as "key" >>>>>>>>>> unique "key" 



        Episode:5 Let's get hooked


# Two types of export : 
        1. Name export
         ex: export const "component"
             import {"component"} from path

        2. Default export(cannot be used for more than one export)
         ex: export default "component"
             import "component" from "Path"

# React Hooks: useState() and useEffect()  
  => Reconciliation Algorithm(React Fibre)
    -> React uses VirtualDOM as a representation of Html Tags which is just a nested JS Object
  => Diff Algorithm 
    -> React keeps  checking the original virtual dom and new virtual dom and updates the changes only  


        Episode: 6 Exploring the world

# Monolith Architecture
  -> all teams of different concerns work in same project

# Micro- Services
  -> it follows single responsibility principal where each concern has it's own job

  => ex. useEffect() -> will rendered after the intial render

# Use-Shimmer UI for better UX

# Conditional rendering
     -> means rendering on basis of some conditions. ex => Shimmer-UI

# whenever state variable update, react triggers a reconcialliation cycle(re-rendering the component)


        Episode: 7 Finding the path

# useEffect 
 -> if no dependency array , useEffect will be called on every render
 -> if dependency array is empty, only once at the intial render useEffectwill be called
 -> if dependency array is binded onto something , useEffect will be called every time such binded element updates

# useState
-> Always at top of your function
-> not outside the function, to avoid inconsistancy
-> never use your useState inside a  if/else condition, for loop, a function

# use children , "error" from react-router-dom
# use "Link" instead of "Anchor" tag from react-router-dom

# there are two-types of routing in  Web Apps
        -> client side routing
        -> server side routing (old ways)

# client side routing
        -> all the component network calls are made intially and then, browser just load whichever component is to be loaded
        -> that's why these are also called "Single Page Web Apps"

# Server-side souting
        -> make multiple network calls for multiple web pages
        -> used in old Web Apps


        Episode8: Let's get classy

# Class based component
 -> Js class that render some JSX using render() function
     => ex. import react from react
                class "component name" extend ReactDOM{
                        render(){
                                retrun()
                        }
                }
            export default "component"


# Why do we always have to use super(props) and constructor ??
 -> constructor sets up a component when it’s created, like opening a shop in the morning.
 -> super(props) lets the component use features from React’s Component, especially props, so it doesn’t break

# never uodate state variable directly

# React life-cycle(in-sequence)
        1.first parent component mounting phase
        2 parent constructor called
        3.parent component render
        4.parent component render will be completed
        
        5. starts life cycle of first child
        6. 1st child contructor will be called
        7. 1st child render will be called
        8. starts life cycle of 2nd child
        9. 2nd child constructor will be called
        10.2nd child will be rendered
                (here Actual DOM is updated as per updated virtual DOM that has been done in coomitt phase)
        11. componentdidcommitte for 1st child
        12. componentdidcommitte for 2nd child
        13. componentdidcommitte for parent child

-> React tries to batchup the DOM "commit" as it is an  expensive process



        Episode9: Optimizing our APP



# Single responsibilty principle
 -> Each component should only do one function

 -> breakdown of code into smaller codebase for better modularity (ie. readiability, testable, maintainable and  resusable) 

# Custom Hooks
 -> Hooks are like utility function
 -> hook are helper functions, hence prefereed to create in seperate file inside the     "utils" folder

 # chunking / code spliting / dynamic bundling / lazy loading / dynamic import
  -> No big JS file
  -> No multiple small  component js files 
        ex.  import {lazy,suspense} from react

             const grocery = Lazy(() => import (" "));

                                And
             element : <suspense fall back = {anything} <grocery /> > < / suspense>



        Episode10: jo dikhta hai, vo bikta hai



# ways to use CSS
-> { Sass , Scss}, not used in production
-> styled component, can be used in production 
-> material UI - very popular
-> BootStrap
-> Ant design
-> Tailwind CSS

# Tailwind CSS 
-> Tailwind css uses "PostCSS" to alter CSS using Js behind the scenes 













 

