
var currM,currN,currB=0;
var index = 0;

var m1 = new Array(1)

var pieces = "KQNBR ";
var pos_after = "Position after ";
var start_pos = "Start position ";
function g0(a,b)
{	gm(currM,currN,index,currB,'basePic',a,b);}
function MB_50()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MB_5(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function MB0()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MB(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function MF_50()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MF_5(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function MF0(bVarWin)
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=MF(currM,currN,index,currB,'basePic',bVarWin);
		GMS(currM,currN,index,currB,'basePic');
		}
}
function GoEnd0()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=GoEnd(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
function GoStart0()
{	with( rightDocument )
		if ( anchors[0] && anchors[0].name == 'zeroAnchor' )
		{		currB=GoStart(currM,currN,index,currB,'basePic');
		GMS(currM,currN,index,currB,'basePic');
		}
}
var nMoves = new Array(0,0);
var nLevels = new Array(0,0);
var nNameCount = new Array(0,0);
var nOld = new Array(-1,-1);
baseName = 'rosenfoley';
var EmptyWhitePath = "gif/w.gif";
var EmptyBlackPath = "gif/b.gif";
var gifPath  = 'gif/';
var BackColor = "#FEFDE8";
var leftWindow		= parent.frames[0];
var rightWindow		= parent.frames[1];
var bFrames = 1;
var leftDocument		= leftWindow.document;
var rightDocument	= rightWindow.document;
// Copyright 98,99,00,01 by ChessBase GmbH, Germany
function Init( path )
{ gifs = new Array(6);
	for ( var i=0; i< 26; i++)
		gifs[i]= new Image();
	gifs[0].src = path + "b.gif";
	gifs[1].src = path + "bbb.gif";
	gifs[2].src = path + "bbw.gif";
	gifs[3].src = path + "bkb.gif";
	gifs[4].src = path + "bkw.gif";
	gifs[5].src = path + "bqb.gif";
	gifs[6].src = path + "bqw.gif";
	gifs[7].src = path + "brb.gif";
	gifs[8].src = path + "brw.gif";
	gifs[9].src = path + "bnb.gif";
	gifs[10].src = path + "bnw.gif";
	gifs[11].src = path + "wbb.gif";
	gifs[12].src = path + "wbw.gif";
	gifs[13].src = path + "wrb.gif";
	gifs[14].src = path + "wrw.gif";
	gifs[15].src = path + "wqb.gif";
	gifs[16].src = path + "wqw.gif";
	gifs[17].src = path + "wkb.gif";
	gifs[18].src = path + "wkw.gif";
	gifs[19].src = path + "wnb.gif";
	gifs[20].src = path + "wnw.gif";
	gifs[21].src = path + "wpb.gif";
	gifs[22].src = path + "wpw.gif";
	gifs[23].src = path + "bpb.gif";
	gifs[24].src = path + "wpb.gif";
	gifs[25].src = path + "b.gif";
}
function CountAnchorLinks( n )
{ var nn = 0;
	for ( i=0; i < rightDocument.anchors.length; i++ )
		if ( i <= n+nn && rightDocument.anchors[i].name.substring(0,4) == 'game' )
			nn = nn + 1;
	return nn;
}
function SyncPicture( base, basename )
{	if ( base > -1 ) return base;
	for ( i=0; i < leftDocument.images.length; i++ )
	{	if ( leftDocument.images[i].name != "" )
			if ( leftDocument.images[i].name == basename )
				return i;
			else if ( leftDocument.images[i].name.substring(0,3) == basename.substring(0,3) )
				i+= 63;
	}
	return -1;
}
function MF_5( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	for ( i=0; nMoves[nm] < moves[nLevels[nm]].length / 2 && i < 10; i++ )
		MF( moves, names, nm, base, false );
	return base;
}
function MB_5( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	for ( i=0; ( nMoves[nm] > 0 || nLevels[nm] > 0 ) && i < 10; i++ )
		MB( moves, names, nm, base );
	return base;
}
function GoStart( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	while ( nMoves[nm] > 0 || nLevels[nm] > 0 )
		MB( moves, names, nm, base );
	return base;
}
function GoEnd( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	while ( nMoves[nm] < moves[nLevels[nm]].length / 2 )
		MF( moves, names, nm, base, false );
	return base;
}
function MF( moves, names, nm, base, basename, bCheckV )
{	base = SyncPicture( base, basename );
	if ( bCheckV )
	{	var b = false;
		for ( i=0; i < moves.length; i++ )
			if ( i != nLevels[nm] && moves[i].root == nLevels[nm] && moves[i].move == nMoves[nm] )
				b = true;
		if ( b )
		{	GenerateVarWindow(moves, names, nm, base, basename);
			return base;
		}
	}
	if ( nMoves[nm] < moves[nLevels[nm]].length / 2 )
	{	var n = nMoves[nm]*2;
		var from = moves[nLevels[nm]][ n ] & 0x3f;
		var to = moves[nLevels[nm]][ n+1 ] & 0x3f;
		names[ nNameCount[nm]   ] = leftDocument.images[ base + from ].src;
		names[ nNameCount[nm]+1 ] = leftDocument.images[ base + to ].src;
		var len = names[nNameCount[nm]].length;
		var nn = (Math.floor(( to / 8 )) + ( to % 8 ));
		var dest = ( nn % 2 ) == 1 ? "b" : "w";
		var piece = names[nNameCount[nm]].substring(len-6,len-5);
		if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x80 )
			piece = "q";
		else if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x100 )
			piece = "n";
		else if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x180 )
			piece = "b";
		else if (( moves[nLevels[nm]][ n ] & 0x380 ) == 0x200 )
			piece = "r";
		leftDocument.images[ base + to ].src = names[nNameCount[nm]].substring(0,len-6) + piece + dest + names[nNameCount[nm]].substring(len-4,len);
		nn = (Math.floor(( from / 8 )) + ( from % 8 ));
		if (( nn % 2 ) == 1 )
			leftDocument.images[ base + from ].src = EmptyBlackPath;
		else
			leftDocument.images[ base + from ].src = EmptyWhitePath;
		nMoves[nm]++;
		nNameCount[nm] = nNameCount[nm] + 2;
		if ( nMoves[nm] < moves[nLevels[nm]].length / 2 && ( moves[nLevels[nm]][ nMoves[nm]*2 ] & 0x40 ) == 0x40 )
			MF( moves, names, nm, base, bCheckV );
	}
	return base
}
function MB( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	if ( nMoves[nm] > 0 )
	{	nMoves[nm]--;
		nNameCount[nm] -= 2;
		var from = moves[nLevels[nm]][ nMoves[nm]*2 ] & 0x3f;
		var to = moves[nLevels[nm]][ nMoves[nm]*2+1 ] & 0x3f;
		leftDocument.images[ base + from ].src = names[ nNameCount[nm] ];
		leftDocument.images[ base + to ].src = names[ nNameCount[nm]+1 ];
		if (( moves[nLevels[nm]][ nMoves[nm]*2 ] & 0x40 ) == 0x40 )
			MB( moves, names, nm, base );
	}
	if ( nMoves[nm] == 0 )
		if ( nLevels[nm] > 0 )
		{	nMoves[nm] = moves[nLevels[nm]].move;
			nLevels[nm] = moves[nLevels[nm]].root;
			if (( moves[nLevels[nm]][nMoves[nm]*2] & 0x40 ) == 0x40 )
				nMoves[nm]--;
		}
	return base;
}
function GMS2(  moves, names, nm, base, nMoveNumber, nLevel, basename )
{	if ( nMoveNumber > 0 )
	{	var n = (nMoveNumber-1)*2;
		var off=1;
		for ( i=0; i <= n; i += 2 )
			if (( moves[nLevel][i] & 0x40 ) == 0x40 )
				off = off+1;
		var from = moves[nLevel][ n ] & 0x3f;
		var to = moves[nLevel][ n+1 ] & 0x3f;
		var len = leftDocument.images[ base + to ].src.length;
		var piece = leftDocument.images[ base + to ].src.substring(len-6,len-5);
		if ( piece == "q" )
			piece = pieces.substring(1,2);
		else if ( piece == "r" )
			piece = pieces.substring(4,5);
		else if ( piece == "b" )
			piece = pieces.substring(3,4);
		else if ( piece == "n" )
			piece = pieces.substring(2,3);
		else if ( piece ==  "k" )
			piece = pieces.substring(0,1);
		else piece = pieces.substring(5,6);
		var piece2 = "";
		if (( moves[nLevel][ n ] & 0x380 ) == 0x80 )
			piece2 = pieces.substring(1,2);
		else if (( moves[nLevel][ n ] & 0x380 ) == 0x100 )
			piece2 = pieces.substring(2,3);
		else if (( moves[nLevel][ n ] & 0x380 ) == 0x180 )
			piece2 = pieces.substring(3,4);
		else if (( moves[nLevel][ n ] & 0x380 ) == 0x200 )
			piece2 = pieces.substring(4,5);
		var lines = "abcdefgh";
		var rows = "87654321";
		var fromLine = from%8;
		var fromRow = Math.floor(from/8);
		var toLine = to%8;
		var toRow = Math.floor(to/8);
		var moveNumber = gmn( moves, nLevel ) + nMoveNumber-off;
		var result = (Math.floor((moveNumber)/2)+1).toString() + ". ";
		if ( leftDocument.images[ base + to ].src.substring(len-7,len-6) == "b" )
			result = result + "... ";
		if ( n >= 2 && (( moves[nLevel][n] & 0x40 ) == 0x40 ))
		{	if (( moves[nLevel][n-1] == 62 ) || ( moves[nLevel][n-1] == 6 ))
				result = result + "0-0"
			else if (( moves[nLevel][n-1] == 2 + 7 * 8 ) || ( moves[nLevel][n-1] == 2 + 0 * 8 ))
				result = result + "0-0-0"
			else
			{	var sep = "x";
				from = moves[nLevel][ n-2 ] & 0x3f;
				to = moves[nLevel][ n-1 ] & 0x3f;
				fromLine = from%8;
				fromRow = Math.floor(from/8);
				toLine = to%8;
				toRow = Math.floor(to/8);
				result = result	+ lines.substring( fromLine, fromLine+1 ) + rows.substring( fromRow, fromRow+1 )
										+ sep
										+ lines.substring( toLine, toLine+1 ) + rows.substring( toRow, toRow+1 )
										+ piece2 + " ep";
			}
		}
		else
		{	var len = names[ nNameCount[nm]-1 ].length;
			var substr = names[ nNameCount[nm]-1 ].substring( len-6, len );
			var sep = (( substr == "/w.gif" ) || ( substr == "\\w.gif" ) ||
						  ( substr == "/b.gif" ) || ( substr == "\\b.gif" )) ? "-" : "x";
			if ( piece2 != "" ) piece = "";
			result = result + piece.toUpperCase() + lines.substring( fromLine, fromLine+1 ) + rows.substring( fromRow, fromRow+1 )
				+ sep
				+ lines.substring( toLine, toLine+1 ) + rows.substring( toRow, toRow+1 )
				+ piece2;
		}
	}
	else
		result='';
	if (leftDocument.all)
	{	if ( bFrames )	name = 'i' + baseName + '0';
		else name = 'i' + baseName + nm;
		if ( result == '' )
			leftDocument.all.tags( "DIV" )[name].innerHTML = start_pos;
		else
			leftDocument.all.tags( "DIV" )[name].innerHTML = pos_after + result;
	}
	else if ( leftDocument.layers )
	{	var inx = nm;
		if ( bFrames ) inx = 0;
		leftDocument.layers[inx].document.layers[0].document.clear();
		if ( result == '' )
			var gesamt = "<center>" + start_pos + "</center>";
		else
			var gesamt = "<center>" + pos_after + " " + result + "</center>";
		leftDocument.layers[inx].document.layers[0].document.write(gesamt);
		leftDocument.layers[inx].document.layers[0].document.close();
	}
	else if ( leftDocument.getElementById )
	{	if ( bFrames ) name = 'i' + baseName + '0';
		else name = 'i' + baseName + nm;
		if ( result == '' )
			leftDocument.getElementById(name).innerHTML = start_pos;
		else
			leftDocument.getElementById(name).innerHTML = pos_after + result;
	}
	return result;
}
function GMS( moves, names, nm, base, basename )
{	base = SyncPicture( base, basename );
	var nLevel = nLevels[nm];
	var nMoveNumber = nMoves[nm];
	if ( nMoveNumber >= 0 && nMoveNumber <= moves[nLevel].length / 2 )
	{	if ( leftDocument.all )
		{	if ( nOld[nm] != -1 )
				rightDocument.anchors[nOld[nm]].style.background=BackColor;
			if ( nMoveNumber > 0 )
			{	nOld[nm] = moves[nLevel].base[nMoveNumber-1];
				nOld[nm] += CountAnchorLinks(nOld[nm]);
				rightDocument.anchors[nOld[nm]].style.background="gray";
				with ( rightDocument )
					with ( all.tags("a")[nOld[nm]] )
					{	if ( parent.frames[1] && ( offsetTop > body.scrollTop + offsetParent.offsetHeight - offsetHeight || offsetTop < body.scrollTop ))
							rightWindow.scrollTo( 0, offsetTop - ( offsetParent.offsetHeight / 2 ) );
					}
			}
			else
				nOld[nm] = -1;
		}
		return GMS2( moves, names, nm, base, nMoveNumber, nLevel, basename );
	}
	else
		return "??";
}
function gm( moves, names, nm, base, basename, n, m )
{	base = SyncPicture( base, basename );
	GoStart(moves,names,nm,base,basename );
	gm_sub( moves,names,nm,base,basename,n,m);
	GMS( moves, names, nm, base, basename );
}
function gmn( moves, m )
{	if ( m > 0 )
	{	var off=0;
		var n2 = moves[m].move;
		var m2 = moves[m].root;
		for ( i=0; i <= n2*2; i += 2 )
			if (( moves[m2][i] & 0x40 ) == 0x40 )
				off = off+1;
		return gmn( moves, m2 ) + ( n2 - off );
	}
	return 0;
}
function gm_sub( moves, names, nm, base, basename, n, m )
{	if ( m > 0 )
	{	var off=0;
		var n2 = moves[m].move;
		var m2 = moves[m].root;
		for ( i=0; i <= n2*2; i += 2 )
			if (( moves[m2][i] & 0x40 ) == 0x40 )
				off = off+1;
		gm_sub( moves,names,nm,base, basename, n2-off, m2  );
	}
	nLevels[nm]=m;
	nMoves[nm]=0;
	for ( i=0; i < n; i++ )
		MF(moves,names,nm,base,basename, false);
}
