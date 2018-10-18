## Mirroring a site but keeping only files matching a pattern

	httrack website -W -O "/path/to/save/the/website" -%v +*.pdf +*.html +*.htm

This mirrors `website` but actually saves only html and pdf documents
