/*

gruntを使ってSassを管理する方法

*/

module.exports = function(grunt){

	grunt.initConfig({
		watch: {
      sass: {
        files: ['common/css/_scss/*.scss'],
        tasks: 'sass'
      }
    },
    sass : {
			dist : {
				src : ['common/css/_scss/style.scss'],
				dest : 'common/css/style.css'
			}
		}
	});

	grunt.loadTasks('tasks');

};