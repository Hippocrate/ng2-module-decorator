# ng2-module-decorator

Avoid the Angular 2 module declaration hell by providing a simple decorator.

## Install

```npm install ng2-module-decorator --save```

## Usage

First you have to apply the decorator on your class

```Javascript
import { Component, OnInit } from '@angular/core';
import { Module } from 'ng2-module-decorator';

@Module('mymodule')
@Component({
    selector: 'app',
    templateUrl: 'app.html'
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}

```

Then in your ```module.ts``` file : 

```Javascript
// import all the app components
import './components';

// import all the app pipes
import './pipes';

// import all the app directives
import './directives'

import { AppComponent } from './components';

@NgModule({
    providers: [
 
    ],
    imports: [
        BrowserModule
    ],
    declarations: [
        ...declarations['mymodule']
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

That's it ! All your classes will be available in the ```declarations``` dictionnary.
Don't forget to import your require classes in your module file.

If you are using [Webpack](https://webpack.github.io) and, like me you are lazy, you can import a folder using [require.context](https://webpack.github.io/docs/context.html) instead of imports all your files manually.
