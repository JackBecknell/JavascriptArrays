
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
function findMexicanFood(){
    let mex_results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return mex_results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)

//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results = dishes.filter(function(dish){
        if(dish.cuisine === "Vegetarian"){
            return true;
        }
    });
    return results;
}

let vegetarianFood = problemOne();
console.log('Vegetarian Foods:', vegetarianFood)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemTwo(){
    let results = dishes.filter(function(dish){
        if(dish.cuisine === "Italian" && dish.servings > 5){
            return true;
        }
    })
    return results;
}

let italianFoodForSixPlus = problemTwo();
console.log("Italian food for more than six:", italianFoodForSixPlus)

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function problemThree() {
    let results = dishes.filter(function(dish){
        if(dish.id === dish.servings){
            return true;
        }
    })
    return results;
}

let dishesMatchingIdAndServings = problemThree();
console.log("These dishes ID's match how many people they can serve:",dishesMatchingIdAndServings)

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFour() {
    let results = dishes.filter(function(dish){
        if(dish.servings % 2 === 0){
            return true;
        }
    })
    return results;
}

let dishesEvenServingCount = problemFour();
console.log("These dishes have an even number of servings:", dishesEvenServingCount)


//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function problemFive() {
    let results = dishes.filter(function(dish){
        if(dish.ingredients.indexOf('tomato') !== -1 && dish.ingredients.indexOf('cheese') !== -1 ){
            return true;
        }
    })
    return results;
}

let dishIngredientsTomatoCheese = problemFive();
console.log("These dishes have both Tomato and Cheese in the ingrediants:", dishIngredientsTomatoCheese)

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

dishNames = dishes.map(function(dish){
    return dish.name;
});

console.log('Here are all the names of our dishes:', dishNames)


// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 

dishCuisineType = dishes.map(problemSeven)

function problemSeven(dish){
    dish.name = (dish.cuisine + ' ' + dish.name)
    return dish
}

console.log("Here is the new array with cuisine type in the name:", dishCuisineType)

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function problemEight(cb1, cb2){
    vegDishes = cb1()
    return (cb2(vegDishes))
}

vegetarianDishesWithCuisineInName = problemEight(problemOne, problemSeven)
console.log("Here are the Vegetartian dishes with the cuisine in the name:", vegetarianDishesWithCuisineInName)

//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter




//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

totalServings = dishes.reduce((total, item) => {
    return total + item.servings
}, 0)
console.log("Our total number of servigs for all dishes is:", totalServings)

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

function problemEleven(dishes){
    const newArray = []
    for (let i = 0; i < (dishes.length); i++) {
        if (newArray.length === 0){
            newArray.push(dishes[i])
        }
        dishToBeAdded = true 
        //Something happens on this for loop where it WILL NOT iterate until the complete end.
        for(let j = 0; j < (newArray.length); j++){
           
            if ((dishes[i].cuisine) === ((newArray[j]).cuisine)){
                dishToBeAdded = false;
                newArray.splice(j, 1)
                break
            }
                
        }
        if (dishToBeAdded === true){
            newArray.push(dishes[i])
        }
    }
    return newArray
}
standAloneCuisines = problemEleven(dishes)
console.log("These are the first dish of each type of cuisine in order:", standAloneCuisines)
console.log("SUCCESS")