module.exports = function(grunt) {
	grunt.initConfig({
	   	pkg: grunt.file.readJSON('package.json'),
	   	postcss: {
	       	options: {
		        map: {
		            inline: false, // save all sourcemaps as separate files...
		            annotation: 'css/maps' // ...to the specified directory
		        },
		        processors: [
		           	require('postcss-import')({
		           		from: "css/main.css"
		           	}),
		           	require('postcss-simple-vars')(),
		           	require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
		           	require('cssnano')(), // minify the result
		        ]
	       	},
	       	dist: {
	         	src: 'css/main.css',
	         	dest: 'css/compiled.css'
	       	}
	    },
	    watch: {
	      	css: {
	      		files: ['css/*.css', 'css/*/*.css'],
	        	tasks: ['css'],
	        	options: {
	        		spawn: false
	        	},
	      	},
	      	scripts: {
	      		files: ['js/*.js', 'js/*/*.js'],
	      		tasks: ['browserify', 'uglify'],
	      		options: {
	      			spawn: false
	      		}
	      	}
	    },
	    connect: {
	      	server: {
	      		options: {
      		        port: 8000
	      		}
	      	}
	    },
	    browserify: {
	    	client: {
		    	src: 'js/app.js',
		    	dest: 'js/bundle.js',
		    },
	    	options: {
	    		transform: ['reactify']
	    	}
	    },
	    uglify: {
	        bundle: {
	          	files: {
		            'js/bundle.min.js': ['js/bundle.js']
		        }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Default task(s).
	grunt.registerTask('css', ['postcss']);
	grunt.registerTask('default', ['connect', 'watch']);
};