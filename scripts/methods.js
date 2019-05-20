// getElementById can access one element at a time
// below, the element with 'id=title-1' has its content changed to 'A New Title'

document.getElementById('title-1').innerHTML = 'A New Title'


// getElementsByClassName returns an iterable list of elements
// iterating through the list with a for loop, I change the content to 'How to tie your shoes'

titles = document.getElementsByClassName('title');

for (i = 0; i < titles.length; i ++) {
    titles[i].innerHTML = 'How to tie your shoes'
}


// getElementsByTagName

paragraphs = document.getElementsByTagName('p');

for (i = 0; i < paragraphs.length; i ++) {
    paragraphs[i].innerHTML = 'This is a new paragraph, changed through javascript.'

}


// Changing an attribute of an element
document.getElementById('container-image').src = 'images/container-4203677_960_720.jpg'



// Appending elements

vegetable_list = document.getElementById('vegetable-list');

vegetable_list.appendChild('fhaeof');