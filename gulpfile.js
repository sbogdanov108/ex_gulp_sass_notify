'use strict';

var gulp         = require( 'gulp' ),
    notify       = require( 'gulp-notify' ),
    sass         = require( 'gulp-sass' );

/* Отслеживание styles.scss */

/* Вариант первый */

/*gulp.task( 'sass', function()
 {
 gulp.src( 'sass/styles.scss' )
 .pipe( sass().on( 'error', function( error )
 {
 console.log( error );
 } )
 )
 .pipe( gulp.dest( 'css/' ) )
 .pipe( notify( 'SASS - хорошая работа!' ) );
 } );*/

/* Вариант второй */

gulp.task( 'sass', function()
{
  gulp.src( 'sass/styles.scss' )
    .pipe( sass().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sass error!"
      } ) )
  )
    .pipe( gulp.dest( 'css/' ) )
    .pipe( notify( 'SASS - хорошая работа!' ) );
} );


/* Watcher */

gulp.task( 'watch', function()
{
  gulp.watch( 'sass/*.scss', [ 'sass' ] );
} );
