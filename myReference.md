### use the following command  at the time pf publish react website on github pages to tackale the following error --->>>

[error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: Unknown error code (err 8)
fatal: the remote end hung up unexpectedly
fatal: the remote end hung up unexpectedly]


### commands  :-
git config --global http.version HTTP/1.1
git push 
git config --global http.version HTTP/2