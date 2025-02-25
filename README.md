# Eleventy structure

- Blog posts are placed in the ./posts directory.
- The posts.json file specifies parameters which apply to each file in the ./posts directory.
- Specific layout file for posts is chosen here - it could be different from the landing page layout file.

- ./index.html is the landing page
- It uses liquid to iterate over post titles in the ./posts directory and display them.

- "./\_includes/layout.html" provides layout for everything with "layout: layout.html" set in the header.


