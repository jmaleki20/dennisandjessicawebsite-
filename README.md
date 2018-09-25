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
Any custom styles should be placed in `assets/index.css`. Bootstrap-specific css overrides should go in `assets/bootstrap_overrides.css`.

### Background images
Background image sources are all directly on the html elements for clarity. 
Eg. 
```html
<div class="bg-image bg-block text-white" style="background-image: url(assets/originals/proposal.jpg)">...</div>
```

### Fonts
All fonts are imported in the `<head>` of the HTML document. You will see them all listed next to a comment in `index.html`:
```html
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
```

If you want to change a font, just add another line like above to import the new font.
Then you can look in `assets/index.css` to swap out one font for another in the stylesheet.

### Viewing changes
To view any changes you made locally, just double-click on `index.html`. Your browser should automatically load it like a webpage. Alternatively, you can open in in the console with:
```
cd dennisandjessica.com
open index.html
```

## Specs

### Requirements:
- Website is responsive
- Have a countdown to the wedding (Sept 14, 2019)
- Have a RSVP section (backend: Google Forms & Sheets)
- Have a password or authentication of some type (so that randos can't RSVP)
- SSL Cert? (do we even need this?)

### Inspo:
- http://demo135.network.woww.co.za/
- (wedding party) http://demo104.network.woww.co.za/
- (countdown) https://the-wedding-day.vamtam.com/home-layouts/home-2/
- (bridesmaid) https://the-wedding-day.vamtam.com/pages/bridesmaids/
- (groomsmen) https://the-wedding-day.vamtam.com/pages/groomsmen/
- (another countdown inspo) https://onepagelove.com/yaga   
I like the countdown on this page we can use a random picture in the background.

### Photos:
- use Paris ones for now,
- and engagement photos at bottom for "us"

### Service Providers:
- Google Forms, Sheets (RSVP data)
- AWS S3 (static website hosting)
- ?? (DNS) (dennisandjessica.com)
