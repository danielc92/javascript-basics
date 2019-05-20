// getElementById can access one element at a time
// below, the element with 'id=title-1' has its content changed to 'A New Title'

document.getElementById('title-1').innerHTML = 'A New Title'


// getElementsByClassName returns an iterable list of elements
// iterating through the list with a for loop, I change the content to 'How to tie your shoes'

titles = document.getElementsByClassName('title');

for (i = 0; i < titles.length; i ++) {
    titles[i].innerHTML = 'How to tie your shoes'
}


// Using getElementsByTagName to alter all the p elements in the DOM
// First changing their content to a value from the paragraph_data array
// Next changing the style color to purple

paragraph_data = ['Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling. Of on am father by agreed supply rather either. Own handsome delicate its property mistress her end appetite. Mean are sons too sold nor said. Son share three men power boy you. Now merits wonder effect garret own. ','Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness. Removal request delight if on he we. Unaffected in we by apartments astonished to decisively themselves. Offended ten old consider speaking. ','Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated. ']
paragraphs = document.getElementsByTagName('p');

for (i = 0; i < paragraphs.length; i ++) {
    paragraphs[i].innerHTML = paragraph_data[i];
    paragraphs[i].style.cssText = 'color:purple; background-color: #f2f2f2;'; 
}


// Changing an attribute value of an img element, given it has an id
my_image = document.getElementById('container-image');
my_image.src = 'images/container-4203677_960_720.jpg';
my_image.height = '500';

// Appending elements

node = document.createElement('li');
textnode = document.createTextNode('Spinach');
node.appendChild(textnode);
document.getElementById('vegetable-list').appendChild(node);



// Function to change text on click of Vegetable title

function changeText(id) {
    id.style.color = 'green';
    id.innerHTML = 'Eat your vegetables!'
}


// Function to add a vegetable on click

function addVegetable(id) {
    
    vegetable_text = document.getElementById('vegetable-input').value;
    
    // Create the new element, create text, add text
    vegetable_node = document.createElement('li');
    vegetable_text_node = document.createTextNode(vegetable_text);
    vegetable_node.appendChild(vegetable_text_node);

    // Append the new node to the vegetable <ul> list
    document.getElementById('vegetable-list').appendChild(node);
    
}