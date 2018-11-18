# dennisandjessica.com
Dennis &amp; Jessica's wedding website

Dev URL: [www.dennisandjessica.com.s3-website-us-east-1.amazonaws.com](http://www.dennisandjessica.com.s3-website-us-east-1.amazonaws.com)

## Contributing
### Framework (Bootstrap 4)
We are using Bootstrap 4 for our web framework! If you want to add something - a color change, positioning change, check the boostrap references first to see if there is any already-existing element-class for the css change.
For example, if you want to change the text color of a paragraph to blue, instead of something like:
```html
<div style="color: blue">blah text</div>
```
we do something like this:
```html
<div class="text-info">blah text</div>
```
because the `text-info` class already has the color "blue" applied thanks to the Bootstrap framework.

See docs here: https://getbootstrap.com/docs/4.0/utilities/colors/#color

### Custom styles
Any custom styles should be placed in `assets/index.css`. 
Bootstrap-specific css overrides should go in `assets/bootstrap_overrides.css`.


### Fonts
All fonts are imported in the `<head>` of the HTML document. You will see them all listed next to a comment in `index.html`:
```html
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Dancing+Script|Lora" rel="stylesheet">
```

If you want to change a font, just add another Google font name at the end of the list above in href (items are separated by a '|').
Then you can look in `assets/index.css` to swap out one font for another in the stylesheet.

### Changing the Header
If you need to change the header, note that I just copy-pasted the header for each page. So when you make a change on one html page, you need to update them all.
For example, if you wanted to change the header text 'Jessica & Dennis' to be instead 'Dennis & Jessica', you should open all of:
- index.html
- entourage.html
- events.html
- photos.html
- registry.html
- rsvp.html
- travel.html
- _skeleton.html (this file explained below, just for helper)

and change the header on all these pages from:
```html
<!-- HEADER -->
  <header class="fixed-top border-bottom text-dark">
    <!-- ..... -->
        <a href="index.html" class="text-dark">Jessica &amp; Dennis</a>
```
to
```html
<!-- HEADER -->
  <header class="fixed-top border-bottom text-dark">
    <!-- ..... -->
        <a href="index.html" class="text-dark">Dennis &amp; Jessica</a>
```
Otherwise the change to the header will only appear on the one html page that you changed (index.html for example).

I also made a helper page for you to look at, '_skeleton.html' -> this is everything *except* page content (just header and footer)

### Viewing changes
To view any changes you made locally, just double-click on `index.html`. Your browser should automatically load it like a webpage. Alternatively, you can open in in the console with:
```
cd dennisandjessica.com
open index.html
```

### Deploying changes
```
git push origin master
```
the changes should appear in ~60 seconds





Reference this doc https://docs.google.com/document/d/1KjNZxoNc-DhrlDfw4MnIdB5bmaZ-OLH0F5ch_o0HSro/edit



### Inspo:
- http://demo135.network.woww.co.za/
- (wedding party) http://demo104.network.woww.co.za/
- (countdown) https://the-wedding-day.vamtam.com/home-layouts/home-2/
- (bridesmaid) https://the-wedding-day.vamtam.com/pages/bridesmaids/
- (groomsmen) https://the-wedding-day.vamtam.com/pages/groomsmen/
- (another countdown inspo) https://onepagelove.com/yaga   
I like the countdown on this page we can use a random picture in the background.


