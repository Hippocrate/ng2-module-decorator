import 'reflect-metadata';

export const declarations: {[moduleKey: string]: any[]} = {};

export function Module(moduleKey: string): ClassDecorator {
    return function(target: Function) {
        if (!declarations[moduleKey]) {
            declarations[moduleKey] = [];
        }

        // check if the class is not already registered just in case
        if ( declarations[moduleKey].indexOf(target) < 0 ) {
            declarations[moduleKey].push(target);
        }
    };
}
