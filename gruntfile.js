/**
 * Created by Kent on 2016/2/16.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    //保留版权注释
                    preserveLicenseComments: false,
                    //优化方式
                    optimize: "none",//"uglify2",
                    //根路径
                    baseUrl: "./",
                    //主配置文件,这里存放了路径和依赖
                    mainConfigFile: "js/config.js",
                    keepBuildDir: true,
                    skipDirOptimize: true,
                    skipModuleInsertion: true,
                    //如果只打算合并出一个文件,可以使用name或者include,然后用out输出,如果希望导出多个的时候,使用modules,在modules里再进一步使用name,include,exclude,dir等
                    //如果不想在最后生成的文件中还使用requireJS,则要将name指almond,然后用include指向入口文件
                    name:'js/almond',
                    include: 'js/main',
                    //排除掉常见的库,如果我们在外边显示加载了的话
                    exclude: ['jquery', 'jqui'],
                    //输出的文件名
                    out: "dest/js/output.js",
                }
            },
            compileCSS: {
                options: {
                    baseUrl: "./",
                    //优化的方式
                    optimizeCss: "standard.keepLines.keepWhitespace",
                    //入口的样式文件,在这个文件中如果需要引入其它样式文件,需要在入口样式文件中写上@import "xxx.css";
                    cssIn: "css/main.css",
                    out: "dest/css/output.css",
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};