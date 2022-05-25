

// making sticky navbar
window.addEventListener( "resize", ResizeWindow );
function ResizeWindow( )
{
	var dataSpyList = [].slice.call( document.querySelectorAll( '[data-spy="scroll"]' ) );
	
	dataSpyList.forEach( function ( dataSpyElement )
	{
		bootstrap.ScrollSpy.getInstance( dataSpyElement ).refresh( );
	} );
}
// end of sticky navbar

// make contact form responsive
