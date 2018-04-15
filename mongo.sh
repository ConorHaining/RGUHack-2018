#!/bin/bash

HOST="csdm-mongodb.rgu.ac.uk"
PORT="1337"
REMOTE_DB="hackais"
LOCAL_DB="hackais"
USER="hackuser"
PASS="hackuser"

## DUMP THE REMOTE DB
echo "Dumping '$HOST/$REMOTE_DB'..."
mongodump --host $HOST --db $REMOTE_DB -u $USER -p $PASS

## RESTORE DUMP DIRECTORY
echo "Restoring to '$LOCAL_DB'..."
mongorestore --db $LOCAL_DB --drop dump/$REMOTE_DB

## REMOVE DUMP FILES
echo "Removing dump files..."
rm -r dump

echo "Done."