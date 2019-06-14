http://wakaworkshops.surge.sh/workshop/react-router-intro/slides/0

import {BrowserRouter, Route, Link} from 'react-router-dom'

let renderRoot = () =>{
return(

<div>
Welcome to this page. Click here to view all the items:

<Link to="/allItems"> All items</Link>
	</div>
	)
}

let renderAllItems = ()=>{
return(

<div>

<div><Link to="/item/abc"> A hat</Link></div>
div><Link to="/item/def"> A boat</Link></div>
	</div>
	)
}

let renderItem = (routerData)=>{
if(routerData.match.params.itemId ==='abc'){
return(<div>A very nice hat. Only 4 remaining <img src='/hat.jpg'></div>);
}
if(routerData.match.params.itemId ==='def'){
return(<div>A boat. Only 4 remaining <img src='/boat.jpg'></div>);
}

return(<div>Unknown item</div>)
}

class App ext Com..{
render(){
return(
<BrowserRouter>
<Route exact={true} path='/' render={renderRoot} />
<Route exact={true} path='/allItems' render={renderAllItems} />
<Route exact={true} path='/item/:itemId' render={renderItem} />
</BrowserRouter>
)

}
}

Instructions

Exercises
Question 1

Like the previous workshops, make a summary and then reproduce the project from the summary.
Question 2

Add more details for the hat and the boat
Question 3

Add a lawnmower for sale
Question 4

Add snowshoes for sale
Question 5

Display small images of the items beside their links in /allItems
Question 6

For each item in the / path, add a link. Clicking on this link will present information to the user about the seller of the item. Make this data up.
