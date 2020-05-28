---
title: jQuery
type: docs
weight: 304
bookCollapseSection: true
---

### Selectors

```javascript
$('.foo').addClass("foobar");
$('.foo').removeClass("foobar");
```

### Attribute and Style manipulations

```javascript
$('.foo').attr("new-attr", "new-value");
$('.foo').css("background", "white");
```

### Ajax

```javascript
$.getJSON('http://resource.json', doSomething);
$.ajax({
    url: 'http://resource.txt',
    dataType: 'text',
    type: 'GET',
    success: doSomething
});
```

### Append and Prepend nodes

```javascript
$('.foo').append('<div/>');
$('.foo').prepend('<div/>');
```

### Listening to events

```javascript
$('.foo').on('click', clickHandler);
```

### Removing elements

```javascript
$('.foo').remove();
```

### Content manipulation

```javascript
$('.foo').text('Hello World!');
$('.foo').html('<div class="bar">Hello</div>');
```

inserting a new element after each `li` element

```javascript
$('li').after('<li>Item</li>');
```

obviously `.before()` works the opposite way. The `.empty()` function will completely remove all children of an element

```javascript
$('ul').empty();
```
