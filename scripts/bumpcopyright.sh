#!/bin/bash
find . -name "*.php" -exec perl -pi -w -e 's#(copyright.*-20)([0-9]{2})#${1}17#;' {} \;
find . -name "*.js" -exec perl -pi -w -e 's#(copyright.*-20)([0-9]{2})#${1}17#;' {} \;
find . -name "*.less" -exec perl -pi -w -e 's#(copyright.*-20)([0-9]{2})#${1}17#;' {} \;