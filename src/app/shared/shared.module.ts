import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


/* const PRIMENG_MODULES_IMPORT = [
];

const PRIMENG_MODULES_EXPORT = [
];

const APP_DIRECTIVES = [    
]

const APP_PIPES = [    
] */

const COMPONENTS = [
    HomeComponent,

];

@NgModule({
    declarations: [
        COMPONENTS,
        //APP_DIRECTIVES,
        //APP_PIPES,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        //PRIMENG_MODULES_IMPORT
    ],
    exports: [
        COMPONENTS,
        //PRIMENG_MODULES_EXPORT,
        //APP_DIRECTIVES,
        //APP_PIPES
    ]
})
export class SharedModule { }
