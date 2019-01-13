function shopping() {
    // create an array to push our HTML elements
    // to in the shopping list 
    const shoppingList = []

    // toggle the class on the shopping list items
    function toggleCheckButton() {
        $(function() {
            $('.shopping-list').on('click', '.shopping-item-toggle, .shopping-item-toggle.button-label', function(e) {
            
            // store the 'span .shopping-item'
            let uncle = $(e.target).closest('button').parent('div').prev();

            // toggle the css class
            $(uncle).toggleClass('shopping-item__checked');
            });
        });
    };

    // delete shopping item on click
    function deleteItem() {
        $(function() {

            // select the listener event on the delete button and label
            $('.shopping-list').on('click', '.shopping-item-delete, .shopping-item-delete.button-label', function(d) {

                // create variable to store the li block of the delete button 
                let grandLi = $(d.target).closest('li');

                // store the string value to remove from the shoppingList
                let toBeRemoved = $(grandLi).children('span').text();

                // remove the dynamically created item from the 
                // shoppingList array
                shoppingList.splice( str => str === toBeRemoved);

                // remove the block from the list
                $(grandLi).remove();
            });
        });
        
    };


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
                `<li>
                    <span class='shopping-item'>${item}</span>
                    <div class='shopping-item-controls'>
                        <button class='shopping-item-toggle'>
                            <span class='button-label'>check</span>
                        </button>
                        <button class='shopping-item-delete'>
                            <span class='button-label'>delete</span>
                        </button>
                    </div>
                </li>`
            ));
            // append the HTML elements to the DOM
            $('.shopping-list').append(shoppingList);

            // reset the form to default
            $('#js-shopping-list-form')[0].reset()

        }); 
    });

    $(toggleCheckButton());
    $(deleteItem());
};

shopping();