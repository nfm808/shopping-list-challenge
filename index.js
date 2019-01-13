
// create an array to push our HTML elements
// to in the shopping list 
const shoppingList = []

// toggle the class on the shopping list items
 function toggle() {
     $(function() {
    $('.shopping-item-toggle').on('click', function (e) {
        // store the 'span .shopping-item'
        let uncle = $(e.target).closest('button').parent('div').prev();
        console.log(uncle);
        $(uncle).toggleClass('shopping-item__checked');
    });
 })};

// add shopping entry items to list
$(function(){

    // activated upon submit by the form
    $('#js-shopping-list-form').submit(event => {

        // stop the default behavior of submit
        event.preventDefault();

        // store the user entry string
        const item = $(this).find('#shopping-list-entry').val();

        // push the html elements to the shoppingList
        // in order to create the new html for the 
        // added item
        shoppingList.push($(
            `<li><span class='shopping-item'>${item}</span><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>`
        ));
        // append the HTML elements to the DOM
        $('.shopping-list').append(shoppingList);

        // reset the form to default
        $('#js-shopping-list-form')[0].reset()

    }); 
})

toggle();
