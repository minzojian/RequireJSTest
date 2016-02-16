/**
 * Created by Kent on 2016/2/16.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    //baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    //map: {
    //    '*': {
    //        'css': 'js/lib/css.min' // or whatever the path to require-css is
    //    }
    //},
    paths: {
        app: 'js/app/app',
        jquery:'js/lib/jquery-2.1.3.min',
        jqui:'js/lib/jquery-ui'
    },
    shim: {
        app:{
            deps:['jquery','jqui'],
        }

    }
});