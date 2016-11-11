'use strict';

module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-html2md');

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	clean: {
		main: {
			src: ['README.md']
		}
	},
	html2md: {
		options: {gfm: true},
		main: {
			src: ['index.html']
		}
	}
});

grunt.registerTask('default', [
	'clean',
	'html2md'
]);

};
