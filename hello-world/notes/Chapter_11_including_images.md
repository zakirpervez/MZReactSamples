<h1 style="color: yellowgreen">Including Images</h1>

To use an images inside the React app just create the `images` directory(Name of directory should be anything you want)
and import them inside you component like we did in following code snippet.
I putted the images inside the `src/images` directory.

```agsl
...
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';

console.log(AlexaImage);
console.log(SiriImage);
console.log(CortanaImage);

function App() {
    return (
        <div>
          Hello world!
        </div>
    );
}
```

<i>Note: If images are more than 9.7kb it that case they are used as different file. The files which 
are less than 9.7kb treated as single unit in console logs.</i>

make sure each `img` elements must have an `alt` prop, either with meaningful text, or an empty string for decorative images
