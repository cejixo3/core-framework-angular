#!/usr/bin/env bash

CUR_DIR=$(pwd)
PREV_VERSION=$(node ./projects/core-framework-angular/version_management.js)
./node_modules/.bin/ng build
if [[ $? -eq 0 ]]; then
    cd dist/core-framework-angular && npm publish --access=public
    echo OK
else
    cd ${CUR_DIR}
    node ./projects/core-framework-angular/version_management.js --rollback ${PREV_VERSION}
    echo FAIL
fi