 #!/bin/bash
 
 rm -f public/assets/fonts/list.txt
 for file in public/assets/fonts/*; do
     echo "$(basename "$file")" >> public/assets/fonts/list.txt
 done