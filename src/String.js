String.prototype.trim = function( )
{
  return( this.replace(new RegExp("^([\\s]+)|([\\s]+)$", "gm"), "") );
};

// Trims the beinning white space from a string.
String.prototype.lefttrim = function( )
{
  return( this.replace(new RegExp("^[\\s]+", "gm"), "") );
};

// Trims the trailing white space from a string.
String.prototype.righttrim = function( )
{
  return( this.replace(new RegExp("[\\s]+$", "gm"), "") );
};



/**
 * Retrieve characters between given left- and right-delimiters
 * @param {String} left left delimiter
 * @param {String} right right delimiter
 * @param {Number} [offset] Offset to start from (omit if to start from beginning of the String)
 * @return {String|null} enclosed String, null else
 */
String.prototype.between = function( left, right, offset )
{
	if( !offset )
		offset = 0;
		
	var li = this.indexOf( left, offset );
	
	// abort if left is not found
	if( li == -1 )
		return null;
	
	var ri = this.indexOf( right, li );
	
	// abort if right is not found
	if( ri == -1 )
		return null;
	
	return this.substring( li + left.length, ri );
}